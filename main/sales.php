<?php include 'header.php'; ?>
<style>
	.nv{
		color: #000000 !important;
		font-weight: bold !important;
	}
</style>
<body style="background-color:#e9e9e9 !important;"	>
<?php include('navfixed.php'); ?>
    <div class="container-fluid" style="margin-top: 19px;">
      <div class="row-fluid">
	  <div class="span2">
             <div class="well sidebar-nav">
                 <ul class="nav nav-list" style="background-color:#ffffff !important;">
              <li><a href="dashboard.php" class="nv"><i class="icon-dashboard icon-2x"></i> Dashboard </a></li> 
			<li class=""><a href="sales.php?id=cash&invoice" class="nv"><i class="icon-shopping-cart icon-2x" style="color:#0489bd !important;"></i> Sales</a>  </li>             
			<li><a href="products.php" class="nv"><i class="icon-list icon-2x" style="color:#6200ee !important;"></i> Products</a>                                     </li>
			<li class=""><a href="cat.php" class="nv"><i class="icon-edit icon-2x" style="color:#008080 !important;"></i> Categories</a>                                     </li>
			<li><a href="customer.php" class="nv"><i class="icon-group icon-2x" style="color:#ffff00 !important;"></i> Customers</a>                                    </li>
			<li><a href="supplier.php" class="nv"><i class="icon-list-alt icon-2x" style="color:#ff69b4 !important;"></i> Suppliers</a>                                    </li>
			<li><a href="salesreport.php?d1=0&d2=0" class="nv"><i class="icon-th icon-2x" style="color:#00ff7f !important;"></i> Sales Report</a>                </li>
			<li><a href="sales_inventory.php" class="nv"><i class="icon-table icon-2x" style="color:#8a2be2 !important;"></i> Sales Orders</a>                </li>
				<br><br><br><br><br><br>		
			<li>
			 <div class="hero-unit-clock">
		
			<form name="clock">
			<font color="white">Time: <br></font>&nbsp;<input style="width:150px;" type="submit" class="trans" name="face" value="">
			</form>
			  </div>
			</li>
				
				</ul>           
          </div><!--/.well -->
        </div><!--/span-->
	
		<div class="contentheader">
			<!-- <i class="icon-money"></i> Sales -->
			</div>
			<div  style="margin-left: 200px !important;">
			<ul class="breadcrumb">
			<a href="index.php"><li>Dashboard</li></a> /
			<li class="active">Sales</li>
			</ul>
			</div>
			
<!-- <div style="margin-top: 19px; margin-bottom: 21px;">
<a  href="index.php"><button class="btn btn-default btn-large" style="float: none;"><i class="icon icon-circle-arrow-left icon-large"></i> Back</button></a>
</div> -->
	<?php
$position = $_SESSION['SESS_LAST_NAME'];
if ($position == 'cashier') {
	?>
<a href="sales.php?id=cash&invoice=<?php echo $finalcode ?>">Cash</a>

<a href="../index.php">Logout</a>
<?php

}
if ($position == 'admin') {
	?>
				<?php 
		} ?>										
<form action="incoming.php" method="post" style="margin-left: 200px !important;">
											
<input type="hidden" name="pt" value="<?php echo $_GET['id']; ?>" />
<input type="hidden" name="invoice" value="<?php echo $_GET['invoice']; ?>" />
<select name="product" style="width:500px; "class="chzn-select" required class="form-control">
<option></option>
	<?php
