// nav-bar viditelnost // 

window.addEventListener('load', () => {
    nav.classList.add('visible');
  });

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});


// Šipka //

var scrollToTopBtn = document.getElementById("scroll-to-top");

function scrollFunction() {
  if (window.pageYOffset > 400) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = function() {
  scrollFunction();
}

scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

