const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title')
const paint = document.querySelector('.paint img')
const description = document.querySelector('.info h3')
const circle = document.querySelector('.circle')

container.addEventListener("mousemove", e =>{
    let xAxis = (window.innerWidth/2 - e.pageX)/75;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
})
//najechanie na kontener
container.addEventListener("mouseenter", e =>{
    card.style.transition = `all 0.1s ease`;

    title.style.transform = "translateZ(150px)";
    paint.style.transform = "translateZ(200px) rotateZ(45deg)";
    paint.style.filter = "grayscale(0%)";
    description.style.transform = "translateZ(125px)";
    circle.style.background = "rgba(199, 188, 218, 1)";
})
//wyjscie z kontenera
container.addEventListener("mouseleave", e =>{
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = "translateZ(0px)";
    paint.style.transform = "translateZ(0px) rotateZ(0deg)";
    paint.style.filter = "grayscale(100%)";
    description.style.transform = "translateZ(0px)";
    circle.style.background = "white";

}) 