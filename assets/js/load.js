const canvas = document.getElementById("coreCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 320;

const center = { x: 160, y: 160 };

let particles = [];
let frame = 0;
let animationId;

/* CREATE PARTICLES */
for (let i = 0; i < 80; i++) {

    const angle = Math.random() * Math.PI * 2;
    const radius = 100 + Math.random() * 50;

    particles.push({
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,

        tx: center.x + Math.cos(angle) * 50,
        ty: center.y + Math.sin(angle) * 50,

        alpha: 0
    });

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* CENTER ENERGY RING */
    ctx.beginPath();
    ctx.arc(
        center.x,
        center.y,
        35 + Math.sin(frame * 0.04) * 2,
        0,
        Math.PI * 2
    );

    ctx.strokeStyle = "rgba(56,189,248,0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();

    /* PARTICLES */
    particles.forEach(p => {

        p.x += (p.tx - p.x) * 0.025;
        p.y += (p.ty - p.y) * 0.025;

        p.alpha = Math.min(p.alpha + 0.015, 1);

        ctx.fillStyle = `rgba(56,189,248,${p.alpha})`;

        ctx.fillRect(p.x, p.y, 2, 2);

    });

    frame++;

    animationId = requestAnimationFrame(draw);
}

/* START */
draw();

/* PAGE LOAD */
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const label = document.querySelector(".boot-label");

    /* SHOW TEXT */
    setTimeout(() => {
        label.style.opacity = "1";
    }, 400);

    /* HIDE LOADER */
    setTimeout(() => {

        /* STOP ANIMATION */
        cancelAnimationFrame(animationId);

        loader.style.transition = "opacity 0.8s ease";
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

            /* ENABLE SCROLL */
            document.body.style.overflow = "auto";

        }, 800);

    }, 1800);

});

/* PREVENT SCROLL DURING LOADING */
document.body.style.overflow = "hidden";