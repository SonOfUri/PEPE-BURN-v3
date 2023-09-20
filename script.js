const shapeShift = document.querySelector('.shape-shift')
const txt = document.querySelector('#text');
const triangle = document.querySelector('#triangle');

triangle.onclick = function(){
    shapeShift.style.background = "url('https://i.ibb.co/xqhCTLQ/img-148441.png')"
    shapeShift.style.borderColor ="transparent";
    shapeShift.style.backgroundRepeat = "no-repeat"
    shapeShift.style.backgroundSize="90% 100%";
}

const circle = document.querySelector('#circle');
circle.onclick = function(){
   shapeShift.style.borderRadius = "140em";
   shapeShift.style.width = "5em"
    txt.style.margin = " 1.3em 10em;"
    shapeShift.style.borderColor = "black";
    shapeShift.style.background ="#509624";
}

const square = document.querySelector('#square');
square.onclick = function () {
shapeShift.style.borderRadius = "0"
    shapeShift.style.width = "7em"
    shapeShift.style.borderColor = "black";
  shapeShift.style.background ="#509624";
}