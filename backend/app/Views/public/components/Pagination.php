<?php
$data = $params['data'] ?? [];
$currentPage = $_GET['offset'] ?? 1; // az aktuális oldalszám

$totalPages = (int)$data['numOfPage'] ?? 1; // összes oldalszám
$searchParameter = isset($_GET['date']) ? '?date=' . $_GET['date'] : '';

?>

<nav>
  <ul class="pagination">
    <li class="page-item <?php echo $currentPage <= 1 ? 'disabled' : ''; ?>">
      <a class="page-link" href="<?php echo $searchParameter . (empty($searchParameter) ? '?' : '&') . 'offset=' . max(1, $currentPage - 1); ?>" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <?php for ($i = 1; $i <= $totalPages; $i++) : ?>
      <li class="page-item <?php echo $currentPage == $i ? 'active' : ''; ?>">
        <a class="page-link" href="<?php echo $searchParameter . (empty($searchParameter) ? '?' : '&') . 'offset=' . $i; ?>"><?php echo $i; ?></a>
      </li>
    <?php endfor; ?>
    <li class="page-item <?php echo $currentPage >= $totalPages ? 'disabled' : ''; ?>">
      <a class="page-link" href="<?php echo $searchParameter . (empty($searchParameter) ? '?' : '&') . 'offset=' . min($totalPages, $currentPage + 1); ?>" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>