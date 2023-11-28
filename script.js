var hamburger = document.querySelector(".fa-bars");
var sidemenu = document.querySelector(".menulist");
var cutmark = document.querySelector(".fa-xmark");

function sidemenushow (){
    sidemenu.style.display="block"
}
function sidemenuhide (){
    sidemenu.style.display="none"
}
function hamburgershow (){
    hamburger.style.display="block"
}
function hamburgerhide (){
    hamburger.style.display="none"
}

hamburger.addEventListener("click", ()=>{
    hamburgerhide()
    sidemenushow()
})
cutmark.addEventListener("click", ()=>{
    sidemenuhide()
    hamburgershow()
})
