function reference(link) {
	const headerContent = `
	<a href="${link}" target="_parent">
		<img src="${link}resources/icon.png" width="64px" height="64px" class="nav_homeicon">
	</a>
	<h1 class="nav_title">The Forum Helpers</h1>
	<a href="${link}forumhelpers" class="nav_button" target="_parent">List Of Forum Helpers</a>
	<a href="https://scratch.mit.edu/studios/3688309/" class="nav_button" target="_blank">Our Scratch Studio</a>
	<a href="https://theforumhelpers.github.io/QuickReply/" class="nav_button" target="_parent">QuickReply</a>

	<div class="expandableDropdown">
		<a class="expandableLink" href="${link}forumhelpers">List Of Forum Helpers</a>
		<a class="expandableLink" href="https://scratch.mit.edu/studios/3688309/">Our Scratch Studio</a>
		<a class="expandableLink" href="https://theforumhelpers.github.io/QuickReply/">QuickReply</a>
	</div>`
	document.getElementById("header").innerHTML = headerContent;

	const footerContent = `
	<div class="footer_content">
		<div class = "FHULinkDiv">
			<a href="${link}contributors/" class="FHULink" target="_parent">Contributors</a>
		</div>
		<div class = "FHULinkDiv">
			<a href="https://github.com/theforumhelpers/theforumhelpers.github.io" class="FHULink" target="_parent">Github Repository</a>
		</div>
		<div class = "FHULinkDiv">
			Be moist <img src="https://cdn.scratch.mit.edu/scratchr2/static/__4f1f321e080ee4987f163566ecc0dd26__/djangobb_forum/img/smilies/cool.png">
		</div>
	</div>`
	document.getElementById("footer").innerHTML = footerContent;
}
