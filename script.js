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


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  let docHeight = document.documentElement.scrollHeight;
  
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    // Special check for bottom of page
    if (scrollY + windowHeight >= docHeight) {
      // Last section ko active karo
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#contact`) {
          link.classList.add("active");
        }
      });
    } else if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
