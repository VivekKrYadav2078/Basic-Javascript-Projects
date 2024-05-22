let input=document.body.querySelector(".inp");
let text=document.body.querySelector(".items");
let btt=document.getElementById("btn");

function add() {
    if(input.value== ""){
        alert("Please enter text");
    }

    
}

btt.addEventListener("onclick",add());

