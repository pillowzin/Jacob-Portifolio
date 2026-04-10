const brandMark = document.querySelector(".brand-mark");

if (
    brandMark &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    setInterval(() => {
        brandMark.style.transform =
            brandMark.style.transform === "translateY(-3px) scale(1.05)"
                ? "translateY(0) scale(1)"
                : "translateY(-3px) scale(1.05)";
    }, 1200);
}
