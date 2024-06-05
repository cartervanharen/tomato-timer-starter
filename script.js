var settime = 1500;

var ispaused = false;
var istimestarted = false;

const header = document.getElementById("time-left");

const studyButton = document.getElementById("study-btn");
studyButton.addEventListener("click", () => studyTimer(studyButton));

const breakButton = document.getElementById("break-btn");
breakButton.addEventListener("click", () => breakTimer(breakButton));

function breakTimer(button) {
  if ((istimestarted === false) & (ispaused === false)) { //pressing it for first time
    settime = 5000;

    header.textContent = "Break"; //temp!!!!!!!!!!!!!!

    button.textContent = "Pause";
    studyButton.disabled = true;
    istimestarted = true;
    ispaused = false;
    console.log("1");
  } else if ((istimestarted === true) & (ispaused === false)) { // pressing pause

    studyButton.disabled = false;
    button.textContent = "Start";
    ispaused = true;
    console.log("2");
  } else if ((istimestarted === true) & (ispaused === true)) { // resuming part way thru time

    studyButton.disabled = true;
    button.textContent = "Pause";
    ispaused = false;
    console.log("3");
        button.textContent = "Break"
  }
}

function studyTimer(button) {
    if ((istimestarted === false) & (ispaused === false)) { //pressing it for first time

      settime = 1500;
      header.textContent = "Study"; //temp!!!!!!!!!!!!!!

      button.textContent = "Pause";
      breakButton.disabled = true;
      istimestarted = true;
      ispaused = false;
      console.log("1");
    } else if ((istimestarted === true) & (ispaused === false)) { // pressing pause


      breakButton.disabled = false;
      button.textContent = "Start";
      ispaused = true;
      console.log("2");
    } else if ((istimestarted === true) & (ispaused === true)) { // resuming part way thru time

      breakButton.disabled = true;
      button.textContent = "Pause";
      ispaused = false;
      console.log("3");
      button.textContent = "Study"
    }
}

var x = settime;

setInterval(() => {

    if (ispaused === false && istimestarted === true) {
        x -= 1;
        let temp = convertSecondsToTime(x);
        header.textContent = temp;
        
    }

}, 1000);

function convertSecondsToTime(timeinseconds) {
  const temp = timeinseconds / 60;
  const mins = Math.floor(temp);
  const secs = Math.round((temp % 1) * 60);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}