const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-button");
const main = document.querySelector("main");
const devCards = document.querySelectorAll(".dev-card");

menuBtn.addEventListener("click", () => {

    aside.classList.toggle('shift');
    main.classList.toggle('shift');

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