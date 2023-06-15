// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    // Stick nav bar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

//Scroll Reversal

ScrollReveal({ 
    
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay:100
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img , about-content', { origin: 'right' });

//Typed JS

const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Designer', 'Full Stack'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay:100,
    loop: true

});


//loader
var headhide = document.getElementsByClassName("navbar");
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
    headhide.style.display = "none";
});
