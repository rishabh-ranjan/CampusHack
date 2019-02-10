<!DOCTYPE html>
<html>
<body>

<?php

$det1 = fopen("./details1.txt", "r") or die("Unable to open file!");

$i = 0;

while(!feof($det1)){

  $name = fgets($det1);
  $name = trim($name);

  $venue = fgets($det1);
  $venue = trim($venue);


  $start_time = fgets($det1);
  $start_time = trim($start_time);


  $end_time = fgets($det1);
  $end_time = trim($end_time);

  $one_event = array($name, $venue, $start_time, $end_time);

  $all_events[i] = $one_event;

  $i++;
}

for($j =0; $j < $i; $j++){
  echo $all_events[j]."\n"
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
