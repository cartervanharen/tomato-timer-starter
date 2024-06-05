var settime = 1500;

var ispaused = false;
var istimestarted = false;

const header = document.getElementById("time-left");

const studyButton = document.getElementById("study-btn");
studyButton.addEventListener("click", studyTimer);

const breakButton = document.getElementById("break-btn");
breakButton.addEventListener("click", breakTimer);

function breakTimer() {
  console.log("buttonpressbreak");
  if ((istimestarted == false) & (ispaused == false)) {    //pressing it for frist time

    settime = 5000

    header.textContent = "break"; //temp!!!!!!!!!!!!!!


    breakButton.textContent = "Pause";
    studyButton.disabled = true;
    istimestarted = true;
    ispaused = false;
    console.log("1");
  } else if ((istimestarted == true) & (ispaused == false)) {    // pressing pause

    studyButton.disabled = false;
    breakButton.textContent = "Start";
    ispaused = true;
    console.log("2");
  } else if ((istimestarted == true) & (ispaused == true)) {      // resuming part way thru time


    studyButton.disabled = true;
    breakButton.textContent = "Pause";
    ispaused = false;
    console.log("3");
    studyButton.textContent = "Study"
  }
}

function studyTimer() {
    console.log("buttonpressstudy");
    if ((istimestarted == false) & (ispaused == false)) {      //pressing it for frist time

      settime = 1500
      header.textContent = "Study"; //temp!!!!!!!!!!!!!!


      studyButton.textContent = "Pause";
      breakButton.disabled = true;
      istimestarted = true;
      ispaused = false;
      console.log("1");
    } else if ((istimestarted == true) & (ispaused == false)) {    // pressing pause


      breakButton.disabled = false;
      studyButton.textContent = "Start";
      ispaused = true;
      console.log("2");
    } else if ((istimestarted == true) & (ispaused == true)) {      // resuming part way thru time

      breakButton.disabled = true;
      studyButton.textContent = "Pause";
      ispaused = false;
      console.log("3");
      breakButton.textContent = "Break"
    }

}

var x = 1;

setInterval(() => {

    if (ispaused ==false & istimestarted == true)
        {

            x -= 1;
            let temp = convertSecondsToTime(x);
            header.textContent = temp;
          
        }



}, 1000);

function convertSecondsToTime(timeinseconds) {
  let temp = timeinseconds / 60;
  let mins = Math.floor(temp);
  let secs = Math.round((temp % 1) * 60);
  return mins + ":" + ("0" + secs).slice(-2);
}
