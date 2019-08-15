<?php include 'header.php'; ?>
 <style>
	 .shad{
		box-shadow: 10px 10px 5px #aaaaaa;
	 }
 </style>
<body style="background-color:#e9e9e9 !important;">
<?php include('navfixed.php'); ?>
    <div class="container-fluid">
      <div class="row-fluid">
	
	
	<div class="contentheader" style="margin-top:20px;">
			<!-- <i class ="icon-dashboard"></i> Dashboard -->
			</div>

			<font style=" font:bold 25px 'Aleo'; color:#000000;"><center>P.Y. AMAKOM VETERINARY SERVICES</center></font>
<div id="mainmain">
	<?php
$position = $_SESSION['SESS_LAST_NAME'];
if ($position == 'Cashier') {
	?>
 <a href="sales.php?id=cash&invoice=<?php echo $finalcode ?>" ><i class="icon-shopping-cart icon-2x"></i><br> Sales</a>
<a href="customer.php"><i class="icon-group icon-2x"></i><br> Customers</a>  

<a href="../index.php" class="shad"><i class="icon-signout icon-2x"></i><br>Logout</a>   
<?php

}
if ($position == 'admin') {
	?>

<a href="sales.php?id=cash&invoice=<?php echo $finalcode ?>" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-shopping-cart icon-2x" style="color:#0489bd !important;"></i><br><br><b style="font-size:25px;"> Sales</b></a>               
<a href="products.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-list icon-2x" style="color:#6200ee !important;"></i><br><br><b style="font-size:25px;"> Products</b></a>                
<a href="cat.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-edit icon-2x" style="color:#008080 !important;"></i><br><br><b style="font-size:25px;"> Categories</b></a>     
<a href="customer.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-group icon-2x" style="color:#ffff00 !important;"></i><br><br><b style="font-size:25px;"> Customers</b></a>     
<a href="supplier.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-list-alt icon-2x" style="color:#ff69b4 !important;"></i><br><br><b style="font-size:25px;"> Suppliers</b></a>     
<a href="salesreport.php?d1=0&d2=0" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-th icon-2x" style="color:#00ff7f !important;"></i><br><br><b style="font-size:25px;"> Sales Report</b></a>     
<a href="admin-settings.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-user icon-2x" style="color:#8a2be2 !important;"></i><br><br><b style="font-size:25px;"> User Manager</b></a>
<a href="dashboard.php" class="shad" style="background-color:#ffffff !important; color:#000000; height:100px !important;"><i class="icon-bar-chart icon-2x" style="color:#dab !important;"></i><br><br><b style="font-size:25px;"> Graphical Reports</b></a>  
<?php 
}
?>
<div class="clearfix"></div>
</div>
</div>
</div>
<footer><center>All rights reserved 2019</center></footer>
<?php include('footer.php'); ?>
</body>

</html>
