(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    menuBtnRef.adaEventListener("click", () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open"); 
        menuBtnRef.setAttribute("aria-expanded", !expanded);  
    });
})();