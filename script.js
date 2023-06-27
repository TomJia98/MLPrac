const mainBox = document.getElementById("main_box");
const sendButton = document.getElementById("send");
const clearButton = document.getElementById("clear");
const trainButton = document.getElementById("train");
// change these 2 values to change the size of the divs
// ---------------------
const width = 60;
const height = 60;
// ---------------------
const iterator = 0;
const divArr = [];

let mouseDown = false; // This flag will track whether the mouse is currently pressed

// TODO
// refactor this to use mouse location to enable event listeners on nearby divs, should allow for expandable dot sizing, faster response and larger tiling

// Listen for mousedown event on document to set the flag to true
document.addEventListener("mousedown", function () {
  mouseDown = true;
});

// Listen for mouseup event on document to set the flag to false
document.addEventListener("mouseup", function () {
  mouseDown = "false";
});

// creating the array of divs
for (let i = 0; i < width; i++) {
  // creating the lines
  const line = document.createElement("div");
  line.style.display = "inline-block";
  mainBox.appendChild(line);
  for (let i = 0; i < height; i++) {
    // breaking the line up into squares
    const div = document.createElement("div");
    div.dataset.pos = iterator;
    // default state is 0, meaning the div has not been clicked
    div.dataset.clicked = 0;
    div.classList.add("grid_square");
    line.appendChild(div);
    // if the mousebutton is clicked and div is being mousedOver, avtivate it, otherwise activate hover
    div.addEventListener("mouseover", function onHover(event) {
      if (mouseDown) {
        activateDiv(event.target);
      } else {
        activateDivHover(event.target);
      }
    });
    // activate on click
    // div.addEventListener("mousedown", function onClick(event) {
    //   event.target.style.backgroundColor = "black";
    //   event.target.dataset.clicked == 1;
    // });

    div.addEventListener("mouseleave", function onLeave(event) {
      if (!mouseDown && event.target.dataset.clicked == 0) {
        event.target.style.backgroundColor = "";
      }
    });
    iterator += 1;
  }
}
const activateDiv = (e) => {
  const isClicked = parseInt(e.dataset.clicked);
  if (isClicked == 0) {
    e.style.backgroundColor = "black";
    e.dataset.clicked = 1;
  } else {
    //     e.style.backgroundColor = "none";
    //     e.dataset.isClicked = 0;
  }
};
// on hover, set the div to lightgrey
const activateDivHover = (E) => {
  const isClicked = parseInt(e.dataset.clicked);
  if (isClicked == 0) {
    e.style.backgroundColor = "lightgrey";
  }
};

clearButton.addEventListener("clock", function click() {
  divArr = document.getElementsByClassName("grid_square");
  for (let x in divArr) {
    divArr[x].style.backgroundColor = "";
    divArr[x].dataset.clicked = 0;
  }
});

sendButton.addEventListener("click", sendData);

trainButton.addEventListener("click", sendTestData);
