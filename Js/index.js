
/* ACCORDION MENU FOOTER*/
let accordeon=document.getElementById("foo-contain");

accordeon.addEventListener("click",(e)=>{
if(e.target.classList.contains("foo-title")){
    e.target.parentElement.classList.toggle("scale");
    e.target.children[1].classList.toggle("rotate")
}
})

/*HAMBURGER MENU ACCORDION*/
document.querySelector("#clickMe").addEventListener("click", function (evt) {
    document.querySelector(".menu-section-accordeon").classList.toggle("hidden");
});


