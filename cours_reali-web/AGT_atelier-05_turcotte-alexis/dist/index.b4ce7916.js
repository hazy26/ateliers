const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".menu_link");
const menuBtn = document.querySelector(".menu_btn");
menuBtn.addEventListener("click", ()=>{
    toggleMenu();
});
menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click", ()=>{
        toggleMenu();
        console.log("hello");
    });
});
function toggleMenu() {
    nav.classList.toggle("hidden");
}

//# sourceMappingURL=index.b4ce7916.js.map
