document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login validation here
    if (username === "admin" && password === "password") {
      
      // Redirect to the main website
      window.location.href = "http://127.0.0.1:5500/mypage/page.html";
    } else {
      alert("Type admin & password,\ and  try again.");
    }
  });
  