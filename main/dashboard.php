<html>
<?php
require_once('auth.php');
?>
<head>
<title>
POS
</title>
 <link href="css/bootstrap.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="css/DT_bootstrap.css">
  
  <link rel="stylesheet" href="css/font-awesome.min.css">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
      .sidebar-nav {
        padding: 9px 0;
      }
    </style>
    <link href="css/bootstrap-responsive.css" rel="stylesheet">


<link href="../style.css" media="screen" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="tcal.css" />
<script type="text/javascript" src="tcal.js"></script>
<script type="text/javascript" src="reportsgraph.js"></script>
</head>

<script language="javascript" type="text/javascript">
/* Visit http://www.yaldex.com/ for full source code
and get more free JavaScript, CSS and DHTML scripts! */
<!-- Begin
var timerID = null;
var timerRunning = false;
function stopclock (){
if(timerRunning)
clearTimeout(timerID);
timerRunning = false;
}
function showtime () {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds()
var timeValue = "" + ((hours >12) ? hours -12 :hours)
if (timeValue == "0") timeValue = 12;
timeValue += ((minutes < 10) ? ":0" : ":") + minutes
timeValue += ((seconds < 10) ? ":0" : ":") + seconds
timeValue += (hours >= 12) ? " P.M." : " A.M."
document.clock.face.value = timeValue;
timerID = setTimeout("showtime()",1000);
timerRunning = true;
}
function startclock() {
stopclock();
showtime();
}
window.onload=startclock;
// End -->
</SCRIPT>	
<body style="background-color:#e9e9e9 !important;">
<?php include('navfixed.php'); ?>
<div class="container-fluid" style="margin-top:20px;">
      <div class="row-fluid">
    <?php include("sidebar.php") ?>
  <div class="contentheader">
      <!-- <i class="icon-bar-chart"></i> Sales Report -->
      </div>
      <ul class="breadcrumb" style="margin-left:200px;">
      <li><a href="dashboard.php">Dashboard</a></li>
      <!-- <li class="active">Sales Report</li> -->
      </ul>

<div style="margin-top: 19px; margin-bottom: 21px;">
<!-- <a  href="index.php"><button class="btn btn-default btn-large" style="float: none;"><i class="icon icon-circle-arrow-left icon-large"></i> Back</button></a> 
<button  style="float:right;" class="btn btn-success btn-mini"><a href="javascript:Clickheretoprint()"> Print</button></a>-->

</div>

<div class="content" id="content">
  <div style="font-weight:bold; text-align:center;font-size:14px;margin-bottom: 15px;">
     <!-- <h2>Graphical Report</h2> -->
  </div>
  <p></p>
  
    <table class="table "  data-responsive="table" style="text-align: left; margin-left: 200px !important; width:1100px !important;">
    <tbody>
     <tr>
         <td colspan="1">
          <div style="background-color:#fff !important;height:100px;">
            <p><center style="padding-top: 20px;">Total Sales <i class="icon-shopping-cart icon-2x" style="color:#0489bd !important;"></i></center></p>
             <p>
                <center style="padding-top: 10px;font-size: 30px;"> 
                <?php
                include('../connect.php');
                $resultas = $db->prepare("SELECT sum(amount) from sales_orderSaved");
                $resultas->bindParam(':a', $sdsd);
                $resultas->execute();
                for ($i = 0; $rowas = $resultas->fetch(); $i++) {
                  $fgfg = $rowas['sum(amount)'];
                  echo "GHC $fgfg";
                }
                ?>   
                </center>
              </p>
         </div>
         </td>
        <td colspan="1">
          <div style="background-color:#fff !important;height:100px;">
            <p><center style="padding-top: 20px;">Total Profit <i class="icon-money icon-2x" style="color:#0489bd !important;"></i></center></p>
             <p>
                <center style="padding-top: 10px;font-size: 30px;"> 
                <?php
                include('../connect.php');
                $resultas = $db->prepare("SELECT sum(profit) from sales_orderSaved");
                $resultas->bindParam(':a', $sdsd);
                $resultas->execute();
                for ($i = 0; $rowas = $resultas->fetch(); $i++) {
                  $fgfg = $rowas['sum(profit)'];
                  echo "GHC $fgfg";
                }
                ?>   
                </center>
              </p>
          </div>
        </td>
        <td colspan="1">
          <div style="background-color:#fff !important;height:100px;">
            <p><center style="padding-top: 20px;">Suppliers <i class="icon-bolt icon-2x" style="color:#0489bd !important;"></i></center></p>
             <p>
                <center style="padding-top: 10px;font-size: 30px;"> 
                  <?php
                  include('../connect.php');
                  $totsup = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM supliers"));
                  echo $totsup;
                  ?>     
                </center>
              </p>
         </div>
         </td>
         <td colspan="1">
          <div style="background-color:#fff !important;height:100px;">
            <p><center style="padding-top: 20px;">Customers <i class="icon-group icon-2x" style="color:#0489bd !important;"></i></center></p>
             <p>
                <center style="padding-top: 10px;font-size: 30px;"> 
                  <?php
                  include('../connect.php');
                  $totcus = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM customer"));
                  echo $totcus;
                  ?>     
                </center>
              </p>
         </div>
         </td>
      </tr>
    </tbody>
  </table>
  <table class="table "  data-responsive="table" style="text-align: left; margin-left: 200px !important; width:1100px !important;">
    <tbody>
      <tr class="record">
          <td colspan="2">
              <div id="chartContainer" style="height: 300px; width: 100%;"></div>
          </td>
          <td colspan="2">
               <div id="pie_chart" style="height: 300px; width: 100%;"></div>
          </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="clearfix"></div>
