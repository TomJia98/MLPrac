mainBox = document.getElementById("main_box");
sendButton = document.getElementById("send");
clearButton = document.getElementById("clear");
trainButton = document.getElementById("train");
width = 60;
height = 60;
iterator = 0;
divArr = [];
let mouseDown = false; // This flag will track whether the mouse is currently pressed

// Listen for mousedown event on document to set the flag to true
document.addEventListener("mousedown", function () {
  mouseDown = true;
});

// Listen for mouseup event on document to set the flag to false
document.addEventListener("mouseup", function () {
  mouseDown = false;
});

for (let i = 0; i < width; i++) {
  const line = document.createElement("div");
  line.style.display = "inline-block";
  mainBox.appendChild(line);
  for (let i = 0; i < height; i++) {
    const div = document.createElement("div");
    div.dataset.pos = iterator;
    div.dataset.clicked = 0;
    div.classList.add("grid_square");
    line.appendChild(div);
    div.addEventListener("mouseover", function onHover(event) {
      if (mouseDown) {
        activateDiv(event.target);
      } else {
        activateDivHover(event.target);
      }
    });
    div.addEventListener("mousedown", function onClick(event) {
      event.target.style.backgroundColor = "black";
      event.target.dataset.clicked == 1;
    });

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

const activateDivHover = (e) => {
  const isClicked = parseInt(e.dataset.clicked);
  if (isClicked == 0) {
    e.style.backgroundColor = "lightgrey";
  }
};

clearButton.addEventListener("click", function click() {
  divArr = document.getElementsByClassName("grid_square");
  for (let x in divArr) {
    divArr[x].style.backgroundColor = "";
    divArr[x].dataset.clicked = 0;
  }
});

sendButton.addEventListener("click", sendData);

trainButton.addEventListener("click", sendTestData);
