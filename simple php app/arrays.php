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
 	?>


 </pre>