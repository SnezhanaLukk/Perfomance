/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5506fa04db381094512.png";

/***/ }),

/***/ 37:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d19e216b2d5b7971f85.svg";

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b61801258e48a97351d6.svg";

/***/ }),

/***/ 157:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
;// ./src/components/Header.jsx
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


function Header() {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggled = _useState4[0],
    setToggled = _useState4[1];
  var onClick = function onClick() {
    if (!toggled) setToggled(true);
    setExpanded(!expanded);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
    className: "header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      href: "/",
      className: "header__logo",
      "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "header__menu",
      "aria-expanded": expanded ? "true" : "false",
      onClick: onClick,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "header__menu-text a11y-hidden",
        children: expanded ? "Закрыть меню" : "Открыть меню"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "header__links" + (expanded ? " header__links_opened" : "") + (toggled ? " header__links-toggled" : ""),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "header__item",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "header__link header__link_current",
          href: "/",
          "aria-current": "page",
          children: "\u0421\u0432\u043E\u0434\u043A\u0430"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "header__item",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "header__link",
          href: "/devices",
          children: "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "header__item",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "header__link",
          href: "/scripts",
          children: "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
        })
      })]
    })]
  });
}
;// ./src/components/Event.jsx


function Event(props) {
  var ref = (0,react.useRef)();
  var onSize = props.onSize;
  (0,react.useEffect)(function () {
    var width = ref.current.offsetWidth;
    var height = ref.current.offsetHeight;
    if (onSize) {
      onSize({
        width: width,
        height: height
      });
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    ref: ref,
    className: "event" + (props.slim ? " event_slim" : ""),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      className: "event__button",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "event__icon event__icon_".concat(props.icon),
        role: "img",
        "aria-label": props.iconLabel
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
        className: "event__title",
        children: props.title
      }), props.subtitle && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "event__subtitle",
        children: props.subtitle
      })]
    })
  });
}
;// ./src/components/tabs.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || tabs_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tabs_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return tabs_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? tabs_arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return tabs_arrayLikeToArray(r); }
function tabs_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var TABS = {
  all: {
    title: "Все",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  },
  kitchen: {
    title: "Кухня",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }]
  },
  hall: {
    title: "Зал",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Выключено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Выключено"
    }]
  },
  lights: {
    title: "Лампочки",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }]
  },
  cameras: {
    title: "Камеры",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  }
};
for (var i = 0; i < 6; ++i) {
  TABS.all.items = [].concat(_toConsumableArray(TABS.all.items), _toConsumableArray(TABS.all.items));
}
var TABS_KEYS = Object.keys(TABS);
;// ./src/components/MainMenu.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MainMenu_toConsumableArray(r) { return MainMenu_arrayWithoutHoles(r) || MainMenu_iterableToArray(r) || MainMenu_unsupportedIterableToArray(r) || MainMenu_nonIterableSpread(); }
function MainMenu_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MainMenu_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function MainMenu_arrayWithoutHoles(r) { if (Array.isArray(r)) return MainMenu_arrayLikeToArray(r); }
function MainMenu_slicedToArray(r, e) { return MainMenu_arrayWithHoles(r) || MainMenu_iterableToArrayLimit(r, e) || MainMenu_unsupportedIterableToArray(r, e) || MainMenu_nonIterableRest(); }
function MainMenu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function MainMenu_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return MainMenu_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? MainMenu_arrayLikeToArray(r, a) : void 0; } }
function MainMenu_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function MainMenu_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function MainMenu_arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function MainMenu() {
  var ref = (0,react.useRef)();
  var initedRef = (0,react.useRef)(false);
  var _useState = (0,react.useState)(""),
    _useState2 = MainMenu_slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = MainMenu_slicedToArray(_useState3, 2),
    hasRightScroll = _useState4[0],
    setHasRightScroll = _useState4[1];
  (0,react.useEffect)(function () {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  });
  var onSelectInput = function onSelectInput(event) {
    setActiveTab(event.target.value);
  };
  var sizes = [];
  var onSize = function onSize(size) {
    sizes = [].concat(MainMenu_toConsumableArray(sizes), [size]);
  };
  (0,react.useEffect)(function () {
    var sumWidth = sizes.reduce(function (acc, item) {
      return acc + item.width;
    }, 0);
    // const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0);

    var newHasRightScroll = sumWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });
  var onArrowCLick = function onArrowCLick() {
    var scroller = ref.current.querySelector(".section__panel:not(.section__panel_hidden)");
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth"
      });
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
    className: "main",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: "section main__general",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        className: "section__title section__title-header section__main-title",
        children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "hero-dashboard",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "hero-dashboard__primary",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: "hero-dashboard__title",
            children: "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "hero-dashboard__subtitle",
            children: "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
            className: "hero-dashboard__info",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
              className: "hero-dashboard__item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "hero-dashboard__item-title",
                children: "\u0414\u043E\u043C\u0430"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "hero-dashboard__item-details",
                children: ["+23", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "a11y-hidden",
                  children: "\xB0"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
              className: "hero-dashboard__item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "hero-dashboard__item-title",
                children: "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "hero-dashboard__item-details",
                children: ["+19", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "a11y-hidden",
                  children: "\xB0"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "hero-dashboard__icon hero-dashboard__icon_rain",
                  role: "img",
                  "aria-label": "\u0414\u043E\u0436\u0434\u044C"
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "hero-dashboard__schedule",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
            icon: "temp",
            iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            title: "Philips Cooler",
            subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
            icon: "light",
            iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
            icon: "light",
            iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: "section main__scripts",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        className: "section__title section__title-header",
        children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        className: "event-grid",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
          slim: true,
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
          slim: true,
          icon: "schedule",
          iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
          title: "\u042F \u0443\u0445\u043E\u0436\u0443"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
          slim: true,
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
          slim: true,
          icon: "temp2",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
          subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Event, {
          slim: true,
          icon: "temp2",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: "section main__devices",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "section__title",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          className: "section__title-header",
          children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
          className: "section__select",
          defaultValue: "all",
          onInput: onSelectInput,
          children: TABS_KEYS.map(function (key) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
              value: key,
              children: TABS[key].title
            }, key);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          role: "tablist",
          className: "section__tabs",
          children: TABS_KEYS.map(function (key) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
              role: "tab",
              "aria-selected": key === activeTab ? "true" : "false",
              tabIndex: key === activeTab ? "0" : undefined,
              className: "section__tab" + (key === activeTab ? " section__tab_active" : ""),
              id: "tab_".concat(key),
              "aria-controls": "panel_".concat(key),
              onClick: function onClick() {
                return setActiveTab(key);
              },
              children: TABS[key].title
            }, key);
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "section__panel-wrapper",
        ref: ref,
        children: [TABS_KEYS.map(function (key) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            role: "tabpanel",
            className: "section__panel" + (key === activeTab ? "" : " section__panel_hidden"),
            "aria-hidden": key === activeTab ? "false" : "true",
            id: "panel_".concat(key),
            "aria-labelledby": "tab_".concat(key),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
              className: "section__panel-list",
              children: TABS[key].items.map(function (item, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Event, _objectSpread(_objectSpread({}, item), {}, {
                  onSize: onSize
                }), index);
              })
            })
          }, key);
        }), hasRightScroll && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "section__arrow",
          onClick: onArrowCLick
        })]
      })]
    })]
  });
}
;// ./src/components/App.jsx



