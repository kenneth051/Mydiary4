info = JSON.parse(window.localStorage.getItem('user'));
active_username=info.username;
document.getElementById("active_user").innerHTML=active_username

function allentries(){
            fetch('http://127.0.0.1:5000/API/v1/entries', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem("token")
                }      
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            entries= data.result;
            console.log(entries)
            let output="";
            data.result.forEach(function(post){
            output +=`
                                <tr>
                                <td>${post.title}</td>
                                <td>${post.entry_date}</td>
                                <td><a href ="SingleEntry.html?entry_id=${post.id}" >VIEW DETAILS</a></td>
                                </tr>
            `;
                        });
            document.getElementById("output").innerHTML=output;            
        });   
}

