let deighiX = 0;
let deighi = document.querySelector(".deighi-alt");
let deighiMove = document.querySelector(".deighi-move");
let deighiDirection = 1;


for (let i = 0; i < 100;){
    const deighiInterval = setInterval(deighiMoveFun, 5000);

    function deighiMoveFun(){
        console.log("Hello");
        clearInterval(deighiInterval);
        
        if (deighiDirection = 1){
            deighiMove.style.transform = "scaleX(1)";
            


        }else{
            deighiMove.style.transform = "scaleX(-1)";

        }
    }
}