var info = JSON.parse(window.localStorage.getItem('user'));
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
    fetch('https://infinite-crag-58351.herokuapp.com/API/v1/entries', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }      
}).then(function(response) {
        return response.json(); 
}).then(function(data){
    document.getElementById("number").innerHTML=data.number;            
}).catch(function(err){
    window.location="login.html";
});
