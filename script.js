const links=document.querySelectorAll("#navbar a");
links.forEach(link=>{
  link.addEventListener("click",()=>{
    links.forEach(l=>l.classList.remove("active"));
    this.classList.add("active");
  })
})
function toggleMenu(){
  const nav=document.querySelector("#navbar")
  nav.classList.toggle("show");
}
//Welcome to my portfolio! I'm a web developer passionate about crafting clean,responsive and user-friendly websites.
const msg ="Welcome to my portfolio! I'm a web developer passionate about crafting clean,responsive and user-friendly websites.";
const desc =document.getElementById("desc");
let i=0;
function typeWriter(){
  if(i<msg.length){
    desc.innerHTML+= msg.charAt(i);
    i++;
    setTimeout(typeWriter,50);
  }
}
typeWriter();
