info = JSON.parse(window.localStorage.getItem('user'));
active_username=info.username;
document.getElementById("active_user").innerHTML=active_username
function single_entries(entry){
    fetch('http://127.0.0.1:5000/API/v1/entries/'+entry, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }      
}).then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data.result)
    if(data.result){
    data.result.forEach(function(entry){
        entry_title=entry.title;
        entry_body=entry.body;
    });
    document.getElementById("entry_body").innerHTML=entry_body
    document.getElementById("entry_title").value=entry_title   
}     
});
}

function updating_entry(entry){
    document.getElementById('updatingformdata').addEventListener('submit',function login_func(e){
    e.preventDefault();
    var title1 = document.getElementById('entry_title').value;
    var body1 = document.getElementById('entry_body').value; 
                const send = {title:title1,body:body1};
                fetch('http://127.0.0.1:5000/API/v1/entries/'+entry, {
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
                if (data.status_code == 200){
                    sessionStorage.setItem("log", "Entry has been hsuccessfully updated...");
                    window.location = "AllEntries.html";
                }else if (data.status_code != 200){
                    document.getElementById('msg').style.display = "block";
                    document.getElementById("msg").innerHTML=data.message
                }
            })
    });
}