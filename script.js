let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let resumeEL = document.getElementsByClassName("footer1")

function add1pointH(){
    homeEl.innerHTML = parseInt(homeEl.innerHTML) + 1;
}
function add1pointG(){
    guestEl.innerHTML = parseInt(guestEl.innerHTML) + 1;
}
function add2pointH(){
    homeEl.innerHTML = parseInt(homeEl.innerHTML) + 2;
}
function add2pointG(){
    guestEl.innerHTML = parseInt(guestEl.innerHTML) + 2;
}
function add3pointH(){
    homeEl.innerHTML = parseInt(homeEl.innerHTML) + 3;
}
function add3pointG(){
    guestEl.innerHTML = parseInt(guestEl.innerHTML) + 3;

}
function reset(){
    guestEl.innerHTML = 0
    homeEl.innerHTML = 0 
}
function resume() {
    if (resumeEL[0].innerHTML === "RESUME") {
        resumeEL[0].innerHTML = "PAUSE";
    } else {
        resumeEL[0].innerHTML = "RESUME";
    }
}
