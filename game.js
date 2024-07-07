let boxes = document.querySelectorAll(".box");
let resetbt= document.querySelector("#resetbt");
let newGame = document.querySelector("#newg");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winningPat=[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];
const resetGame=()=>{
    enableBoxes();
    turno=true;
    msgContainer.classList.add("hide");
};
let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        count = count+1;
        if (turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
        if(count===9)
        {
            console.log("match tie");
            alert("MATCH TIE");
            resetGame();
        }
    });

    
});
const enableBoxes=()=>{
    for (let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
};
const disableBoxes=() =>{
    for(let c of boxes){
        c.disabled = true;
     }
};
const showWinner=(winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner = () =>{
    for(let pattern of winningPat){
        let pos1Val=boxes[pattern[0]].innerText;                                  
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===pos2Val && pos2Val === pos3Val){
                console.log("winner found");
                
                showWinner(pos1Val);
                alert(`winner found`);
            

            }

            }
            
                
            
        } 
    };



    

newGame.addEventListener("click", resetGame);
resetbt.addEventListener("click",resetGame);
 


