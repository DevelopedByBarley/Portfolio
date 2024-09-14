<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Admin;
use App\Models\AdminActivity;
use DateTime;
use Exception;
use PDO;

class AdminController extends Controller
{
  private $Admin;
  private $Activity;

  public function __construct()
  {
    $this->Admin = new Admin();
    $this->Activity = new AdminActivity();
    parent::__construct();
  }



  public function store()
  {
    $this->CSRFToken->check();
    $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');
    try {
      $is_success = $this->Admin->storeAdmin($_POST);

      if (!isset($admin['status']) && $is_success['status'] !== false) {
        $this->Activity->store([
          'content' => "Új admint adott hozzá: " . $_POST['name'] . ", level(" . $_POST['level'] . ")",
          'contentInEn' => null,
          'adminRefId' => $_SESSION['adminId']
        ], $_SESSION['adminId']);

        /* 
        $this->Mailer->renderAndSend('NewAdmin', [
          'admin_name' => $admin['name'] ?? 'problem',
          'site_url' => 'http://localhost:8080' ?? 'problem',
          'admin_password' => $_POST['password'] ?? 'problem'
        ], $admin['email'], 'Hello');
         */

        $this->Mailer->renderAndSend('NewAdmin', [
          'admin_name' => $_POST['name'] ?? 'problem',
          'site_url' => 'http://localhost:8080' ?? 'problem',
          'admin_password' => $_POST['password'] ?? 'problem'
        ], $_POST['email'], 'Hello');

        $this->Toast->set('Admin sikeresen hozzáadva', 'success', '/admin/settings', null);
      } else {
        $this->Toast->set($is_success['message'], 'danger', '/admin/settings', null);
      }
    } catch (Exception $e) {
      // Log the exception instead of echoing it
      error_log($e->getMessage());
      $this->Toast->set('Hiba történt az admin hozzáadásakor.', 'danger', '/admin/settings', null);
    }
  }


