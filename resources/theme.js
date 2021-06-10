var theme = localStorage.getItem("siteTheme");
var themeButton = document.getElementById("changeTheme");

if (theme == null){
	theme = "system";
}

themeButton.innerHTML = "Change Theme (" + theme + ")";

function checkSystemTheme() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches){
		return "dark";
	}
	else {
		return "light";
	}
}

if (theme == "system") {
	var systemTheme = checkSystemTheme();
	if (systemTheme == "light") {
		document.getElementsByTagName("html")[0].className = "lightMode";
	}
	else {
		document.getElementsByTagName("html")[0].className = "darkMode";
	}
} 
else if (theme == "light") {
	document.getElementsByTagName("html")[0].className = "lightMode";
} 
else {
	document.getElementsByTagName("html")[0].className = "darkMode";
}


function changeTheme() {
	// Currently Available themes: system, light, dark
	// If you are adding a theme, please update the comment above and the array below
	var theme = localStorage.getItem("siteTheme");
	var listOfThemes = ["system", "light", "dark"];
	var indexOfCurrentTheme = listOfThemes.indexOf(theme);
	console.log(theme);
	
	if (indexOfCurrentTheme < listOfThemes.length - 1){
		theme = listOfThemes[indexOfCurrentTheme + 1];
	}
	else {
		theme = listOfThemes[0];
	}

	localStorage.setItem("siteTheme", theme)

	if (theme == "system"){
		var systemTheme = checkSystemTheme();
		if (systemTheme == "light") {
			document.getElementsByTagName("html")[0].className = "lightMode";
		}
		else {
			document.getElementsByTagName("html")[0].className = "darkMode";
		}
	}
	else {
		document.getElementsByTagName("html")[0].className = theme + "Mode";
	}
	themeButton.innerHTML = "Change Theme (" + theme + ")";
}
