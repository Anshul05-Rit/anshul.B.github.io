document.querySelector("#login-form").addEventListener("submit", SubmitFun);


function SubmitFun(Elme) {
    Elme.preventDefault();
    username = document.querySelector("#username").value;
    password =  document.querySelector("#password").value;

    if (username == "Anshul" && password == "123") {
       
        window.location.href= "Admin.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#login-form").reset();
    }

}


