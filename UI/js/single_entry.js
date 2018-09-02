info = JSON.parse(window.localStorage.getItem('user'));
active_username=info.username;
document.getElementById("active_user").innerHTML=active_username

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
        entry_time=entry.entry_time;
        entry_date=entry.entry_date;
        entry_update=entry.updated;
        entry_body=entry.body;
    });
    document.getElementById("entry_time").innerHTML=entry_time
    document.getElementById("entry_body").innerHTML=entry_body
    document.getElementById("entry_date").innerHTML=entry_date
    document.getElementById("update").innerHTML=entry_update
    document.getElementById("entry_title").innerHTML=entry_title  
}
}).catch(function(err){
    window.location="login.html";
})
}