function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(MainMenu, {})]
  });
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(159);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/reset.css
var cjs_ruleSet_1_rules_1_use_2_src_reset = __webpack_require__(341);
;// ./src/reset.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src_reset/* default */.A, options);




       /* harmony default export */ const src_reset = (cjs_ruleSet_1_rules_1_use_2_src_reset/* default */.A && cjs_ruleSet_1_rules_1_use_2_src_reset/* default */.A.locals ? cjs_ruleSet_1_rules_1_use_2_src_reset/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles.css
var styles = __webpack_require__(784);
;// ./src/styles.css

      
      
      
      
      
      
      
      
      

var styles_options = {};

styles_options.styleTagTransform = (styleTagTransform_default());
styles_options.setAttributes = (setAttributesWithoutAttributes_default());
styles_options.insert = insertBySelector_default().bind(null, "head");
styles_options.domAPI = (styleDomAPI_default());
styles_options.insertStyleElement = (insertStyleElement_default());

var styles_update = injectStylesIntoStyleTag_default()(styles/* default */.A, styles_options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./src/index.js





var root = client.createRoot(document.getElementById("app"));
root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(App, {}));

/***/ }),

/***/ 317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d655218a2b02d5911247.svg";

/***/ }),

/***/ 341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbf3825fdaeb5d79fbbe.svg";

/***/ }),

