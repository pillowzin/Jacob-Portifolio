const txt = "Desenvolvedor autodidata — criando sites limpos, rápidos e funcionais desde 2020.";
let i = 0;

function type() {
    if (i < txt.length) {
        document.getElementById("typing").textContent += txt[i];
        i++;
        setTimeout(type, 20);
    }
}

type();
