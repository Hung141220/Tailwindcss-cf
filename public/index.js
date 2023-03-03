const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIc = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
    if (toggleTopMenuIc.contains(e.target)) {
        topMenu.classList.toggle("hidden");
        topMenu.classList.toggle("absolute");
        topMenu.classList.toggle("bg-white");
    } else {
        if (topMenu.classList.contains("absolute")) {
            topMenu.classList.remove("absolute");
            topMenu.classList.remove("bg-white");
            topMenu.classList.add("hidden");
        }
    }
});
