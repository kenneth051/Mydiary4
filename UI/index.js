function login(){
	window.location="login.html";
}
function register(){
	window.location="index.html";
}
function home(){
	document.location="home.html";
}
function profile(){
	window.location="profile.html";
}
function allentries(){
	window.location="AllEntries.html";
}
function logout(){
	localStorage.removeItem("user");
	localStorage.removeItem("token")
	window.location="login.html";
}

