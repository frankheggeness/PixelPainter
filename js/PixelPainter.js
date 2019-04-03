// random color generator below
function randomColor(){
  let colorCode = '#';
  let letters = ['a','A', 'B','b','C', 'c','D','d','E','e','F','f']
  function makeCode(){
    for(let i=0;i<6;i++){
      let letterOrNum = Math.floor(Math.random()*2)
      if(letterOrNum === 0){
      colorCode += letters[Math.floor(Math.random()*12)]
    }else{
      colorCode += Math.floor(Math.random()*10)
    }
    }
    
  }
  makeCode();
  return colorCode;
}

// paint function below

// function painting(){
//   let paintColor = 'black';
  
//   function setColor(){

//     this.style.backgroundColor = paintColor ;
//     // return paintColor;
//   }

//   function grabColor(){
//     paintColor = this.style.backgroundColor;
//     console.log(paintColor)
//     // return paintColor;
//   }

//   return{
//     grabColor,
//     setColor,
//     paintColor
//   }
// }

// make canvasgrid below
function createCanvasGrid(width, depth){
  let painter = document.getElementById('pixelPainter');
  for(let y=0;y<depth;y++){
    let column = document.createElement('div')
    painter.appendChild(column)
    column.class = 'column'
    for(let x=0;x<width;x++){

      let box = document.createElement('div');
      box.className = 'pixels'
      box.id = y+'-'+x;
      box.innerHTML = '';
      column.appendChild(box)
      box.addEventListener('click', setColor)
      box.style.backgroundColor = 'white'
      // box.addEventListener('click', painting.setColor)

    }
  }
  painter.style.width = (50*width) + 'px'
  painter.style.height = (50*depth) + 'px';

  let findpix1 = document.getElementsByClassName('pixels1')
  console.log(findpix1)
  
}
createCanvasGrid(5, 6);
// make paint grid below
function createPaintGrid(width, depth){
  let artSupplies = document.getElementById('artSupplies');
  for(let y=0;y<depth;y++){
    let column = document.createElement('div')
    artSupplies.appendChild(column)
    column.class = 'column'
    for(let x=0;x<width;x++){

      let box = document.createElement('div');
      box.className = 'paintPixels'
      box.id = 'paint' + y+'-'+x;
      box.style.backgroundColor = randomColor();
      column.appendChild(box)
      
      box.addEventListener('click', grabColor)
      // box.addEventListener('click', painting.grabColor)

    }
  }
  artSupplies.style.width = (50*width) + 'px'
  artSupplies.style.height = (50*depth) + 'px';

  let findpix1 = document.getElementsByClassName('pixels1')
  console.log(findpix1)
  
}
createPaintGrid(4,4)
// // grab color from pallette below
let paintColor = 'black'
function grabColor(){
 paintColor = this.style.backgroundColor;
 erase.style.backgroundColor = paintColor;
 clear.style.backgroundColor = paintColor;
  console.log(paintColor)
  return paintColor;
}

// // set color of pixel function below
function setColor(){

  this.style.backgroundColor = paintColor ;
}

// button events below
clear.addEventListener('click', eraseEverything);
function eraseEverything(){
  let pix = document.getElementsByClassName('pixels');
  for(let i=0;i<pix.length;i++){
  pix[i].style.backgroundColor = 'white';
  }
}
erase.addEventListener('click', eraseSome);
function eraseSome(){
  paintColor = 'white';
}

