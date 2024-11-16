const hamburger = document.getElementById("hamburger")
const sidebar = document.querySelector(".sidebar")
const backgroundSidebar = document.querySelector(".background-sidebar") // fecha o sidebar

function visibleSidebar() {
    sidebar.style.visibility = "visible"
    sidebar.style.transform = "translateX(0%)"
    sidebar.style.boxShadow = "1px 1px 5px #ddd" 
    backgroundSidebar.style.visibility = "visible"
}

function hiddenSidebar() {
    sidebar.style.transform = "translateX(-100%)"
    sidebar.style.boxShadow = "none" 
    backgroundSidebar.style.visibility = "hidden"
}

hamburger.addEventListener("click", visibleSidebar)
backgroundSidebar.addEventListener("click", hiddenSidebar)