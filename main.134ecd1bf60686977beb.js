(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[179],{

/***/ 2034:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/hooks/usePrevious.js


var usePrevious = function usePrevious(value) {
  var ref = (0,react.useRef)();
  (0,react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ var hooks_usePrevious = (usePrevious);
;// CONCATENATED MODULE: ./src/components/Header/Header.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Header_module = ({"header__content":"mgEK0jPyx6_svZs0wvw8","header":"NXzL8aZsI3OuC3gU2E10","header__logo":"__LKZOuugaacI_O_lHo6","header__nav":"ac3hSgtHX8l8KyC1jtd0","header__icon":"S6BrEEIhtJX3IAiKQuM4","header__lang-btn":"IzmkFs2dhQ5C0u4YDF4Z","header__mode-btn":"WpK9h9K8d_9QN3P5Wtkz"});
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaSun.js
var FaSun = __webpack_require__(1285);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaMoon.js
var FaMoon = __webpack_require__(5643);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/md/MdLanguage.js
var MdLanguage = __webpack_require__(169);
;// CONCATENATED MODULE: ./src/data/text.json
var text_namespaceObject = JSON.parse('{"menuHome":{"en":"Home","ru":"Главная"},"menuProjects":{"en":"Projects","ru":"Проекты"},"heroHeading":{"en":"Web-development is","ru":"Web-разработка - это"},"heroHeadingHighlight":{"en":["addictive","exciting","funny"],"ru":["увлекательно","круто","весело"]},"heroText":{"en":"Hi, I\'m Savva Prokofev, a junior frontend developer from Russia.Here is my personal portfolio website where you can find out more about me and my projects.","ru":"Привет, меня зовут Савва Прокофьев. Я начинающий frontend-разработчик. Это мой сайт-портфолио, где вы можете узнать больше обо мне и о моих проектах."},"principlesHeading":{"en":"Principles","ru":"Правила"},"kissDetails":{"en":"I always take advantage of code complexity reduction as long as it does not affect its quality.","ru":"Если есть возможность сделать код проще, я всегда стараюсь ею воспользоваться. При условии, что это не снизит качество кода."},"dryDetails":{"en":"I\'m aware of the fact that code duplication is evil, because it makes code unmaintainable consequently.","ru":"Я понимаю, что повторение кода - это не совсем хорошо по той причине, что он делает код сложно поддерживаемым в будущем."},"englishFirstDetails":{"en":"Why would you need to write anything in Russian while you may well do that in English ?","ru":"Зачем писать на русском, когда все это можно сделать на английском ? Вед сам код пишется на английском."},"statsCourseHours":{"en":"hours of courses","ru":"часов пройденных курсов"},"statsPassedCourses":{"en":"passed courses","ru":"пройденных курсов"},"statsMadeProjects":{"en":"pet-projects","ru":"готовых проектов"},"skillsHeading":{"en":"Techologies I\'m familiar with","ru":"Навыки"},"academicHeading":{"en":"Academic Background","ru":"Образование"},"academicDescription":{"en":["In 2021 I obtained a bachelor\'s degree at Bussiness Informatics at Saint-Petersburg State University. To put it simply, I was taught to work as a business analyst. The program\'s curriculum included a lot of courses from both programming and economic domains.","Along my studies I was lucky enough to try out different programming languages. The first program I wrote was a C++ program and afterwards I also slightly touched upon such languages as PHP, Java, MATLAB, R and SQL. Plus, throughout the whole studies there was a great emphasis on database projection.","Although I don\'t have any experience in commercial software development yet, I believe I do have enough knowledge and skills to find a solution for complex problems."],"ru":["В 2021 я получил диплом бакалавра по направлениею Бизнес-Информатика в СПбГУ. Образовательная программа была достаточно обширная и включала курсы как по экономике, так и по информатике","Первую программу я написал на C++, а далее в процессе обучения познакомился с такими языками, как PHP, Java, MATLAB, R и SQL. Особое внимание уделялось проектированию БД и математическому моделированию.","Несмотря на отсутствие опыта коммерческой разработки, уверен, что обладаю достаточным количеством знаний и навыком для решения сложных задач."]},"favoritesHeader":{"en":"Favorites","ru":"Примеры кода"},"connectHeader":{"en":["#Me","at social networks"],"ru":["#Я","в социальных сетях"]},"projectsHeader":{"en":"Projects","ru":"Проекты"},"projects":{"paintClone":{"ru":["Paint Клон","Достаточно простое приложение, написаное полность на Vanilla JS. Изначально было сделано на основе одного туториала, но впоследствии было принято решение расширить функционал, сделав сайт полность адаптивным. В проекте используется Canvas API."],"en":["Paint Clone","Pretty simple app written with Vanilla JS that allows users to draw any figures they want enabled by Canvas API. I got insipiration from a tutorial, but later there was made a decision to extend functionality by making the whole website fully responsive."]},"quoteGenerator":{"ru":["Генератор Цитат","Приложение, использующее Random Quote API как источник цитат и написанное на чистом JavaScript. Также есть возможность запостить понравившуюся цитату в Твиттере."],"en":["Quote Generator","Vanilla JS application that makes use of Random Quote API. In addition to that, it is possible to publish the quote that you find interesting or reasonating on Twitter."]},"calculator":{"ru":["Калькулятор","Калькулятор, написанный на  JavaScript. Ничего особенного за исключением того, что сайт полностью адаптивен."],"en":["Calculator","Simple calculator written in JavaScript. Nothing special except the fact that website is fully responsive."]},"las":{"ru":["LAS","Мой первый сайт, написанный в 2020 году с помощью HTML, Sass и немного JS. Помимо этого, все стили написаны согласно BEM-нотации и следуют паттерну 7 in 1. Финальная версия была собрана с помощью Webpack как многостраничный сайт."],"en":["LAS","My first website written in 2020 with HTML and Sass with a small portion of JavaScript added. The project styles heavily rely upon BEM notation and follows 7 in 1 Pattern. Apart from that, the final app code was bundled up with Webpack like a multipage website. "]},"clashGame":{"ru":["Clash Игра","Первое приложение, написанное на Vue.js и представляющее собой обычную PvE игру. Наряду с Vue.js используется также Bootstrap для приемлемого дизайна."],"en":["Clash Game","First app written in Vue. It represents just very primitive PvE game where a player needs to fight a monster. As far as technologies are concerned, the application also makes use of Bootstrap in order to make the website a bit nicier."]},"newsWebsite":{"ru":["Новостной сайт","Шаблон для сайта новостей, написанный с помощью Sass и чистого JS. Стили написаны по BEM-нотации и следуют паттерну 7 in 1. Сложные интерактивные компоненты были написаны с нуля без использования библиотек, но по структуре приближены к библиотекам. Для написания слайдера использвались классы и наследование. Сайт полностью адаптивен."],"en":["News Website","Complex HTML-template that is specifically designed for news media. Styles are written according to BEM-notation based upon 7 in 1 pattern, while such complex and interactive components like a carousels, a running line and a tab keeper are written in pure JS. OOP is commonly used to make the carousel more versatile depending on the context. In other words, carousels were built in library-like fashion. Fully responsive."]},"thesis":{"ru":["Сайт для дипломной работы","Небольшое приложение, написанное для презентации дипломной работы. Фронтенд написан полностью на чистом JS, а бэкенд - на Python c использованием реляционной базы данных SQLite3. Клиентская часть приложения структурирована согласно MVC-паттерну и включает в себя такие библиотеки, как Raphael для SVG-карт и Chart.js для построения адаптивных графиков, а также Reveal.js для презентации. Статические файлы размещены на GithubPages, а сам API размещен на Heroku с поддержкой CORS-заголовков."],"en":["Thesis website","The small app that is aimed at presenting my thesis in interactive and nice way with fronted written in pure JS and backend built with Python, repsectively. The client side is strutctured according to MVC pattern, while the backend makes use of SQLite3 database. Apart from that, SVG-based library Raphael is used to display the Russian map, whereas Chart.js is integrated in order to build responsive and interactive graphs. Presentation is written with Reveal.JS. Most notably, static files are stored at GithubPages, while API is deployed on Heroku with CORS headers support."]},"facebookClone":{"ru":["Фэйсбук Клон","Приложениие, частично напоминающее Фейсбук по функционалу, написанное на Next.js. Аутентификация была сделана с помощью NextAuth.js через Вконтакте API. Любой пользователь может размещать посты с различными медиа-файлами. Все медиа-файлы, загруженные пользователями, хранятся на Cloudinary. Вдобавок иcпользуется Socket.IO для того, чтобы отоброжать только что опубликованные посты в режиме реального времени. MongoDB также используется  для хранения пользовательских данных"],"en":["Facebook Clone","Facebook-like SPA that is written with Next.js. The authentication is implemented by NextAuth.js through VK API. User can publish posts with different media files attached. All media files uploaded by users are stored in Cloudinary. Socket.io is used to notify about  newly published posts in real time. Lazy loading is realized as a custom hook. MongoDB is also integrated into the project in order to store all users data."]},"wShop":{"ru":["WShop","Одностраничный интернет-магазин, написанный на React, React Router,Redux и Bootstrap. Фронтенд полностью написан на TypeScript, в то же время серверная часть написана на Express.js и Mongoose в соответствии с  MVC-паттерном. Главные фичи:JSON WebToken аутентификация, Paypal оплата, возможность выставлять рейтинг товарам, пагинация, панель админа, валидация форм и покупная корзина.","Для воспроизведения тестовой оплаты можно использовать следующие данные (почтовый ящик:sb-hvpbt7526215@personal.example.com -- пароль:Qwerty12345#), а для того, чтобы получить доступ к админной панели, необходимо войти на сайт по почтовому адресу admin@example.com с паролем 12345Test@"],"en":["WShop","E-commerce SPA built with React, React Router,Redux and Bootstrap. Fronted part of the app is written completely in TypeScript, while backend is made with Expres.js and Mongoose in accordance to MVC-pattern. The main features are as follows: JSON WebToken authentication, Paypal payment, ability to rate products, pagination, admin panel, form validation and shopping cart.","To make a payment you can use the following credentials(email:sb-hvpbt7526215@personal.example.com -- password:Qwerty12345#) and in order to check out the admin page you would have to login as admin@example.com with password 12345Test@"]},"portfolio":{"ru":["Сайт-портофолио","Вы сейчас находитесь на этом сайте ☺. Данный сайт полностью написан на React c использованием Sass, а также некоторых других React-библиотек для анимации."],"en":["Portfolio","You\'re currently looking at this website ☺. It is written fully in React with Sass used for styling as well as other fancy animation libraries."]}}}');
;// CONCATENATED MODULE: ./src/store/GlobalContext.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var GlobalCtx = /*#__PURE__*/react.createContext({
  lang: {
    currentLanguage: "",
    textContent: {},
    toggleLanguage: function toggleLanguage() {}
  },
  theme: {
    isDarkTheme: false,
    toggleTheme: function toggleTheme() {},
    setDarkTheme: function setDarkTheme(themeType) {}
  }
});

var GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react.useState)("en"),
      _useState2 = _slicedToArray(_useState, 2),
      currentLanguage = _useState2[0],
      setCurrentLanguage = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDarkTheme = _useState4[0],
      setIsDarkTheme = _useState4[1];

  var toggleLanguage = function toggleLanguage() {
    return setCurrentLanguage(function (prevLang) {
      return prevLang === "en" ? "ru" : "en";
    });
  };

  var toggleTheme = function toggleTheme() {
    return setIsDarkTheme(function (prevTheme) {
      return !prevTheme;
    });
  };

  var store = {
    lang: {
      currentLanguage: currentLanguage,
      textContent: text_namespaceObject,
      toggleLanguage: toggleLanguage
    },
    theme: {
      isDarkTheme: isDarkTheme,
      toggleTheme: toggleTheme,
      setDarkTheme: setIsDarkTheme
    }
  };
  (0,react.useEffect)(function () {
    var hours = new Date().getHours();
    setIsDarkTheme(hours > 17 || hours < 6);
  }, []);
  (0,react.useEffect)(function () {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);
  return /*#__PURE__*/react.createElement(GlobalCtx.Provider, {
    value: store
  }, children);
};

/* harmony default export */ var GlobalContext = (GlobalProvider);
;// CONCATENATED MODULE: ./src/components/Text.js




var Text = function Text(_ref) {
  var path = _ref.path;

  var _useContext = (0,react.useContext)(GlobalCtx),
      currentLanguage = _useContext.lang.currentLanguage;

  return /*#__PURE__*/react.createElement(react.Fragment, null, text_namespaceObject[path][currentLanguage]);
};

/* harmony default export */ var components_Text = (Text);
;// CONCATENATED MODULE: ./src/components/Header/Header.js
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }

