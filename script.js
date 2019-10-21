const container = document.querySelector(".container")
let box = document.querySelectorAll(".box")
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const box6 = document.querySelector("#box6")
const box7 = document.querySelector("#box7")
const box8 = document.querySelector("#box8")
const box9 = document.querySelector("#box9")
const reset = document.querySelector(".reset")
let ptag = document.querySelector(".ptag")

let click = 0
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function (evt) {
        evt.preventDefault()
        console.log(evt)
        if (evt.target.style.backgroundColor === "blue" || evt.target.style.backgroundColor === "red") {
            return
        }
        if (click % 2 === 1) {
            evt.target.style.backgroundColor = "red"
            click += 1
            ptag.innerText = ("It's player1's turn")
        }
        else if (click % 2 === 0) {
            evt.target.style.backgroundColor = "blue"
            click += 1
            ptag.innerText = ("It's player2's turn")
        }
    setTimeout(gameWins, 1000)


})
}

reset.addEventListener("click", function(evt){
    evt.preventDefault()
    // console.log(evt)
    click = 0
    for (let j = 0; j < box.length; j++){
        box[j].style.backgroundColor = "white"
    }
})

function gameWins(){
    if ((box1.style.backgroundColor==="blue" && box2.style.backgroundColor==="blue" && box3.style.backgroundColor==="blue")|| 
        (box4.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box6.style.backgroundColor==="blue")||
        (box7.style.backgroundColor==="blue" && box8.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")||
        (box1.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")||
        (box3.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box7.style.backgroundColor==="blue")||
        (box1.style.backgroundColor==="blue" && box4.style.backgroundColor==="blue" && box7.style.backgroundColor==="blue")||
        (box2.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box8.style.backgroundColor==="blue")||
        (box3.style.backgroundColor==="blue" && box6.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")){
            alert("Blue has won the Game")
            ptag.innerText = ("")
            for (let j = 0; j < box.length; j++){
                box[j].style.backgroundColor = "white"
            }
    }
    else if ((box1.style.backgroundColor === "red" && box2.style.backgroundColor === "red" && box3.style.backgroundColor === "red") ||
        (box4.style.backgroundColor === "red" && box5.style.backgroundColor === "red" && box6.style.backgroundColor === "red") ||
        (box7.style.backgroundColor === "red" && box8.style.backgroundColor === "red" && box9.style.backgroundColor === "red") ||
        (box1.style.backgroundColor === "red" && box5.style.backgroundColor === "red" && box9.style.backgroundColor === "red") ||
        (box3.style.backgroundColor === "red" && box5.style.backgroundColor === "red" && box7.style.backgroundColor === "red") ||
        (box1.style.backgroundColor === "red" && box4.style.backgroundColor === "red" && box7.style.backgroundColor === "red") ||
        (box2.style.backgroundColor === "red" && box5.style.backgroundColor === "red" && box8.style.backgroundColor === "red") ||
        (box3.style.backgroundColor === "red" && box6.style.backgroundColor === "red" && box9.style.backgroundColor === "red")) {
        alert("Red has won the Game")
        ptag.innerText = ("")
        for (let j = 0; j < box.length; j++) {
            box[j].style.backgroundColor = "white"
        }
    }
    else if (click === 9){
        alert("There has been a tie")
        ptag.innerText = ("")
        for (let j = 0; j < box.length; j++) {
        box[j].style.backgroundColor = "white"
        }
    }
}