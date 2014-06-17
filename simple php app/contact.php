<?php
$pageTitle = "Contact Mike";
$section = "contact";
include('includes/header.php'); ?>

	<div class="section page">
		<div class="wrapper">
			<h1>Contact</h1>
			
			<p>I'd love to hear from you! Complete the form to send me an e-mail. </p>

			<form method="post">
				<table>
					<tr>
						<th>
							<label for="name">Name </label>
						</th>
						<td>
							<input type="text" name="name" id="name">
						</td>
					</tr>
					<tr>
						<th>
							<label for="email">Email </label>
						</th>
						<td>
							<input type="text" name="email" id="email">
						</td>
					</tr>
					<tr>
						<th>
							<label for="message">Message </label>
						</th>
						<td>
							<textarea name="message" id="message"> </textarea>
						</td>
					</tr>
				</table>
				<input type="submit" value="Send">
			</form>
		</div>


	</div>





<?php include('includes/footer.php'); ?>	