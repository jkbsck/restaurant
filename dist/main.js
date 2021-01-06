/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nconst contact = (() => {\n  const _pageContent = document.querySelector(\".page-content\");\n  \n  const _buildContact = () => {\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.classList.add(\"contact-container\");\n\n    const address = document.createElement(\"h2\");\n    address.classList.add(\"address\");\n    address.textContent = \"ADDRESS: 5th Avenue, New York 1234/4321\";\n    contactDiv.appendChild(address);\n\n    const phone = document.createElement(\"h2\");\n    phone.classList.add(\"phone\");\n    phone.textContent = \"PHONE: 9824589623\";\n    contactDiv.appendChild(phone);\n\n    const email = document.createElement(\"h2\");\n    email.classList.add(\"email\");\n    email.textContent = \"EMAIL: info@therestaurant.com\";\n    contactDiv.appendChild(email);\n\n    _pageContent.appendChild(contactDiv);\n  };\n  \n  const build = () => {\n    _buildContact();\n  };\n\n  return { build };\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/delivery.js":
/*!*************************!*\
  !*** ./src/delivery.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delivery\": () => /* binding */ delivery\n/* harmony export */ });\nconst delivery = (() => {\n  const _pageContent = document.querySelector(\".page-content\");\n  \n  const _buildList = () => {\n    const list = document.createElement(\"div\");\n    list.classList.add(\"list\");\n\n    const listTitleDiv = document.createElement(\"div\");\n    listTitleDiv.classList.add(\"list-title\");\n\n    const listTitle = document.createElement(\"h1\");\n    listTitle.textContent = \"Pick, Pay & Eat just by few clicks.\";\n    listTitleDiv.appendChild(listTitle);\n    list.appendChild(listTitleDiv);\n\n    const meals = [\"Potato Gnocchi with Sheep Cheese\", \"Chicken Heads\", \"Grilled Rats\", \"Beef Steak\", \"Raw Turkey on Peas\", \"Cooked Wuhan Bat\", \"Fried Lamb Thigh with Dried Wasps\", \"French Fries\", \"Meshed Potatos\", \"Rice\", \"Roasted Potatos\", \"Creamy Garlic Soup\", \"Soup with Secret Ingredients\", \"Vegan Soup with Gun Powder Seasoning\"];\n\n    meals.forEach(meal => {\n      const mealNameDiv = document.createElement(\"div\");\n      mealNameDiv.classList.add(\"meal-name\");\n\n      const mealName = document.createElement(\"h3\");\n      mealName.textContent = meal;\n      mealNameDiv.appendChild(mealName);\n\n      const priceDiv = document.createElement(\"div\");\n      priceDiv.classList.add(\"price-pick\");\n      \n      const price = document.createElement(\"h3\");\n      price.textContent = \"4.99$\";\n      priceDiv.appendChild(price);\n\n      const pickLabel = document.createElement(\"h5\");\n      pickLabel.textContent = \"quantity:\";\n      priceDiv.appendChild(pickLabel);\n\n      const pick = document.createElement(\"input\");\n      pick.type = \"number\";\n      priceDiv.appendChild(pick);\n      \n      mealNameDiv.appendChild(priceDiv);\n\n      list.appendChild(mealNameDiv);\n    });\n\n    const proceedDiv = document.createElement(\"div\");\n    proceedDiv.classList.add(\"proceed\");\n\n    const proceed = document.createElement(\"div\");\n\n    const proceedH1 = document.createElement(\"h1\");\n    proceedH1.textContent = \"PROCEED\";\n    proceed.appendChild(proceedH1);\n\n    proceedDiv.appendChild(proceed);\n\n    list.appendChild(proceedDiv);\n\n    _pageContent.appendChild(list);\n  };\n  \n  const build = () => {\n    _buildList();\n  };\n\n  return { build };\n})();\n\n // delivery won't work - allegedly is already defined\n\n\n//# sourceURL=webpack://restaurant-page/./src/delivery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.js */ \"./src/main-page.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _delivery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery.js */ \"./src/delivery.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst control = (() => {\n\n  const _navbarElements = [...document.querySelector(\".navbar\").children];\n\n  const setEventListeners = () => {\n\n    const pageContent = document.querySelector(\".page-content\");\n\n    _navbarElements.forEach(element => {\n      element.addEventListener(\"click\", () => {\n\n        if (element.classList.contains(\"main-page\")) {\n          pageContent.innerHTML = \"\";\n          _main_page_js__WEBPACK_IMPORTED_MODULE_0__.mainPage.build();\n          _removeActiveClass();\n          element.classList.add(\"active\");\n        };\n\n        if (element.classList.contains(\"menu\")) {\n          pageContent.innerHTML = \"\";\n          _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu.build();\n          _removeActiveClass();\n          element.classList.add(\"active\");\n        };\n\n        if (element.classList.contains(\"delivery\")) {\n          pageContent.innerHTML = \"\";\n          _delivery_js__WEBPACK_IMPORTED_MODULE_2__.delivery.build();\n          _removeActiveClass();\n          element.classList.add(\"active\");\n        };\n\n        if (element.classList.contains(\"contact\")) {\n          pageContent.innerHTML = \"\";\n          _contact_js__WEBPACK_IMPORTED_MODULE_3__.contact.build();\n          _removeActiveClass();\n          element.classList.add(\"active\");\n        };\n      });\n    });\n  };\n\n  const _removeActiveClass = () => {\n    console.log(_navbarElements);\n    _navbarElements.forEach(element => {\n      element.classList.remove(\"active\");\n    });\n  };\n\n  return { setEventListeners };\n\n})();\n\n_main_page_js__WEBPACK_IMPORTED_MODULE_0__.mainPage.build();\n\ncontrol.setEventListeners();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainPage\": () => /* binding */ mainPage\n/* harmony export */ });\nconst mainPage = (() => {\n\n  const _pageContent = document.querySelector(\".page-content\");\n\n  const _buildWelcome = () => {\n    const welcome = document.createElement(\"div\");\n    welcome.classList.add(\"welcome\");\n    const welcomeH3 = document.createElement(\"h3\");\n    welcomeH3.textContent = \"Welcome to The Restaurant\";\n    welcome.appendChild(welcomeH3);\n    _pageContent.appendChild(welcome);\n  };\n\n  const _buildRestaurantImg = () => {\n    const restaurantImg = document.createElement(\"div\");\n    restaurantImg.classList.add(\"restaurant-img\");\n    restaurantImg.innerHTML = `<img src=\"https://www.jasna.sk/fileadmin/_processed_/d/0/csm_angusrestaurant_hotelposta_jasna_1_410b6c62d4.jpg\" alt=\"photo of restaurant interior\"></img>`\n    _pageContent.appendChild(restaurantImg);\n  };\n\n  const _buildDescription = () => {\n    const description = document.createElement(\"div\");\n    description.classList.add(\"description\");\n    \n    const p1 = document.createElement(\"p\");\n    p1.textContent = \"Inspired by American gastronomy, new gastronomic experiences are brought to the centre of the town.\";\n    description.appendChild(p1);\n\n    const h41 = document.createElement(\"h4\");\n    h41.textContent = \"Angus on the plate\";\n    description.appendChild(h41);\n\n    const p2 = document.createElement(\"p\");\n    p2.textContent = \"Tender meat with a typical taste – this is meat of the Angus beef, which our restaurant is named after. Angus steaks are juicy, delicious and they literally melt in the mouth. And now you can taste them as well! Our a la carte menu includes not only steaks but also other meat as well as non-meat specialities with atypical side dishes.\";\n    description.appendChild(p2);\n\n    const h42 = document.createElement(\"h4\");\n    h42.textContent = \"International cuisine, local products\";\n    description.appendChild(h42);\n\n    const p3 = document.createElement(\"p\");\n    p3.textContent = \"We were inspired by the American culture but most of our ingredients come from local suppliers. This makes our specialities fresh and tasty. And this is why you can also enjoy traditional tastes of the region in our restaurant.\";\n    description.appendChild(p3);\n\n    const h43 = document.createElement(\"h4\");\n    h43.textContent = \"Great food and a great atmosphere\";\n    description.appendChild(h43);\n\n    const p4 = document.createElement(\"p\");\n    p4.textContent = \"An interesting and quite atypical interior offers an ideal background. The whole space is dominated by a fireplace, and fresh flowers on tables along with the surrounding Tatra nature guarantee positive feelings.\";\n    description.appendChild(p4);\n\n    _pageContent.appendChild(description);\n  };\n\n  const build = () => {\n    _buildWelcome();\n    _buildRestaurantImg();\n    _buildDescription();\n  };\n\n  return { build }\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\nconst menu = (() => {\n\n  const _pageContent = document.querySelector(\".page-content\");\n\n  const _buildDays = () => {\n    for (let i = 0; i < 7; i++) {\n      // day container\n      const day = document.createElement(\"div\");\n      day.classList.add(\"day\");\n\n      // left container with day and opening hours\n      const leftDiv = document.createElement(\"div\");\n      leftDiv.classList.add(\"left-div\");\n      day.appendChild(leftDiv);\n\n      const dayName = document.createElement(\"div\");\n      dayName.classList.add(\"day-name\");\n      leftDiv.appendChild(dayName);\n\n      const dayNameH1 = document.createElement(\"h2\");\n      dayName.appendChild(dayNameH1);\n\n      const openingHours = document.createElement(\"div\");\n      openingHours.classList.add(\"opening-hours\");\n      leftDiv.appendChild(openingHours);\n\n      const openingHoursH1 = document.createElement(\"h2\");\n      openingHours.appendChild(openingHoursH1);\n\n      // right container with menu content\n      const rightDiv = document.createElement(\"div\");\n      rightDiv.classList.add(\"right-div\");\n      day.appendChild(rightDiv);\n\n      const mainMealName = document.createElement(\"h5\");\n      mainMealName.textContent = \"Main meal:\";\n      rightDiv.appendChild(mainMealName);\n\n      const mainMeal = document.createElement(\"h3\");\n      rightDiv.appendChild(mainMeal);\n\n      const soupName = document.createElement(\"h5\");\n      soupName.textContent = \"Soup:\";\n      rightDiv.appendChild(soupName);\n\n      const soup = document.createElement(\"h3\");\n      rightDiv.appendChild(soup);\n\n      switch (i) {\n        case 0: \n          day.classList.add(\"monday\");\n          dayNameH1.textContent = \"MONDAY\";\n          openingHoursH1.textContent = \"8AM - 5PM\";\n\n          mainMeal.textContent = \"Potato Gnocchi with Sheep Cheese\";\n          \n          soup.textContent = \"Creamy Garlic\";\n          break;\n        case 1: \n          day.classList.add(\"tuesday\");\n          dayNameH1.textContent = \"TUESDAY\";\n          openingHoursH1.textContent = \"8AM - 5PM\";\n          \n          mainMeal.textContent = \"Potato Gnocchi with Sheep Cheese\";\n          \n          soup.textContent = \"Creamy Garlic\";\n          break;\n        case 2: \n          day.classList.add(\"wednesday\");\n          dayNameH1.textContent = \"WEDNESDAY\";\n          openingHoursH1.textContent = \"8AM - 5PM\";\n          \n          mainMeal.textContent = \"Potato Gnocchi with Sheep Cheese\";\n          \n          soup.textContent = \"Creamy Garlic\";\n          break;\n        case 3: \n          day.classList.add(\"thursday\");\n          dayNameH1.textContent = \"THURSDAY\";\n          openingHoursH1.textContent = \"8AM - 5PM\";\n          \n          mainMeal.textContent = \"Potato Gnocchi with Sheep Cheese\";\n          \n          soup.textContent = \"Creamy Garlic\";\n          break;\n        case 4: \n          day.classList.add(\"friday\");\n          dayNameH1.textContent = \"FRIDAY\";\n          openingHoursH1.textContent = \"8AM - 5PM\";\n          \n          mainMeal.textContent = \"Potato Gnocchi with Sheep Cheese\";\n          \n          soup.textContent = \"Creamy Garlic\";\n          break;\n        case 5: \n          day.classList.add(\"saturday\");\n          rightDiv.innerHTML = \"\";\n          dayNameH1.textContent = \"SATURDAY\";\n          openingHoursH1.textContent = \"CLOSED\";\n          break;\n        case 6: \n          day.classList.add(\"sunday\");\n          rightDiv.innerHTML = \"\";\n          dayNameH1.textContent = \"SUNDAY\";\n          openingHoursH1.textContent = \"CLOSED\";\n          break;\n      }\n      \n      _pageContent.appendChild(day);\n    }\n  };\n\n  const build = () => {\n    _buildDays();\n  };\n\n  return { build }\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;