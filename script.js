let timerEl = document.getElementById("Timer");
let startBtnEl = document.getElementById("startBtn");
let stopBtnEl = document.getElementById("stopBtn");
let resetBtnEl = document.getElementById("resetBtn");
let shortBtnEl = document.getElementById("shortBtn");
let longBtnEl = document.getElementById("longBtn");

let countdown = 25 * 60; // 25 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    timerEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    countdown = 25 * 60;
    updateTimerDisplay();
}

function shortBreak() {
    stopTimer();
    countdown = 5 * 60; // 5 minutes in seconds
    updateTimerDisplay();
}

function longBreak() {
    stopTimer();
    countdown = 15 * 60; // 15 minutes in seconds
    updateTimerDisplay();
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);
shortBtnEl.addEventListener("click", shortBreak);
longBtnEl.addEventListener("click", longBreak);

updateTimerDisplay();