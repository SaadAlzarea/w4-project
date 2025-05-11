document.getElementById("log-in-btn").addEventListener("click", function () {
  // Get input values
  const loginUsername = document.getElementById("username-login").value;
  const loginPass = document.getElementById("pass-login").value;

  // Error message elements
  const loginUsernameError = document.getElementById("login-username-span");
  const loginPassError = document.getElementById("login-pass-span");
  const loginMessage = document.getElementById("login-message");

  // Clear previous error messages
  loginUsernameError.innerText = "Your unique username for logging in.";
  loginPassError.innerText = "Use at least 8 characters, including a number.";
  // loginMessage.innerText = "";
  // loginMessage.className = "";

  let isValid = true;

  // Validation for username and password
  if (loginUsername == "") {
    loginUsernameError.innerText = "Username is required.";
    isValid = false;
  }
  if (loginPass == "") {
    loginPassError.innerText = "Password is required.";
    isValid = false;
  }

//   if (!isValid) return;

  // Retrieve stored data from localStorage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Validate credentials
  if (loginUsername === storedUsername && loginPass === storedPassword) {
    loginMessage.className = "success";
    loginMessage.innerText = "Login successful! Redirecting...";

    // Redirect after 1 second
    setTimeout(() => {
      window.location.href = "index.html"; // Replace with your target page
    }, 1000);
  } else {
    loginMessage.className = "error";
    loginMessage.innerText = "Invalid username or password.";
  }
});


