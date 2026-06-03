document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Change these values to your desired username and password
    if (userId === "Dimple" && password === "2007") {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid ID or Password!";
    }
});