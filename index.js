const  boxes= document.querySelectorAll('.box'); 
const gameInfo= document.querySelector('#game-info');
const newGame= document.querySelector('#new-game');


let turn="X"; 
let  grid; 
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function init(){
 turn="X";
grid=["","","","","","","","",""];
gameInfo.innerText=`Turn of -${turn}`;
boxes.forEach((box)=>{
 
    box.style.pointerEvents="all";
    box.innerText="";
   box.style. background= "grey";
   


})
newGame.style.scale="0"; 
} 

function cheakStatus()
{ let ans="";  
 
  for(let i=0; i<winningPositions.length; i++)
  { if(( grid[winningPositions[i][0]]!=="" &&  grid[winningPositions[i][1]]!=="" &&  grid[winningPositions[i][2]]!=="" ) && ( grid[winningPositions[i][0]]=== grid[winningPositions[i][1]] &&  grid[winningPositions[i][1]]=== grid[winningPositions[i][2]] &&  grid[winningPositions[i][2]]=== grid[winningPositions[i][0]]   ) )
 { ans= grid[winningPositions[i][0]];
    gameInfo.innerText=`Winning Game-${ans}`; 
   console.log("cheakStatus");
  boxes.forEach((box)=>{
    box.style.pointerEvents="none";

    boxes[winningPositions[i][0]].style. background= "green";
    boxes[winningPositions[i][1]].style. background= "green";
    boxes[winningPositions[i][2]].style. background= "green";



  })
 
    


  } 
}
   

if(ans!="")
{
   newGame.style.scale="1"; 
   return ;
        
    }
  
let count=0; 
for(let i=0 ; i<grid.length; i++) {
 if(grid[i]!=="")
    {
        count++;
    }
  
}
if(count===9)
    {
        gameInfo.innerText="Game is - Tie";
        newGame.style.scale="1"; 
        return ;

    }


}


function handclick(index){ 
    grid[index]=turn;
boxes[index].innerHTML=turn;
boxes[index].style.pointerEvents="none";
if(turn==="X")
   {
    turn ="0";
   } 
    else{
        turn ="X";
    }
  gameInfo.innerText=`Turn of -${turn}`;
    cheakStatus();


}

boxes.forEach((box, index) =>
{ box.addEventListener("click",()=>{

 handclick(index);

})
} ); 

init(); 
newGame.addEventListener('click',init);