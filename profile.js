document.addEventListener("DOMContentLoaded", function () {
  
  const fullName = localStorage.getItem("fullName") || "Not provided";
  const username = localStorage.getItem("username") || "Not provided";
  const email = localStorage.getItem("email") || "Not provided";

  // show the data
  document.getElementById("profile-name").textContent = fullName;
  document.getElementById("profile-username").textContent = "@" + username;
  document.getElementById("full-name").textContent = fullName;
  document.getElementById("username").textContent = username;
  document.getElementById("email").textContent = email;

  // date function
  const today = new Date();
  document.querySelectorAll(".info-value")[3].textContent =
    today.toLocaleDateString();

  // Set last login time
  document.querySelectorAll(".info-value")[4].textContent =
    today.toLocaleString();
});
