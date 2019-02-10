<?php

$det = fopen("names.txt","r");

while(!feof($det)){
  $username = fgets($det);
  echo $username."\n";
  $mod_name = fgets($det);
  echo $mod_name."\n";
  $linesp = fgets($det);
  echo $linesp."\n";
}
 ?>
