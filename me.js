/*This code is used mainly for the "About-Me" html file*/

/*Variables*/
let me = document.querySelector(".me-img");
let filterOpacity = "opacity(100%)";
let filterContrast = "contrast(100%)";
let meOp = 0;
let meOpDone = false;
let meCon = 100;
let running = false;

let meOne = document.querySelector(".me-programmer");
let meTwo = document.querySelector(".me-speaker");
let meThree = document.querySelector(".me-artist");
let meFour = document.querySelector(".me-nerd");
let meFive = document.querySelector(".me-positive");
let meHeader = document.querySelector(".bio-header");
let meP = document.querySelector(".bio-p");

let intOne = document.querySelector(".int-1");
let intTwo = document.querySelector(".int-2");
let intThree = document.querySelector(".int-3");
let intFour = document.querySelector(".int-4");
let header = document.querySelector(".header-int");
let text = document.querySelector(".text-int");



/*Makes the Image Appear Slowly*/
function appear(slope, end){ 
    const countInterval = setInterval(actionOp,50, slope, end);

    function actionOp(num, stop){
        //console.log("opacity("+meOp+"%"+")" + filterContrast);
        meOp = meOp + num;
        me.style.filter = "opacity("+meOp+"%"+")" + filterContrast;

        if (stop > 0){
            if(meOp >= stop){
            meOpDone = true;
            clearInterval(countInterval);        
            };
        }
        else{
            if(meOp <= stop){
            meOpDone = true;
            clearInterval(countInterval);
            };
}}}

/* Makes the Image turn white slowly*/
function whiten(slope, end){ 
    const countInterval = setInterval(actionCon,30, slope, end);
    
    function actionCon(num, stop){
        if (meOpDone){
        //console.log(filterOpacity + "contrast("+meCon+"%"+")");
        meCon = meCon + num;
        me.style.filter = filterOpacity + "contrast("+meCon+"%"+")";

        if (stop > 0){
            if(meCon >= stop){
            meOpDone = true;
            clearInterval(countInterval);        
            };
        }
        else{
            if(meCon <= stop){
            meOpDone = true;
            getPieces();
            clearInterval(countInterval);
            };
        }
}}}

/* Shows all puzzle pieces*/
function getPieces(){
    meOne.style.display = "inline-block";
    meTwo.style.display = "inline-block";
    meThree.style.display = "inline-block";
    meFour.style.display = "inline-block";
    meFive.style.display = "inline-block";
    

}
/*Start when scroll far enough*/
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    if (scrollPos > 38 && running === false){
        running = true;
        appear(1, 100);
        whiten(-1, 0);
    }
});

/*Resets interest all buttons*/
function reset(){
    /*
    intOne.style.width = "35%";
    intTwo.style.width = "35%";
    intThree.style.width = "35%";
    intFour.style.width = "35%";
    */
   intOne.style.filter = "";
   intTwo.style.filter = "";
   intThree.style.filter = "";
   intFour.style.filter = "";



}

/*When clicked, show that interest and reset the rest*/
intOne.addEventListener('click', function() {
    reset();
    intOne.style.filter = "saturate(10)"
    // intOne.style.width = "33%";
    header.innerHTML = "Princess";
    text.innerHTML = "I prefer princess over queen, I didn't have much phases as a kid because the 'princess' phase dominated, and still is. I love princess's, and see myself as one.";
});

intTwo.addEventListener('click', function() {
    reset();
    intTwo.style.filter = "saturate(10)"
    // intTwo.style.width = "33%";
    header.innerHTML = "Debating";
    text.innerHTML = "I love public speaking more than an average person, but debating is a thrill to me. Even if I am debating something silly, I love debating and am prepared for serious and silly arguments.";
});

intThree.addEventListener('click', function() {
    reset();
    intThree.style.filter = "saturate(10)"
    // intThree.style.width = "33%";
    header.innerHTML = "Favorite Foods";
    text.innerHTML = "Chilli and Watermelon are defintely my top two. However, when it comes to deserts, I have an unexplainable love for icecream, chocolate grapes, and anything mint or cookies n'cream flavored.";
});

intFour.addEventListener('click', function() {
    reset();
    //intFour.style.width = "33%";
    intFour.style.filter = "saturate(10)"
    header.innerHTML = "Activities";
    text.innerHTML = "I'm not very picky when it comes to having fun, but nothing excited me more than swimming and rock climbing. Sadly swimming only comes around summertime, but if I could, I would rock climb all year.";
});


/*When clicked, show that talent*/
meOne.addEventListener('click', function() {
    meHeader.innerHTML = "Programmer";
    meP.innerHTML = "From an early age, I have loved to program. I used to aspire to be a fashion designer, but would always get distracted with coding. When I reliazed my true calling, it didn't take long for me to get good at what I love. I will use my talents to be a video game developer!";

});

meTwo.addEventListener('click', function() {
    meHeader.innerHTML = "Speaker";
    meP.innerHTML = "I never really developed the fear of public speaking. Most of the time, I'm nervous after the actual presentation. This is why I have a deep love for presenting and public speaking. I have spoken at places like Poetry Out Loud, NAACP (where the mayor was), and a SIDA Fashion Show. Hopefuly one day I will have the chance to speak in front of 1000 people, but until then I will keep up the good work.";

});

meThree.addEventListener('click', function() {
    meHeader.innerHTML = "Artist";
    meP.innerHTML = "I have never been really good at art, but it doesn't mean I don't love it. I love drawing for fun on my own time, and I believe this is what my passion for fashion designing really came from. Despite my skill level, I have had colorful art compliment many of my projects";

});


meFour.addEventListener('click', function() {
    meHeader.innerHTML = "Nerd";
    meP.innerHTML = "I don't really consider myself to be a geninus, but my 4.01 GPA speaks for me. This is most likely the result of my weird fascination with learning, sometimes when I'm off of school for to long, I start taking detailed notes on random things. Iv'e hardly ever had a teacher who didn't like me, and my perseverance in eduation has led to success";

});




meFive.addEventListener('click', function() {
    meHeader.innerHTML = "Positive";
    meP.innerHTML = "Many times I i'm known for lighting the room up. If you get to know me, I'm very friendly, and it is very hard to see me with a frown on my face. I draw my fruitful supply from the Lord, and love to share it with others.";

});