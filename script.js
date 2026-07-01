console.log("JavaScript Loaded!");
const menubutton = document.querySelector(".menu-hamburger");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".navbar a");

console.log(menubutton);
console.log(navbar);
console.log(navLinks);

menubutton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

overlay.addEventListener("click", function () {
    console.log("Overlay Clicked");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
});
