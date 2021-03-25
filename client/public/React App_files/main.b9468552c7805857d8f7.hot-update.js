webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/profile/profile.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/profile/profile.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* -------------------------- */\n/* ----- general styles ----- */\n/* -------------------------- */\n\n#Profile {\n    display:flex;\n    flex-direction:row;\n    justify-content: space-around;\n    overflow-y: scroll;\n    height:90vh;\n}\n\n#Profile .leftColumn {\n    width:35%;\n    padding:2.5%;\n}\n\n#Profile .profile-avatar {\n    width:100%;\n}\n\n#Profile .bio {\n    margin:0px auto;\n    text-align:center;\n}\n\n.recipeCard {\n    border:1px solid black;\n    background-color:white;\n    padding:1rem;\n    margin-bottom:1rem;\n}\n\n.recipeCard,\n.userCard {\n    border:1px solid black;\n    background-color:white;\n    padding:1rem;\n    margin-bottom:1rem;\n}\n\n\n.recipeCard h3,\n.userCard h3 {\n    margin:0;\n}\n\n.sidebarHeader {\n    position:sticky;\n    top:0;\n    height:5%;\n    background-color:black;\n}\n\n.sidebarFooter {\n    position:sticky;\n    bottom:-1%;\n    height:6%;\n    background-color:black;\n}\n\n#Profile .mainFlexWrap {\n    display:flex;\n    flex-direction:column;\n    justify-content: flex-start;\n    width:60%;\n    padding:2.5%;\n}\n\n#Profile .mainFlexWrap {\n    margin:0px auto;\n    text-align:center;\n}\n\n#Profile .profileBlock {\n    padding:2.5%;\n    border:1px solid black;\n    margin-top:1rem;\n    text-align: center;\n}\n\n#Profile .profileBlock.community-points h3 {\n    font-size:5em;\n    margin:0;\n}\n\n#Profile .profileBlock.community-points {\n    padding:2em;\n}\n\n#Profile .profileBlock.community-points p {\n    margin:0;\n}\n\n/* -------------------------- */\n/* - feed / overflow styles - */\n/* -------------------------- */\n\n.popularRecipesFeed, \n.popularUsersFeed {\n    height:35vh;\n    overflow-y: scroll;\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n    background-color:black;\n    border:1px solid black;\n    padding:0 5% 0 5%;\n    position:relative;\n}\n\n.popularUsersFeed {\n    margin-top:3vh;\n}\n\n#Feed .mainFeed {\n    width:70%;\n    padding:1rem;\n    height:70vh;\n    overflow-y: scroll;\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n}\n\n#Feed .mainFeed::-webkit-scrollbar {\n    display:none;\n}\n\n.popularRecipesFeed::-webkit-scrollbar,\n.popularUsersFeed::-webkit-scrollbar {\n    display:none;\n}\n\n.horizontal-flex {\n    display:flex;\n    flex-direction:row;\n    justify-content: space-around;\n}\n\n/* -------------------------- */\n/*   ellipses sidebar styles  */\n/* -------------------------- */\n\n.recipeCard {\n    --max-lines: 3;\n    max-height: 10rem;\n    /* overflow: hidden; */\n}\n\n.recipeCard::before {\n    content: \"...\";\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  }\n\n  .recipeCard::after {\n    content: \"\";\n    position: absolute;\n    right: 0; /* note: not using bottom */\n    width: 1rem;\n    height: 1rem;\n    background: white;\n    display: none;\n  }\n  \n  #Feed .sidebarWrap {\n    line-height: var(--lh);\n    --lh: 1.4rem;\n}\n  \n.sidebarWrap .truncate-overflow {\n    --max-lines: 3;\n    position: relative;\n    max-height: calc(var(--lh) * var(--max-lines));\n    overflow: hidden;\n    padding-right: 1rem; /* space for ellipsis */\n  }\n\n.sidebarWrap .truncate-overflow::before {\n    position: absolute;\n    content: \"...\";\n    bottom: 0;\n    right: 0;\n  }\n\n\n/* -------------------------- */\n/* ---- user card styles ---- */\n/* -------------------------- */\n\n", "",{"version":3,"sources":["webpack://src/pages/profile/profile.css"],"names":[],"mappings":"AAAA,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;;AAE/B;IACI,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;;IAEI,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,KAAK;IACL,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,2BAA2B;IAC3B,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,QAAQ;AACZ;;AAEA,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;;AAE/B;;IAEI,WAAW;IACX,kBAAkB;IAClB,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB;IACrB,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B;;AAE/B;IACI,cAAc;IACd,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,QAAQ;EACV;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ,EAAE,2BAA2B;IACrC,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,8CAA8C;IAC9C,gBAAgB;IAChB,mBAAmB,EAAE,uBAAuB;EAC9C;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,QAAQ;EACV;;;AAGF,+BAA+B;AAC/B,+BAA+B;AAC/B,+BAA+B","sourcesContent":["/* -------------------------- */\n/* ----- general styles ----- */\n/* -------------------------- */\n\n#Profile {\n    display:flex;\n    flex-direction:row;\n    justify-content: space-around;\n    overflow-y: scroll;\n    height:90vh;\n}\n\n#Profile .leftColumn {\n    width:35%;\n    padding:2.5%;\n}\n\n#Profile .profile-avatar {\n    width:100%;\n}\n\n#Profile .bio {\n    margin:0px auto;\n    text-align:center;\n}\n\n.recipeCard {\n    border:1px solid black;\n    background-color:white;\n    padding:1rem;\n    margin-bottom:1rem;\n}\n\n.recipeCard,\n.userCard {\n    border:1px solid black;\n    background-color:white;\n    padding:1rem;\n    margin-bottom:1rem;\n}\n\n\n.recipeCard h3,\n.userCard h3 {\n    margin:0;\n}\n\n.sidebarHeader {\n    position:sticky;\n    top:0;\n    height:5%;\n    background-color:black;\n}\n\n.sidebarFooter {\n    position:sticky;\n    bottom:-1%;\n    height:6%;\n    background-color:black;\n}\n\n#Profile .mainFlexWrap {\n    display:flex;\n    flex-direction:column;\n    justify-content: flex-start;\n    width:60%;\n    padding:2.5%;\n}\n\n#Profile .mainFlexWrap {\n    margin:0px auto;\n    text-align:center;\n}\n\n#Profile .profileBlock {\n    padding:2.5%;\n    border:1px solid black;\n    margin-top:1rem;\n    text-align: center;\n}\n\n#Profile .profileBlock.community-points h3 {\n    font-size:5em;\n    margin:0;\n}\n\n#Profile .profileBlock.community-points {\n    padding:2em;\n}\n\n#Profile .profileBlock.community-points p {\n    margin:0;\n}\n\n/* -------------------------- */\n/* - feed / overflow styles - */\n/* -------------------------- */\n\n.popularRecipesFeed, \n.popularUsersFeed {\n    height:35vh;\n    overflow-y: scroll;\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n    background-color:black;\n    border:1px solid black;\n    padding:0 5% 0 5%;\n    position:relative;\n}\n\n.popularUsersFeed {\n    margin-top:3vh;\n}\n\n#Feed .mainFeed {\n    width:70%;\n    padding:1rem;\n    height:70vh;\n    overflow-y: scroll;\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n}\n\n#Feed .mainFeed::-webkit-scrollbar {\n    display:none;\n}\n\n.popularRecipesFeed::-webkit-scrollbar,\n.popularUsersFeed::-webkit-scrollbar {\n    display:none;\n}\n\n.horizontal-flex {\n    display:flex;\n    flex-direction:row;\n    justify-content: space-around;\n}\n\n/* -------------------------- */\n/*   ellipses sidebar styles  */\n/* -------------------------- */\n\n.recipeCard {\n    --max-lines: 3;\n    max-height: 10rem;\n    /* overflow: hidden; */\n}\n\n.recipeCard::before {\n    content: \"...\";\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  }\n\n  .recipeCard::after {\n    content: \"\";\n    position: absolute;\n    right: 0; /* note: not using bottom */\n    width: 1rem;\n    height: 1rem;\n    background: white;\n    display: none;\n  }\n  \n  #Feed .sidebarWrap {\n    line-height: var(--lh);\n    --lh: 1.4rem;\n}\n  \n.sidebarWrap .truncate-overflow {\n    --max-lines: 3;\n    position: relative;\n    max-height: calc(var(--lh) * var(--max-lines));\n    overflow: hidden;\n    padding-right: 1rem; /* space for ellipsis */\n  }\n\n.sidebarWrap .truncate-overflow::before {\n    position: absolute;\n    content: \"...\";\n    bottom: 0;\n    right: 0;\n  }\n\n\n/* -------------------------- */\n/* ---- user card styles ---- */\n/* -------------------------- */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.b9468552c7805857d8f7.hot-update.js.map