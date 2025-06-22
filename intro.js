/*let navArrow = documentSelector(".arw-box");*/
let arrow = document.querySelector(".down-arw");
let navButtons = document.querySelector(".nav-btn");
let navbar = document.querySelector(".navbar");
let navY = 0;
let time = null;
let change = 0.1;
let changeY = 0.01;
let counting = 0;
navbar.style.display = "none";


function slideDown(slope, end){
    change = 0;
    navbar.style.display = "block";
    const countInterval = setInterval(math,1, slope, end);


    function math(num, stop){
        //console.log(change);

        navY = (navY + change);
        change = change + num;
        navbar.style.height = navY + "px";

        if (stop > 0){
            if(navY >= stop){
            clearInterval(countInterval);        
            };
        }
        else{
            if(navY <= stop){
            navbar.style.display = "none";
            clearInterval(countInterval);
            };
        }
   }
}

arrow.addEventListener('click', function() {

    if (navbar.style.display === "none"){
        arrow.style.transform = "scaleY(-1)"
        document.querySelector(".arw-box").style.filter = "opacity(100%)";
        slideDown(0.01, 50);    

    }     
    else{
        arrow.style.transform = "scaleY(1)";
        document.querySelector(".arw-box").style.filter = "opacity(50%)";
        slideDown(-0.01, 0);
    }
});