function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Header_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Header = function Header() {
  var _useContext = (0,react.useContext)(GlobalCtx),
      _useContext$lang = _useContext.lang,
      currentLanguage = _useContext$lang.currentLanguage,
      toggleLanguage = _useContext$lang.toggleLanguage,
      _useContext$theme = _useContext.theme,
      isDarkTheme = _useContext$theme.isDarkTheme,
      toggleTheme = _useContext$theme.toggleTheme;

  var _useState = (0,react.useState)(window.pageXOffset < 100),
      _useState2 = Header_slicedToArray(_useState, 2),
      isHeaderVisible = _useState2[0],
      setIsHeaderVisible = _useState2[1];

  var _useState3 = (0,react.useState)(window.pageYOffset),
      _useState4 = Header_slicedToArray(_useState3, 2),
      scrolledHeight = _useState4[0],
      setScrolledHeight = _useState4[1];

  var previosScrolledHeight = hooks_usePrevious(scrolledHeight);
  (0,react.useEffect)(function () {
    var onScrollHanler = function onScrollHanler() {
      setScrolledHeight(window.pageYOffset);
    };

    window.addEventListener("scroll", onScrollHanler);
    return function () {
      return window.removeEventListener("scroll", onScrollHanler);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (previosScrolledHeight !== null && window.pageYOffset - previosScrolledHeight < 0) {
      setIsHeaderVisible(true);
    } else if (window.pageYOffset > 100) {
      setIsHeaderVisible(false);
    }
  }, [scrolledHeight]);
  return /*#__PURE__*/react.createElement("header", {
    className: Header_module.header,
    style: {
      transform: "translateY(".concat(isHeaderVisible ? 0 : -100, "%)")
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: Header_module.header__content
  }, /*#__PURE__*/react.createElement("div", {
    className: Header_module.header__logo
  }, "<WS />"), /*#__PURE__*/react.createElement("nav", null, /*#__PURE__*/react.createElement("ul", {
    className: Header_module.header__nav
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#hero"
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "menuHome"
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#projects"
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "menuProjects"
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("button", {
    className: "".concat(Header_module["header__mode-btn"]),
    onClick: toggleTheme
  }, isDarkTheme ? /*#__PURE__*/react.createElement(FaMoon/* FaMoon */.T, {
    className: Header_module.header__icon
  }) : /*#__PURE__*/react.createElement(FaSun/* FaSun */.M, {
    className: Header_module.header__icon
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("button", {
    className: Header_module["header__lang-btn"],
    onClick: toggleLanguage
  }, /*#__PURE__*/react.createElement(MdLanguage/* MdLanguage */.$, {
    className: Header_module.header__icon
  }), /*#__PURE__*/react.createElement("span", null, currentLanguage)))))));
};

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_module = ({"footer":"LZE0atDfPBb_Exa8USqV"});
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js



var Footer = function Footer() {
  return /*#__PURE__*/react.createElement("div", {
    className: Footer_module.footer
  }, /*#__PURE__*/react.createElement("p", null, "\xA9", new Date().getFullYear(), " All rights reserved by WebSavva"), /*#__PURE__*/react.createElement("p", null, "Inspired by", " ", /*#__PURE__*/react.createElement("a", {
    href: "https://stashchuk.com/",
    target: "_blank"
  }, "staschuk.com"), " ", "and", " ", /*#__PURE__*/react.createElement("a", {
    href: "https://copilot.github.com/",
    target: "_blank"
  }, "copilot.github.com")));
};

/* harmony default export */ var Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/UI/Layout.js




var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Header_Header, null), children, /*#__PURE__*/react.createElement(Footer_Footer, null));
};

/* harmony default export */ var UI_Layout = (Layout);
;// CONCATENATED MODULE: ./src/components/HeroBlock/HeroBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var HeroBlock_module = ({"hero__text":"bbPuQUf9IdtG4edjN4Tj","hero__content":"_gkaKjmP2bfP_S1rmaVo","hero":"HwwG_Hs6gQEXeEOGGwK5","hero__intro":"_d_QXyAxAZYepLqKCrh0","hero__heading":"_U0jXEkVkJi9n6uedFf7","hero__heading--highlight":"DWF20sIrR70QHqA9CWhO","hero__img":"_Ussq8DBFuAiqOCsBqpH","first-steam":"lMft_lMcei4SiT9QOa9p","steamUp":"G_N6yRtr6J1grnEctHqS","second-steam":"fQRn1ZV_EEQWz31R40pe","third-steam":"eUlP5f8_NAbC_XDstnoa"});
;// CONCATENATED MODULE: ./src/components/HeroBlock/HeroImage.js
function HeroImage_slicedToArray(arr, i) { return HeroImage_arrayWithHoles(arr) || HeroImage_iterableToArrayLimit(arr, i) || HeroImage_unsupportedIterableToArray(arr, i) || HeroImage_nonIterableRest(); }

function HeroImage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function HeroImage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return HeroImage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HeroImage_arrayLikeToArray(o, minLen); }

