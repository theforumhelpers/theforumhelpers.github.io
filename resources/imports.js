function reference(link) {
	const headerContent = `
	<a href="${link}" target="_parent">
		<img src="${link}resources/icon.png" width="64px" height="64px" class="navHomeIcon">
	</a>
	<h1 class="navTitle">The Forum Helpers</h1>
	<a href="${link}forumhelpers" class="navButton" target="_parent">List Of Forum Helpers</a>
	<a href="https://scratch.mit.edu/studios/3688309/" class="navButton" target="_blank">Our Scratch Studio</a>
	<a href="https://theforumhelpers.github.io/QuickReply/" class="navButton" target="_parent">QuickReply</a>

	<div class="expandableDropdown">
		<a class="expandableLink" href="${link}forumhelpers">List Of Forum Helpers</a>
		<a class="expandableLink" href="https://scratch.mit.edu/studios/3688309/">Our Scratch Studio</a>
		<a class="expandableLink" href="https://theforumhelpers.github.io/QuickReply/">QuickReply</a>
	</div>`
	document.getElementById("header").innerHTML = headerContent;

	const footerContent = `
	<div class="footerContent">
		<br>
		<a onclick="changeTheme()" class="changeTheme" id="changeTheme">Change Theme</a><br>
		<p><a href="${link}contributors/" class="FHULink" target="_parent">Contributors</a></p>
		<p><a href="https://github.com/theforumhelpers/theforumhelpers.github.io" class="FHULink" target="_parent">Github Repository</a></p>
		<p>Be moist <img src="https://cdn.scratch.mit.edu/scratchr2/static/__4f1f321e080ee4987f163566ecc0dd26__/djangobb_forum/img/smilies/cool.png"></p>
		<p style="font-size: 12px;">This site uses Google Analytics. Check out our <a href="${link}privacy/" class="FHULink" target="_parent">Privacy Policy</a> for more information</p>
	</div>`
	document.getElementById("footer").innerHTML = footerContent;

	const privacyContent = `
	<p style="margin:0px;">This site uses Google Analytics.<br>Check out our <a href="${link}privacy/" class="FHULink" target="_parent">Privacy Policy</a> for more information.</p><br>
	<button class="privacyButton" onclick="acceptPrivacy()">Okay</button> <button class="privacyButton" onclick="denyPrivacy()">Leave Site</button>`
	var currentDate = new Date();
	var currentMonth = currentDate.getMonth();
	//var currentDay = currentDate.getDate();
	var storedDate = new Date(localStorage.getItem("FHacceptedDate"));
	var storedMonth = storedDate.getMonth() ?? 100;
	//var storedDay = storedDate.getDate() ?? 100;
	if (currentMonth != storedMonth /*|| storedDay+7 < currentDay*/) {
		document.getElementById("privacyWarning").innerHTML = privacyContent;
	}
}

function acceptPrivacy() {
	var setDate = new Date();
	localStorage.setItem("FHacceptedAnalytics", "true");
	localStorage.setItem("FHacceptedDate", setDate);
	document.getElementById("privacyWarning").style.display = "none";
}

function denyPrivacy() {
	localStorage.removeItem("FHacceptedAnalytics");
	localStorage.removeItem("FHacceptedDate");
	window.location.href = "https://scratch.mit.edu/studios/3688309/";
}
