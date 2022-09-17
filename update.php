<?php

include "database_connection.php";
if ($_SERVER['REQUEST_METHOD'] == "POST") {

$id = $_POST['id'];
$name = $_POST['name'];
$Gender = $_POST['Gender'];
$dob = $_POST['dob'];
$mobile = $_POST['mobile'];
$joining_date = $_POST['joining_date'];
$qualification = $_POST['qualification'];
$Institute = $_POST['Institute'];
$experience = $_POST['experience'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$repeat_password = $_POST['repeat_password'];
$address = $_POST['address'];
$a_class = $_POST['a_class'];
$section = $_POST['section'];
$image = $_POST['image'];


//updating data
$edit = "UPDATE `staff_data` SET `id`='$id',`name`='$name',`Gender`='$Gender',`dob`='$dob',`mobile`='$mobile',`joining_date`='$joining_date',`qualification`='$qualification',`Institute`='$Institute',`experience`='$experience',`username`='$username',`email`='$email',`password`='$password',`repeat_password`='$repeat_password',`address`='$address',`a_class`='$a_class',`section`='$section',`image`='$image' WHERE id = $id";
$result = mysqli_query($connection, $edit);
header("Location: staff_list.php");

}

?>
