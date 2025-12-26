function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields";
    }
    else if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    }
    else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
}

function showForgot() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("forgotBox").style.display = "block";
}

function showLogin() {
    document.getElementById("forgotBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

function resetPassword() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("resetMessage");

    if (email === "") {
        message.style.color = "red";
        message.textContent = "Please enter your email";
    }
    else {
        message.style.color = "green";
        message.textContent = "Reset link sent to " + email;
    }
}
