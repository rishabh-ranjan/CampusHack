<!DOCTYPE html>
<html>

<body>

<?php

// define variables and set to empty values
$event_venue = $event_name = $start_time = $end_time = $event_desc = $username = $auth_code = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $event_name = test_input($_POST["event_name"]);
  $start_time = test_input($_POST["start_time"]);
  $end_time = test_input($_POST["end_time"]);
  $event_desc = test_input($_POST["event_desc"]);
  $username = test_input($_POST["username"]);
  $auth_code = test_input($_POST["auth_code"]);
  $event_venue = test_input($_POST["event_venue"]);
}

//

echo "$event_name , $start_time , $end_time <br>";
echo "$event_desc, $event_venue <br>";
echo "$username , $auth_code <br>";

//

$event_venue_err = $event_name_err = $start_time_err = $end_time_err =  $event_desc_error = $username_err = $auth_code_err = "";

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   //event name val
//   if (empty($_POST["event_name"])) {
//     $event_name_err = "Name is required";
//   } else if (!preg_match("/^[a-zA-Z ]*$/",$event_name)) {
//   $event_name_err = "Only letters and white space allowed";
//   }
//   else {
//     $event_name = test_input($_POST["event_name"]);
//   }
//   //event time val
//   if (empty($_POST["start_time"])){
//     $start_time_err = "Time is required";
//   } else {
//     $start_time = test_input($_POST["start_time"]);
//   }
//   if (empty($_POST["end_time"])){
//     $start_time_err = "Time is required";
//   } else {
//     $end_time = test_input($_POST["end_time"]);
//   }

//   if(empty($_POST["auth_code"])){
//     $auth_code_err = "Please verify authentication code.";
//   } else{
//     $auth_code = test_input($_POST["auth_code"]);
//   }
//   if(empty($_{POST["event_venue"]})){
//     $event_venue_err = "Please enter a venue for the event";
//   } else{
//     $event_venue = test_input($_POST["event_venue"]);
//   }
//   if(true){
//     $event_desc = test_input($_POST["event_desc"]);
//     $username = test_input($_POST["username"]);
//   }
// }

$net_str = trim($username);
$net_str .= " ";
$net_str .= $auth_code;
$b = false;
$auth_file = fopen("auth_code.txt", "r");

while(!feof($auth_file)){
  // echo fgets($auth_file)."<br>";
  $str_uid_pw = fgets($auth_file);
  if(trim($str_uid_pw)==$net_str){
    $b = true;
    break;
  }
}

if($b==true){
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

} else{
  $auth_code_err = "kindly verify your authentication code.";
  echo $auth_code_err;
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
