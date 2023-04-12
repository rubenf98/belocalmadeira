"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_HomepageComponents_About_jsx"],{

/***/ "./resources/js/components/pages/HomepageComponents/About.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/HomepageComponents/About.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helper */ "./resources/js/helper.js");
/* harmony import */ var _common_AnimationContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/AnimationContainer */ "./resources/js/components/common/AnimationContainer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    max-width: ", ";\n    margin: auto;\n    padding: 100px 0px;\n    box-sizing: border-box;\n    align-items: center;\n    flex-wrap: wrap;\n"])), _helper__WEBPACK_IMPORTED_MODULE_1__.maxWidth);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 50%;\n    padding: 0px 50px;\n    box-sizing: border-box;\n\n    @media (max-width: ", ") {\n        width: 100%;\n        padding: 0px 0px;\n    }\n"])), _helper__WEBPACK_IMPORTED_MODULE_1__.dimensions.md);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    order: ", ";\n    position: relative;\n\n    video {\n        width: 100%;\n        height: auto;\n        max-height: 700px;\n        object-fit: cover;\n        \n\n        @media (max-width: ", ") {\n            margin: auto;\n            display: block;\n        }\n        \n    }\n\n\n    .full-width-video {\n        border-right: 1px solid lightgray;\n    }\n"])), function (props) {
  return props.reverseOrder ? 2 : 1;
}, _helper__WEBPACK_IMPORTED_MODULE_1__.dimensions.md);
var InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    margin-bottom: 50px;\n    margin-top: 100px;\n\n    \n\n    h2 {\n        font-size: 40px;\n        font-weight: bold;\n        font-family: 'Playfair Display', serif;\n        line-height: 47px;\n        \n    }\n\n    p {\n        font-size: 16px;\n        font-family: 'Playfair Display', serif;\n        margin-bottom: 5px;\n    }\n\n    @media (max-width: ", ") {\n        padding: 0px 20px;\n        margin-top: 50px;\n\n        h2 {\n            font-size: 24px;\n            line-height: 30px;\n        }\n\n        p {\n            font-size: 14px;\n        }\n    }\n"])), _helper__WEBPACK_IMPORTED_MODULE_1__.dimensions.md);
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  z-index: 5;\n  top: 0;bottom:0;left:0;right: 0;\n  position: absolute;\n  background: rgb(0,0,0);\n  background: linear-gradient(180deg, #000 0%, #38383830 100%);\n  opacity: 0.2;\n"])));

function About(_ref) {
  var text = _ref.text;
  var themeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);

  var Section = function Section(_ref2) {
    var video = _ref2.video,
        thumbnail = _ref2.thumbnail,
        title = _ref2.title,
        descriptions = _ref2.descriptions;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InfoContainer, {
        lightText: themeContext.lightText,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_common_AnimationContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          animateIn: "fadeInRight",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            children: text.titles[title]
          }), descriptions.map(function (index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: text.description[index]
            }, index);
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ImageContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Overlay, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("video", {
          preload: "metadata",
          playsInline: true,
          poster: "/image/homepage/" + thumbnail + ".jpg",
          muted: true,
          loop: true,
          autoPlay: true,
          controls: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source", {
            src: "/image/homepage/" + video + ".mp4",
            type: "video/mp4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source", {
            src: "/image/homepage/" + video + ".webm",
            type: "video/webm"
          }), text.videoError]
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
    id: "homepage-about-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Column, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Section, {
        video: "mobile_header",
        thumbnail: "timelapse_thumbnail",
        title: 0,
        descriptions: [0]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Section, {
        video: "walking",
        thumbnail: "about_thumbnail",
        title: 2,
        descriptions: [2]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Column, {
      className: "last-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Section, {
        video: "timelapse",
        thumbnail: "timelapse_thumbnail",
        title: 1,
        descriptions: [1]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {})]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ })

}]);