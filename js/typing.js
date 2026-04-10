const txt = "Construo interfaces profissionais, penso em performance com Rust e uso IA de forma pratica para melhorar codigo, acelerar refinamentos e entregar melhor.";
const target = document.getElementById("typing");
let i = 0;

function type() {
    if (!target) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        target.textContent = txt;
        return;
    }

    if (i < txt.length) {
        target.textContent += txt[i];
        i++;
        setTimeout(type, 16);
    }
}

type();
