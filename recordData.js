document.getElementById("myButton").onclick = function () {
    if(document.getElementById("typeEmailX-2").value=="")
    {
        alert("Please Fill in the Email Field");
        return false;
    }

    if(document.getElementById("typePasswordX-2").value=="")
    {
        alert("Please Fill in the Password Field");
        return false;
    }

    var inputEmail= document.getElementById("typeEmailX-2");
    var inputPassword= document.getElementById("typePasswordX-2");
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("password", inputPassword.value);
    location.href = "loginSuccess.html";
    return true;
};

