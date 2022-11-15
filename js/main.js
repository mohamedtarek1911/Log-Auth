let signInputContainer;

// local storage //
if (localStorage.getItem("inputsData") != null) {
  signInputContainer = JSON.parse(localStorage.getItem("inputsData"));
} else {
  signInputContainer = [];
}

function authenticate(loginData) {
  return (
    signInputContainer.filter(
      (x) =>
        x["signMail"] == loginData.signMail &&
        x["signPassword"] == loginData.signPassword
    ).length > 0
  );
}

function isvalid(loginData) {
  return loginData.signMail != "" && loginData.signPassword != "";
}

let welcomeWord = document.querySelector(".welcome-word");
function loginFunction() {
  let signMail = document.getElementById("signMail").value;
  let signPassword = document.getElementById("signPassword").value;
  let msgError = document.getElementById("incorrect");
  let loginData = {
    signMail: signMail,
    signPassword: signPassword,
  };

  if (isvalid(loginData)) {
    if (authenticate(loginData)) {
      window.location.href = "home.html";
    } else {
      msgError.innerText = "Invalid Email or Password";
    }
  } else {
    alert("Please Enter Email and Password");
  }
}

function logout() {
  window.location.href = "index.html";
}
