function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

const div = document.getElementById("rameau");
const text = document.getElementById("text");
const img = document.getElementById("imageR");


const hT = text.clientHeight;
const wI = img.clientWidth-div.clientWidth;
let hD;



const h1 = img.clientHeight;

// Hauteur avec coordonnées précises
const h2 = img.getBoundingClientRect().height;

// Hauteur intrinsèque de l'image
const h3 = img.height;

// Hauteur avec padding et bordures
const h4 = img.offsetHeight;
console.log(h1, h2, h3, h4);


console.log(hT, div.clientHeight, div.clientWidth, text.clientHeight, img.clientHeight, img.clientWidth, img.getBoundingClientRect().height);
console.log(hT, hD, wI);
console.log(text.offsetTop, div.offsetTop, text.offsetTop-div.offsetTop);
div.style.height = hT + "px";
//text.style.transform = "translateY(" + (-hi) + "px)";
//text.style.transform = "translateY(" + (-hT) + "px)";
text.style.top = -hD + "px";
img.style.transform = "translateX(" + (-wI) + "px)";
