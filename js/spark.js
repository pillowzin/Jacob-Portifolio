const brandMark = document.querySelector(".brand-mark");

if (
    brandMark &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    setInterval(() => {
        brandMark.style.transform =
            brandMark.style.transform === "translateY(-1px)"
                ? "translateY(0)"
                : "translateY(-1px)";
    }, 1400);
}
