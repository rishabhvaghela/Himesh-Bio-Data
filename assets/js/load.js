const canvas = document.getElementById("coreCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 320;

const center = { x: 160, y: 160 };
let particles = [];
let frame = 0;

/* CREATE PARTICLES */
for (let i = 0; i < 150; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 120 + Math.random() * 80;

    particles.push({
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
        tx: center.x + Math.cos(angle) * 60,
        ty: center.y + Math.sin(angle) * 60,
        alpha: 0
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // energy pulse
    ctx.beginPath();
    ctx.arc(center.x, center.y, 40 + Math.sin(frame * 0.05) * 3, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(56,189,248,0.6)";
    ctx.lineWidth = 2;
    ctx.stroke();

    particles.forEach(p => {
        p.x += (p.tx - p.x) * 0.03;
        p.y += (p.ty - p.y) * 0.03;
        p.alpha = Math.min(p.alpha + 0.02, 1);

        ctx.fillStyle = `rgba(56,189,248,${p.alpha})`;
        ctx.fillRect(p.x, p.y, 2, 2);
    });

    frame++;
    requestAnimationFrame(draw);
}

draw();

/* EXIT SEQUENCE */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".boot-label").style.opacity = "1";
    }, 700);

    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.transition = "opacity 1.2s ease";
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 900);
    }, 1200);
});