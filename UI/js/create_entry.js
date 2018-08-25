info = JSON.parse(window.localStorage.getItem('user'));
active_username=info.username;
document.getElementById("active_user").innerHTML=active_username
document.getElementById('create').addEventListener('submit', create_func)
function create_func(e){
    e.preventDefault();
    var title1 = document.getElementById('title').value;
    var body1 = document.getElementById('body').value; 
    console.log(body1)
            const send = {title:title1,body:body1};
            fetch('http://127.0.0.1:5000/API/v1/entries', {
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
                console.log(data)
                document.getElementById('msg').style.display = "block";
                document.getElementById("msg").innerHTML=data.message
            }if (data.status_code == 201){
                sessionStorage.setItem("log", "Entry successfully created...");
                window.location = "AllEntries.html";
            }
        })
}