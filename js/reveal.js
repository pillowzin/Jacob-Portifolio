const elements = document.querySelectorAll(
    "section, .projeto, header, footer"
);

function reveal() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
