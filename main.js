const btn = document.querySelector(".menu-btn");
const main = document.querySelector(".main");

let menuOpen = false;

btn.addEventListener("click", function () {

    if (!menuOpen) {
        main.style.display = "block";
        btn.classList.add("open");
        menuOpen = true;
    } else {
        main.style.display = "none";
        btn.classList.remove("open");
        menuOpen = false;
    }
})