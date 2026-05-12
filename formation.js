
const div = document.getElementById("rameau");
const text = document.getElementById("text");
const img = document.getElementById("imageR");
const hT = text.clientHeight;
const hi=div.getBoundingClientRect().height;
div.style.height = hT + "px";
console.log(hT, div.clientHeight, div.clientWidth, text.clientHeight, img.clientHeight, img.clientWidth, img.getBoundingClientRect().height);
//text.style.transform = "translateY(" + (-hT) + "px)";
text.style.top = hi + "px";
