const menuMobile = document.querySelector(".nav-mobile")

const spanOpener = document.querySelector(".span-opener");
spanOpener.addEventListener("click", function () {
    menuMobile.classList.add("show-menu");
});

const spanCloser = document.querySelector(".span-closer");
spanCloser.addEventListener("click", function () {
    menuMobile.classList.remove("show-menu");
})