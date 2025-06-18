/*let navArrow = documentSelector(".arw-box");*/
let arrow = document.querySelector(".down-arw");
let navButtons = document.querySelector(".nav-btn");
let navbar = document.querySelector(".navbar");
let navY = 50;
let time = null;

navbar.style.display = "none";
arrow.addEventListener('click', function() {
    console.log(navbar.style.display);

function slideDown(){
    if (navY < 52){  
        console.log(navY + "px")
        navbar.style.height = navY + "px";
        navY = (navY + 1)
    }else{
        clearInterval(time);
    }
}


    if (navbar.style.display === "none"){
        navbar.style.display = "block";
        navButtons.style.display = "inline-block";
        arrow.style.transform = "scaleY(-1)"
        document.querySelector(".arw-box").style.filter = "opacity(100%)";
        navY = 0;
        navbar.style.height = "0px";
        time = setInterval(slideDown/*(1)*/, 4);      

    }     
    else{
        navbar.style.display = "none";
        navButtons.style.display = "none";
        arrow.style.transform = "scaleY(1)";
        document.querySelector(".arw-box").style.filter = "opacity(50%)";
        navY = 50;
        navbar.style.height = "50px";
        time = setInterval(slideDown/*(-1)*/, 4); 

    }
});