function HeroImage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function HeroImage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function HeroImage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var HeroImage = function HeroImage() {
  var _useState = (0,react.useState)({
    size: 1.9,
    isDown: true
  }),
      _useState2 = HeroImage_slicedToArray(_useState, 2),
      eyeState = _useState2[0],
      setEyeState = _useState2[1];

  var playEyeBlinkAnimation = function playEyeBlinkAnimation(duration) {
    var stepDuration = duration / 9;
    var animation = setInterval(function () {
      return setEyeState(function (prev) {
        if (prev.isDown) {
          var newSize = prev.size - 0.1;
          return {
            size: newSize,
            isDown: newSize >= 1
          };
        } else {
          var _newSize = prev.size + 0.1;

          return {
            size: _newSize,
            isDown: !(_newSize <= 1.9)
          };
        }
      });
    }, stepDuration);
    setTimeout(function () {
      return clearInterval(animation);
    }, duration * 4);
  };

  (0,react.useEffect)(function () {
    playEyeBlinkAnimation(90);
  }, []);
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 400 300"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M244.21,119s.42-6.69-2.82-8.27-15.76-4.53-15.76,1.93,8,12.53,9.41,13.38,8.06,20.64,8.06,20.64L257.84,130Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.1,147.19H243a.49.49,0,0,1-.38-.33c-3.13-9.34-6.94-19.66-7.85-20.38-1.57-.93-9.64-7.12-9.64-13.8a3.82,3.82,0,0,1,1.86-3.46c3.78-2.36,12.1-.16,14.62,1.08,3.16,1.54,3.16,7.18,3.11,8.49l13.44,10.82a.52.52,0,0,1,.18.35.5.5,0,0,1-.12.37L243.47,147A.48.48,0,0,1,243.1,147.19Zm-11.45-38a8,8,0,0,0-4.13.88,2.84,2.84,0,0,0-1.39,2.61c0,6.13,7.74,12.1,9.17,13s6.16,14.66,8,20.09l13.83-15.66L243.9,119.4a.49.49,0,0,1-.19-.42c0-.07.36-6.38-2.53-7.79A26,26,0,0,0,231.65,109.18Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "59.87",
    y: "190.52",
    width: "54.58",
    height: "9.06",
    transform: "translate(174.33 390.09) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.45,200.07H59.87a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,.5-.5h54.58a.5.5,0,0,1,.5.5v9A.5.5,0,0,1,114.45,200.07Zm-54.08-1H114v-8H60.37Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "83.05",
    y: "190.52",
    width: "31.4",
    height: "9.06",
    transform: "translate(197.5 390.09) rotate(-180)",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.45,200.07H83.05a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,.5-.5h31.4a.5.5,0,0,1,.5.5v9A.5.5,0,0,1,114.45,200.07Zm-30.9-1H114v-8H83.55Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "53.06",
    y: "181.11",
    width: "54.58",
    height: "9.06",
    transform: "translate(160.69 371.28) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.64,190.67H53.06a.5.5,0,0,1-.5-.5v-9.06a.5.5,0,0,1,.5-.5h54.58a.5.5,0,0,1,.5.5v9.06A.51.51,0,0,1,107.64,190.67Zm-54.08-1h53.58v-8.06H53.56Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "76.23",
    y: "181.11",
    width: "31.4",
    height: "9.06",
    transform: "translate(183.87 371.28) rotate(-180)",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.64,190.67H76.23a.51.51,0,0,1-.5-.5v-9.06a.5.5,0,0,1,.5-.5h31.41a.5.5,0,0,1,.5.5v9.06A.51.51,0,0,1,107.64,190.67Zm-30.91-1h30.41v-8.06H76.73Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "59.87",
    y: "171.7",
    width: "54.58",
    height: "9.06",
    transform: "translate(174.33 352.47) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.45,181.26H59.87a.5.5,0,0,1-.5-.5V171.7a.51.51,0,0,1,.5-.5h54.58a.5.5,0,0,1,.5.5v9.06A.5.5,0,0,1,114.45,181.26Zm-54.08-1H114V172.2H60.37Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "83.05",
    y: "171.7",
    width: "31.4",
    height: "9.06",
    transform: "translate(197.5 352.47) rotate(-180)",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.45,181.26H83.05a.5.5,0,0,1-.5-.5V171.7a.5.5,0,0,1,.5-.5h31.4a.5.5,0,0,1,.5.5v9.06A.5.5,0,0,1,114.45,181.26Zm-30.9-1H114V172.2H83.55Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "170.72",
    y: "210.66",
    width: "75.26",
    height: "35.47",
    transform: "translate(416.7 456.78) rotate(-180)",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246,246.62H170.72a.5.5,0,0,1-.5-.5V210.66a.5.5,0,0,1,.5-.5H246a.5.5,0,0,1,.5.5v35.46A.5.5,0,0,1,246,246.62Zm-74.76-1h74.26V211.16H171.22Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "48.43",
    y: "199.69",
    width: "221.72",
    height: "10.97",
    rx: "3.48",
    transform: "translate(318.57 410.35) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.66,211.16H51.91a4,4,0,0,1-4-4v-4a4,4,0,0,1,4-4H266.66a4,4,0,0,1,4,4v4A4,4,0,0,1,266.66,211.16Zm-214.75-11a3,3,0,0,0-3,3v4a3,3,0,0,0,3,3H266.66a3,3,0,0,0,3-3v-4a3,3,0,0,0-3-3Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "48.43",
    y: "199.69",
    width: "129.42",
    height: "10.97",
    rx: "2.44",
    transform: "translate(226.28 410.35) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M175.41,211.16H50.87a2.94,2.94,0,0,1-2.94-2.94v-6.09a2.94,2.94,0,0,1,2.94-2.94H175.41a2.94,2.94,0,0,1,2.94,2.94v6.09A2.94,2.94,0,0,1,175.41,211.16Zm-124.54-11a1.94,1.94,0,0,0-1.94,1.94v6.09a1.94,1.94,0,0,0,1.94,1.94H175.41a1.94,1.94,0,0,0,1.94-1.94v-6.09a1.94,1.94,0,0,0-1.94-1.94Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158,153.79s-3,31.05,3.68,35.26c6.23,3.9,13.14,2.76,17,2.76a6.66,6.66,0,0,1,6.58,4.39l1,3.37h-48a29.29,29.29,0,0,1-8.89-9.19c-3.22-5.67-1.22-35.14-1.22-35.14Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M186.23,200.07h-48A.48.48,0,0,1,138,200a29.46,29.46,0,0,1-9.06-9.38c-3.26-5.73-1.38-34.2-1.29-35.41a.51.51,0,0,1,.47-.47l29.83-1.45a.48.48,0,0,1,.39.16.46.46,0,0,1,.13.39c0,.08-.75,7.84-.67,16,.11,10.67,1.53,17.16,4.13,18.79,5.06,3.16,10.53,2.92,14.53,2.75.8,0,1.53-.07,2.18-.07a7.18,7.18,0,0,1,7.05,4.74l1,3.38a.49.49,0,0,1-.07.44A.51.51,0,0,1,186.23,200.07Zm-47.83-1h47.15l-.82-2.73a6.19,6.19,0,0,0-6.1-4c-.64,0-1.36,0-2.14.07-3.9.17-9.78.43-15.1-2.91-6.47-4.05-4.37-30.74-4-35.15l-28.81,1.4c-.23,3.7-1.71,29.31,1.19,34.41A28.74,28.74,0,0,0,138.4,199.07Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M130.43,183.33c0,7.66,2.3,10,5.37,10h12a4.05,4.05,0,0,1,3.8,2.65l1.33,3.63H134.42c-4.75,0-8.12-7.2-8.28-14.86s0-29.47,0-29.47h4.14S130.43,175.66,130.43,183.33Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M153,200.07H134.42c-5.3,0-8.63-7.8-8.78-15.35s0-29.26,0-29.48a.51.51,0,0,1,.5-.5h4.14a.5.5,0,0,1,.5.5c0,.2.15,20.51.15,28.09,0,9.46,3.67,9.46,4.87,9.46h12a4.57,4.57,0,0,1,4.27,3l1.33,3.63a.53.53,0,0,1-.06.46A.49.49,0,0,1,153,200.07Zm-26.33-44.33c0,3.3-.14,22,0,29,.16,7.92,3.65,14.37,7.78,14.37h17.83l-1.08-2.95a3.57,3.57,0,0,0-3.33-2.33h-12c-4,0-5.87-3.42-5.87-10.46s-.12-24.41-.14-27.59Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M195.2,69.23l7.26,83a6.58,6.58,0,0,1-6.49,7.43H97a8.13,8.13,0,0,1-7.79-7.43l-7.26-83a6.57,6.57,0,0,1,6.49-7.42h99A8.11,8.11,0,0,1,195.2,69.23Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M196,160.17H97a8.64,8.64,0,0,1-8.29-7.89l-7.26-83a7.4,7.4,0,0,1,1.86-5.74,6.85,6.85,0,0,1,5.13-2.23h99a8.63,8.63,0,0,1,8.29,7.88l7.26,83a7.44,7.44,0,0,1-1.86,5.74A6.9,6.9,0,0,1,196,160.17ZM88.43,62.31A5.85,5.85,0,0,0,84,64.21a6.46,6.46,0,0,0-1.61,5l7.27,83a7.61,7.61,0,0,0,7.29,7h99a5.89,5.89,0,0,0,4.39-1.91,6.46,6.46,0,0,0,1.61-5l-7.27-83h0a7.6,7.6,0,0,0-7.29-7Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M195.53,68.9l6.94,79.25a6.29,6.29,0,0,1-6.21,7.09h-94.5a7.76,7.76,0,0,1-7.44-7.09L87.38,68.9a6.28,6.28,0,0,1,6.21-7.09h94.5A7.75,7.75,0,0,1,195.53,68.9Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M196.26,155.74h-94.5a8.26,8.26,0,0,1-7.94-7.54L86.89,68.94a7.1,7.1,0,0,1,1.78-5.5,6.61,6.61,0,0,1,4.92-2.13h94.5A8.26,8.26,0,0,1,196,68.85L203,148.11a7.1,7.1,0,0,1-1.78,5.5A6.62,6.62,0,0,1,196.26,155.74ZM93.59,62.31a5.58,5.58,0,0,0-4.18,1.81,6.11,6.11,0,0,0-1.53,4.73l6.94,79.26a7.24,7.24,0,0,0,6.94,6.63h94.5a5.58,5.58,0,0,0,4.18-1.81A6.16,6.16,0,0,0,202,148.2L195,68.94h0a7.24,7.24,0,0,0-6.94-6.63Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M201.3,134.84l1.17,13.31a6.29,6.29,0,0,1-6.21,7.09h-94.5a7.76,7.76,0,0,1-7.44-7.09l-1.17-13.31Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M196.26,155.74h-94.5a8.26,8.26,0,0,1-7.94-7.54l-1.16-13.31a.45.45,0,0,1,.13-.38.46.46,0,0,1,.36-.17H201.3a.5.5,0,0,1,.5.46L203,148.11a7.1,7.1,0,0,1-1.78,5.5A6.62,6.62,0,0,1,196.26,155.74ZM93.7,135.34l1.12,12.77a7.24,7.24,0,0,0,6.94,6.63h94.5a5.58,5.58,0,0,0,4.18-1.81A6.16,6.16,0,0,0,202,148.2l-1.13-12.86Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: "148.12",
    cy: "145.04",
    rx: "4.29",
    ry: "4.73",
    transform: "translate(-55.67 107.03) rotate(-33.83)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M148.52,150.14a5.53,5.53,0,0,1-5.31-5,4.76,4.76,0,0,1,1.2-3.71,4.42,4.42,0,0,1,3.31-1.44A5.54,5.54,0,0,1,153,145h0a4.76,4.76,0,0,1-1.2,3.71A4.44,4.44,0,0,1,148.52,150.14Zm-.8-9.2a3.44,3.44,0,0,0-2.57,1.12,3.81,3.81,0,0,0-1,2.94,4.51,4.51,0,0,0,4.32,4.14,3.43,3.43,0,0,0,2.57-1.11,3.82,3.82,0,0,0,.95-2.94h0A4.52,4.52,0,0,0,147.72,140.94Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "154.04",
    y: "195.7",
    width: "72.73",
    height: "3.99",
    transform: "translate(380.81 395.39) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M226.77,200.19H154a.5.5,0,0,1-.5-.5v-4a.5.5,0,0,1,.5-.5h72.73a.5.5,0,0,1,.5.5v4A.5.5,0,0,1,226.77,200.19Zm-72.23-1h71.73v-3H154.54Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M237,215s-33.59,8.48-33.59,31.17h88.79s14.12-13.63,10.63-34.57C267.06,212.78,237,215,237,215Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M292.21,246.62H203.42a.5.5,0,0,1-.5-.5c0-22.82,33.63-31.56,34-31.65H237c.3,0,30.47-2.19,65.85-3.41a.48.48,0,0,1,.51.42c3.49,21-10.64,34.87-10.78,35A.52.52,0,0,1,292.21,246.62Zm-88.29-1H292c1.44-1.48,13.38-14.48,10.42-33.56-34.53,1.21-64,3.29-65.33,3.39C235.77,215.8,204.4,224.3,203.92,245.62Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.94,100s7.94-5.79,10.19-9.39,7.28-28.76-4.46-26.84c-11.54-16.47-35.25-9.49-38.83.68-3.15,8.93,8.34,11,12.32,12.23s8.26,20.19,13.7,23.32S280.94,100,280.94,100Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M278.11,101.86a9.35,9.35,0,0,1-4.5-1.46c-3-1.72-5.48-7.61-7.9-13.3-2-4.65-4-9.46-5.7-10-.42-.13-.92-.27-1.48-.42-3.37-.94-9-2.52-11-6.35a7.46,7.46,0,0,1-.16-6.1c1.82-5.17,8.59-9.53,16.45-10.61,9.4-1.28,17.79,2.2,23.08,9.56a5.58,5.58,0,0,1,5.78,2.52c4.23,6.35.62,22.33-1.13,25.13-2.18,3.49-9.34,8.81-10.23,9.47a3.5,3.5,0,0,1-1.94,1.37A4.38,4.38,0,0,1,278.11,101.86ZM267.6,54.37a26.62,26.62,0,0,0-3.64.25c-7.51,1-13.95,5.12-15.65,9.95a6.52,6.52,0,0,0,.11,5.31c1.79,3.44,7.17,5,10.38,5.84l1.51.44c2.13.67,4.07,5.25,6.32,10.55s4.78,11.27,7.48,12.82c2,1.14,3.7,1.56,5,1.2a2.3,2.3,0,0,0,1.43-1,.5.5,0,0,1,.15-.17c.08-.06,7.88-5.77,10.06-9.25,1.62-2.61,5.08-18.12,1.14-24a4.68,4.68,0,0,0-5.1-2,.5.5,0,0,1-.49-.21A22.22,22.22,0,0,0,267.6,54.37Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.06,83.14s-5.73,7.65-4.73,9.36,4.67.83,4.67.83",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254,94.07a3.42,3.42,0,0,1-3.1-1.31c-1.07-1.86,3.38-8.06,4.77-9.92a.5.5,0,0,1,.7-.1.51.51,0,0,1,.1.7c-2.66,3.55-5.21,7.93-4.7,8.81.66,1.14,3.2.82,4.12.6a.51.51,0,0,1,.61.37.5.5,0,0,1-.37.6A9.65,9.65,0,0,1,254,94.07Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.8,72.68c-3.51,2.54-2.88,8.38-3.07,12.14q-.39,7.94-.43,15.88c0,3.36,8.65,3.94,10.24,3l-2.13,13.16L281.05,111l-.11-11s-5.9-.3-8.9-7.33S270.4,70.8,270.4,70.8,261.22,70.21,257.8,72.68Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M262.41,117.38a.49.49,0,0,1-.32-.12.5.5,0,0,1-.17-.46l2-12.35a14.55,14.55,0,0,1-8.4-1.24,2.91,2.91,0,0,1-1.73-2.51c0-5.28.18-10.63.44-15.91,0-.63,0-1.31.05-2,.05-3.66.1-8.21,3.22-10.47h0c3.53-2.56,12.55-2,12.93-2a.54.54,0,0,1,.35.18.48.48,0,0,1,.11.37c0,.15-1.3,14.76,1.61,21.59,2.83,6.63,8.24,7,8.47,7a.51.51,0,0,1,.47.5l.11,11a.5.5,0,0,1-.35.48l-18.63,5.93Zm2.13-14.16a.52.52,0,0,1,.29.09.5.5,0,0,1,.21.49l-2,12.36,17.51-5.57-.1-10.18c-1.51-.23-6.25-1.43-8.87-7.58-2.72-6.4-1.94-18.82-1.72-21.55-1.95-.08-9-.21-11.77,1.81s-2.77,6.24-2.81,9.68c0,.73,0,1.43-.05,2.07-.26,5.26-.41,10.6-.44,15.86q0,.93,1.23,1.65c2.4,1.39,7.25,1.53,8.27.94A.59.59,0,0,1,264.54,103.22Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.65,96.76A27.22,27.22,0,0,0,261,95.41",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.65,97.26a.5.5,0,0,1-.5-.46.49.49,0,0,1,.47-.53,27.93,27.93,0,0,0,6.25-1.33.5.5,0,0,1,.33,1,27.89,27.89,0,0,1-6.51,1.37Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266,87.12a7.2,7.2,0,0,1,1.69-3.54,10,10,0,0,1,2.06-2.29,3.48,3.48,0,0,1,2.9-.71,3.22,3.22,0,0,1,2,1.77,6,6,0,0,1,.51,2.66,11.34,11.34,0,0,1-5.82,9.75l.31-.3",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M269.31,95.26a.5.5,0,0,1-.34-.86l.29-.28.07.06a10.89,10.89,0,0,0,5.3-9.17,5.64,5.64,0,0,0-.46-2.45,2.72,2.72,0,0,0-1.65-1.49,3,3,0,0,0-2.48.62,9.94,9.94,0,0,0-2,2.18,6.91,6.91,0,0,0-1.59,3.28.52.52,0,0,1-.54.47.5.5,0,0,1-.46-.54,7.61,7.61,0,0,1,1.79-3.8,10.52,10.52,0,0,1,2.16-2.39,3.94,3.94,0,0,1,3.33-.79,3.68,3.68,0,0,1,2.29,2,6.55,6.55,0,0,1,.56,2.88,11.92,11.92,0,0,1-6.08,10.19A.5.5,0,0,1,269.31,95.26Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: "257.85",
    cy: "79.11",
    rx: String(eyeState.size),
    ry: "0.74",
    transform: "translate(150.31 326.46) rotate(-83.56)",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M284.54,114.43l-1.21-5.93H259.94l-3,8.52A46.07,46.07,0,0,0,284.54,114.43Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.3,118.52a39.53,39.53,0,0,1-9.54-1,.55.55,0,0,1-.31-.25.51.51,0,0,1,0-.4l3-8.51a.5.5,0,0,1,.47-.34h23.39a.5.5,0,0,1,.49.4l1.21,5.93a.5.5,0,0,1-.3.56A48.38,48.38,0,0,1,266.3,118.52Zm-8.75-1.87A46.62,46.62,0,0,0,284,114.12L282.92,109H260.29Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M302.84,211.55s8.86-72.49-1.66-87.31-36.34-17.21-48.29-7.65S235,219.52,235,219.52,267.21,223.48,302.84,211.55Z",
    fill: "var(--primary-color)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M163.25,176.52c1-2.83,10.78-5.59,13.88-5.59,2,0,7.48,2.4,11,4.06h0l33.92,3.55,18.33-31.85,16.52,18.83s-12.39,30.18-18,32.18-54.22-11.56-54.22-11.56L173.44,183c-4.28,1.33-8.12-2.95-8.12-3.39s-1.77,4.57-3.1,4.43S162.22,179.35,163.25,176.52Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M237.2,198.38c-10.38,0-50.83-11.24-52.67-11.75l-11.09-3.07a7.64,7.64,0,0,1-6.5-1.52,10.44,10.44,0,0,1-1.57-1.42c-1,2.09-2,4.07-3.21,3.95a1,1,0,0,1-.75-.48c-.8-1.29.52-5.4,1.37-7.74h0c1.19-3.25,11.36-5.91,14.35-5.91,2.05,0,7.17,2.2,11.14,4.06L221.78,178l18.16-31.57a.49.49,0,0,1,.39-.24.47.47,0,0,1,.42.16l16.52,18.83a.49.49,0,0,1,.09.52c-.51,1.24-12.54,30.41-18.32,32.46A6.09,6.09,0,0,1,237.2,198.38Zm-63.76-15.84.13,0,11.22,3.1c16.76,4.67,49.59,13.09,53.92,11.56s14.08-23.06,17.61-31.61l-15.86-18.06-18,31.24a.51.51,0,0,1-.49.25l-33.92-3.56a.42.42,0,0,1-.16,0c-5.49-2.58-9.33-4-10.79-4-3.24,0-12.54,2.86-13.41,5.25-1.54,4.21-1.77,6.61-1.44,6.9.18,0,.75-.28,2.22-3.49.38-.82.49-1.06.92-1a.54.54,0,0,1,.39.42c.31.63,3.74,4.17,7.48,3Zm-7.62-2.89Zm0-.12Z",
    fill: "#231f20",
    id: "hero-hand"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M252.89,116.59l-23.4,38.65,27.41,16.43,18.23-36.83S259.4,117.27,252.89,116.59Z",
    fill: "var(--primary-color)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.89,222.1h14l16.62-75a25.25,25.25,0,0,1,24.64-19.79h30.18a25.24,25.24,0,0,1,24.73,30.3L333,246.12l-83.31-.57H222.05v-4.61A18.84,18.84,0,0,1,240.89,222.1Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M333,246.62h0l-83.3-.57H222.05a.5.5,0,0,1-.5-.5v-4.61a19.36,19.36,0,0,1,19.34-19.34h13.59L271,147a25.59,25.59,0,0,1,25.13-20.18h30.18a25.75,25.75,0,0,1,25.22,30.9l-18.06,88.52A.5.5,0,0,1,333,246.62Zm-110.44-1.57h27.13l82.9.57,18-88.12a24.74,24.74,0,0,0-24.24-29.7H296.14A24.6,24.6,0,0,0,272,147.2l-16.61,75a.51.51,0,0,1-.49.39h-14a18.36,18.36,0,0,0-18.34,18.34Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "54.81",
    y: "210.66",
    width: "115.8",
    height: "35.47",
    transform: "translate(225.41 456.78) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M170.6,246.62H54.81a.5.5,0,0,1-.5-.5V210.66a.5.5,0,0,1,.5-.5H170.6a.5.5,0,0,1,.5.5v35.46A.5.5,0,0,1,170.6,246.62Zm-115.29-1H170.1V211.16H55.31Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "170.6",
    y: "210.66",
    width: "8.95",
    height: "35.47",
    transform: "translate(350.16 456.78) rotate(-180)",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M179.55,246.62h-9a.5.5,0,0,1-.5-.5V210.66a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5v35.46A.5.5,0,0,1,179.55,246.62Zm-8.45-1h8V211.16h-8Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("line", {
    x1: "107.64",
    y1: "181.11",
    x2: "83.05",
    y2: "181.11",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.64,181.61H83.05a.5.5,0,0,1,0-1h24.59a.5.5,0,0,1,0,1Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("line", {
    x1: "107.64",
    y1: "190.17",
    x2: "76.23",
    y2: "190.17",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.64,190.67H76.23a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5h31.41a.5.5,0,0,1,.5.5A.51.51,0,0,1,107.64,190.67Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.9,166a.43.43,0,0,1-.22-.06.5.5,0,0,1-.23-.67c5.37-10.9,13.87-28.79,13.78-30.35a.49.49,0,0,1,.36-.6.51.51,0,0,1,.61.38c.46,1.76-10.49,24.18-13.85,31A.52.52,0,0,1,256.9,166Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M270.57,238.89h-.1a.49.49,0,0,1-.39-.59c.13-.64,13.28-64.73,20-98a.49.49,0,0,1,.58-.4.51.51,0,0,1,.4.59c-6.68,33.33-19.83,97.42-20,98.06A.5.5,0,0,1,270.57,238.89Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.14,82a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5l10.2,0h0a.5.5,0,0,1,.5.5.49.49,0,0,1-.49.5l-10.21,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.81,82a.5.5,0,0,1,0-1L144.1,81h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5L113.81,82Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.76,85.94a.5.5,0,1,1,0-1l10.21,0h0a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5l-10.2,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M112.05,85.92a.5.5,0,0,1,0-1l16.43,0h0a.5.5,0,0,1,.5.49.51.51,0,0,1-.5.51l-16.43,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M134.75,85.87a.5.5,0,0,1,0-1l16.43,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-16.43,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.09,89.85a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.2,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-10.2,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.46,89.82a.5.5,0,1,1,0-1l14.34,0h0a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5l-14.35,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M131.22,89.79a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5l5.87,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-5.86,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.42,93.75a.49.49,0,0,1-.5-.49.51.51,0,0,1,.5-.51l10.2,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-10.2,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.33,93.73a.5.5,0,0,1,0-1l21,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-21,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M136.75,93.68a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.2,0h0a.5.5,0,0,1,0,1l-10.2,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M98.35,97.67a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5l5.41,0h0a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5l-5.42,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.24,97.65a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5l23.64-.05h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-23.64.05Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M98.68,101.57a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.2,0h0a.5.5,0,0,1,0,1l-10.2,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.52,105.47a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l20.35,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-20.35,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M124.25,105.43a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l14.15,0a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5l-14.15,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M140.43,105.39a.5.5,0,0,1,0-1l17.52,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-17.51,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.73,109.38a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l29.67-.06h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-29.67.06Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M133.42,109.31a.5.5,0,0,1,0-1l13.35,0h0a.5.5,0,0,1,0,1l-13.35,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M149,109.28a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l39.69-.08h0a.5.5,0,0,1,0,1l-39.69.08Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.94,113.28a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l14,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-14,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M118.76,113.25a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.33,0h0a.5.5,0,0,1,0,1l-10.34,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M131.88,113.22a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.33,0h0a.5.5,0,0,1,0,1l-10.33,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.27,117.19a.5.5,0,1,1,0-1l24.8,0h0a.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5l-24.81,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M130.13,117.13a.5.5,0,0,1,0-1l12.41,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-12.4,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M145.59,117.1a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l18.89,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-18.89,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M166.47,117.06a.5.5,0,1,1,0-1l18.89,0a.48.48,0,0,1,.5.5.5.5,0,0,1-.5.5l-18.89,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.87,121.08a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l14.8,0h0a.5.5,0,0,1,0,1l-14.8,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M126.45,121.05a.5.5,0,0,1-.5-.5.49.49,0,0,1,.49-.5l14.8,0h0a.5.5,0,0,1,0,1l-14.8,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M144.14,121a.5.5,0,0,1,0-1l14.8,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-14.8,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.5,121.41a.5.5,0,0,1,0-1l14.8,0h0a.5.5,0,0,1,0,1l-14.8,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M111.4,125a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.2,0h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-10.2,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M124,125a.5.5,0,0,1-.5-.5.49.49,0,0,1,.49-.5l10.21,0h0a.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5L124,125Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M157.79,125.28h0l-21.1-.35a.5.5,0,0,1,0-1h0l21.1.35a.5.5,0,0,1,.49.51A.49.49,0,0,1,157.79,125.28Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M148.22,81.94a.5.5,0,0,1,0-1l13.79,0h0a.5.5,0,0,1,0,1l-13.79,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M171,81.93a33.52,33.52,0,0,1-3.64-.05.51.51,0,0,1-.34-.62.49.49,0,0,1,.57-.35c.62,0,9.66,0,15.62,0h0a.5.5,0,0,1,0,1C177,81.92,173.26,81.93,171,81.93Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M134.61,97.59a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l10.32,0h0a.5.5,0,0,1,0,1l-10.32,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114,101.54a.5.5,0,0,1-.5-.5.51.51,0,0,1,.5-.5l7.59,0a.55.55,0,0,1,.5.5.49.49,0,0,1-.49.5l-7.6,0Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M124.46,101.52a.5.5,0,0,1,0-1l18,0h0a.5.5,0,0,1,.5.5.49.49,0,0,1-.49.5l-18,0Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M146.12,101.48a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5l35-.08h0a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-35,.08Z",
    fill: "#68e1fd"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.79,132a.53.53,0,0,1-.29-.1l-2.09-1.54a.48.48,0,0,1-.2-.41.48.48,0,0,1,.22-.41l1.75-1.18a.5.5,0,0,1,.69.14.49.49,0,0,1-.13.69l-1.17.79,1.52,1.11a.51.51,0,0,1,.11.7A.49.49,0,0,1,108.79,132Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M111.19,132a.52.52,0,0,1-.36-.16.5.5,0,0,1,0-.7l1-.94-1.45-1a.5.5,0,0,1-.12-.7.49.49,0,0,1,.69-.12l2,1.36a.49.49,0,0,1,.21.37.56.56,0,0,1-.15.4l-1.41,1.36A.52.52,0,0,1,111.19,132Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M216.11,104.84a.52.52,0,0,1-.38-.17.51.51,0,0,1,.05-.71c1.27-1.1,3.32-3.3,2.71-5.63a7,7,0,0,0-2.37-3.15c-.44-.4-.9-.83-1.31-1.28a9.9,9.9,0,0,1-.88-11.78.5.5,0,0,1,.83.55,8.88,8.88,0,0,0,.8,10.56c.38.42.82.83,1.24,1.22a7.94,7.94,0,0,1,2.66,3.63c.74,2.85-1.58,5.38-3,6.64A.49.49,0,0,1,216.11,104.84Z",
    fill: "#d1d3d4",
    className: HeroBlock_module["third-steam"]
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.71,103.78a.5.5,0,0,1-.41-.22.49.49,0,0,1,.12-.69,2.91,2.91,0,0,0,.94-3.7,5.59,5.59,0,0,0-.65-.76l-.28-.28a8.52,8.52,0,0,1-2.29-6,4.79,4.79,0,0,1,1.23-3.32.49.49,0,0,1,.7,0,.5.5,0,0,1,0,.71,3.83,3.83,0,0,0-.93,2.62,7.56,7.56,0,0,0,2,5.31l.26.26a6.32,6.32,0,0,1,.78.91,3.89,3.89,0,0,1-1.2,5.06A.46.46,0,0,1,229.71,103.78Z",
    fill: "#d1d3d4",
    className: HeroBlock_module["first-steam"]
  }), /*#__PURE__*/react.createElement("path", {
    d: "M223.21,104.85a.5.5,0,0,1-.42-.22.51.51,0,0,1,.14-.7,3.34,3.34,0,0,0,1.48-2.84,7.23,7.23,0,0,0-1.53-3.51c-.23-.35-.46-.7-.68-1.06a13.27,13.27,0,0,1-.26-12.8.5.5,0,0,1,.68-.21.51.51,0,0,1,.2.68A12.26,12.26,0,0,0,223.06,96c.21.34.43.68.66,1a8,8,0,0,1,1.68,4,4.33,4.33,0,0,1-1.92,3.72A.45.45,0,0,1,223.21,104.85Z",
    fill: "#d1d3d4",
    className: HeroBlock_module["second-steam"]
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.58,122.67a9,9,0,0,1-3.76-.88.49.49,0,0,1-.24-.66.5.5,0,0,1,.66-.25c3.66,1.68,6.73.4,8.16-1.6a3.49,3.49,0,0,0,0-4.48.5.5,0,0,1,0-.71.5.5,0,0,1,.71,0,4.45,4.45,0,0,1,.06,5.76A6.87,6.87,0,0,1,229.58,122.67Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.05c-14.64,0-13.05-20-13.05-20h26.1S231.82,128.05,217.18,128.05Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.55a11.68,11.68,0,0,1-9-3.69c-5.39-5.83-4.62-16.42-4.58-16.87a.5.5,0,0,1,.5-.46h26.1a.5.5,0,0,1,.5.46c0,.45.81,11-4.58,16.87A11.68,11.68,0,0,1,217.18,128.55Zm-12.58-20c-.08,2.1-.13,10.81,4.35,15.66a11.75,11.75,0,0,0,16.46,0c4.49-4.85,4.43-13.56,4.35-15.65Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.05c-14.64,0-13.05-20-13.05-20h26.1S231.82,128.05,217.18,128.05Z",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.55a11.68,11.68,0,0,1-9-3.69c-5.39-5.83-4.62-16.42-4.58-16.87a.5.5,0,0,1,.5-.46h26.1a.5.5,0,0,1,.5.46c0,.45.81,11-4.58,16.87A11.68,11.68,0,0,1,217.18,128.55Zm-12.58-20c-.08,2.1-.13,10.81,4.35,15.66a11.75,11.75,0,0,0,16.46,0c4.49-4.85,4.43-13.56,4.35-15.65Z",
    fill: "#d1d3d4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.05c-14.64,0-13.05-20-13.05-20h26.1S231.82,128.05,217.18,128.05Z",
    fill: "none",
    stroke: "#231f20",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M217.18,128.55a11.68,11.68,0,0,1-9-3.69c-5.39-5.83-4.62-16.42-4.58-16.87a.5.5,0,0,1,.5-.46h26.1a.5.5,0,0,1,.5.46c0,.45.81,11-4.58,16.87A11.68,11.68,0,0,1,217.18,128.55Zm-12.58-20c-.08,2.1-.13,10.81,4.35,15.66a11.75,11.75,0,0,0,16.46,0c4.49-4.85,4.43-13.56,4.35-15.65Z",
    fill: "none",
    stroke: "#231f20",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M232.31,110.28c-.8,1.33-2.94,5.76-.38,6.38,1.58.39,2.25-1.1,2.87-2.21a9.22,9.22,0,0,0,.84-3c1.06,1.25.55,7,3.08,7.46",
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.72,119.37h-.1c-1.93-.38-2.36-3-2.71-5.14,0-.28-.09-.57-.14-.84a5.44,5.44,0,0,1-.54,1.31l-.14.26c-.58,1-1.45,2.64-3.27,2.2a2,2,0,0,1-1.41-1.17c-.86-2.07,1.38-5.8,1.48-6a.5.5,0,1,1,.85.52c-.86,1.42-1.87,3.94-1.41,5.06a1,1,0,0,0,.72.58c1,.24,1.51-.52,2.16-1.71l.15-.26a5.29,5.29,0,0,0,.61-1.92c.05-.3.1-.62.19-1a.48.48,0,0,1,.37-.38.5.5,0,0,1,.5.17,7,7,0,0,1,.87,3c.29,1.82.66,4.07,1.91,4.32a.49.49,0,0,1,.4.58A.51.51,0,0,1,238.72,119.37Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M96.43,71.44l-.16-1.18,4.29-2.79L101.67,69l-3.08,1.91,3.59,1.9-.71,1.48Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.07,75.81h1.06c.44,0,.61-.19.55-.6l-.88-6.51h2.08l.88,6.53c.24,1.78-.41,2.5-2.19,2.5h-1.24Zm.34-10h2.07l.26,1.94h-2.07Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M106.31,73.27c-.16-1.17.6-1.78,2.59-2,1.16-.17,1.49-.34,1.45-.65s-.49-.58-1.1-.58a1.19,1.19,0,0,0-1.35,1.08L106,70.74c.05-1.34,1.3-2.27,3-2.27,2,0,3.32,1,3.54,2.63l.53,4h-1.88l-.08-.63h0a2.48,2.48,0,0,1-2.06.81A2.44,2.44,0,0,1,106.31,73.27Zm4.43-.63-.09-.63h0c-.11.19-.39.31-1.14.47-.93.19-1.23.36-1.19.68s.35.48,1,.48C110.14,73.64,110.81,73.18,110.74,72.64Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M112.08,68.7h2.32l2.31,4h0l1.24-4h2.32L118,75.05h-2Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M120.82,73.27c-.16-1.17.6-1.78,2.59-2,1.16-.17,1.49-.34,1.45-.65s-.49-.58-1.1-.58a1.19,1.19,0,0,0-1.35,1.08l-1.94-.33c0-1.34,1.3-2.27,3-2.27,2,0,3.33,1,3.55,2.63l.53,4h-1.88l-.09-.63h0a2.5,2.5,0,0,1-2.06.81A2.44,2.44,0,0,1,120.82,73.27Zm4.42-.63-.08-.63h0c-.1.19-.39.31-1.13.47-.94.19-1.24.36-1.19.68s.35.48,1,.48C124.65,73.64,125.32,73.18,125.24,72.64Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M127.93,73.13l1.87-.55a2,2,0,0,0,2,1.11c.84,0,1.28-.16,1.25-.44s-.44-.46-1.72-.65c-2.28-.34-3.27-.93-3.43-2.08s1-2,2.85-2a4.09,4.09,0,0,1,3.74,1.92l-1.79.55a2.05,2.05,0,0,0-1.83-.9c-.67,0-1,.17-1,.44s.36.4,1.77.62c2.23.36,3.24.92,3.4,2.11s-1,2.07-3.12,2.07A4.18,4.18,0,0,1,127.93,73.13Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M135.33,71.88a2.93,2.93,0,0,1,3.16-3.41,4,4,0,0,1,3.72,2.28l-1.85.59a1.71,1.71,0,0,0-1.62-1.06,1.29,1.29,0,0,0-1.33,1.6,1.76,1.76,0,0,0,1.76,1.59,1.22,1.22,0,0,0,1.33-1l2,.58a2.86,2.86,0,0,1-3.1,2.28A4,4,0,0,1,135.33,71.88Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M142.71,68.7h2l.08.61h0a2.06,2.06,0,0,1,1.75-.74,4.53,4.53,0,0,1,1.16.15l-.11,1.85a3.73,3.73,0,0,0-1-.12c-1,0-1.5.6-1.34,1.83l.38,2.77h-2.08Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M147.86,65.77h2.08l.26,1.94h-2.07Zm.41,2.93h2.07l.86,6.35h-2.07Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M151.43,68.7h2l.08.57h0a2.43,2.43,0,0,1,1.86-.72,3.87,3.87,0,0,1,3.77,3.34,2.76,2.76,0,0,1-2.83,3.34,3.42,3.42,0,0,1-2-.62h0l.42,3.14h-2.07Zm5.62,3.16a1.75,1.75,0,0,0-1.8-1.5c-.85,0-1.45.54-1.36,1.19l.09.69a1.57,1.57,0,0,0,1.7,1.19A1.3,1.3,0,0,0,157.05,71.86Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.56,70.36l.31,2.29c0,.39.22.53.67.53h1.18l.26,1.87h-1.5a2.31,2.31,0,0,1-2.66-2.2l-.34-2.49H159l-.22-1.66h1.5L160,67.05h2.07l.22,1.65h2l.22,1.66Z",
    fill: "#231f20"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M165.63,72.76l3.08-1.9L165.12,69l.71-1.48,5,2.79.16,1.18-4.29,2.8Z",
    fill: "#231f20"
  })));
};

