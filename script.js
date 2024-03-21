document.addEventListener("DOMContentLoaded", function () {
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const resetBtn = document.getElementById("resetBtn");

    function formatTime(ms) {
        const date = new Date(ms);
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");
        const seconds = date.getUTCSeconds().toString().padStart(2, "0");
        // const milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, "0");

        return `${minutes}:${seconds}`;
    }
    // :${milliseconds}

    function updateDisplay() {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime + elapsedTime;
        display.innerText = formatTime(elapsed);
    }

    function startTimer() {
        startTime = new Date().getTime() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
        elapsedTime += new Date().getTime() - startTime;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = true;
        elapsedTime = 0;
        display.innerText = formatTime(elapsedTime);
    }

    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);
});
