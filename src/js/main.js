const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-button");
const main = document.querySelector("main");
const devCards = document.querySelectorAll(".dev-card");
const skillCards = document.querySelectorAll(".skill-card");
const value = Number(card.dataset.progress);
const bar = card.querySelector(".progress__bar");
const label = card.querySelector(".progress__value");

menuBtn.addEventListener("click", () => {
    // aside.classList.toggle("hidden");
    
aside.style.transform =
    aside.style.transform === "translateX(-100%)" ? "none" : "translateX(-100%)";
main.style.transform =
    main.style.transform === "translateX(-220px)" ? "none" : "translateX(-220px)"
});

devCards.forEach(card => {

    bar.style.width = value + "%";
    label.textContent = value + "%";
    if(value == 100) {
        bar.style.background = "#ffffff";
        label.textContent = 'Finished'
    }
});

