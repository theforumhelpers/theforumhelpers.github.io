function getData(dataSet) {
	var grabDelay = 0
	fetch("https://theforumhelpers.github.io/forumhelpers/"+dataSet+".json")
		.then(response => response.json())
		.then(data => {
			document.getElementById(dataSet+"Number").innerHTML = data.length;
			for (j = 0; j < data.length; j++) {
				var name = data[j].name;
				var id = data[j].id;
				var bio = data[j].bio;
				var section = document.getElementById(dataSet+"List").innerHTML;
				var addition = `
				<div class="profileContainer" id="${name}">
					<h4 class="profileName"><a href="https://scratch.mit.edu/users/${name}/">${name}</a><span id="${name}Posts"></span></h4>
					<div class="profileInner">
						<a href="https://scratch.mit.edu/users/${name}/"><img src="https://cdn2.scratch.mit.edu/get_image/user/${id}_60x60.png" class="profilePicture" id="${name}pfp" loading="lazy" alt="${name}'s Profile Picture"></a>
						<p class="profileBio">${bio}</p>
					</div>
					<p class="ocularStatusBox" id="${name}Ocular" title="Ocular Status"><span class="ocularStatus" id="${name}Status">Loading Status...</span></p>
				</div>
				<hr>`;
				document.getElementById(dataSet+"List").innerHTML = section + addition;
				if (j == data.length-1 && dataSet != "curators") {
					getData("curators");
				}
				else if (j == data.length-1) {
					document.getElementById("totalNumber").innerHTML = parseInt(document.getElementById("managersNumber").innerHTML) + parseInt(document.getElementById("curatorsNumber").innerHTML);
				}
				grabDelay = grabDelay + 500;
				getOcular(name);
				setTimeout(getCount, grabDelay, name);
			}
		});

}

function getOcular(name) {
	fetch("https://my-ocular.jeffalo.net/api/user/"+name)
		.then(response => response.json())
		.then(data => {
			var status = data.status;
			status ??= "none";
			if (status != "none") {
				document.getElementById(name+"Status").innerText = status;
				document.getElementById(name+"Ocular").style.borderColor = data.color;
			}
			else {
				document.getElementById(name+"Ocular").style.display = "none";
			}
			if (document.getElementById(name+"Status").innerText === "" && data.color != undefined) {
				document.getElementById(name+"Ocular").style.backgroundColor = data.color;
				console.log(1);
			}
		});
}

function getCount(name) {
	fetch("https://scratchdb.lefty.one/v3/forum/user/info/"+name)
		.then(response => response.json())
		.then(data => {
			var posts = data.counts.total.count;
			document.getElementById(name+"Posts").innerText = " - "+posts+" Posts";
		});
}
