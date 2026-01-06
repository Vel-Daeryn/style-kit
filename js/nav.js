const extensibleNav = document.getElementById("resize-nav")

extensibleNav.addEventListener("click", () => {
    document.body.classList.toggle("nav-expand")
    if(extensibleNav.ariaExpanded === "true") {
        extensibleNav.setAttribute("aria-expanded", "false")
    } else {
        extensibleNav.setAttribute("aria-expanded", "true")
    }
})