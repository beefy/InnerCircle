<?php

$db_host = "inhercircle.net.mysql";
$db_user = "inhercircle_net";
$db_pass = "69allday#1";

@mysql_connect("$db_host", "$db_user", "$db_pass",) or die("Error connecting to database");
echo "successful connection";

$db = mysql_select_db('inhercircle_net');


$sql = "INSERT INTO info (id, name, lat, long)
VALUES ('$id','$name','$lat','$long')";
?>