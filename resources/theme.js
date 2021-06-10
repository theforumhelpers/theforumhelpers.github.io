var theme = localStorage.getItem("siteTheme");
var themeButton = document.getElementById("changeTheme");
themeButton.innerHTML = "Change Theme (" + theme + ")";

if (theme == null){
	if (window.matchMedia('(prefers-color-scheme: dark)').matches){
		theme = "dark";
	}
	else {
		theme = "light";
	}
}

if (theme == "light") {
	document.getElementsByTagName("html")[0].className = "lightMode";
}
else {
	document.getElementsByTagName("html")[0].className = "darkMode";
}

function changeTheme() {
	var theme = localStorage.getItem("siteTheme");
	console.log(theme)
	if (theme == "light" || theme == null) {
		theme = "dark";
	}
	else {
		theme = "light";
	}
	localStorage.setItem("siteTheme", theme)
	document.getElementsByTagName("html")[0].className = theme + "Mode";
	themeButton.innerHTML = "Change Theme (" + theme + ")";
}