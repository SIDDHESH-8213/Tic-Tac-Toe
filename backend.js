console.log('Welcome to Tic Tac Toe');

let turn = "X";
let gameover = false;


const changeturn = ()=>{
    return turn === "X" ? "0": "X";
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("elements");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]

    wins.forEach(e =>{
        
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            gameover = true;
            document.getElementsByClassName("moreinfo")[0].innerText = boxtext[e[0]].innerText + " Won";
        }
    })

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".elements");
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("moreinfo")[0].innerHTML = "Turn for " + turn;
            }
        }
    })

})


reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".elements");
    Array.from(boxtext).forEach(e=>{
        e.innerText = "";
    })
    gameover = false;
    turn = "X";
    document.getElementsByClassName("moreinfo")[0].innerText = "Turn for " + turn;
})