const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

document.querySelectorAll(".button").forEach(el => {
    el.addEventListener("mouseenter", () => {
        glow.style.background = "radial-gradient(circle, rgba(255,122,89,0.35), transparent 60%)";
        glow.style.transform = "translate(-50%, -50%) scale(1.4)";
    });

    el.addEventListener("mouseleave", () => {
        glow.style.background = "radial-gradient(circle, rgba(102,217,239,0.18), transparent 60%)";
        glow.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

document.querySelectorAll(".card, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        glow.style.opacity = "0.9";
        glow.style.transform = "translate(-50%, -50%) scale(1.2)";
    });

    el.addEventListener("mouseleave", () => {
        glow.style.opacity = "0.6";
        glow.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

document.querySelectorAll(".section").forEach(el => {
    el.addEventListener("mouseenter", () => {
        glow.style.opacity = "0.4";
    });

    el.addEventListener("mouseleave", () => {
        glow.style.opacity = "0.6";
    });
});
