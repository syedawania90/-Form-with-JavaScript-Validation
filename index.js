
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

   
    if (username.value.trim() === "") {
      alert("Please enter a username.");
      username.focus();
      return;
    }

    let pass = password.value;
    if (
      pass.length < 8 ||
      !/[A-Za-z]/.test(pass) ||
      !/[^A-Za-z0-9]/.test(pass)
    ) {
      alert(
        "Password must be at least 8 characters and include a letter and a symbol."
      );
      password.focus();
      return;
    }

    
    alert("Login Successful!");
  });
});
