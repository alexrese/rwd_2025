const container_air = document.querySelector(".container-air");
const card = document.querySelector(".card-air");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector("h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
// const circle = document.querySelector(".circle");

// Movimento 3D com rotação baseada no mouse
container_air.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animação de entrada
container_air.addEventListener("mouseenter", () => {
    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-15deg)";
    description.style.transform = "translateZ(75px)";
    sizes.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(30px)";
    // circle.style.transform = "translateZ(-50px)";
});

// Animação de saída
container_air.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    // circle.style.transform = "translateZ(0px)";
});


//para da rplay no video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'EYB9DnpmBmc',
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'EYB9DnpmBmc'
        },
        events: {
            'onReady': function (event) {
                event.target.playVideo();
            }
        }
    });
}