/***/ 610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd1a4eae25a10afdd273.webp";

/***/ }),

/***/ 638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1c80687f8b99c25c4c9.svg";

/***/ }),

/***/ 641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab45bd1abea4a81765bb.svg";

/***/ }),

/***/ 761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96d177798e471cc2c056.svg";

/***/ }),

/***/ 784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(584), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(896), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(317), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(610), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(761), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(37), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(50), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(641), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(638), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(822), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(1), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 100%;
  font-family: Arial, sans-serif;
  line-height: 1.25;
}

body {
  display: flex;
  flex-direction: column;
  font-family: inherit;
  line-height: inherit;
  margin: 0;
}

html,
body {
  height: 100%;
}

.a11y-hidden {
  position: absolute;
  left: auto;
  height: 1px;
  width: 1px;
  top: 0;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
}

.header {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 5.75rem;
  margin-bottom: 1.875rem;
  padding: 0 2.5rem;
  font-family: Arial, sans-serif;
  border-bottom: 1px solid #f0f0f0;
}

@media (max-width: 768px) {
  .header {
    height: 4rem;
    margin-bottom: 0;
    padding: 0 0 0 1.25rem;
    border-bottom: none;
  }
}

.header__logo {
  flex: 0 0 auto;
  width: 6.75rem;
  height: 2.3125rem;
  margin-right: 3.25rem;
  background: no-repeat 50% 50% url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
}

.header__menu {
  display: none;
  width: 3.5rem;
  height: 100%;
  margin: 0 0 0 auto;
  padding: 0;
  background: 50% 50% no-repeat transparent url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .header__menu {
    display: block;
  }
}

.header__links {
  display: flex;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .header__links {
    display: none;

    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    padding: 1.25rem;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5);
  }

  .header__links-toggled {
    display: flex;
    animation: hideMenu 0.3s ease-in-out 1;
    animation-fill-mode: both;
  }

  .header__links_opened {
    display: flex;
    visibility: visible;
    animation: showMenu 0.3s ease-in-out 1;
    animation-fill-mode: both;
  }
}

