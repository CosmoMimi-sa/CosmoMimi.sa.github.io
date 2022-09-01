function checkPassword() {
    //capture the user entered password from our input element
    var passwordBoxObject = document.getElementById("passwordBox"); var passwordEntered = passwordBoxObject.value; console.log("User entered password:", passwordEntered);
    //check if the password is correct
    var sitePassword = "codeclub";
    if (passwordEntered == sitePassword) {
      // alow navigation
      console.log("Allow");
      Window:location.assign("members.html");
    } else {
      //block navigation
      console.log("Block");
      //add a new style rule to the incorrect-password element
      document.getElementById("incorrect-password").style.color = "red";
      //add text to the incorrect-pasword e3lement
      document.getElementById("incorrect-password").
      innerHTML = "Incorrect password. Please try again...";

    }
  }