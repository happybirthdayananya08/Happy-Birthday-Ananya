// Floating sparkles everywhere
document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 1; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 4000);
    }
});