/* harmony default export */ var HeroBlock_HeroImage = (HeroImage);
// EXTERNAL MODULE: ./node_modules/react-simple-typewriter/dist/index.js
var dist = __webpack_require__(2637);
// EXTERNAL MODULE: ./node_modules/react-reveal/Fade.js
var Fade = __webpack_require__(9470);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade);
;// CONCATENATED MODULE: ./src/components/HeroBlock/HeroBlock.js








var HeroBlock = function HeroBlock() {
  var _useContext = (0,react.useContext)(GlobalCtx),
      _useContext$lang = _useContext.lang,
      currentLanguage = _useContext$lang.currentLanguage,
      textContent = _useContext$lang.textContent;

  return /*#__PURE__*/react.createElement("div", {
    className: HeroBlock_module.hero,
    id: "hero"
  }, /*#__PURE__*/react.createElement("div", {
    className: HeroBlock_module.hero__content
  }, /*#__PURE__*/react.createElement((Fade_default()), {
    left: true
  }, /*#__PURE__*/react.createElement("div", {
    className: HeroBlock_module.hero__intro
  }, /*#__PURE__*/react.createElement("h4", {
    className: HeroBlock_module.hero__heading
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_Text, {
    path: "heroHeading"
  })), /*#__PURE__*/react.createElement("span", {
    className: HeroBlock_module["hero__heading--highlight"]
  }, /*#__PURE__*/react.createElement(dist/* Typewriter */.rf, {
    words: textContent.heroHeadingHighlight[currentLanguage],
    cursor: true,
    loop: false,
    cursorStyle: "|"
  }))), /*#__PURE__*/react.createElement("p", {
    className: HeroBlock_module.hero__text
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "heroText"
  })))), /*#__PURE__*/react.createElement((Fade_default()), {
    right: true
  }, /*#__PURE__*/react.createElement("div", {
    className: HeroBlock_module.hero__img
  }, /*#__PURE__*/react.createElement(HeroBlock_HeroImage, null)))));
};

