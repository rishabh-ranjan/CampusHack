<!DOCTYPE html>
<html>

<body>

<?php

// define variables and set to empty values
$event_name = $start_time = $end_time = $event_desc = $username = $auth_code = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $event_name = test_input($_POST["event_name"]);
  $start_time = test_input($_POST["start_time"]);
  $end_time = test_input($_POST["end_time"]);
  $event_desc = test_input($_POST["event_desc"]);
  $username = test_input($_POST["username"]);
  $auth_code = test_input($_POST["auth_code"]);
}

//

echo "$event_name , $start_time , $end_time <br>";
echo "$event_desc <br>";
echo "$username , $auth_code <br>";

//

$event_name_err = $start_time_err = $end_time_err =  $event_desc_error = $username_err = $auth_code_err = "";

$b = false;
$auth_file = fopen("auth_code.txt", "r");
while($b==false){
  if(fgets($auth_file)==$auth_code){
    $b = true;
    break;
  }
}
fclose($auth_file);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  //event name val
  if (empty($_POST["event_name"])) {
    $event_name_err = "Name is required";
  } else if (!preg_match("/^[a-zA-Z ]*$/",$event_name)) {
  $event_name_err = "Only letters and white space allowed";
  }
  else {
    $event_name = test_input($_POST["event_name"]);
  }
  //event time val
  if (empty($_POST["start_time"])){
    $start_time_err = "Time is required";
  } else {
    $start_time = test_input($_POST["start_time"]);
  }
  if (empty($_POST["end_time"])){
    $start_time_err = "Time is required";
  } else {
    $end_time = test_input($_POST["end_time"]);
  }

  if(empty($_POST["auth_code"])){
    $auth_code_err = "Please verify authentication code.";
  } else if ($b == false){
    $auth_code_err = "The authentication ID is invalid.";
  } else{
    $auth_code = test_input($_POST["auth_code"]);
  }
  if(true){
    $event_desc = test_input($_POST["event_desc"]);
    $username = test_input($_POST["username"]);
  }
}

$det1 = fopen("details1.txt", "w");
if(is_writeable("$det1")){
  fwrite($det1, $event_name);
  fwrite($det1, "<br>");
  fwrite($det1, $event_desc);
  fwrite($det1, "<br>");
  fwrite($det1, $start_time);
  fwrite($det1, "<br>");
  fwrite($det1, $end_time);
  fwrite($det1, "<br>");
  fwrite($det1, $auth_code);
  fwrite($det1, "<br>"); //auth_code gives mod club info to sort for subcriptions
}
fclose($det1);

$det2 = fopen("descrip.txt", "w");
if(is_writeable("$det2")){
  fwrite($det2, $event_desc);
  fwrite($det2, "<br>");
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

</body>
</html>