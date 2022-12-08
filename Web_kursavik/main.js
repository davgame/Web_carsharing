let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const src=ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

src.reveal('.text',{delay:200,origin:'top'})
src.reveal('.form-container form',{delay:800,origin:'left'})
src.reveal('.heading',{delay:800,origin:'top'})
src.reveal('.ride-container .box',{delay:600,origin:'top'})
src.reveal('.services-container .box',{delay:600,origin:'top'})
src.reveal('.reviews-container',{delay:600,origin:'top'})
src.reveal('.newsletter .box',{delay:400,origin:'bottom'})