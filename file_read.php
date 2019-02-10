<?php

$det1 = fopen("./details1.txt", "r") or die("Unable to open file!");

$i = 0;

while(!feof($det1)){

  $name = fgets($det1);
  $name = trim($name);
  echo "$name\t";

  $venue = fgets($det1);
  $venue = trim($venue);
  echo "$venue\t";

  $start_time = fgets($det1);
  $start_time = trim($start_time);
  echo "$start_time\t";

  $end_time = fgets($det1);
  $end_time = trim($end_time);
  echo "$end_time\t";

  $auth_code = fgets($det1);
  echo "$auth_code\n";

  $i++;
}

for($j =0; $j < $i; $j++){
  echo $all_events[$j][0]."\n";
}

fclose($det1);


// $det2 = fopen("./descrip.txt", "r") or die("Unable to open file!");

// $k = 0;

// while(!feof($det2)){
//   $name1 = fgets($det2);
//   $name1 = trim(name1);
//   if(fgets($det2)=="start descrip\n"){
//     $desc = fgets($det2);
//     if($desc=="end descrip\n"){

//     }
//   }
// }

 ?>