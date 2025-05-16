const hamburgerButtons = document.querySelectorAll(".hamburger");
const mobileNav = document.querySelector(".mobileNavBar");
hamburgerButtons.forEach((hamburger) =>
  hamburger.addEventListener("click", (e) => {
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  })
);

// Add this to your main JS file or in a <script> tag
document.getElementById("year").textContent = new Date().getFullYear();
