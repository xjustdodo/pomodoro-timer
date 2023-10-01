const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval  
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    timerEl.innerHTML = formattedTime
}

function startTimer(){
    interval = setInterval( () => {
        timeLeft--; 
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 10
            updateTimer();
        }
        },1000)
};

function stopTimer(){
    clearInterval(interval);
};

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500
    updateTimer();
};

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);

/* LIGHT/DARKMODE toggle */


const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const button = document.querySelector("button");
const title = document.querySelector("title")

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = "#D7DFE2";
        body.style.color ="black";
        body.style.transition = "2s";
        button.style.color = "black";
        title.style.color = "black"
    }else{
        body.style.background ="#030303" ;
        body.style.color = "white";
        body.style.transition = "2s";
        button.style.color = "white";
        title.style.color = "white"
        
    };
});
