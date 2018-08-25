document.getElementById('signupform').addEventListener('submit', func)
function func(e){
    e.preventDefault();
    var firstname1 = document.getElementById('firstname').value;
    var lastname1 = document.getElementById('lastname').value;
    var username1 = document.getElementById('username').value;
    var email1 = document.getElementById('email').value;
    var password1 = document.getElementById('password').value;
    var confirmpassword1 = document.getElementById('confirmpassword').value;
    var gender1 = document.getElementById('gender').value;
    if(password1 === confirmpassword1){
            const send = {firstname:firstname1, lastname:lastname1,username:username1,email:email1, password:password1, gender:gender1};
            fetch('http://127.0.0.1:5000/API/v1/auth/user/signup', {
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
            if (data.status_code != 201){
                document.getElementById('msg').style.display = "block";
                document.getElementById("msg").innerHTML=data.message
            }if (data.status_code == 201){
                sessionStorage.setItem("log", "YOU HAVE SUCCESSFULLY REGISTERED, LOGIN NOW...");
                window.location = "login.html";
            }
        }).catch(function(err){
            window.location="error.html";
        });
    }else{
        document.getElementById('msg').style.display = "block";
        document.getElementById("msg").innerHTML = "ERROR! Passwords do not MATCH..."
    }
}