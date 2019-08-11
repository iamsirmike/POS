<?php

// /* Database config */
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_database = 'posales';

$db = new PDO('mysql:host=' . $db_host . ';dbname=' . $db_database, $db_user, $db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//end mySql

//Get Heroku ClearDB connection information
// $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
// $cleardb_server = $cleardb_url["host"];
// $cleardb_username = $cleardb_url["user"];
// $cleardb_password = $cleardb_url["pass"];
// $cleardb_db = substr($cleardb_url["path"], 1);


// $active_group = 'default';
// $query_builder = true;

// $db = new PDO('mysql:host=' . $cleardb_server . ';dbname=' . $cleardb_db, $cleardb_username, $cleardb_password);
// $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//end heroku clearDB

/* End config */

$conn = mysqli_connect("localhost", "root", "", "posales");
if (mysqli_connect_errno())//function to check database connection
{
    die("connection failed") . mysqli_connect_errno();
} //error message for connection failed 

?>