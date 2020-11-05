
const card= document.querySelector('.card');
const container= document.querySelector('.container');

const title = document.querySelector('.title');
const shoe = document.querySelector('.shoe img');
const purchase = document.querySelector('.purchase');
const buttons = document.querySelector('.buttons');
const description = document.querySelector('h3');




container.addEventListener('mousemove', (e) => {
    let xAxis= (window.innerWidth/2 - e.pageX) /10;
    let yAxis= (window.innerHeight/2 - e.pageY) /10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});


//Animate Out

container.addEventListener('mouseleave', e => {
    card.style.transition= 'all 0.7s ease-out';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    buttons.style.transform = 'translateZ(0px)';
    shoe.style.transform = 'translateZ(0px) rotateZ(0deg)';

})

//Animate In

container.addEventListener('mouseenter', e => {
    card.style.transition= 'none';
    title.style.transform = "translateZ(100px)";
    purchase.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(100px)';
    buttons.style.transform = 'translateZ(100px)';
    shoe.style.transform = 'translateZ(100px) rotateZ(20deg)';
})
    

