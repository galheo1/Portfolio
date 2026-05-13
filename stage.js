let affiche = false;
function show(){
    let button = document.getElementById("button");
    let list = document.getElementById("list");
    console.log(list.style.height, list.height, list.clientHeight, list.children[0].clientHeight);
    let childH=0;
    for(let i=0; i<list.children.length; i++){
        childH+=list.children[i].clientHeight;
    }
    console.log(childH);
    if (affiche){
        affiche = false;
        button.textContent = "dates ᐱ";
        list.style.height = "0px";
    }else{
        affiche = true;
        button.textContent = "dates ᐯ";
        list.style.height = childH + 'px';
    }
}
