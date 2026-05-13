const div = document.getElementById("rameau");
const text = document.getElementById("text");
const img = document.getElementById("imageR");


const wI = img.clientWidth-div.clientWidth;
let hD;

img.addEventListener('load', function() {
  hD = img.clientHeight;
  console.log("Hauteur de l'image:", hD);
  text.style.top = -hD + "px";
});


//console.log(hT, div.clientHeight, div.clientWidth, text.clientHeight, img.clientHeight, img.clientWidth, img.getBoundingClientRect().height);
//console.log(hT, hD, wI);
//console.log(text.offsetTop, div.offsetTop, text.offsetTop-div.offsetTop);
img.style.transform = "translate(" + (-wI) + "px, -80px)";
