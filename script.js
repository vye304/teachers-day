  // Smooth fade-in
  document.body.classList.add("fade-in");

  btn.addEventListener("click", () => {
    if (input.value === CORRECT) {
      overlay.classList.add("hidden");
      setTimeout(() => {
        overlay.style.display = "none";
        content.classList.add("visible");
        document.body.style.overflow = "auto";
      }, 500);
    } else {
      err.style.display = "block";
    }
  });

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      btn.click();
    }
  });

  // Smooth page transition on link click
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
});
