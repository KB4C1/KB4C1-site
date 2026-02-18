const devCards = document.querySelectorAll(".dev-card");
const skillCards = document.querySelectorAll(".skill-card");

devCards.forEach(card => {
    const value = Number(card.dataset.progress);
    const bar = card.querySelector(".progress__bar");
    const label = card.querySelector(".progress__value");

    bar.style.width = value + "%";
    label.textContent = value + "%";
    if(value == 100) {
        bar.style.background = "#ffffff";
        label.textContent = 'Finished'
    }
});