/* harmony default export */ var HeroBlock_HeroBlock = (HeroBlock);
;// CONCATENATED MODULE: ./src/components/PrinciplesBlock/PrinciplesBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var PrinciplesBlock_module = ({"principles__heading":"QxnHRyP_oK__yDH6abuI","principles__subheading":"T6x9fPLtL4kEXja6r0hB","principles__details":"_dk_Ny2UlY4lExEHc_Mk","principles__content":"RgQ9sCGbHBf5iGks3b6X","principles":"pjOp15acCBYdnc7z1nSB","principles__card":"jLKUdHmLVYw40TUsIWLu","principles__icon-set":"_ZowGtosj3SvDgLRS54_","principles__icon":"Tu1l30biYrzyA_jgJL4W","principles__circle":"AEBOEnOOuQOp2irs1VGn"});
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaRegHandScissors.js
var FaRegHandScissors = __webpack_require__(1865);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaFlagUsa.js
var FaFlagUsa = __webpack_require__(7725);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/im/ImShrink2.js
var ImShrink2 = __webpack_require__(1436);
;// CONCATENATED MODULE: ./src/components/PrinciplesBlock/PrinciplesBlock.js








var PrinciplesBlock = function PrinciplesBlock() {
  return /*#__PURE__*/react.createElement("section", {
    className: PrinciplesBlock_module.principles
  }, /*#__PURE__*/react.createElement("h2", {
    className: PrinciplesBlock_module.principles__heading
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "principlesHeading"
  })), /*#__PURE__*/react.createElement((Fade_default()), {
    bottom: true,
    cascade: true
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__content
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__card
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module["principles__icon-set"]
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__circle
  }), /*#__PURE__*/react.createElement(FaRegHandScissors/* FaRegHandScissors */.H, {
    className: PrinciplesBlock_module.principles__icon
  })), /*#__PURE__*/react.createElement("h4", {
    className: PrinciplesBlock_module.principles__subheading
  }, "DRY"), /*#__PURE__*/react.createElement("p", {
    className: PrinciplesBlock_module.principles__details
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "dryDetails"
  }))), /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__card
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module["principles__icon-set"]
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__circle
  }), /*#__PURE__*/react.createElement(ImShrink2/* ImShrink2 */.U, {
    className: PrinciplesBlock_module.principles__icon
  })), /*#__PURE__*/react.createElement("h4", {
    className: PrinciplesBlock_module.principles__subheading
  }, "KISS"), /*#__PURE__*/react.createElement("p", {
    className: PrinciplesBlock_module.principles__details
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "kissDetails"
  }))), /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__card
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module["principles__icon-set"]
  }, /*#__PURE__*/react.createElement("div", {
    className: PrinciplesBlock_module.principles__circle
  }), /*#__PURE__*/react.createElement(FaFlagUsa/* FaFlagUsa */.S, {
    className: PrinciplesBlock_module.principles__icon
  })), /*#__PURE__*/react.createElement("h4", {
    className: PrinciplesBlock_module.principles__subheading
  }, "English-First"), /*#__PURE__*/react.createElement("p", {
    className: PrinciplesBlock_module.principles__details
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "englishFirstDetails"
  }))))));
};

/* harmony default export */ var PrinciplesBlock_PrinciplesBlock = (PrinciplesBlock);
;// CONCATENATED MODULE: ./src/hooks/useAnimatedNumber.js
function useAnimatedNumber_slicedToArray(arr, i) { return useAnimatedNumber_arrayWithHoles(arr) || useAnimatedNumber_iterableToArrayLimit(arr, i) || useAnimatedNumber_unsupportedIterableToArray(arr, i) || useAnimatedNumber_nonIterableRest(); }

function useAnimatedNumber_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useAnimatedNumber_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useAnimatedNumber_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAnimatedNumber_arrayLikeToArray(o, minLen); }

function useAnimatedNumber_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useAnimatedNumber_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useAnimatedNumber_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useAnimatedNumber = function useAnimatedNumber(_ref) {
  var _ref$startValue = _ref.startValue,
      startValue = _ref$startValue === void 0 ? 0 : _ref$startValue,
      value = _ref.value,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      isStartAllowed = _ref.isStartAllowed;

  var _useState = (0,react.useState)(startValue),
      _useState2 = useAnimatedNumber_slicedToArray(_useState, 2),
      number = _useState2[0],
      setNumber = _useState2[1];

  var currentNumber = (0,react.useRef)(startValue);
  (0,react.useEffect)(function () {
    if (!isStartAllowed) return;
    var timer = setTimeout(function () {
      requestAnimationFrame(function animate() {
        setNumber(function (prev) {
          return prev + step;
        });
        currentNumber.current += step;
        if (currentNumber.current < value) requestAnimationFrame(animate);
      });
    }, delay);
    return function () {
      return clearTimeout(timer);
    };
  }, [isStartAllowed]);
  return number;
};

/* harmony default export */ var hooks_useAnimatedNumber = (useAnimatedNumber);
;// CONCATENATED MODULE: ./src/components/StatsBlock/StatsBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var StatsBlock_module = ({"stats__info":"Texuu7Np8rdUpD4NwTHp","stats__content":"kh_xLTxp_wXoalXh9P70","stats":"pU_xdFM9c2foFD35cev0","stats__card":"tHPARSHUIUgP3ZqqgVYl","stats__heading":"etNb16fIJzDCWZnRrOSY"});
;// CONCATENATED MODULE: ./src/data/stats.json
var stats_namespaceObject = JSON.parse('{"s$":286,"Vt":14,"oL":8}');
;// CONCATENATED MODULE: ./src/components/StatsBlock/StatsBlock.js
function StatsBlock_slicedToArray(arr, i) { return StatsBlock_arrayWithHoles(arr) || StatsBlock_iterableToArrayLimit(arr, i) || StatsBlock_unsupportedIterableToArray(arr, i) || StatsBlock_nonIterableRest(); }

function StatsBlock_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function StatsBlock_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StatsBlock_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StatsBlock_arrayLikeToArray(o, minLen); }

function StatsBlock_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StatsBlock_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function StatsBlock_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var StatsBlock = function StatsBlock() {
  var _useState = (0,react.useState)(false),
      _useState2 = StatsBlock_slicedToArray(_useState, 2),
      isBlockReavealed = _useState2[0],
      setIsBlockRevealed = _useState2[1];

  var numberCourseHours = hooks_useAnimatedNumber({
    value: stats_namespaceObject.s$,
    step: 1,
    startValue: 180,
    isStartAllowed: isBlockReavealed
  });
  var numberPassedCourses = hooks_useAnimatedNumber({
    value: stats_namespaceObject.Vt,
    step: 0.2,
    isStartAllowed: isBlockReavealed
  });
  var numberMadeProjects = hooks_useAnimatedNumber({
    value: stats_namespaceObject.oL,
    step: 0.08,
    isStartAllowed: isBlockReavealed
  });

  var formatNumber = function formatNumber(number) {
    return Math.round(number);
  };

  return /*#__PURE__*/react.createElement("section", {
    className: StatsBlock_module.stats
  }, /*#__PURE__*/react.createElement((Fade_default()), {
    bottom: true,
    duration: 5e2,
    onReveal: function onReveal() {
      return setIsBlockRevealed(true);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: StatsBlock_module.stats__content
  }, /*#__PURE__*/react.createElement("div", {
    className: StatsBlock_module.stats__card
  }, /*#__PURE__*/react.createElement("h3", {
    className: StatsBlock_module.stats__heading
  }, formatNumber(numberCourseHours), " +"), /*#__PURE__*/react.createElement("span", {
    className: StatsBlock_module.stats__info
  }, stats_namespaceObject.s$, " ", /*#__PURE__*/react.createElement(components_Text, {
    path: "statsCourseHours"
  }))), /*#__PURE__*/react.createElement("div", {
    className: StatsBlock_module.stats__card
  }, /*#__PURE__*/react.createElement("h3", {
    className: StatsBlock_module.stats__heading
  }, formatNumber(numberPassedCourses), " +"), /*#__PURE__*/react.createElement("span", {
    className: StatsBlock_module.stats__info
  }, stats_namespaceObject.Vt, " ", /*#__PURE__*/react.createElement(components_Text, {
    path: "statsPassedCourses"
  }))), /*#__PURE__*/react.createElement("div", {
    className: StatsBlock_module.stats__card
  }, /*#__PURE__*/react.createElement("h3", {
    className: StatsBlock_module.stats__heading
  }, formatNumber(numberMadeProjects), " +"), /*#__PURE__*/react.createElement("span", {
    className: StatsBlock_module.stats__info
  }, stats_namespaceObject.oL, " ", /*#__PURE__*/react.createElement(components_Text, {
    path: "statsMadeProjects"
  }))))));
};

/* harmony default export */ var StatsBlock_StatsBlock = (StatsBlock);
;// CONCATENATED MODULE: ./src/utilities/importAll.js
function importAll(r, formatFilename) {
  var images = {};
  r.keys().map(function (item, index) {
    images[formatFilename(item)] = r(item);
  });
  return images;
}
;// CONCATENATED MODULE: ./src/components/SkillsBlock/SkillsBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var SkillsBlock_module = ({"skills__heading":"eM_Pg0KLChgbkduB_c9x","skills__content":"s8kjyYbXOvfxn1BeWbOk","skills":"tc_Cdd3zZn43teLHCFPG","skills__show-btn":"_hScr_VrsLItzqldcmeV","skills__show-icon":"RPMG8YumAcgwZ32MlkYb"});
;// CONCATENATED MODULE: ./src/data/skills.json
var skills_namespaceObject = JSON.parse('[{"name":"Vue","knowledgeLevel":52},{"name":"Bootstrap","knowledgeLevel":86},{"name":"Node.js","knowledgeLevel":68},{"name":"NPM","knowledgeLevel":64},{"name":"React","knowledgeLevel":79},{"name":"Redux","knowledgeLevel":75},{"name":"TailwindCSS","knowledgeLevel":68},{"name":"Next.js","knowledgeLevel":71},{"name":"Python","knowledgeLevel":44},{"name":"TypeScript","knowledgeLevel":74},{"name":"JavaScript","knowledgeLevel":93},{"name":"Sass","knowledgeLevel":84},{"name":"R","knowledgeLevel":30},{"name":"Java","knowledgeLevel":22},{"name":"C++","knowledgeLevel":41},{"name":"Webpack","knowledgeLevel":72},{"name":"MATLAB","knowledgeLevel":46},{"name":"Heroku","knowledgeLevel":52},{"name":"HTML","knowledgeLevel":84},{"name":"Git","knowledgeLevel":76},{"name":"CSS","knowledgeLevel":83},{"name":"Bash","knowledgeLevel":48}]');
;// CONCATENATED MODULE: ./src/components/SkillsBlock/Skill.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Skill_module = ({"skill":"buwa7IUc2iLo60YrqPHH","skill__header":"wqkBRHFJFDDNreLXeZSa","skill__name":"_AqQebSFgg6daxSFGVPA","skill__icon":"fU8qvKZQd1hKryBrBUEJ","skill__bar":"hDQrPBzxDGeXhuG_KpVC","skill__bar--filled":"qGi4lDnVUVAWhoaOvaKx","skill__value":"Ifxrkg8x_IpLfdPZi1F9"});
;// CONCATENATED MODULE: ./src/components/UI/Bar/Bar.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Bar_module = ({"bar":"Sf9d6xPV5LvlwRhfUj3u","bar__inner":"_YGw9frgvgLerAUXbcaL"});
;// CONCATENATED MODULE: ./src/components/UI/Bar/Bar.js



