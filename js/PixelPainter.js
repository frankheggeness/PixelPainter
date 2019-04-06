// random color generator below
function randomColor() {
  let colorCode = "#";
  let letters = ["a", "A", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f"];
  function makeCode() {
    for (let i = 0; i < 6; i++) {
      let letterOrNum = Math.floor(Math.random() * 2);
      if (letterOrNum === 0) {
        colorCode += letters[Math.floor(Math.random() * 12)];
      } else {
        colorCode += Math.floor(Math.random() * 10);
      }
    }
  }
  makeCode();
  return colorCode;
}

// make canvasgrid below

function createCanvasGrid(width, depth) {
  let painter = document.getElementById("pixelPainter");
  for (let y = 0; y < depth; y++) {
    let column = document.createElement("div");
    painter.appendChild(column);
    column.class = "column";
    for (let x = 0; x < width; x++) {
      let box = document.createElement("div");
      box.className = "pixels";
      box.id = y + "," + x;
      box.innerHTML = "";
      column.appendChild(box);
      box.addEventListener("click", setColor);
      box.addEventListener("mousedown", downMouse);
      box.addEventListener("mouseover", dragColor);
      box.addEventListener("mouseup", noDrag);
    }
  }
  painter.style.width = 10 * width + "px";
}
// make random color paint grid below
function createPaintGrid(width, depth) {
  let artSupplies = document.getElementById("artSupplies");
  for (let y = 0; y < depth; y++) {
    let column = document.createElement("div");
    artSupplies.appendChild(column);
    column.class = "column";
    for (let x = 0; x < width; x++) {
      let box = document.createElement("div");
      box.className = "paintPixels";
      box.id = "paint" + y + "," + x;
      box.style.backgroundColor = randomColor();
      column.appendChild(box);
      box.addEventListener("click", grabColor);
      box.addEventListener("click", newRandom);
    }
  }
}

// create static color paint grid
createPaintGridStatic(4, 4);

// create favorite colors div
function createFavColors(width, depth) {
  let favSupplies = document.getElementById("favSupplies");
  for (let y = 0; y < depth; y++) {
    let column = document.createElement("div");
    favSupplies.appendChild(column);
    column.class = "column";
    for (let x = 0; x < width; x++) {
      let box = document.createElement("div");
      box.className = "favPixels";
      box.id = "favPaint" + y + "," + x;
      box.style.backgroundColor = "white";
      column.appendChild(box);
      box.addEventListener("click", grabColor);
      box.addEventListener("click", newFav);
    }
  }
}
createFavColors(2, 3);

createPaintGrid(4, 4);

function createPaintGridStatic(width, depth) {
  let staticSupplies = document.getElementById("staticSupplies");
  for (let y = 0; y < depth; y++) {
    let column = document.createElement("div");
    staticSupplies.appendChild(column);
    column.class = "column";
    for (let x = 0; x < width; x++) {
      let box = document.createElement("div");
      box.className = "paintPixelsStatic";
      box.id = "paint" + y + "-" + x;
      box.style.backgroundColor = randomColor();
      column.appendChild(box);
      box.addEventListener("click", grabColor);
    }
  }
  let boxes = document.getElementsByClassName("paintPixelsStatic");
  boxes[0].style.backgroundColor = "black";
  boxes[1].style.backgroundColor = "gray";
  boxes[2].style.backgroundColor = "chocolate";
  boxes[3].style.backgroundColor = "yellow";
  boxes[4].style.backgroundColor = "green";
  boxes[5].style.backgroundColor = "orange";
  boxes[6].style.backgroundColor = "aquamarine";
  boxes[7].style.backgroundColor = "magenta";
  boxes[8].style.backgroundColor = "dodgerblue";
  boxes[9].style.backgroundColor = "maroon";
  boxes[10].style.backgroundColor = "forestgreen";
  boxes[11].style.backgroundColor = "orangered";
  boxes[12].style.backgroundColor = "orchid";
  boxes[13].style.backgroundColor = "seagreen";
  boxes[14].style.backgroundColor = "gold";
  boxes[15].style.backgroundColor = "crimson";
}

// // grab color from pallette below
let paintColor = "black";
function grabColor() {
  if (favClicked === false) {
    paintColor = this.style.backgroundColor;
    if (paintColor !== 'white') {
      erase.style.backgroundColor = paintColor;
      clear.style.backgroundColor = paintColor;
      randomize.style.backgroundColor = paintColor;
      save.style.backgroundColor = paintColor;
      title.style.color = paintColor;
      randomizeAllButton.style.backgroundColor = paintColor;
      grabFavorite.style.backgroundColor = paintColor;
      help.style.backgroundColor = paintColor;
    }
    return paintColor;
  }
}

// // set color of pixel function below
function setColor() {
  if (fillClicked === false) {
    this.style.backgroundColor = paintColor;
  }
}

let mouseDown = false;

function downMouse() {
  this.style.backgroundColor = paintColor;
  mouseDown = true;
  return mouseDown;
}

function dragColor() {
  if (mouseDown === true) {
    this.style.backgroundColor = paintColor;
  }
}

function noDrag() {
  mouseDown = false;
}

// button events below
clear.addEventListener("click", eraseEverything);
function eraseEverything() {
  let pix = document.getElementsByClassName("pixels");
  for (let i = 0; i < pix.length; i++) {
    pix[i].style.backgroundColor = "white";
  }
}
erase.addEventListener("click", eraseSome);
function eraseSome() {
  paintColor = "white";
}

document.body.addEventListener("mouseup", noDrag);

submitDim.addEventListener("click", submitDimensions);
function submitDimensions() {
  let heightDim = heightChange.value;
  let widthDim = widthChange.value;
  createCanvasGrid(heightDim, widthDim);
  document.getElementById("paintBox").style.display = "block";
  document.getElementById("makeCanvasButtons").style.display = "none";
  document.getElementById("loadBox").style.display = "block";
  document.getElementById("directions1").style.display = "block";
}
// help button below

help.addEventListener("click", showHelp);
function showHelp() {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("paintBox").style.display = "none";
  document.getElementById("helpBox").style.display = "block";
  document.getElementById("loadBox").style.display = "none";
  document.getElementById("directions1").style.display = "none";
}

goBack.addEventListener("click", goBackCanvas);

function goBackCanvas() {
  document.getElementById("canvas").style.display = "flex";
  document.getElementById("paintBox").style.display = "block";
  document.getElementById("helpBox").style.display = "none";
  document.getElementById("loadBox").style.display = "block";
  document.getElementById("directions1").style.display = "block";
}

randomize.addEventListener("click", randomizeColor);
let randomClicked = false;

function randomizeColor() {
  randomClicked = true;
}

function newRandom() {
  if (randomClicked === true) {
    this.style.backgroundColor = randomColor();
    randomClicked = false;
  }
}

let randomizeIt = document.getElementById("randomizeAllButton");
randomizeIt.addEventListener("click", randomizeAll);
function randomizeAll() {
  let findPaintPixels = document.getElementsByClassName("paintPixels");
  for (let i = 0; i < findPaintPixels.length; i++) {
    findPaintPixels[i].style.backgroundColor = randomColor();
  }
}

// title event
let title = document.getElementById("title");
function changeTitleColor() {
  title.style.color = randomColor();
}
title.addEventListener("mouseover", titleColor);

function titleColor() {
  title.style.color = randomColor();
}

// save and load below
save.addEventListener("click", saveFunction);
loadButton.addEventListener("click", loadPreviousCanvas);

let saveObject = {};
function saveFunction() {
  saveObject.width = widthChange.value;
  saveObject.height = heightChange.value;
  let findPixels = document.getElementsByClassName("pixels");
  for (var i = 0; i < findPixels.length; i++) {
    saveObject[findPixels[i].id] = findPixels[i].style.backgroundColor;
  }
  const saveObjectStr = JSON.stringify(saveObject);
  loadingText.value = saveObjectStr;
}

function loadPreviousCanvas() {
  let loadCode = loadInput.value;
  let loadCodeObj = JSON.parse(loadCode);
  let loadCodeArray = Object.values(loadCodeObj);
  createCanvasGrid(loadCodeArray[0], loadCodeArray[1]);
  loadCodeArray.splice(0, 2);
  let findPix = document.getElementsByClassName("pixels");
  for (var i = 0; i < findPix.length; i++) {
    findPix[i].style.backgroundColor = loadCodeArray[i];
  }
  document.getElementById("paintBox").style.display = "block";
  document.getElementById("makeCanvasButtons").style.display = "none";
  document.getElementById("loadBox").style.display = "block";
  document.getElementById("directions1").style.display = "block";
}

// favorite color event below
let favClicked = false;

grabFavorite.addEventListener("click", favisClicked);

function favisClicked() {
  favClicked = true;
}

function newFav() {
  if (favClicked === true) {
    this.style.backgroundColor = paintColor;
    favClicked = false;
  }
}
