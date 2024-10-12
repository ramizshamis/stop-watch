


let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById('display');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
        running = true;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    difference = 0;
    running = false;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

document.getElementById('start').onclick = startTimer;
document.getElementById('stop').onclick = stopTimer;
document.getElementById('reset').onclick = resetTimer;

































































