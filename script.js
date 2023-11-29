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


// var body = document.querySelector(".phonenavbar");
// var date = new Date()
// var time = date.getHours ()
// console.log(time)

// if(time>5&&time<18){
//     body.style.background="blue";
// }else{
//     body.style.background="black";
// }
