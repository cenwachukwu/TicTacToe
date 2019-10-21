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

let click = 0
 

// const box = document.querySelectorAll(".box")
for (let i = 0; i < box.length; i++)
    box[i].addEventListener("click", function (evt) {
        evt.preventDefault()
        // console.log(evt)
        if (evt.target.style.backgroundColor === "blue" || evt.target.style.backgroundColor === "red") {
            return
        }
            if (click % 2 === 1) {
            evt.target.style.backgroundColor = "red"
            click += 1
            }
            else if (click % 2 === 0) {
            evt.target.style.backgroundColor = "blue"
            click += 1
            }
})

reset.addEventListener("click", function(evt){
    evt.preventDefault()
    console.log(evt)
    click = 0
    for (let j = 0; j < box.length; j++){
        box[j].style.backgroundColor = "white"
    }
})

// const player2 = "blue";
// const player1 = box.style.backgroundcolor
// box.style.backgroundcolor = blue;