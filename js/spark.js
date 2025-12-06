setInterval(() => {
    document.querySelectorAll('.header-decor span').forEach(span => {
        span.style.opacity = span.style.opacity === "1" ? "0.4" : "1";
    });
}, 1200);