</div>
</div>
  <?php
  include('../connect.php');
  $jan = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 1  "));
  $feb = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 2  "));
  $mar = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 3  "));
  $apr = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 4  "));
  $may = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 5  "));
  $jun = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 6  "));
  $july = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought)=7 "));
  $aug = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 8 "));
  $sept = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 9  "));
  $oct = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 10  "));
  $nov = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 11  "));
  $dec = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date_bought) = 12 "));
  ?>  
    <!-- <//?php
    //include('../connect.php');
    //$jan = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM sales_orderSaved WHERE YEAR(date_bought) = YEAR(NOW()) AND MONTH(date) = 1  "));
    ?>  -->

</body>
<script>
window.onload = function () {

var chart1 = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2", // "light1", "light2", "dark1", "dark2"
  title:{
    text: "Monthly Sales"
  },
  axisY: {
    title: "Sales"
  },
  data: [{        
    type: "column",  
    showInLegend: true, 
    legendMarkerColor: "grey",
    legendText: "Months",
    dataPoints: [      
      { y: <?php echo $jan; ?>, label: "Jan" },
      { y: <?php echo $feb; ?>, label: "Feb" },
      { y: <?php echo $mar; ?>, label: "Mar" },
      { y: <?php echo $apr; ?>, label: "Apr" },
      { y: <?php echo $may; ?>, label: "May" },
      { y: <?php echo $jun; ?>, label: "Jun" },
      { y: <?php echo $july; ?>,label: "Jul" },
      { y: <?php echo $aug; ?>, label: "Aug" },
      { y: <?php echo $sept; ?>,label: "Sep" },
      { y: <?php echo $oct; ?>, label: "Oct" },
      { y: <?php echo $nov; ?>, label: "Nov" },
      { y: <?php echo $dec; ?>, label: "Dec" }
    ]
  }]
});
chart1.render();


var chart = new CanvasJS.Chart("pie_chart", {
  animationEnabled: true,
  title: {
    text: "Products left"
  },
  data: [{
    type: "pie",
    startAngle: 240,
    indexLabel: "{label} {y}",
    dataPoints: [ 
      <?Php 
      $first = "SELECT * FROM products";
      $result = mysqli_query($conn, $first);
      while ($row = mysqli_fetch_array($result)) {
        echo " {y: " . $row['qty'] . ", label: '" . $row['product_name'] . "'},";
      }
      ?>
    ]
  }]
});
chart.render();

}
</script>

<script src="js/jquery.js"></script>
<?php include('footer.php'); ?>
</html>