var Bar = function Bar(_ref) {
  var barClass = _ref.barClass,
      fillClass = _ref.fillClass,
      children = _ref.children,
      fillValue = _ref.fillValue;
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(Bar_module.bar, " ").concat(barClass !== null && barClass !== void 0 ? barClass : "")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(Bar_module.bar__inner, " ").concat(fillClass !== null && fillClass !== void 0 ? fillClass : ""),
    style: {
      width: fillValue + "%"
    }
  }, children));
};

/* harmony default export */ var Bar_Bar = (Bar);
;// CONCATENATED MODULE: ./src/components/SkillsBlock/Skill.js
function Skill_slicedToArray(arr, i) { return Skill_arrayWithHoles(arr) || Skill_iterableToArrayLimit(arr, i) || Skill_unsupportedIterableToArray(arr, i) || Skill_nonIterableRest(); }

function Skill_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Skill_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Skill_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Skill_arrayLikeToArray(o, minLen); }

function Skill_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Skill_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Skill_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Skill = function Skill(_ref) {
  var name = _ref.name,
      knowledgeLevel = _ref.knowledgeLevel,
      imgSrc = _ref.imgSrc;

  var _useState = (0,react.useState)(false),
      _useState2 = Skill_slicedToArray(_useState, 2),
      isRevealed = _useState2[0],
      setIsRevealed = _useState2[1];

  var currentKnowledgeLevel = hooks_useAnimatedNumber({
    isStartAllowed: isRevealed,
    value: knowledgeLevel,
    step: 1,
    delay: 1e3
  });
  return /*#__PURE__*/react.createElement((Fade_default()), {
    left: true,
    onReveal: function onReveal() {
      return setIsRevealed(true);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: Skill_module.skill
  }, /*#__PURE__*/react.createElement("div", {
    className: Skill_module.skill__header
  }, /*#__PURE__*/react.createElement("img", {
    src: imgSrc,
    alt: name,
    className: Skill_module.skill__icon
  }), /*#__PURE__*/react.createElement("h6", {
    className: Skill_module.skill__name
  }, name)), /*#__PURE__*/react.createElement(Bar_Bar, {
    barClass: Skill_module.skill__bar,
    fillClass: Skill_module["skill__bar--filled"],
    fillValue: currentKnowledgeLevel
  }, /*#__PURE__*/react.createElement((Fade_default()), {
    delay: 25e2
  }, /*#__PURE__*/react.createElement("span", {
    className: Skill_module.skill__value
  }, knowledgeLevel, "%")))));
};

/* harmony default export */ var SkillsBlock_Skill = (Skill);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bs/BsChevronDown.js
var BsChevronDown = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/SkillsBlock/SkillsBlock.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SkillsBlock_slicedToArray(arr, i) { return SkillsBlock_arrayWithHoles(arr) || SkillsBlock_iterableToArrayLimit(arr, i) || SkillsBlock_unsupportedIterableToArray(arr, i) || SkillsBlock_nonIterableRest(); }

function SkillsBlock_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SkillsBlock_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SkillsBlock_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SkillsBlock_arrayLikeToArray(o, minLen); }

function SkillsBlock_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SkillsBlock_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SkillsBlock_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var logos = importAll(__webpack_require__(5080), function (filename) {
  return filename.replace("./", "").replace(".svg", "");
});

var SkillsBlock = function SkillsBlock() {
  var _useState = (0,react.useState)(8),
      _useState2 = SkillsBlock_slicedToArray(_useState, 2),
      shownAmount = _useState2[0],
      setShownAmount = _useState2[1];

  return /*#__PURE__*/react.createElement("section", {
    className: SkillsBlock_module.skills
  }, /*#__PURE__*/react.createElement("h4", {
    className: SkillsBlock_module.skills__heading
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "skillsHeading"
  })), /*#__PURE__*/react.createElement((Fade_default()), {
    left: true
  }, /*#__PURE__*/react.createElement("div", {
    className: SkillsBlock_module.skills__content
  }, skills_namespaceObject.sort(function (left, right) {
    return right.knowledgeLevel - left.knowledgeLevel;
  }).slice(0, shownAmount).map(function (skillData) {
    return /*#__PURE__*/react.createElement(SkillsBlock_Skill, _extends({
      key: skillData.name
    }, skillData, {
      imgSrc: logos[skillData.name]
    }));
  }), shownAmount === 8 && /*#__PURE__*/react.createElement("button", {
    className: SkillsBlock_module["skills__show-btn"],
    onClick: function onClick() {
      return setShownAmount(skills_namespaceObject.length);
    }
  }, /*#__PURE__*/react.createElement(BsChevronDown/* BsChevronDown */.I, {
    className: SkillsBlock_module["skills__show-icon"]
  })))));
};

/* harmony default export */ var SkillsBlock_SkillsBlock = (SkillsBlock);
;// CONCATENATED MODULE: ./src/components/AcademicBlock/AcademicBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var AcademicBlock_module = ({"academic__heading":"z3HsL7KnbEJsubefNSDS","academic__description":"_5tKm5lKCE_b_44eSTYl","academic__content":"qzR7iq72EpzQ_Bo_kycH","academic":"qWSJWakCZ_4APSzXaucA","academic__message":"VbmQcQnnBMrmlV_us_Hy","academic__qr-column":"xpvKFaHL6gJAE9mC3frh","academic__qr":"_Zki1TkmldlCD7joyoiw","academic__link":"UvlhM8NOjk_a7dWcV5pm"});
// EXTERNAL MODULE: ./src/assets/diploma-qrcode--dark.svg
var diploma_qrcode_dark = __webpack_require__(8898);
// EXTERNAL MODULE: ./src/assets/diploma-qrcode--light.svg
var diploma_qrcode_light = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/AcademicBlock/AcademicBlock.js
function AcademicBlock_slicedToArray(arr, i) { return AcademicBlock_arrayWithHoles(arr) || AcademicBlock_iterableToArrayLimit(arr, i) || AcademicBlock_unsupportedIterableToArray(arr, i) || AcademicBlock_nonIterableRest(); }

function AcademicBlock_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AcademicBlock_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AcademicBlock_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AcademicBlock_arrayLikeToArray(o, minLen); }

function AcademicBlock_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AcademicBlock_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AcademicBlock_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AcademicBlock = function AcademicBlock() {
  var _useContext = (0,react.useContext)(GlobalCtx),
      _useContext$lang = _useContext.lang,
      currentLanguage = _useContext$lang.currentLanguage,
      textContent = _useContext$lang.textContent,
      _useContext$theme = _useContext.theme,
      isDarkTheme = _useContext$theme.isDarkTheme,
      toggleTheme = _useContext$theme.toggleTheme;

  var _useState = (0,react.useState)(diploma_qrcode_light),
      _useState2 = AcademicBlock_slicedToArray(_useState, 2),
      qrSrc = _useState2[0],
      setQrSrc = _useState2[1];

  (0,react.useEffect)(function () {
    var newQrSrc = isDarkTheme ? diploma_qrcode_dark : diploma_qrcode_light;
    setQrSrc(newQrSrc);
  }, [isDarkTheme]);
  return /*#__PURE__*/react.createElement("div", {
    className: AcademicBlock_module.academic
  }, /*#__PURE__*/react.createElement((Fade_default()), {
    right: true
  }, /*#__PURE__*/react.createElement("div", {
    className: AcademicBlock_module.academic__content
  }, /*#__PURE__*/react.createElement("div", {
    className: AcademicBlock_module.academic__message
  }, /*#__PURE__*/react.createElement("h4", {
    className: AcademicBlock_module.academic__heading
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "academicHeading"
  })), textContent["academicDescription"][currentLanguage].map(function (text) {
    return /*#__PURE__*/react.createElement("p", {
      key: text,
      className: AcademicBlock_module.academic__description
    }, text);
  })), /*#__PURE__*/react.createElement("div", {
    className: AcademicBlock_module["academic__qr-column"]
  }, /*#__PURE__*/react.createElement("img", {
    src: qrSrc,
    className: AcademicBlock_module.academic__qr,
    alt: "Diploma QR-code"
  }), /*#__PURE__*/react.createElement("a", {
    href: "https://diploma.spbu.ru/s/?rn=2011114&bd=19990221&h=b4eec686154e479e9ca261c9c29010f5",
    className: AcademicBlock_module.academic__link
  }, "Link")))));
};

/* harmony default export */ var AcademicBlock_AcademicBlock = (AcademicBlock);
;// CONCATENATED MODULE: ./src/components/CodeBlock/CodeBlock.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var CodeBlock_module = ({"code__heading":"V4RrrjbtqjRLysVMtFbR","code__content":"h_GHsxGt7xcklYeZ_z_M","code":"eIbfgxPRlJouTLQDsoEC"});
;// CONCATENATED MODULE: ./src/components/CodeWindow/CodeWindow.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var CodeWindow_module = ({"code-window":"DLvBjDG_bfOr526D6bya","code-window__head":"_klHI1lzDsqspQK_vQM1","code-window__bottom":"fN3Tcz3JzmqyENbmo9B9","code-window__content":"NgKjLz1ff1oPuCrUCd7O","code-window__manage":"d4Uf83VbdFYCCox1wfAe","code-window__heading":"_KC2PzRhkGbOYEWE2Fhr","code-window__display":"yKImOV_QjRqeTjjSc9jQ","code-window__tabs":"hn_WStR0oFm_YIdznWu8","code-window__tab":"pLdFCEvBy3K15OdJI0t_","code-window__tab--active":"SVlPmpvLd1MpWqpIwdkZ","code-window__code-wrapper":"To3dChhNdQ41JebJywv2","code-window__code":"Zu1SjEnwHwp3JdTP6YSb","sidebar":"d8juzMyP2ywzpGOcMTbs","sidebar__icon":"mIpS6dGPhSn7Qua6qvoQ","sidebar__icon--pushing":"PHFNpNubxd9FSCDb3XFZ"});
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscFiles.js
var VscFiles = __webpack_require__(210);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscSearch.js
var VscSearch = __webpack_require__(8500);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscSourceControl.js
var VscSourceControl = __webpack_require__(6335);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscDebugAlt2.js
var VscDebugAlt2 = __webpack_require__(8627);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscExtensions.js
var VscExtensions = __webpack_require__(2955);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscAccount.js
var VscAccount = __webpack_require__(1375);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/vsc/VscSettingsGear.js
var VscSettingsGear = __webpack_require__(5266);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiTypescript.js
var SiTypescript = __webpack_require__(903);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiCplusplus.js
var SiCplusplus = __webpack_require__(8892);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiJavascript.js
var SiJavascript = __webpack_require__(2365);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiPython.js
var SiPython = __webpack_require__(650);
;// CONCATENATED MODULE: ./src/utilities/getIcons.js
/* harmony default export */ var getIcons = (function (icons) {
  return icons.reduce(function (ac, icon) {
    return ac[icon.name] = icon, ac;
  }, {});
});
;// CONCATENATED MODULE: ./src/data/code.json
var code_namespaceObject = JSON.parse('[{"filename":"usePrevious.js","iconName":"SiJavascript","language":"javascript"},{"filename":"API.py","iconName":"SiPython","language":"python"},{"filename":"store.ts","iconName":"SiTypescript","language":"typescript"},{"filename":"SingleList.cpp","iconName":"SiCplusplus","language":"cpp"}]');
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/esm/prism.js + 16 modules
var prism = __webpack_require__(8800);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/esm/styles/prism/okaidia.js
var okaidia = __webpack_require__(6986);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-light.js
var material_light = __webpack_require__(1209);
// EXTERNAL MODULE: ./node_modules/react-typist/dist/Typist.js
var Typist = __webpack_require__(5346);
var Typist_default = /*#__PURE__*/__webpack_require__.n(Typist);
;// CONCATENATED MODULE: ./src/components/CodeWindow/CodeWindow.js
function CodeWindow_slicedToArray(arr, i) { return CodeWindow_arrayWithHoles(arr) || CodeWindow_iterableToArrayLimit(arr, i) || CodeWindow_unsupportedIterableToArray(arr, i) || CodeWindow_nonIterableRest(); }

function CodeWindow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CodeWindow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CodeWindow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CodeWindow_arrayLikeToArray(o, minLen); }

function CodeWindow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CodeWindow_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CodeWindow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var rawCodeData = importAll(__webpack_require__(8257), function (filename) {
  return filename.replace("./", "").replace(".txt", "");
});
var FileIcons = getIcons([SiCplusplus/* SiCplusplus */.C, SiJavascript/* SiJavascript */.v, SiPython/* SiPython */.C, SiTypescript/* SiTypescript */.W]);

