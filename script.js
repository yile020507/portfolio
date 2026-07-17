/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    }else{
        darkBtn.innerHTML = "🌙";
    }

});


/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================
   FADE ANIMATION
=========================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section=>{

    section.classList.add("fade-up");

    observer.observe(section);

});


/* ===========================
   NAV ACTIVE
=========================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ===========================
   GALLERY EFFECT
=========================== */

const gallery=document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src);

    });

});


/* ===========================
   HEADER SHADOW
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});


/* ===========================
   HERO BUTTON
=========================== */

const btn=document.querySelector(".btn");

btn.addEventListener("mouseover",()=>{

    btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseout",()=>{

    btn.style.transform="scale(1)";

});


/* ===========================
   PROJECT CARD EFFECT
=========================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


/* ===========================
   TOOL CARD EFFECT
=========================== */

const tools=document.querySelectorAll(".tool-card");

tools.forEach(tool=>{

    tool.addEventListener("mouseenter",()=>{

        tool.style.transform="translateY(-10px)";

    });

    tool.addEventListener("mouseleave",()=>{

        tool.style.transform="translateY(0)";

    });

});


/* ===========================
   LOADING FINISH
=========================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("Portfolio by Le Thi Yen");
/* ===========================
   PROGRESS BAR
=========================== */

window.addEventListener("scroll",()=>{

let scroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percent=(scroll/height)*100;

document.getElementById("progressBar").style.width=percent+"%";

});
window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

}