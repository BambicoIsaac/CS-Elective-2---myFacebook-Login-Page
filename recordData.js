document.getElementById("myButton").onclick = function () {
    var inputEmail= document.getElementById("typeEmailX-2");
    var inputPassword= document.getElementById("typePasswordX-2")
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("password", inputPassword.value);
    location.href = "loginSuccess.html";
};

