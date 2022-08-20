// * Node elements
const stopWatchContainerNode = document.querySelector(".stopwatch-container");
const startBtnNode = document.querySelector(".start-btn");
const stopBtnNode = document.querySelector(".stop-btn");
const resetBtnNode = document.querySelector(".reset-btn");

let stopwatch = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  stopStatus: true,
};

// * Functions
function render() {
  stopWatchContainerNode.textContent = `${stopwatch.hours} : ${stopwatch.minutes} : ${stopwatch.seconds}`;
}

function incrementStopwatch() {
  if (stopwatch.stopStatus) {
    return;
  } else {
    stopwatch.seconds++;
    if (stopwatch.seconds > 59) {
      stopwatch.seconds = 0;
      stopwatch.minutes++;
    }
    if (stopwatch.minutes > 59) {
      stopwatch.minutes = 0;
      stopwatch.hours++;
    }

    render()
  }
}

function stop() {
  stopwatch.stopStatus = true;
}

function start() {
  stopwatch.stopStatus = false;
}

function resetStopwatch() {
  stopwatch.seconds = 0;
  stopwatch.minutes = 0;
  stopwatch.hours = 0;
  stopwatch.stopStatus = true;
}

// * Event listeners
startBtnNode.addEventListener("click", e => {
  start();
})

stopBtnNode.addEventListener("click", e => {
  stop();
})

resetBtnNode.addEventListener("click", e => {
  resetStopwatch();
  render();
})

setInterval(incrementStopwatch, 1000);

render();

