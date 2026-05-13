function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function openNav() {
          document.getElementById("mySidenav").style.width = "200px";
    //console.log("holaaa");
        }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //console.log("holassaa");
}

function getPositionY(a) {
    const elem = document.getElementById(a);

    // Récupération de la position par rapport à la page
    const rect = elem.getBoundingClientRect();
    const posY = rect.top + window.scrollY-100;

    //console.log("Position Y de l'élément #a :", posY);

    return posY;
}

function scrolla(elem) {
    const y = getPositionY(elem);
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}


let mouseOnMenu=false;
function animon(x){
    //console.log("in1");
    x.classList.toggle("in");   
    //console.log("in2");
    mouseOnMenu=false;
    sleep(100);
}
function animoff(x){
    //console.log("out");
    mouseOnMenu=true;

}
function launch(){
    while (true){
        if (mouseOnMenu){
            //console.log("in1");
            document.getElementById("menu").className = "in"; 
            //console.log("in2");
            mouseOnMenu=false;
            sleep(100);

        }
        else{
            //console.log("out");
            document.getElementById("menu").className = "out"; 
        }
    }
}
