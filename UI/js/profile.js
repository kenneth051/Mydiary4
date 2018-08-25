info = JSON.parse(window.localStorage.getItem('user'));
if(info){
    document.getElementById("active_user").innerHTML=info.username;
    document.getElementById("username").innerHTML=info.username;
    document.getElementById("firstname").innerHTML=info.firstname;
    document.getElementById("lastname").innerHTML=info.lastname;
    document.getElementById("email").innerHTML=info.email;
    document.getElementById("gender").innerHTML=info.gender;  
}else{
    window.location="login.html";
}