(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    //!<Menu Burger>
        function menuInit() {
        const iconMenu = document.querySelector(".menu__icon");
        const menuBody = document.querySelector(".menu__body");
        if (iconMenu) iconMenu.addEventListener("click", (function(e) {
            document.body.classList.toggle("_lock");
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }));
    }
    //!</Menu Burger>
        isWebp();
    menuInit();
})();