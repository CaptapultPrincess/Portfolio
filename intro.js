/*let navArrow = documentSelector(".arw-box");*/
let arrow = document.querySelector(".down-arw");
let navButtons = document.querySelector(".nav-btn");
let navbar = document.querySelector(".navbar");

arrow.addEventListener('click', function() {
    /*arrow.style.transform = "scaleY(-1)";*/
    navbar.style.display = "block";
    navButtons.style.display = "block";
});
