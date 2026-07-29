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
const mensagens = [
"Entre tantas pessoas no mundo, foi você quem chamou minha atenção. ❤️",

"Você transformou momentos simples em lembranças que eu nunca quero esquecer. ✨",

"Com você, eu encontrei um lugar onde posso ser completamente eu. 🌙",

"Quando penso no amanhã, é impossível não imaginar você nele. ⭐",

"E foi aí que eu percebi... você não era apenas mais uma estrela. ❤️"
];

const estrelas = document.querySelectorAll(".estrela");
const mensagem = document.getElementById("mensagem");

estrelas.forEach((estrela, index) => {

    estrela.addEventListener("click", () => {

        mensagem.innerHTML = mensagens[index];

        estrela.style.background = "#ffd700";

        estrela.style.boxShadow =
        "0 0 20px #ffd700, 0 0 40px #ffd700";

    });

});
function abrirPortalUniverso() {
    const portal = document.getElementById("portalUniverso");

    portal.classList.remove("portal-escondido");
    portal.classList.add("portal-abrindo");
}
const botaoUniverso = document.getElementById("botaoUniverso");
const viagemEspacial = document.getElementById("viagemEspacial");

if (botaoUniverso) {
    botaoUniverso.addEventListener("click", () => {

        // esconde o conteúdo do portal
        document.querySelector(".portal-conteudo").style.opacity = "0";

        // ativa a viagem
        viagemEspacial.style.display = "block";

        // adiciona animação
        viagemEspacial.classList.add("iniciar-viagem");

    });
}
const galaxia = document.getElementById("galaxiaCoracao");

let girando = false;
let inicioX = 0;
let rotacao = 0;

if (galaxia) {

    galaxia.addEventListener("pointerdown", (e) => {

        girando = true;
        inicioX = e.clientX;

        galaxia.setPointerCapture(e.pointerId);

    });


    galaxia.addEventListener("pointermove", (e) => {

        if (!girando) return;

        let movimento = e.clientX - inicioX;

        rotacao += movimento * 0.5;

        galaxia.style.transform =
        `rotate(${rotacao}deg)`;

        inicioX = e.clientX;

    });


    galaxia.addEventListener("pointerup", () => {

        girando = false;

    });

}