var CodeWindow = function CodeWindow() {
  var _useContext = (0,react.useContext)(GlobalCtx),
      isDarkTheme = _useContext.theme.isDarkTheme;

  var _useState = (0,react.useState)(code_namespaceObject[0].filename),
      _useState2 = CodeWindow_slicedToArray(_useState, 2),
      activeFile = _useState2[0],
      setActiveFile = _useState2[1];

  var _useState3 = (0,react.useState)(true),
      _useState4 = CodeWindow_slicedToArray(_useState3, 2),
      typing = _useState4[0],
      setTyping = _useState4[1];

  var selectFile = (0,react.useCallback)(function (selectedFile) {
    setActiveFile(selectedFile);
  }, []);
  var activeLanguage = code_namespaceObject.find(function (codeData) {
    return codeData.filename === activeFile;
  }).language;
  var syntaxTheme = isDarkTheme ? okaidia/* default */.Z : material_light/* default */.Z;
  var codeContent = /*#__PURE__*/react.createElement(prism/* default */.Z, {
    language: activeLanguage,
    showLineNumbers: true,
    style: syntaxTheme,
    className: CodeWindow_module["code-window__code"]
  }, rawCodeData[activeFile]);
  (0,react.useEffect)(function () {
    if (!typing) setTyping(true);
  }, [typing]);
  var fileTabs = code_namespaceObject.map(function (_ref) {
    var filename = _ref.filename,
        iconName = _ref.iconName,
        language = _ref.language;
    var Icon = FileIcons[iconName];
    return /*#__PURE__*/react.createElement("button", {
      key: filename,
      className: "".concat(CodeWindow_module["code-window__tab"], " ").concat(activeFile === filename ? CodeWindow_module["code-window__tab--active"] : ""),
      onClick: selectFile.bind(null, filename)
    }, /*#__PURE__*/react.createElement(Icon, null), /*#__PURE__*/react.createElement("span", null, filename));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(CodeWindow_module["code-window"], " ").concat(CodeWindow_module["vs-colored"])
  }, /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__head"]
  }, /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__manage"]
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)), /*#__PURE__*/react.createElement("h5", {
    className: CodeWindow_module["code-window__heading"]
  }, "Visual Studio Code")), /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__content"]
  }, /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module.sidebar
  }, /*#__PURE__*/react.createElement(VscFiles/* VscFiles */.F, {
    className: CodeWindow_module.sidebar__icon
  }), /*#__PURE__*/react.createElement(VscSearch/* VscSearch */.p, {
    className: CodeWindow_module.sidebar__icon
  }), /*#__PURE__*/react.createElement(VscSourceControl/* VscSourceControl */.o, {
    className: CodeWindow_module.sidebar__icon
  }), /*#__PURE__*/react.createElement(VscDebugAlt2/* VscDebugAlt2 */.V, {
    className: CodeWindow_module.sidebar__icon
  }), /*#__PURE__*/react.createElement(VscExtensions/* VscExtensions */.l, {
    className: "".concat(CodeWindow_module.sidebar__icon, " ").concat(CodeWindow_module["sidebar__icon--pushing"])
  }), /*#__PURE__*/react.createElement(VscAccount/* VscAccount */.N, {
    className: CodeWindow_module.sidebar__icon
  }), /*#__PURE__*/react.createElement(VscSettingsGear/* VscSettingsGear */.r, {
    className: CodeWindow_module.sidebar__icon
  })), /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__display"]
  }, /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__tabs"]
  }, fileTabs), typing ? /*#__PURE__*/react.createElement((Typist_default()), {
    avgTypingDelay: 30,
    cursor: {
      show: false
    },
    key: activeFile,
    onTypingDone: function onTypingDone() {
      return setTimeout(setTyping, 3e3, false);
    },
    className: CodeWindow_module["code-window__code-wrapper"]
  }, codeContent) : codeContent)), /*#__PURE__*/react.createElement("div", {
    className: CodeWindow_module["code-window__bottom"]
  }, /*#__PURE__*/react.createElement(VscSourceControl/* VscSourceControl */.o, null), /*#__PURE__*/react.createElement("span", null, "Main")));
};

/* harmony default export */ var CodeWindow_CodeWindow = (CodeWindow);
;// CONCATENATED MODULE: ./src/components/CodeBlock/CodeBlock.js






var CodeBlock = function CodeBlock() {
  return /*#__PURE__*/react.createElement("div", {
    className: CodeBlock_module.code
  }, /*#__PURE__*/react.createElement((Fade_default()), {
    left: true
  }, /*#__PURE__*/react.createElement("div", {
    className: CodeBlock_module.code__content
  }, /*#__PURE__*/react.createElement("h4", {
    className: CodeBlock_module.code__heading
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "favoritesHeader"
  })), /*#__PURE__*/react.createElement(CodeWindow_CodeWindow, null))));
};

/* harmony default export */ var CodeBlock_CodeBlock = (CodeBlock);
;// CONCATENATED MODULE: ./src/components/Projects/Projects.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Projects_module = ({"projects__heading":"dpZTIo_X5VRBs2EtmwiK","projects__content":"_Lxupbns7cPtMBo5llEi","projects":"ibfaatZo0II7duSTpm4x","projects__head":"lYFpy4H9YD53j8HPB_wU","projects__btn":"fKaeRtS8mKal7pMncyue","projects__show":"EGfy_urmcqulybykgIIX"});
;// CONCATENATED MODULE: ./src/data/projects.json
var projects_namespaceObject = JSON.parse('[{"name":"paintClone","githubLink":"https://github.com/WebSavva/paint-clone","link":"https://websavva.github.io/paint-clone/","complexity":55,"techIconNames":["Html5","Css3","Javascript"]},{"name":"quoteGenerator","githubLink":"https://github.com/WebSavva/quote-generator","link":"https://websavva.github.io/quote-generator/","complexity":40,"techIconNames":["Html5","Css3","Javascript"]},{"name":"facebookClone","githubLink":"https://github.com/WebSavva/facebook-clone","link":"https://fb-clone-websavva.herokuapp.com/","complexity":85,"techIconNames":["React","NextDotJs","Mongodb","SocketDotIo","Vk"]},{"name":"wShop","githubLink":"https://github.com/WebSavva/wshop","link":"https://wshop-websavva.herokuapp.com/","complexity":90,"techIconNames":["React","Reactrouter","Typescript","NodeDotJs","Mongodb","Bootstrap"]},{"name":"las","githubLink":"https://github.com/WebSavva/las","link":"https://websavva.github.io/las/","complexity":65,"techIconNames":["Html5","Sass","Webpack"]},{"name":"newsWebsite","githubLink":"https://github.com/WebSavva/news","link":"https://websavva.github.io/news/","complexity":77,"techIconNames":["Html5","Sass","Javascript","Webpack"]},{"name":"thesis","githubLink":"https://github.com/WebSavva/thesis","link":"https://websavva.github.io/thesis/","complexity":74,"techIconNames":["Html5","Css3","Javascript","Webpack","Flask"]},{"name":"clashGame","githubLink":"https://github.com/WebSavva/vue-clash-game","link":"https://websavva.github.io/vue-clash-game","complexity":50,"techIconNames":["Html5","Bootstrap","VueDotJs"]},{"name":"calculator","githubLink":"https://github.com/WebSavva/calculator","link":"https://websavva.github.io/calculator","complexity":41,"techIconNames":["Html5","Css3","Javascript"]},{"name":"portfolio","githubLink":"https://github.com/WebSavva/websavva.gitbub.io","complexity":70,"techIconNames":["Sass","React","Webpack"]}]');
;// CONCATENATED MODULE: ./src/components/ProjectCard/ProjectCard.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var ProjectCard_module = ({"card__name":"qsK69yPnrED5YBSWgBmz","card__description":"gsY_KE9YObcp3M_2re5w","card__link":"i8xR07nBatL9lGykx7wF","card__head":"WaWHezkr6mFgCb024RE7","card":"OjUt0p9eEfc27x6Picx2","card__body":"bHet2P2F4fkBknDQ9Jsb","card__bottom":"TgIupoKbh16yfmiXGtR5","card__tech-icons":"_UG_SDc0lxzVUOycG93J","card__complexity-head":"_fzo6U38xcVl_R6FZcff","card__bar":"ZxTs_JHSJJoXKSM3mSTd","card__bar--filled":"Ky7tSMHs5_eGrCCgKJ0z"});
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiWebpack.js
var SiWebpack = __webpack_require__(6268);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiVk.js
var SiVk = __webpack_require__(9761);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiPaypal.js
var SiPaypal = __webpack_require__(3434);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiNextDotJs.js
var SiNextDotJs = __webpack_require__(2018);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiVueDotJs.js
var SiVueDotJs = __webpack_require__(8654);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiHtml5.js
var SiHtml5 = __webpack_require__(1310);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiCss3.js
var SiCss3 = __webpack_require__(733);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiSocketDotIo.js
var SiSocketDotIo = __webpack_require__(5507);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiMongodb.js
var SiMongodb = __webpack_require__(8456);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiReact.js
var SiReact = __webpack_require__(4658);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiReactrouter.js
var SiReactrouter = __webpack_require__(6583);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiRedux.js
var SiRedux = __webpack_require__(5141);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiBootstrap.js
var SiBootstrap = __webpack_require__(4102);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiNodeDotJs.js
var SiNodeDotJs = __webpack_require__(2555);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiFlask.js
var SiFlask = __webpack_require__(8832);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiGithub.js
var SiGithub = __webpack_require__(1416);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiSass.js
var SiSass = __webpack_require__(9639);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fi/FiExternalLink.js
var FiExternalLink = __webpack_require__(6392);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fi/FiFolder.js
var FiFolder = __webpack_require__(1066);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fi/FiInfo.js
var FiInfo = __webpack_require__(9164);
;// CONCATENATED MODULE: ./src/components/ProjectCard/ProjectCard.js
function ProjectCard_slicedToArray(arr, i) { return ProjectCard_arrayWithHoles(arr) || ProjectCard_iterableToArrayLimit(arr, i) || ProjectCard_unsupportedIterableToArray(arr, i) || ProjectCard_nonIterableRest(); }

function ProjectCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProjectCard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProjectCard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProjectCard_arrayLikeToArray(o, minLen); }

function ProjectCard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProjectCard_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProjectCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























var TechIcons = getIcons([SiWebpack/* SiWebpack */.u, SiVk/* SiVk */.M, SiPaypal/* SiPaypal */.a, SiNextDotJs/* SiNextDotJs */._, SiVueDotJs/* SiVueDotJs */.j, SiHtml5/* SiHtml5 */.P, SiCss3/* SiCss3 */.H, SiJavascript/* SiJavascript */.v, SiTypescript/* SiTypescript */.W, SiSocketDotIo/* SiSocketDotIo */.c, SiMongodb/* SiMongodb */.t, SiReact/* SiReact */.p, SiReactrouter/* SiReactrouter */.I, SiRedux/* SiRedux */.P, SiBootstrap/* SiBootstrap */.B, SiNodeDotJs/* SiNodeDotJs */.t, SiFlask/* SiFlask */.O, SiGithub/* SiGithub */.p, SiSass/* SiSass */.x]);
var ProjectCard = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var link = _ref.link,
      githubLink = _ref.githubLink,
      headerText = _ref.headerText,
      descriptionText = _ref.descriptionText,
      complexity = _ref.complexity,
      techIconNames = _ref.techIconNames,
      infoText = _ref.infoText,
      allowNumberAnimation = _ref.allowNumberAnimation;
  var GitHubIcon = TechIcons["SiGithub"];

  var _useContext = (0,react.useContext)(GlobalCtx),
      currentLanguage = _useContext.lang.currentLanguage;

  var _useState = (0,react.useState)(false),
      _useState2 = ProjectCard_slicedToArray(_useState, 2),
      isRevealed = _useState2[0],
      setIsRevealed = _useState2[1];

  var currentComplexity = hooks_useAnimatedNumber({
    isStartAllowed: allowNumberAnimation,
    value: complexity,
    delay: 5e2
  });

  var _useState3 = (0,react.useState)(false),
      _useState4 = ProjectCard_slicedToArray(_useState3, 2),
      isHintVisible = _useState4[0],
      setIsHintVisible = _useState4[1];

  var _useState5 = (0,react.useState)({
    x: 0,
    y: 0
  }),
      _useState6 = ProjectCard_slicedToArray(_useState5, 2),
      mouseCoordinates = _useState6[0],
      setMouseCoordinates = _useState6[1];

  var infoBlockRef = (0,react.useRef)(null);
  var placeHint = (0,react.useCallback)(function (e) {
    setMouseCoordinates({
      x: e.clientX,
      y: e.clientY - infoBlockRef.current.offsetHeight
    });
  }, [infoBlockRef]);
  var displayHint = (0,react.useCallback)(function (e) {
    setIsHintVisible(true);
    placeHint(e);
  }, [placeHint]);
  var hideHint = (0,react.useCallback)(function () {
    return setIsHintVisible(false);
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module.card,
    ref: ref
  }, /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module.card__head
  }, /*#__PURE__*/react.createElement(FiFolder/* FiFolder */.Q, null), link && /*#__PURE__*/react.createElement("a", {
    href: link,
    className: ProjectCard_module.card__link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(FiExternalLink/* FiExternalLink */.A, null)), /*#__PURE__*/react.createElement("a", {
    href: githubLink,
    className: ProjectCard_module.card__link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(GitHubIcon, null))), /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module.card__body
  }, /*#__PURE__*/react.createElement("h5", {
    className: ProjectCard_module.card__name
  }, headerText, infoText && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", null, /*#__PURE__*/react.createElement(FiInfo/* FiInfo */.H, {
    onMouseEnter: displayHint,
    onMouseMove: placeHint,
    onMouseLeave: hideHint
  }), /*#__PURE__*/react.createElement("span", {
    ref: infoBlockRef,
    style: {
      display: isHintVisible ? "" : "none",
      left: mouseCoordinates.x + "px",
      top: mouseCoordinates.y + "px"
    }
  }, infoText)))), /*#__PURE__*/react.createElement("p", {
    className: ProjectCard_module.card__description
  }, descriptionText)), /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module.card__bottom
  }, /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module["card__complexity-box"]
  }, /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module["card__complexity-head"]
  }, /*#__PURE__*/react.createElement("h6", null, currentLanguage === "en" ? "Complexity" : "Сложность"), /*#__PURE__*/react.createElement("span", null, currentComplexity, "%")), /*#__PURE__*/react.createElement(Bar_Bar, {
    barClass: ProjectCard_module.card__bar,
    fillClass: ProjectCard_module["card__bar--filled"],
    fillValue: currentComplexity
  })), /*#__PURE__*/react.createElement("div", {
    className: ProjectCard_module["card__tech-icons"]
  }, techIconNames.map(function (name) {
    var Icon = TechIcons["Si" + name];
    return /*#__PURE__*/react.createElement(Icon, {
      key: name
    });
  }))));
});
/* harmony default export */ var ProjectCard_ProjectCard = (ProjectCard);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bi/BiChevronDown.js
var BiChevronDown = __webpack_require__(8935);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bi/BiSortDown.js
var BiSortDown = __webpack_require__(6138);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bi/BiSortUp.js
var BiSortUp = __webpack_require__(6818);
// EXTERNAL MODULE: ./node_modules/react-flip-move/dist/react-flip-move.es.js
var react_flip_move_es = __webpack_require__(7794);
;// CONCATENATED MODULE: ./src/components/Projects/Projects.js
function Projects_extends() { Projects_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Projects_extends.apply(this, arguments); }

