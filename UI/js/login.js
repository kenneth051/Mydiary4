document.getElementById('loginform').addEventListener('submit', login_func);
function login_func(e){
    e.preventDefault();
    var username1 = document.getElementById('username').value;
    var password1 = document.getElementById('password').value;
            const send = {username:username1,password:password1};
            fetch('https://infinite-crag-58351.herokuapp.com/API/v1/auth/users/login', {
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
                document.getElementById("msg").innerHTML=data.message;
            }if (data.status_code == 200){
                var user_data = {
                    firstname:data.user.firstname,
                    lastname:data.user.lastname,
                    username:data.user.username,
                    email:data.user.email,
                    gender:data.user.gender
                };
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(user_data));
                window.location.replace("home.html");
            }
        }).catch(function(err){
            window.location="login.html";
        });
}