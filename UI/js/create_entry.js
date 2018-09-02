var info = JSON.parse(window.localStorage.getItem('user'));
if(info){
var active_username=info.username;
document.getElementById("active_user").innerHTML=active_username;
}else{
    window.location="login.html";
}
document.getElementById('create').addEventListener('submit', create_func);
function create_func(e){
    e.preventDefault();
    var title1 = document.getElementById('title').value;
    var body1 = document.getElementById('body').value; 
            const send = {title:title1,body:body1};
            fetch('https://infinite-crag-58351.herokuapp.com/API/v1/entries', {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem("token")
                },
                body: JSON.stringify(send)        
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            if (data.status_code != 201){
                document.getElementById('msg').style.display = "block";
                document.getElementById("msg").innerHTML=data.message;
            }if (data.status_code == 201){
                sessionStorage.setItem("log", "Entry successfully created...");
                window.location = "AllEntries.html";
            }
        }).catch(function(err){
            window.location="login.html";
        });
}