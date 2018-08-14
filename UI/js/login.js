document.getElementById('loginform').addEventListener('submit', login_func)
function login_func(e){
    e.preventDefault();
    var username1 = document.getElementById('username').value;
    var password1 = document.getElementById('password').value;
            const send = {username:username1,password:password1};
            fetch('http://127.0.0.1:5000/API/v1/auth/users/login', {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(send)        
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            if (data.status_code != 200){
                document.getElementById('msg').style.display = "block";
                document.getElementById("msg").innerHTML=data.message
            }if (data.status_code == 200){
                localStorage.setItem("token", data.token);
                window.location.replace("home.html")
            }
        })
}