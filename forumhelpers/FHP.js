var man_addition = ""
fetch("https://theforumhelpers.github.io/forumhelpers/managers.json").catch((error) => {
	throw error
}).then(response => response.json())
.then((data) => {
	let managerList = document.getElementById("FHPMan_Lists")
	man_length = Object.keys(data).length
	for (var man_key in data) {
		var managerData = data[man_key]
		var username = managerData.name
		var userid = managerData.id
		var bio = managerData.bio || "No biography provided."
		var toAdd = `<div class="forumhelpers_blocks"><h4 class="forumhelpers_name"><a href="https://scratch.mit.edu/users/${username}/" class="FHULink">${username}</a></h4>
			<a href="https://scratch.mit.edu/users/${username}/"><img src="https://uploads.scratch.mit.edu/get_image/user/${userid}_60x60.png" class="forumhelpers_pfp" loading="lazy" alt="${username}'s Profile Picture"></a>
			<p class="forumhelpers_bio">${bio}</p>
			<br></div>
			<hr>`
		man_addition += toAdd
		managerList.innerHTML=man_addition;
	}
})
var cur_addition = ""
fetch("https://theforumhelpers.github.io/forumhelpers/curators.json").catch((error) => {
	throw error
}).then(response => response.json())
.then((data) => {
	let curatorList = document.getElementById("FHPCur_Lists")
	man_length = Object.keys(data).length
	for (var cur_key in data) {
		var curatorData = data[cur_key]
		var username = curatorData.name
		var userid = curatorData.id
		var bio = curatorData.bio || "No biography provided."
		var toAdd = `<div class="forumhelpers_blocks"><h4 class="forumhelpers_name"><a href="https://scratch.mit.edu/users/${username}/" class="FHULink">${username}</a></h4>
			<a href="https://scratch.mit.edu/users/${username}/"><img src="https://uploads.scratch.mit.edu/get_image/user/${userid}_60x60.png" class="forumhelpers_pfp" loading="lazy" alt="${username}'s Profile Picture"></a>
			<p class="forumhelpers_bio">${bio}</p>
			<br></div>
			<hr>`
		cur_addition += toAdd
		curatorList.innerHTML=cur_addition;
	}
})
