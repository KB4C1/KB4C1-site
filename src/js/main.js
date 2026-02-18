const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-button");
const main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
    // aside.classList.toggle("hidden");
    
aside.style.transform =
    aside.style.transform === "translateX(-100%)" ? "none" : "translateX(-100%)";
main.style.transform =
    main.style.transform === "translateX(-220px)" ? "none" : "translateX(-220px)"
});