@keyframes showMenu {
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes hideMenu {
  from {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  to {
    transform: translateY(-1rem);
    opacity: 0;
    visibility: hidden;
  }
}

.header__item {
  margin: 0;
  padding: 0;
}

.header__link {
  font-weight: bold;
  opacity: 0.6;
  transition: opacity 0.15s ease-in-out;
  text-decoration: none;
  color: #333333;
}

.header__link:hover {
  opacity: 1;
}

.header__link_current {
  opacity: 1;
}

.main {
  display: grid;
  flex: 0 0 auto;
  grid-template-columns: 50% 50%;
  gap: 1.625rem;
  padding: 0 2.5rem;
}

@media (max-width: 768px) {
  .main {
    padding: 0 1.25rem;
  }
}

@media (max-width: 1024px) {
  .main {
    grid-template-columns: 100%;
  }
}

.main__devices {
  grid-column-start: 1;
  grid-column-end: 3;
}

@media (max-width: 1024px) {
  .main__devices {
    grid-column-end: 2;
  }
}

.section__title-header {
  margin: 0;
  font-size: 1.125rem;
  font-weight: bold;
  color: #333333;
}

.section__title {
  display: flex;
  align-items: baseline;
  margin: 0 0 1.25rem 0;
}

@media (max-width: 768px) {
  .section__title {
    gap: 1rem;
  }

  .section__main-title {
    display: none;
  }
}

.section__select {
  display: none;
  margin: 0 0 0 auto;
  padding: 0.4375rem 1.9375rem 0.5rem 1rem;
  border: none;
  border-radius: 1.25rem;
  font-size: 0.8125rem;
  font-family: inherit;
  font-weight: bold;
  background: no-repeat calc(100% - 1rem) 50% #ffd93e
    url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

@media (max-width: 768px) {
  .section__select {
    display: block;
  }
}

.section__tabs {
  display: flex;
  gap: 0.625rem;
  align-items: baseline;
  margin: 0 0 0 0.8125rem;
  padding: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .section__tabs {
    display: none;
  }
}

.section__tab {
  flex: 0 0 auto;
  padding: 0.4375rem 0.9375rem 0.5rem;
  font-size: 0.8125rem;
  font-weight: bold;
  background: #f7f7f7;
  border-radius: 1024px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  transition-property: background-color, box-shadow;
}

.section__tab_active {
  background: #ffd93e;
}

.section__tab:not(.section__tab_active):hover {
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5);
}

.hero-dashboard {
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: 0.9375rem;
  height: 20.6875rem;
  background: no-repeat 50% 50% url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  /*background-size: cover;*/
  background-size: 1260px;
  border-radius: 1.25rem;
}

@media (max-width: 768px) {
  .hero-dashboard {
    flex-direction: column;
    gap: 1.25rem;
    height: auto;
    margin-bottom: 0.3125rem;
  }
}

.hero-dashboard__primary {
  flex: 1 1 auto;
  padding: 1.25rem 0 1.25rem 1.25rem;
}

@media (max-width: 768px) {
  .hero-dashboard__primary {
    padding: 1.25rem 1.25rem 0 1.25rem;
  }
}

.hero-dashboard__title {
  margin: 0.375rem 0;
  font-size: 1.6875rem;
  font-weight: bold;
  color: #333333;
}

@media (max-width: 768px) {
  .hero-dashboard__title {
    font-size: 1.125rem;
  }
}

.hero-dashboard__subtitle {
  margin: 0.375rem 0 0 0;
  font-size: 0.875rem;
  color: #333333;
}

@media (max-width: 768px) {
  .hero-dashboard__subtitle {
    margin: 0.3125rem 0 0 0;
    font-size: 0.75rem;
  }
}

.hero-dashboard__info {
  display: flex;
  gap: 1.125rem;
  margin: 1.5625rem 0 0 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .hero-dashboard__info {
    margin-top: 0.9375rem;
  }
}

.hero-dashboard__item {
  margin: 0;
  padding: 0;
}

.hero-dashboard__item-title {
  font-size: 0.875rem;
  color: #858585;
}

@media (max-width: 768px) {
  .hero-dashboard__item-title {
    font-size: 0.75rem;
  }
}

.hero-dashboard__item-details {
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  font-size: 2.25rem;
  font-weight: bold;
  color: #333333;
}

@media (max-width: 768px) {
  .hero-dashboard__item-details {
    margin-top: 0.3125rem;
    font-size: 1.5rem;
  }
}

.hero-dashboard__icon {
  width: 1.625rem;
  height: 1.625rem;
  margin-left: 0.3125rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
}

@media (max-width: 768px) {
  .hero-dashboard__icon {
    width: 1.375rem;
    height: 1.375rem;
  }
}

.hero-dashboard__icon_rain {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.hero-dashboard__schedule {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 0.9375rem;
  margin: 0;
  padding: 1.25rem 1.5625rem 1.25rem 0;
  overflow: auto;
  list-style: none;
  scrollbar-width: none;
}

.hero-dashboard__schedule::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .hero-dashboard__schedule {
    flex-direction: row;
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
}

.event__button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.1875rem;
  width: 100%;
  min-width: 12.5rem;
  height: 7.5rem;
  margin: 0;
  padding: 0.875rem;
  border-radius: 1.25rem;
  border: none;
  background: #f7f7f7;
  text-align: left;
  transition: 0.25s ease-in-out;
  transition-property: background-color, box-shadow;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.event_slim .event__button {
  height: 6.25rem;
}

.event__button:hover {
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5);
}

.event__icon {
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
}

.event__icon_temp {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.event__icon_temp2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.event__icon_light {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

.event__icon_light2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}

.event__icon_schedule {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}

.event__title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: bold;
  color: #333333;
}

.event__subtitle {
  font-size: 0.75rem;
  color: #858585;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.9375rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 768px) {
  .event-grid {
    display: flex;
    padding-bottom: 0.3125rem;
    overflow: auto;
    scrollbar-width: none;
  }

  .event-grid::-webkit-scrollbar {
    display: none;
  }
}

.section__panel {
  padding-bottom: 0.625rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.section__panel::-webkit-scrollbar {
  display: none;
}

.section__panel_hidden {
  display: none;
}

.section__panel-list {
  display: flex;
  gap: 0.9375rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.section__panel-wrapper {
  position: relative;
}

.section__arrow {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  bottom: 10px;
  background: no-repeat 50% 50% url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  transform: rotate(180deg);
  cursor: pointer;
}

.section__arrow:hover {
  opacity: 0.7;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71bbb008775a1c81db81.svg";

/***/ }),

/***/ 896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c481f94300218fcebd0.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshri2025_task"] = self["webpackChunkshri2025_task"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [913], () => (__webpack_require__(157)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;