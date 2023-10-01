"use strict"


const solveBMI = function(){
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let result = document.querySelector("#result").value;
    let bmim = 10*a + 6.25*b - 5*c + 5;
        document.getElementById("result").innerHTML= 
        "Lượng calories bạn cần nạp trong 1 ngày là: "+bmim;
    
    
    
}

const init = function(){
    let sovle = document.querySelector("button");
    sovle.addEventListener("click",solveBMI);
}
window.addEventListener("load",init);