function Projects_slicedToArray(arr, i) { return Projects_arrayWithHoles(arr) || Projects_iterableToArrayLimit(arr, i) || Projects_unsupportedIterableToArray(arr, i) || Projects_nonIterableRest(); }

function Projects_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Projects_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Projects_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Projects_arrayLikeToArray(o, minLen); }

function Projects_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Projects_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Projects_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Projects = function Projects() {
  var _useState = (0,react.useState)(false),
      _useState2 = Projects_slicedToArray(_useState, 2),
      isRevealed = _useState2[0],
      setIsRevealed = _useState2[1];

  var _useState3 = (0,react.useState)(projects_namespaceObject),
      _useState4 = Projects_slicedToArray(_useState3, 2),
      projects = _useState4[0],
      setProjectData = _useState4[1];

  var _useContext = (0,react.useContext)(GlobalCtx),
      _useContext$lang = _useContext.lang,
      textContent = _useContext$lang.textContent,
      currentLanguage = _useContext$lang.currentLanguage;

  var _useState5 = (0,react.useState)(true),
      _useState6 = Projects_slicedToArray(_useState5, 2),
      isDescendingOrder = _useState6[0],
      setIsDescendingOrder = _useState6[1];

  var _useState7 = (0,react.useState)(6),
      _useState8 = Projects_slicedToArray(_useState7, 2),
      visibleNumber = _useState8[0],
      setVisibleNumber = _useState8[1];

  var toggleOrder = (0,react.useCallback)(function () {
    return setIsDescendingOrder(function (prev) {
      return !prev;
    });
  });
  (0,react.useEffect)(function () {
    setProjectData(projects_namespaceObject.sort(function (a, b) {
      return isDescendingOrder ? b.complexity - a.complexity : a.complexity - b.complexity;
    }).slice(0, visibleNumber));
  }, [isDescendingOrder, visibleNumber]);
  return /*#__PURE__*/react.createElement("div", {
    className: Projects_module.projects,
    id: "projects"
  }, /*#__PURE__*/react.createElement("div", {
    className: Projects_module.projects__head
  }, /*#__PURE__*/react.createElement("h4", {
    className: Projects_module.projects__heading
  }, /*#__PURE__*/react.createElement(components_Text, {
    path: "projectsHeader"
  })), /*#__PURE__*/react.createElement("button", {
    className: Projects_module.projects__btn,
    onClick: toggleOrder
  }, isDescendingOrder ? /*#__PURE__*/react.createElement(BiSortDown/* BiSortDown */.P, null) : /*#__PURE__*/react.createElement(BiSortUp/* BiSortUp */.a, null))), /*#__PURE__*/react.createElement((Fade_default()), {
    bottom: true,
    onReveal: function onReveal() {
      return setIsRevealed(true);
    }
  }, /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Projects_module.projects__content
  }, /*#__PURE__*/react.createElement(react_flip_move_es/* default */.Z, {
    typeName: null,
    easing: "ease-in-out",
    duration: 5e2
  }, projects.map(function (data) {
    var _textContent$projects = Projects_slicedToArray(textContent.projects[data.name][currentLanguage], 3),
        headerText = _textContent$projects[0],
        descriptionText = _textContent$projects[1],
        infoText = _textContent$projects[2];

    return /*#__PURE__*/react.createElement(ProjectCard_ProjectCard, Projects_extends({
      allowNumberAnimation: isRevealed,
      key: data.githubLink
    }, data, {
      headerText: headerText,
      descriptionText: descriptionText,
      infoText: infoText
    }));
  }))), visibleNumber < projects_namespaceObject.length && /*#__PURE__*/react.createElement("button", {
    className: Projects_module.projects__show,
    onClick: function onClick() {
      return setVisibleNumber(projects_namespaceObject.length);
    }
  }, /*#__PURE__*/react.createElement(BiChevronDown/* BiChevronDown */.O, null)))));
};

/* harmony default export */ var Projects_Projects = (Projects);
;// CONCATENATED MODULE: ./src/components/Connect/Connect.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Connect_module = ({"connected__heading":"L1yNuF06c0TMPLtnduVe","connected__content":"_vUH86Jkuplr6Vjhgpl8","connected":"u_wr5In4gOejT1HTXHE8"});
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/si/SiFacebook.js
var SiFacebook = __webpack_require__(2568);
;// CONCATENATED MODULE: ./src/components/Connect/Connect.js
function Connect_slicedToArray(arr, i) { return Connect_arrayWithHoles(arr) || Connect_iterableToArrayLimit(arr, i) || Connect_unsupportedIterableToArray(arr, i) || Connect_nonIterableRest(); }

function Connect_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Connect_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Connect_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Connect_arrayLikeToArray(o, minLen); }

function Connect_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Connect_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Connect_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Connect = function Connect() {
  var _useContext = (0,react.useContext)(GlobalCtx),
      _useContext$lang = _useContext.lang,
      currentLanguage = _useContext$lang.currentLanguage,
      textContent = _useContext$lang.textContent;

  var _textContent$connectH = Connect_slicedToArray(textContent.connectHeader[currentLanguage], 2),
      highlitedPartHeader = _textContent$connectH[0],
      normalPartHeader = _textContent$connectH[1];

  return /*#__PURE__*/react.createElement("div", {
    className: Connect_module.connected
  }, /*#__PURE__*/react.createElement("h4", {
    className: Connect_module.connected__heading
  }, /*#__PURE__*/react.createElement("span", null, highlitedPartHeader), normalPartHeader), /*#__PURE__*/react.createElement((Fade_default()), {
    bottom: true
  }, /*#__PURE__*/react.createElement("div", {
    className: Connect_module.connected__content
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100019597573319",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(SiFacebook/* SiFacebook */.u, null)), /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/WebSavva",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(SiGithub/* SiGithub */.p, null)), /*#__PURE__*/react.createElement("a", {
    href: "https://vk.com/id444973440",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(SiVk/* SiVk */.M, null)))));
};

/* harmony default export */ var Connect_Connect = (Connect);
;// CONCATENATED MODULE: ./src/App.js












var App = function App() {
  return /*#__PURE__*/react.createElement(GlobalContext, null, /*#__PURE__*/react.createElement(UI_Layout, null, /*#__PURE__*/react.createElement(HeroBlock_HeroBlock, null), /*#__PURE__*/react.createElement(PrinciplesBlock_PrinciplesBlock, null), /*#__PURE__*/react.createElement(StatsBlock_StatsBlock, null), /*#__PURE__*/react.createElement(SkillsBlock_SkillsBlock, null), /*#__PURE__*/react.createElement(AcademicBlock_AcademicBlock, null), /*#__PURE__*/react.createElement(CodeBlock_CodeBlock, null), /*#__PURE__*/react.createElement(Projects_Projects, null), /*#__PURE__*/react.createElement(Connect_Connect, null)));
};

/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/index.js




react_dom.render( /*#__PURE__*/react.createElement(src_App, null), document.getElementById("root"));

/***/ }),

/***/ 1491:
/***/ (function(module) {

module.exports = "import sqlite3\r\nimport flask\r\nfrom flask import request,Flask,jsonify\r\nfrom dataProcessor import DataProccessor\r\nfrom flask_cors import CORS\r\nimport os\r\n\r\napp = Flask(__name__)\r\napp.config[\"DEBUG\"] = True\r\ncors = CORS(app, resources={r\"/api/*\": {\"origins\": os.environ['CLIENT_ORIGIN']}})\r\n\r\n@app.route('/')\r\ndef say_hello():\r\n    return '<h1>Hello World!</h1>'\r\n\r\n@app.route('/api/econ_sectors/all_names/', methods=['GET'])\r\ndef get_all_names():\r\n    conn = sqlite3.connect('econimpact.db')\r\n    cur = conn.cursor()\r\n    rawNames = cur.execute('SELECT DISTINCT name FROM sectorsGDP').fetchall()\r\n    dp = DataProccessor()\r\n    sectorNames = dp.extractAllNames(rawNames)\r\n\r\n    return jsonify(sectorNames)";

/***/ }),

/***/ 3864:
/***/ (function(module) {

module.exports = "#include <string>\r\n#include <iostream>\r\nusing namespace std;\r\n\r\n// Declaration\r\nstruct Single_List\r\n{ //data structure\r\n\tint Data; //data field\r\n\tSingle_List *Next; //link field\r\n};\r\n\r\n\r\n// Filling up with data\r\nvoid Make_Single_List(int n, Single_List *&Head)\r\n{\r\n\tif (n > 0) {\r\n\t\tHead = new Single_List(); // memory allocation\t\r\n\t\tcout << \"Enter node value\" << endl;\r\n\t\tcin >> Head->Data;\r\n\t\tHead->Next = NULL;\r\n\t\tMake_Single_List(n - 1, Head->Next);\r\n\t}\r\n}";

/***/ }),

/***/ 2115:
/***/ (function(module) {

module.exports = "import { productsReducer } from \"./products_slice\";\r\nimport { cartReducer } from \"./cart_slice\";\r\nimport { authReducer } from \"./auth_slice\";\r\nimport { configureStore } from \"@reduxjs/toolkit\";\r\n\r\nconst store = configureStore({\r\n  reducer: {\r\n    products: productsReducer,\r\n    cart: cartReducer,\r\n    auth: authReducer,\r\n  },\r\n});\r\n\r\nexport default store;\r\n\r\nexport type RootState = ReturnType<typeof store.getState>;\r\nexport type AppDispatch = typeof store.dispatch;";

/***/ }),

/***/ 4036:
/***/ (function(module) {

module.exports = "import React, {useRef, useEffect} from 'react'\r\n\r\nconst usePrevious = (value) => {\r\n    const ref = useRef();\r\n\r\n    useEffect(() => {\r\n        ref.current = value;\r\n    });\r\n    \r\n    return ref.current;\r\n}\r\n\r\nexport default usePrevious\r\n";

/***/ }),

/***/ 8257:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./API.py.txt": 1491,
	"./SingleList.cpp.txt": 3864,
	"./store.ts.txt": 2115,
	"./usePrevious.js.txt": 4036
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8257;

/***/ }),

/***/ 5080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Bash.svg": 5521,
	"./Bootstrap.svg": 8431,
	"./C++.svg": 9163,
	"./CSS.svg": 7516,
	"./Git.svg": 4334,
	"./HTML.svg": 4936,
	"./Heroku.svg": 7965,
	"./Java.svg": 9528,
	"./JavaScript.svg": 8350,
	"./MATLAB.svg": 1036,
	"./NPM.svg": 635,
	"./Next.js.svg": 4443,
	"./Node.js.svg": 3292,
	"./Python.svg": 6273,
	"./R.svg": 1289,
	"./React.svg": 8065,
	"./Redux.svg": 6904,
	"./Sass.svg": 2299,
	"./TailwindCSS.svg": 5183,
	"./TypeScript.svg": 4020,
	"./Vue.svg": 2676,
	"./Webpack.svg": 1470
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5080;

/***/ }),

/***/ 8898:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "358b139c43b7f76b1f62.svg";

/***/ }),

/***/ 3744:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "80edcd47ed035bc17c09.svg";

/***/ }),

/***/ 5521:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "58df53aa9276f9e28c74.svg";

/***/ }),

/***/ 8431:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e895fc2ff5a09876756f.svg";

/***/ }),

/***/ 9163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "064713529d6b25664197.svg";

/***/ }),

/***/ 7516:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9cd3af0276392898ebf6.svg";

/***/ }),

/***/ 4334:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "30124ab23d5991c87fb1.svg";

/***/ }),

/***/ 4936:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "257ef7dfe744c0724df1.svg";

/***/ }),

/***/ 7965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ffcefa1f82fef00373ea.svg";

/***/ }),

/***/ 9528:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "21e9bbf6edad82176541.svg";

/***/ }),

/***/ 8350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f57d897a8daadc4260be.svg";

/***/ }),

/***/ 1036:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ebdc5e47bdebd87eefaa.svg";

/***/ }),

/***/ 635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8f9218b04ccfd2cab328.svg";

/***/ }),

/***/ 4443:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0c49a6455c0793e06f7c.svg";

/***/ }),

/***/ 3292:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "def298ecc587cc082b15.svg";

/***/ }),

/***/ 6273:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "5404be490c100de98982.svg";

/***/ }),

/***/ 1289:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d5f5298feae46211c0ea.svg";

/***/ }),

/***/ 8065:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "bfa9943e26d441704c31.svg";

/***/ }),

/***/ 6904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e1034dc7b3e36a9e1fb2.svg";

/***/ }),

/***/ 2299:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2b56bd5ed1135516878e.svg";

/***/ }),

/***/ 5183:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "cc408f4a13c79578ce3a.svg";

/***/ }),

/***/ 4020:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9897ca5e2d2d423b7d78.svg";

/***/ }),

/***/ 2676:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "3cdd0e2ce2ae0c6ae4b3.svg";

/***/ }),

/***/ 1470:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7ec16ba03bb11e3462d9.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(2034); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);