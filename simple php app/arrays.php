 <?php

 $flavours = array("Vanilla", "Chocolate", "Strawberry", "Cookie Dough");

 ?>

 <pre>
 	<?php var_dump($flavours); 


 	echo "\n" . $flavours[0] . "\n" . $flavours[1] . "\n" . $flavours[2] . "\n" . $flavours[3]; 

 	echo "\n\nWe have " . count($flavours) . " flavours of ice cream available. Here is a list: \n";

 	foreach($flavours as $flavour){
 		echo $flavour . "\n";
 	} 

$countries = array();
$countries[0] = array(
	"code" => "US",
	"name" => "Unitied States",
	"capital" => "Washington, D.C.", 
	"population" => 225000000,
	"anthem" => "The Star-Sprangled Banner"
);

$countries[1] = array(
	"code" => "DE",
	"name" => "Germany",
	"capital" => "Berlin", 
	"population" => 81799600,
	"anthem" => "Song of the Germans"
);

?>
// <pre> <?php var_dump($countries); ?>	</pre>


<?php
/*
// assosiative array
$country = array(
	"code" => "US",
	"name" => "Unitied States",
	"capital" => "Washington, D.C.", 
	"population" => 225000000,
	"anthem" => "The Star-Sprangled Banner"

);
*/
?>
</pre>
<html>
<body>
<?php foreach ($countries as $country) { ?>

	<h1><?php echo $country["name"]; ?></h1>

	<dl>
		<dt>Country code</dt>
		<dd><?php echo $country["code"]; ?></dd>
		<dt>Capital</dt>
		<dd><?php echo $country["capital"];?></dd>
		<dt>Population</dt>
		<dd><?php echo $country["population"];?></dd>
	</dl>
<?php } ?>
</body>
</html>
