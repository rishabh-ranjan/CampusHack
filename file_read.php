<!DOCTYPE html>
<html>
<body>

<?php

$det1 = fopen("./details1.txt", "r") or die("Unable to open file!");


while(!feof($det1)){

  $name = fgets($det1);
  $name = trim($name);
  echo $name."\n";

  $venue = fgets($det1);
  $venue = trim($venue);
  echo $venue."\n";

  $start_time = fgets($det1);
  $start_time = trim($start_time);
  echo $start_time."\n";


  $end_time = fgets($det1);
  $end_time = trim($end_time);
  echo $end_time."\n";

  $auth_code = fgets($det1);
  $auth_code = trim($auth_code);
  echo $auth_code."\n";

  $blank = fgets($det1):
  $blank = trim($blank);
  echo $blank;

}

fclose($det1);

'''
$det2 = fopen("./descrip.txt", "r") or die("Unable to open file!");

$k = 0;

while(!feof($det2)){
  $name1 = fgets($det2);
  $name1 = trim(name1);
  if(fgets($det2)=="start descrip\n"){
    $desc = fgets($det2);
    if($desc=="end descrip\n"){

    }
  }
}

 ?>
</body>
</html>
