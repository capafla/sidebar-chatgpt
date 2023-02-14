const toggleBtn = document.querySelector("#toggle-sidebar");
const sidebar = document.querySelector("#sidebar");
const openMenu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("active");
    setTimeout(() => {
        sidebar.classList.toggle("active");
    }, 500);
})

toggleBtn.addEventListener("click", () => {
    
    sidebar.classList.toggle("active");

    setTimeout(() => {
        openMenu.classList.toggle("active");
    }, 500);
})