window.addEventListener("scroll", function () {
  var scrollText = document.getElementById("scroll-text");
  var scrollPosition = window.scrollY + window.innerHeight;
  var elementPosition = scrollText.offsetTop + scrollText.offsetHeight;

  if (scrollPosition > elementPosition) {
    scrollText.classList.remove("hidden");
  }
});

var typed = new Typed(".auto-type", {
  strings: ["Team Members"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
