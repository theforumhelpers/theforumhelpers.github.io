var man_addition=""
var man_pull = new XMLHttpRequest()

man_pull.open("GET", "managers.json");
man_pull.send();
man_pull.onreadystatechange = function() {
	if (man_pull.readyState === 4 && man_pull.status === 200) {
   		man_pulldone = JSON.parse(man_pull.responseText);
		man_legnth = Object.keys(man_pulldone).length
		for(var man_key in man_pulldone){
    			var man_keyjson = man_pulldone[man_key];
			var man_username = man_keyjson.name
			var man_userID = man_keyjson.id
			var man_bio = man_keyjson.bio
			var man_add=
			`<div id="FHP_Blocks"><h4 class="username"><a href="https://scratch.mit.edu/users/${man_username}/" class="FHULink">${man_username}</a></h4>
			<img src="https://cdn2.scratch.mit.edu/get_image/user/${man_userID}_60x60.png" class="pfp">
			<p class="bio">${man_bio}</p>
			<br></div>
			<hr>`
			
				man_addition= man_addition+man_add
				document.getElementById("FHPMan_Lists").innerHTML=man_addition;
   		}
	}
}
			
var cur_addition=""
var cur_pull = new XMLHttpRequest()

cur_pull.open("GET", "curators.json");
cur_pull.send();
cur_pull.onreadystatechange = function() {
  	if (cur_pull.readyState === 4 && cur_pull.status === 200) {
   		cur_pulldone = JSON.parse(cur_pull.responseText);
		cur_legnth = Object.keys(cur_pulldone).length
		for(var cur_key in cur_pulldone){
    			var cur_keyjson = cur_pulldone[cur_key];
			var cur_username = cur_keyjson.name
			var cur_userID = cur_keyjson.id
			var cur_bio = cur_keyjson.bio
			var cur_add=
			`<div id="FHP_Blocks"><h4 class="username"><a href="https://scratch.mit.edu/users/${cur_username}/" class="FHULink">${cur_username}</a></h4>
		<img src="https://cdn2.scratch.mit.edu/get_image/user/${cur_userID}_60x60.png" class="pfp">
		<p class="bio">${cur_bio}</p>
		<br></div>
		<hr>`
		
			cur_addition= cur_addition+cur_add
			document.getElementById("FHPCur_Lists").innerHTML=cur_addition;
		}
	}
}
