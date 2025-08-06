function verifyLogin() {
  const id = document.getElementById("userID").value;
  const pass = document.getElementById("password").value;

  if (id === "Tejsvi" && pass === "zombie") {
    document.getElementById("login-screen").classList.add("hidden");
    setTimeout(() => {
      document.getElementById("message-screen").classList.remove("hidden");
    }, 2000);
  } else {
    alert("Incorrect ID or Password");
  }
}
