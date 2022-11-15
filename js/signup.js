let signInputContainer = [];
if (localStorage.getItem("inputsData") != null) {
  signInputContainer = JSON.parse(localStorage.getItem("inputsData"));
}

function isExist(email) {
  return signInputContainer.filter((x) => x["signMail"] == email).length > 0;
}

function isvalid(signupData) {
  return (
    signupData.userName != "" &&
    signupData.signMail != "" &&
    signupData.signPassword != ""
  );
}

export function signupFunction() {
  let userName = document.getElementById("userName").value;
  let signMail = document.getElementById("signMail").value;
  let signPassword = document.getElementById("signPassword").value;
  let msgError = document.getElementById("incorrect");
  let success = document.getElementById("success");
  signupData = {
    userName: userName,
    signMail: signMail,
    signPassword: signPassword,
  };

  if (isvalid(signupData)) {
    if (isExist(signMail)) {
      msgError.innerHTML = "This email already exist";
    } else {
      signInputContainer.push(signupData);
      localStorage.setItem("inputsData", JSON.stringify(signInputContainer));
      success.innerHTML = "Success";
      // window.location.replace("index.html");
    }
  } else {
    msgError.innerText = "Please Enter Email and Password";
  }
}