include('../connect.php');
$result = $db->prepare("SELECT * FROM products");
$result->bindParam(':userid', $res);
$result->execute();
for ($i = 0; $row = $result->fetch(); $i++) {
	?>
		<option value="<?php echo $row['product_id']; ?>"><?php echo $row['product_code']; ?> - <?php echo $row['category']; ?> - <?php echo $row['product_name']; ?> | Expires at: <?php echo $row['expiry_date']; ?></option>
	<?php

}
?>
</select>
<input type="number" name="qty" value="1" min="1" placeholder="Qty" autocomplete="off" style="width: 50px; height:30px; padding-top:6px; padding-bottom: 4px; margin-right: 4px; font-size:15px;" / required class="form-control">
<input type="hidden" name="discount" value="" autocomplete="off" style="width: 68px; height:30px; padding-top:6px; padding-bottom: 4px; margin-right: 4px; font-size:15px;" />
<input type="hidden" name="date" value="<?php echo date("m/d/20y"); ?>" />
<Button type="submit" class="btn btn-info" style="width: 123px; height:35px; margin-top:-5px;" /><i class="icon-plus-sign icon-large"></i> Add</button>
</form>
<table class="table table-bordered" id="resultTable" data-responsive="table" style="margin-left: 200px !important; width:1100px !important;">
	<thead>
		<tr>
			<th> Item Code </th>
			<th> Category </th>
			<th> Item Name </th>
			<th> Price </th>
			<th> Qty </th>
			<th> Amount </th>
			<th> Profit </th>
			<th> Action </th>
		</tr>
	</thead>
	<tbody>
		
			<?php
		$id = $_GET['invoice'];
		include('../connect.php');
		$result = $db->prepare("SELECT * FROM sales_order WHERE invoice= :userid");
		$result->bindParam(':userid', $id);
		$result->execute();
		for ($i = 1; $row = $result->fetch(); $i++) {
			?>
			<tr class="record">
			<td hidden><?php echo $row['product']; ?></td>
			<td><?php echo $row['product_code']; ?></td>
			<td><?php echo $row['category']; ?></td>
			<td><?php echo $row['name']; ?></td>
			<td>
			<?php
		$ppp = $row['price'];
		echo formatMoney($ppp, true);
		?>
			</td>
			<td><?php echo $row['qty']; ?></td>
			<td>
			<?php
		$dfdf = $row['amount'];
		echo formatMoney($dfdf, true);
		?>
			</td>
			<td>
			<?php
		$profit = $row['profit'];
		echo formatMoney($profit, true);
		?>
			</td>
			<td width="90"><a href="delete.php?id=<?php echo $row['transaction_id']; ?>&invoice=<?php echo $_GET['invoice']; ?>&dle=<?php echo $_GET['id']; ?>&qty=<?php echo $row['qty']; ?>&code=<?php echo $row['product']; ?>"><button class="btn btn-mini btn-warning"><i class="icon icon-remove"></i> Cancel </button></a></td>
			</tr>
			<?php

	}
	?>
			<tr>
			<th> </th>
			<th>  </th>
			<th>  </th>
			<th>  </th>
			<th>  </th>
			<td> Total Amount: </td>
			<td> Total Profit: </td>
			<th>  </th>
		</tr>
			<tr>
				<th colspan="5"><strong style="font-size: 12px; color: #222222;">Total:</strong></th>
				<td colspan="1"><strong style="font-size: 12px; color: #222222;">
				<?php
			function formatMoney($number, $fractional = false)
			{
				if ($fractional) {
					$number = sprintf('%.2f', $number);
				}
				while (true) {
					$replaced = preg_replace('/(-?\d+)(\d\d\d)/', '$1,$2', $number);
					if ($replaced != $number) {
						$number = $replaced;
					} else {
						break;
					}
				}
				return $number;
			}
			$sdsd = $_GET['invoice'];
			$resultas = $db->prepare("SELECT sum(amount) FROM sales_order WHERE invoice= :a");
			$resultas->bindParam(':a', $sdsd);
			$resultas->execute();
			for ($i = 0; $rowas = $resultas->fetch(); $i++) {
				$fgfg = $rowas['sum(amount)'];
				echo formatMoney($fgfg, true);
			}
			?>
				</strong></td>
				<td colspan="1"><strong style="font-size: 12px; color: #222222;">
			<?php 
		$resulta = $db->prepare("SELECT sum(profit) FROM sales_order WHERE invoice= :b");
		$resulta->bindParam(':b', $sdsd);
		$resulta->execute();
		for ($i = 0; $qwe = $resulta->fetch(); $i++) {
			$asd = $qwe['sum(profit)'];
			echo formatMoney($asd, true);
		}
		?>
		
				</td>
				<th></th>
			</tr>
		
	</tbody>
</table><br>
<a rel="facebox" href="checkout.php?pt=<?php echo $_GET['id'] ?>&invoice=<?php echo $_GET['invoice'] ?>&total=<?php echo $fgfg ?>&totalprof=<?php echo $asd ?>&cashier=<?php echo $_SESSION['SESS_FIRST_NAME'] ?>" style="margin-left:200px;"><button class="btn btn-success"><i class="icon icon-save icon-large"></i> SAVE</button></a>
<div class="clearfix"></div>
</div>
</div>
</body>
<?php include('footer.php'); ?>
</html>