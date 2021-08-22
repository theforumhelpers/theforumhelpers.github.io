fetch("https://theforumhelpers.herokuapp.com/api/status.php")
	.then(response => response.json())
	.then(data => {
		var applicationStatus = data.status;
		var codeword = data.codeword;
		document.getElementById("applicationStatus").innerText = applicationStatus;
		document.getElementById("codeword").innerText = codeword;
	});