  public function update()
  {

    $this->CSRFToken->check();
    $child_admin_id = isset($_POST['current_admin_id']) ? $_POST['current_admin_id']  : null;
    $loggedAdmin =  $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');;
    $adminId = $child_admin_id ?? $loggedAdmin;


    try {
      $admin = $this->Admin->updateAdmin($adminId, $_POST, $child_admin_id);

      if (!isset($admin['status']) && $admin['status'] !== false) {
        $this->Activity->store([
          'content' => "Frissítette a profilját.",
          'contentInEn' => null,
          'adminRefId' => $_SESSION['adminId']
        ],  $_SESSION['adminId']);
        $this->Toast->set('Admin sikeresen frissítve', 'cyan-500', '/admin/settings', null);
      } else {
        $this->Toast->set($admin['message'], 'rose-500', '/admin/settings', null);
      }
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }

  public function login()
  {
    session_start();
    $this->CSRFToken->check();
    try {
      $adminId = $this->Admin->loginAdmin($_POST);

      if ($adminId) {
        session_write_close(); // Bezárjuk a sessiont
        $session_timeout = 6000;
        session_set_cookie_params($session_timeout, '/', '', true, true); // secure és httponly flag beállítása
        session_start();
        session_regenerate_id(true);
        $_SESSION['adminId'] = $adminId;
        header('Location: /admin/dashboard');
        exit;
      } else {
        $this->Toast->set('Sikertelen belépés, hibás felhasználónév vagy jelszó', 'rose-500', '/admin', null);
      }
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }

  public function logout()
  {
    try {
      $this->CSRFToken->check();
      session_start();
      session_destroy();
      session_regenerate_id(true);

      $cookieParams = session_get_cookie_params();
      setcookie(session_name(), "", 0, $cookieParams["path"], $cookieParams["domain"], $cookieParams["secure"], isset($cookieParams["httponly"]));

      header("Location: /admin");
      exit();
    } catch (Exception $e) {
      http_response_code(500);
      echo "Internal Server Error" . $e->getMessage();
      return;
    }
  }


  public function delete($vars)
  {
    try {
      $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');

      $id  = filter_var($vars["id"] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);
      $admin = $this->Model->selectByRecord('admins', 'id', $id, PDO::PARAM_INT);

      $this->Model->deleteRecordById('admins', $id);

      $this->Activity->store([
        'content' => "Kitörölt egy admint: " . $admin['name'] . ", level(" . $admin['level'] . ")",
        'contentInEn' => null,
        'adminRefId' => $adminId
      ], $adminId);

      $this->Toast->set('Admin törlése sikeres volt', 'green-500', '/admin/settings', null);
    } catch (Exception $e) {
      http_response_code(500);
      echo "Internal Server Error" . $e->getMessage();
      return;
    }
  }




























  /**
   * @param RENDERS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   */





  public function index()
  {
    $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');
    $admin = $this->Model->selectByRecord('admins', 'id', $adminId, PDO::PARAM_INT);
    $visitors = SAVING_VISITOR_PERM ? $this->Model->all('visits') : '';
    $admin_list = ADMIN_SERVICE_PERM ? $this->Model->all('admins') : [];
    $users =  USER_SERVICE_PERM ? $this->Model->all('users') : [];
    $feedbacks = FEEDBACK_PERM ? $this->Model->all('feedbacks') : [];
    $feedbackPercentages = self::getPercentageOfFeedbacks($feedbacks);
    $registrationsChartData = self::getRegistrationsByMonth($users);



    $admin_activities = $this->Activity->getAdminActivities();
    $data = [
      'numOfPage' => 10,
    ];

    echo $this->Render->write("admin/Layout.php", [
      "admin" => $admin,
      "csrf" => $this->CSRFToken,
      "content" => $this->Render->write("admin/pages/Dashboard.php", [
        'admin_list' => $admin_list,
        'admin' => $admin,
        'admin_activities' => $admin_activities,
        'feedbacks' => $feedbacks,
        'feedbackPercentages' => $feedbackPercentages,
        'visitors' => $visitors,
        'users' => $users,
        'registrationsChartData' => $registrationsChartData,
        'data' => $data
      ])
    ]);
  }


  public function loginPage()
  {
    if (session_status() == PHP_SESSION_NONE) {
      session_start();
    }

    $admin = $_SESSION["adminId"] ?? null;

    if ($admin) {
      header("Location: /admin/dashboard");
      exit;
    }

    echo $this->Render->write("admin/Layout.php", [
      "csrf" => $this->CSRFToken,
      "content" => $this->Render->write("admin/pages/Login.php", [
        "csrf" => $this->CSRFToken
      ])
    ]);
  }


  public function table()
  {
    $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');
    $admin = $this->Model->selectByRecord('admins', 'id', $adminId, PDO::PARAM_INT);

    $data = [
      'numOfPage' => 10,
    ];

    echo $this->Render->write("admin/Layout.php", [
      "csrf" => $this->CSRFToken,
      "admin" => $admin,
      "content" => $this->Render->write("admin/pages/Table.php", [
        'data' => $data
      ])
    ]);
  }
  public function form()
  {
    $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');
    $admin = $this->Model->selectByRecord('admins', 'id', $adminId, PDO::PARAM_INT);
    $data = [
      'numOfPage' => 10,
    ];

    echo $this->Render->write("admin/Layout.php", [
      "csrf" => $this->CSRFToken,
      "admin" => $admin,
      "content" => $this->Render->write("admin/pages/Form.php", [
        'data' => $data
      ])
    ]);
  }
  public function settings()
  {
    $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');

    $admin = $this->Model->selectByRecord('admins', 'id', $adminId, PDO::PARAM_STR);
    $admin_list = $this->Model->all('admins', $adminId, PDO::PARAM_STR);

    $data = $this->Model->paginate($admin_list, 10, '',  function ($offset, $numOfPages) {
      if ($offset === 0) {
        header("Location: /admin/settings");
        exit;
      }

      if ((int)$offset > (int)$numOfPages) {
        header("Location: /admin/settings?offset=$numOfPages");
        exit;
      }
    });





    echo $this->Render->write("admin/Layout.php", [
      "csrf" => $this->CSRFToken,
      'admin' => $admin,
      "content" => $this->Render->write("admin/pages/Settings.php", [
        "csrf" => $this->CSRFToken,
        'data' => $data,
        'admin' => $admin,
        'data' => $data
      ])
    ]);
  }
  public function mailbox()
  {
    $adminId = $this->Auth::checkUserIsLoggedInOrRedirect('adminId', '/admin');
    $admin = $this->Model->selectByRecord('admins', 'id', $adminId, PDO::PARAM_STR);

    $data = [
      'numOfPage' => 10,
    ];

    echo $this->Render->write("admin/Layout.php", [
      "csrf" => $this->CSRFToken,
      'admin' => $admin,
      "content" => $this->Render->write("admin/pages/MailBox.php", [
        'data' => $data
      ])
    ]);
  }






















  // PRIVATES 

  private function getRegistrationsByMonth($users)
  {
    // Például, hogy hogyan lehet a $users tömböt a hónapok szerint csoportosítani
    $registrationsByMonth = [];
    $currentYear = date('Y');

    foreach ($users as $user) {
      $createdAt = new DateTime($user['created_at']);
      $year = $createdAt->format('Y');
      $month = $createdAt->format('F'); // Hónap neve, pl. "January", "February", stb.

      if ($year == $currentYear) {
        if (!isset($registrationsByMonth[$month])) {
          $registrationsByMonth[$month] = 0;
        }

        $registrationsByMonth[$month]++;
      }
    }


    // JSON formátumba alakítás PHP-ban
    $registrationsChartData = json_encode($registrationsByMonth);
    return $registrationsChartData;
  }

  private function getPercentageOfFeedbacks($feedbacks)
  {
    $countOfFeedbacks = [
      1 => 0,
      2 => 0,
      3 => 0,
      4 => 0,
      5 => 0,
    ];

    $totalFeedbacks = count($feedbacks);

    foreach ($feedbacks as $feedback) {
      switch ((int)$feedback['feedback']) {
        case 1:
          $countOfFeedbacks[1]++;
          break;
        case 2:
          $countOfFeedbacks[2]++;
          break;
        case 3:
          $countOfFeedbacks[3]++;
          break;
        case 4:
          $countOfFeedbacks[4]++;
          break;
        case 5:
          $countOfFeedbacks[5]++;
          break;
        default:
          // Esetleges egyéb kezelés, ha van
          break;
      }
    }

    $percentages = [];

    foreach ($countOfFeedbacks as $key => $value) {
      if ($totalFeedbacks > 0) {
        $percentages[$key] = ($value / $totalFeedbacks) * 100;
      } else {
        $percentages[$key] = 0; // Ha nincs feedback, akkor 0 százalék
      }
    }

    return $percentages;
  }
}
