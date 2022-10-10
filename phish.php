<?php
/// TIME
date_default_timezone_set('GMT');
$TIME = date("d-m-Y H:i:s"); 
$BROWSER = $_SERVER['HTTP_USER_AGENT']; 

/// COUNTRY
$PP = getenv("REMOTE_ADDR");
$J7 = simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=$PP");
$COUNTRY = $J7->geoplugin_countryName ; // Country

/// VISITOR
$ip = getenv("REMOTE_ADDR");
$file = fopen("vst.txt","a");
fwrite($file,$ip."   |   ".$TIME."   |   " . $COUNTRY ."   |   ".$BROWSER."\n")  ;

?>