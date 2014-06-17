<!DOCTYPE html>
<html>
<head>
	<title>Shirts 4 Mike</title>

</head>
<body>

	<h1>Shirts 4 Mike</h1>

	<?php $year = date('Y'); ?>

	
	<?php 
	$productName = "Mike, the frog Shirt, Orange";
	$productPrice = 20;
	?>

	<ul>
		<li><?php echo $productName;  ?> - <?php echo $productPrice; ?>$USD</li>
		<?php
		$productName = "Logo Shirt, Blue";
		$productPrice = 25;
		?>
		<li><?php echo $productName;  ?> - <?php echo $productPrice; ?>$USD</li>
	</ul>

	<?php
	$today = "Monday";
	if ($today == "Monday") {
		echo "Welcome back to work";
	}
	?>

	<?php
	$hour = date('G');
	if ($hour < 12){ 
		echo "Good morning";
	}
	if ($hour >= 12 and $hour < 17){ 
		echo "Good afternoon";
	}
	if ($hour >= 17 and $hour < 20){ 
		echo "Good evening";
	}
	if ($hour >= 20){ 
		echo "Good night";
	}
	?>



	<p>&copy;<?php echo $year; ?> Shirts 4 Mike</p>

</body>
</html>


