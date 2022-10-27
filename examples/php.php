
<!-- 1. Example -->

<?php
  function getAdder($x) {
    return function($y) use ($x) {
      return $x + $y;
    };
  }

  $adder = getAdder(8);
  echo $adder(2); // prints "10"
?>

<!-- 2. Tests -->

<?php
  class getAdder {
    return function($y) use ($x) {
      return $x + $y;
    };
  }
?>
