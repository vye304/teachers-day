function checkPassword() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    const passwords = {
      "anizah123": "anizah.html",
      "dayang1234": "dayang.html",
      "norijan678": "norijan.html",
      "tengku444": "tengku.html",
      "christina123": "christina.html",
      "alizah123": "alizah.html",
      "muliati123": "muliati.html",
      "jacqueline123": "jacqueline.html",
      "jamaliah123": "jamaliah.html",
      "tsang123": "tsang.html",
      "rafizah123": "rafizah.html",
      "aswarina123": "aswarina.html",
      "nancy123": "nancy.html"
    };

    if (passwords[pass]) {
      window.location.href = passwords[pass];
    } else {
      error.style.display = "block";
    }
  }

  // This lets Enter key act like clicking Unlock
  document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      checkPassword();
    }
  });
