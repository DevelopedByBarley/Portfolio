<?php

namespace App\Controllers;

use App\Helpers\Alert;
use App\Helpers\Authenticate;
use App\Helpers\CSRFToken;
use App\Helpers\Debug;
use App\Helpers\Mailer;
use App\Helpers\Render;
use App\Helpers\Toast;
use App\Helpers\UUID;
use App\Helpers\XLSX;
use App\Models\Model;
use App\Models\Visitor;

class Controller
{
  protected $Model;
  protected $Debug;
  protected $Auth;
  protected $Render;
  protected $XLSX;
  protected $UUID;
  protected $Alert;
  protected $Toast;
  protected $CSRFToken;
  protected $Mailer;


  public function __construct()
  {
    $this->Model = new Model();
    $this->Debug = new Debug();
    $this->Auth = new Authenticate();
    $this->Render = new Render();
    $this->XLSX = new XLSX();
    $this->UUID = new UUID();
    $this->Alert = new Alert();
    $this->Toast = new Toast();
    $this->CSRFToken = new CSRFToken();

    $this->Mailer = new Mailer();
  }





  public function index()
  {


    echo $this->Render->write("public/Layout.php", [
      "app" => $this->Render->write("../../public/dist/index.html", [])
    ]);
  }
  public function test()
  {
    echo json_encode([
      'hello' => 'world'
    ]);
  }

  public function error()
  {
    echo $this->Render->write("public/Layout.php", [
      "content" => $this->Render->write("public/pages/404.php", [])
    ]);
  }


  public function createResetUrl($tokenData)
  {
    return BASE_URL . '/reset?token=' . urlencode($tokenData['token']) . '&expires=' . urlencode($tokenData['expires']);
  }

  public function generateExpiresTokenByDays($days)
  {
    $token = bin2hex(random_bytes(16));
    $expires = time() + ($days * 24 * 60 * 60);
    return [
      'token' => $token,
      'expires' => $expires,
    ];
  }

  public function generateExpiresTokenByHours($hours)
  {
    $token = bin2hex(random_bytes(16));
    $expires = time() + ($hours * 60 * 60);
    return [
      'token' => $token,
      'expires' => $expires,
    ];
  }

  public function redirectByState($isSuccess, $success_url, $failed_url)
  {
    if ($isSuccess) {
      header("Location: $success_url");
      exit;
    } else {
      header("Location: $failed_url");
      exit;
    }
  }

  protected function getIpByUser()
  {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
      return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
      return $_SERVER['REMOTE_ADDR'];
    }
  }

  protected function setCookieWithExpiry($name, $value, $expiry)
  {
    $expiryTime = time() + ($expiry);
    setcookie($name, $value, $expiryTime, "/");
  }
}
