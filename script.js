<script>
  // Fade in when page loads
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });

  // Fade out when navigating
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
</script>
