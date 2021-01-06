import { mainPage } from './main-page.js'
import { menu } from './menu.js'
import { delivery } from './delivery.js'
import { contact } from './contact.js'

const control = (() => {

  const _navbarElements = [...document.querySelector(".navbar").children];

  const setEventListeners = () => {

    const pageContent = document.querySelector(".page-content");

    _navbarElements.forEach(element => {
      element.addEventListener("click", () => {

        if (element.classList.contains("main-page")) {
          pageContent.innerHTML = "";
          mainPage.build();
          _removeActiveClass();
          element.classList.add("active");
        };

        if (element.classList.contains("menu")) {
          pageContent.innerHTML = "";
          menu.build();
          _removeActiveClass();
          element.classList.add("active");
        };

        if (element.classList.contains("delivery")) {
          pageContent.innerHTML = "";
          delivery.build();
          _removeActiveClass();
          element.classList.add("active");
        };

        if (element.classList.contains("contact")) {
          pageContent.innerHTML = "";
          contact.build();
          _removeActiveClass();
          element.classList.add("active");
        };
      });
    });
  };

  const _removeActiveClass = () => {
    console.log(_navbarElements);
    _navbarElements.forEach(element => {
      element.classList.remove("active");
    });
  };

  return { setEventListeners };

})();

mainPage.build();

control.setEventListeners();
