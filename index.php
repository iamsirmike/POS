<?php
include 'connect.php';
	//Start session
session_start();
	
	//Unset the variables stored in session
unset($_SESSION['SESS_MEMBER_ID']);
unset($_SESSION['SESS_FIRST_NAME']);
unset($_SESSION['SESS_LAST_NAME']);
?>
<html>

<head>
    <title>
        POS
    </title>
    <link rel="shortcut icon" href="main/images/pos.jpg">

    <link href="main/css/bootstrap.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="main/css/DT_bootstrap.css">
    
    <link rel="stylesheet" href="main/css/font-awesome.min.css">
    <style type="text/css">
        body {
            padding-top: 60px;
            padding-bottom: 40px;
            background-color: #fff;
        }

        .sidebar-nav {
            padding: 9px 0;
        }
        input{
            border-radius: 5px !important;
            width: 300px !important;
            padding: 12px 20px !important;
            margin: 8px 0px !important;
        }
        span{
            padding: 12px 20px !important;
            margin: 8px 0px !important;
            border-radius: 5px !important;
        }
        input:focus{
            border : 2px solid blue !important;
    
        }


    </style>
    <link href="main/css/bootstrap-responsive.css" rel="stylesheet">

    <link href="style.css" media="screen" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span4">
            </div>

        </div>

        <div id="login" class="login" style="background-color:#fff !important;">
            <?php
            if (isset($_SESSION['ERRMSG_ARR']) && is_array($_SESSION['ERRMSG_ARR']) && count($_SESSION['ERRMSG_ARR']) > 0) {
                foreach ($_SESSION['ERRMSG_ARR'] as $msg) {
                    echo '<div style="color: red; text-align: center;">', $msg, '</div><br>';
                }
                unset($_SESSION['ERRMSG_ARR']);
            }
            ?>

            <form action="login.php" method="post">
                <div class="col-md-12">
                <p style="font:bold 20px 'Aleo'; color:#000000;">P.Y AMAKKOM VETINARY SERVICE</p>
                </div>
               
                <br>


                <div class="input-prepend">
                    <span style="height:18px; width:25px;" class="add-on"><i class="icon-user icon-2x" style="color:#fff !important;"></i></span><input style="height:40px;" type="text" name="username" Placeholder="Username" required /><br>
                </div>
                <div class="input-prepend">
                    <span style="height:18px; width:25px;" class="add-on"><i class="icon-lock icon-2x text-white" style="color:#fff !important;"></i></span><input type="password" style="height:40px;" name="password" Placeholder="Password" required /><br>
                </div>
                <div class="qwe" style="padding-bottom:40px !important;">
                    <button class="btn btn-large btn-primary btn-block pull-right" href="dashboard.html" type="submit" style="font-weight:bold;">LOGIN</button>
                </div>
            </form>
        </div>
    </div>
    <div>
    </div>
</body>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</html>
