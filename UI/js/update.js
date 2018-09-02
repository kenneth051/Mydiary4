let info = JSON.parse(window.localStorage.getItem('user'));
if(info){
let active_username=info.username;
document.getElementById("active_user").innerHTML=active_username;
}else{
    window.location="login.html";
}
function fetch_entry(entry){
    fetch('https://infinite-crag-58351.herokuapp.com/API/v1/entries/'+entry, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }      
}).then(function(response) {
    return response.json();
}).then(function(data){
    if(data.status_code==404){
        window.location="404.html";
    }else{
    data.result.forEach(function(entry){
        entry_title=entry.title;
        entry_body=entry.body;
    });
    document.getElementById("entry_body").innerHTML=entry_body;
    document.getElementById("entry_title").value=entry_title;  
}     
}).catch(function(err){
    window.location="login.html";
});
}

function updating_entry(entry){
    document.getElementById('updatingformdata').addEventListener('submit',function login_func(e){
    e.preventDefault();
    var title1 = document.getElementById('entry_title').value;
    var body1 = document.getElementById('entry_body').value; 
                const send = {title:title1,body:body1};
                fetch('https://infinite-crag-58351.herokuapp.com/API/v1/entries/'+entry, {
                    method: 'PUT',
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
                if(data.status_code == 404){
                    window.location="404.html";
                }else if (data.status_code == 200){
                    sessionStorage.setItem("log", "Entry has been successfully updated...");
                    window.location = "AllEntries.html";
                }else{
                    document.getElementById('msg').style.display = "block";
                    document.getElementById("msg").innerHTML=data.message;
                }
            }).catch(function(err){
                window.location="login.html";
            });
    });
}
