const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-button");
const main = document.querySelector("main");
const devCards = document.querySelectorAll(".dev-card");

menuBtn.addEventListener("click", () => {
    aside.style.transform =
        aside.style.transform === "translateX(-100%)"
            ? "none"
            : "translateX(-100%)";

    main.style.transform =
        main.style.transform === "translateX(-220px)"
            ? "none"
            : "translateX(-220px)";
});

devCards.forEach(card => {
    const value = Number(card.dataset.progress);
    const bar = card.querySelector(".progress__bar");
    const label = card.querySelector(".progress__value");

    if (!bar || !label || isNaN(value)) return;

    bar.style.width = value + "%";
    label.textContent = value + "%";

    if (value === 100) {
        bar.style.background = "#ffffff";
        label.textContent = "Finished";
    }
});