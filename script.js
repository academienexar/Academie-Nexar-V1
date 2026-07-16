/* ==========================
   ACADEMIE NEXAR V1
   SCRIPT ANIMATIONS
========================== */



// Animation apparition au scroll

const reveals = document.querySelectorAll(".reveal");


function reveal(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const visible = 120;


        if(elementTop < windowHeight - visible){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", reveal);

reveal();






// Effet navbar au scroll


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){

        navbar.style.background = "#080808ee";

        navbar.style.boxShadow = "0 0 25px #ff790033";


    }else{


        navbar.style.background = "#080808aa";

        navbar.style.boxShadow = "none";


    }


});






// Animation légère du logo


const logo = document.querySelector(".hero-logo");


if(logo){


logo.addEventListener("mouseenter", ()=>{


    logo.style.transform = "scale(1.1) rotate(5deg)";


});



logo.addEventListener("mouseleave", ()=>{


    logo.style.transform = "scale(1) rotate(0deg)";


});


}
