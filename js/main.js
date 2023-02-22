let toggle_menu = document.querySelectorAll(".toggle-menu")
let aside = document.querySelector("aside")

toggle_menu.forEach(e => {
    e.addEventListener("click", function () {
        aside.classList.toggle("active")
    })
});