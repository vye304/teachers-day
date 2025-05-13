function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Map passwords to pages
  const passwords = {
    "anizah123": "anizah.html",
    "dayang1234": "dayang.html",
    "norijan678": "norijan.html",
    "tengku444": "tengku.html",
    "christina123": "christina.html";
    // Add more teacher-password pairs here
  };

  if (passwords[pass]) {
    window.location.href = passwords[pass];
  } else {
    error.style.display = "block";
  }
}
