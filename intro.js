/*let navArrow = documentSelector(".arw-box");*/
let arrow = document.querySelector(".down-arw");
let navButtons = document.querySelector(".nav-btn");
let navbar = document.querySelector(".navbar");
let navY = 50;

navbar.style.display = "none";
arrow.addEventListener('click', function() {
    console.log(navbar.style.display);
    
    if (navbar.style.display === "none"){
        navbar.style.display = "block";
        navButtons.style.display = "inline-block";
        arrow.style.transform = "scaleY(-1)"
        document.querySelector(".arw-box").style.filter = "opacity(100%)";
        navY = 0;
        navbar.style.height = "0px";
        //navbar.style.height = "50px";

        for(let i = 0; i < 6; i++){
            setTimeout(function() {
                console.log(navY + "px")
                navbar.style.height = navY + "px";
                navY = (navY + 10)
                console.log("3 second has passed");    
            }, 3000);
            
    
        }
    }     
    else{
        navbar.style.display = "none";
        navButtons.style.display = "none";
        arrow.style.transform = "scaleY(1)";
        document.querySelector(".arw-box").style.filter = "opacity(50%)";

    }
});
