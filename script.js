const stars = document.querySelector(".stars");

for(let i = 0; i < 150; i++){

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay =
    Math.random()*2 + "s";
    
    star.style.width =
(Math.random()*4 + 2) + "px";

star.style.height =
star.style.width;

    stars.appendChild(star);
}
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    document.getElementById("intro").style.display = "none";

    document.getElementById("constelacao").style.display = "block";

});
