let me = document.querySelector(".me-img");
let filterOpacity = "opacity(100%)";
let filterContrast = "contrast(100%)";
let meOp = 0;
let meOpDone = false;
let meCon = 100;
let running = false;

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
            clearInterval(countInterval);
            };
        }
}}}


window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    if (scrollPos > 38 && running === false){
        running = true;
        appear(1, 100);
        whiten(-1, 0);
    }
});
