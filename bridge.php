var mod_names = [ <?php

$det = fopen("mod_names.dat","r");

if(!feof($det))
{
	$username = trim(fgets($det));

	$mod_name = trim(fgets($det));
	echo "\"".$mod_name."\"";

	$linesp = trim(fgets($det));
}

while(!feof($det)){
  $username = trim(fgets($det));
  // echo $username."\n";

  $mod_name = trim(fgets($det));
  // echo $mod_name."\n";
  echo ", \"".$mod_name."\"";

  $linesp = trim(fgets($det));
  // echo $linesp."\n";
}

?> ];
