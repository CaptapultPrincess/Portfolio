/*This script is mostly for the interactive box and other features*/

let deighiX = 0;
let deighi = document.querySelector(".deighi-alt");
let deighiMove = document.querySelector(".deighi-move");
let deighiDirection = 1;
let running = false;
let deighiState = "none";
let deighiWait = 0;
let deighiAction = true;




/* When user scrolls, start*/
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; 
    //console.log(scrollPos);

    if (scrollPos > 38 && running === false){
        
        running = true;
        deighiState = "moving";
        const deighiLoop = setInterval(function(){


            console.log(deighiX);
            if(deighiAction === true){
            deighiAction = false;

            
            if(deighiState === "moving"){
                const deighiInterval = setInterval(deighiMoveFun, 50);
        
            function deighiMoveFun(){            
                if (deighiDirection === 1){
                    deighi.style.display = "none";
                    deighiMove.style.display = "";
                    deighiMove.style.transform = "scaleX(1)";
                    deighiX = deighiX + 5;
                    deighiWait = deighiWait - 1;
                    //console.log(deighiWait);

                    if (deighiX > 500 ){
                        deighiDirection = -1;
                    }else{
                        deighiMove.style.marginLeft = deighiX +"px";
                    }
            
                }
                
                else{
                    deighiMove.style.transform = "scaleX(-1)";
                    deighiX = deighiX - 5;
                    console.log(deighiX > 500);

                    if (deighiX < -50 ){
                        deighiDirection = 1;
                    }else{
                        deighiMove.style.marginLeft = deighiX +"px";
                    }
                }
                if (deighiWait < 0){
                    deighiState = "standing";
                    deighiAction = true;
                    console.log("Finished");
                    deighi.style.display = "block";
                    deighiMove.style.display = "none";
                    deighi.style.marginLeft = deighiX + "px";
                    clearInterval(deighiInterval);
                }
            
            //running = false;
            //clearInterval(deighiInterval);
            }
            
        }
        else{
            Math.floor((Math.random() * 10));
            const deighiIntervalAlt = setInterval(deighiAltFun, 1000);
            function deighiAltFun(){
                deighi.style.display = "block";
                deighiMove.style.display = "none";
                deighi.style.marginLeft = deighiX + "px";
                deighiWait = deighiWait - 1;
                //console.log(deighiWait);

                if (deighiWait < 0){
                    deighiState = "moving";
                    deighiAction = true;
                    let randomint = ((Math.floor((Math.random() * 10))+ 5) * 10);
                    deighiWait = 50;
                    clearInterval(deighiIntervalAlt);
                }
            }
            
        }
        }
    },1);

        
}});
