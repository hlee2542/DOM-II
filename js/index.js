// Your code goes here
let busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'rotate(0.5turn)';
});
busImg.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'rotate(0.0turn)';
})

document.addEventListener('keydown', () => {
    let html = document.querySelector('html');
    html.style.color = 'green';
});

let header = document.querySelector('header');
header.addEventListener('click', () => {
    event.target.style.backgroundColor = 'pink';
});

document.addEventListener('wheel', () => {
    let html = document.querySelector('html');
    html.style.color = 'red';
});

let advImg = document.querySelector('.container .img-content img');
advImg.addEventListener('drag', (event) => {
    event.target.style.transform = 'rotate(0.5turn)';
});

let letsGo = document.querySelector('.content-section');
letsGo.addEventListener('copy', (event) => {
    event.target.style.color = 'yellow';
});

let letsGoP = document.querySelector('.content-section p');
letsGoP.addEventListener('contextmenu', (event) => {
    event.target.style.color = 'brown';
})

let boatPic = document.querySelector('.inverse-content .img-content img');
boatPic.addEventListener('click', (event) => {
    event.target.style.transform = 'scale(2, 0.5)';
});

let boatPic2 = document.querySelector('.content-destination img');
boatPic2.addEventListener('dblclick', (event) => {
    event.target.style.transform = 'skew(30deg, 20deg)';
});

window.addEventListener('resize', () => {
    let html = document.querySelector('html');
    html.style.backgroundColor = 'purple';
});

let navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.style.color = 'orange';
        event.stopPropagation();
    });
});