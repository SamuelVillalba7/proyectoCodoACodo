
let accordeon=document.getElementById("foo-contain");

accordeon.addEventListener("click",(e)=>{

if(e.target.classList.contains("foo-title")){
    console.log(e.target.parentElement)
    e.target.parentElement.classList.toggle("scale");
    e.target.children[1].classList.toggle("rotate")
}
})
