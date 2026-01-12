/**
 * ハンバーガーメニュー
 */
const initializeHamburgerMenu = () => {
    const menu = document.querySelector(".js-header-menu");
    const openButton = document.querySelector(".js-header-open-button");
    const closeButton = document.querySelector(".js-header-close-button");

    if (!menu || !openButton || !closeButton) return;

    const openMenu = () => {
        menu.showModal();
    };

    const closeMenu = () => {
        menu.close();
    };

    openButton.addEventListener("click", () => {
        openMenu();
    });

    closeButton.addEventListener("click", () => {
        closeMenu();
    });
};
initializeHamburgerMenu();
