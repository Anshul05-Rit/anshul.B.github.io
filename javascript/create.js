document.querySelector("#login-form").addEventListener("submit", SubmitFun);


function SubmitFun(Elme) {
    Elme.preventDefault();
    password = document.querySelector("#password").value;
    password =  document.querySelector("#password1").value;

    if (password == "2345" && password1 == "2345") {
       
        alert("login Successfully")
    } else {
        alert(" wrong password entered");
        document.querySelector("#login-form").reset();
    }

}