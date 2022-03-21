(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<h2 class=\"ion-float-start\">\n\t\t\t\t<small>Madurai</small>\n\t\t\t\t<strong>Arumugam Medicals</strong>\n\t\t\t</h2>\n\n\t\t\t<span class=\"ion-float-end cart_icon\"  (click)=\"cartt()\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-shopping-cart ion-text-start\"></ion-icon>\n\t\t\t\t<ion-badge>{{getcountfromdb}}</ion-badge>\n\t\t\t</span>\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"search_box d-flex\">\n\t\t<ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\n\t\t<ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" placeholder=\"{{'what_you_like_to_eat_today' | translate}}\"></ion-searchbar>\n\t\t<!-- <ion-icon class=\"zmdi zmdi-tune ion-text-end\" ></ion-icon> -->\n\t</div>\n\n\t<ion-segment [(ngModel)]=\"tab\" lines=\"none\">\n\t\t<ion-segment-button value=\"cuisine\">\n\t\t\t<ion-label>\n\t\t\t\tProduct List\n\t\t\t</ion-label>\n\t\t</ion-segment-button>\n\t</ion-segment>\n</ion-header>\n\n<ion-content class=\"bg_color\" [ngSwitch]=\"tab\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\t<!-- Cuisine  Start -->\n\t<div class=\"tab_container\" *ngSwitchCase=\"'cuisine'\">\n\t\t<div class=\"collapse\" [ngClass]=\"faqExpand1 ? 'active' : 'active' \">\n\t\t\t\n\t\t\t<ion-list lines=\"none\" *ngIf=\"getProductList.length\">\n\t\t\t\t<ion-item *ngFor=\"let data of items;let i = index\" >\n\t\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t\t<div class=\"img_box center_img\" (click)=\"callProductDetails(data.id)\">\n\t\t\t\t\t\t\t<img [src]=\"data?.icons\" class=\"crop_img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\" (click)=\"callProductDetails(data.id)\">\n\t\t\t\t\t\t\t\t<span class=\"item_name\">{{data?.title}}</span>\n\t\t\t\t\t\t\t\t<span class=\"end ion-text-end\"> ₹ {{data?.price}}</span>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p class=\"d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"item_about\" (click)=\"callProductDetails(data.id)\">{{data?.description}}</span>\n\t\t\t\t\t\t\t\t<span class=\"end add-remove d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-minus\" (click)=\"decrement(i,data.id,data.currentItems,data)\"></ion-icon>\n                                    <strong class=\"ion-text-center\">\n                                        <ion-input class=\"ion-text-center\" style=\"height: 23px;width: 33px;\" readonly type=\"number\" min=\"0\" [value]=\"data.currentItems\" [(ngModel)]=\"data.currentItems\"></ion-input>\n                                    </strong>\n                                    <ion-icon class=\"zmdi zmdi-plus\"  (click)=\"increment(i,data.id,data.currentItems,data)\"></ion-icon>\n                                </span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"item_about\" (click)=\"callProductDetails(data.id)\">Instock: {{data?.inStock}}</span>\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- <ion-item>\n\t\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t\t<div class=\"img_box center_img\" (click)=\"item_detail()\">\n\t\t\t\t\t\t\t<img src=\"assets/images/food3.png\" class=\"crop_img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\" (click)=\"item_detail()\">\n\t\t\t\t\t\t\t\t<span class=\"item_name\">Panner Khurchan</span>\n\t\t\t\t\t\t\t\t<span class=\"end ion-text-end\">$ 40</span>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p class=\"d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"item_about\" (click)=\"item_detail()\"> A rich tomato, butter and cream based gravy, lightly spiced.</span>\n\t\t\t\t\t\t\t\t<span class=\"end add-remove d-flex\" (click)=\"toggleAddIcon1()\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-minus\"></ion-icon>\n\t\t\t\t\t\t\t\t\t<strong class=\"ion-text-center\">1</strong>\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-plus\"></ion-icon>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t\t<div class=\"img_box center_img\" (click)=\"item_detail()\">\n\t\t\t\t\t\t\t<img src=\"assets/images/food4.png\" class=\"crop_img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\" (click)=\"item_detail()\">\n\t\t\t\t\t\t\t\t<span class=\"item_name\">Tahi Red Curry</span>\n\t\t\t\t\t\t\t\t<span class=\"end ion-text-end\">$ 45</span>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p class=\"d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"item_about\" (click)=\"item_detail()\"> Thai red curry with assorted vage-table and tofu with butter top ups.</span>\n\t\t\t\t\t\t\t\t<span class=\"end add-remove d-flex\" (click)=\"toggleAddIcon1()\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-minus\"></ion-icon>\n\t\t\t\t\t\t\t\t\t<strong class=\"ion-text-center\">1</strong>\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-plus\"></ion-icon>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item> -->\n\t\t\t</ion-list>\n\t\t</div>\n\n\t\n\t</div>\n\t<!-- Cuisine  End -->\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n\t\t<ion-infinite-scroll-content\n\t\tloadingSpinner=\"bubbles\"\n\t\tloadingText=\"Loading more data...\">\n\t  </ion-infinite-scroll-content>\t  </ion-infinite-scroll>\n</ion-content>\n\n<!-- <ion-footer no-border class=\"d-flex\">\n\t\n\t<ion-button size=\"large\" shape=\"round\" class=\"btn\" >Add to Cart</ion-button>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
var SearchPageRoutingModule = /** @class */ (function () {
    function SearchPageRoutingModule() {
    }
    SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SearchPageRoutingModule);
    return SearchPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");








var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchPageRoutingModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: var(--bg-color);\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 83px;\n  top: 0;\n  left: 0;\n  display: block;\n  background: var(--primary);\n}\nion-header ion-toolbar ion-title h2 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 300;\n  line-height: 55px;\n  padding-top: 12px;\n  max-width: calc(100% - 50px);\n  overflow: hidden;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  line-height: 11px;\n  font-size: 0.6rem;\n}\nion-header ion-toolbar ion-title h2 strong {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title span.cart_icon {\n  position: relative;\n  min-width: 23px;\n}\nion-header ion-toolbar ion-title span.cart_icon ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  line-height: 11px;\n  display: block;\n  font-size: 0.45rem !important;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\nion-header ion-toolbar ion-title span.cart_icon ion-icon {\n  position: relative;\n  top: 3px;\n  font-size: 1.2rem;\n}\nion-header .search_box {\n  background: var(--white);\n  width: calc(100% - 10px);\n  border-radius: 3px;\n  margin: 0 auto;\n  padding: 0 15px;\n  position: relative;\n  overflow: hidden;\n  min-height: 45px;\n  z-index: 99;\n  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  opacity: 0.5;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-light);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n}\n.tab_container {\n  margin-top: 6px;\n}\n.tab_container ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n}\n.tab_container ion-list ion-item {\n  --background: var(--white) !important;\n  --padding-start: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  position: relative;\n  margin: 0 auto;\n  width: calc(100% - 15px);\n  padding: 0;\n}\n.tab_container ion-list ion-item .item_inner {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n.tab_container ion-list ion-item .item_inner .img_box {\n  width: 58px;\n  min-width: 58px;\n  height: 58px;\n  border-radius: 3px;\n  margin-right: 10px;\n}\n.tab_container ion-list ion-item .item_inner .text_box {\n  width: 100%;\n  padding-top: 3px;\n}\n.tab_container ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\n.tab_container ion-list ion-item .item_inner .text_box h3 span.item_name {\n  display: block;\n  width: 180px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.tab_container ion-list ion-item .item_inner .text_box h3 span.end {\n  min-width: 68px;\n  font-weight: 500;\n}\n.tab_container ion-list ion-item .item_inner .text_box p {\n  color: var(--text-light);\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.add-remove {\n  background: #fbf7f7;\n  border-radius: 50px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.add-remove ion-icon {\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  color: var(--white);\n  font-size: 0.8rem;\n  background: var(--primary) !important;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.add-remove strong {\n  margin: 0;\n  min-width: 23px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: block;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.item_about {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-width: calc(100% - 70px);\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box {\n  position: relative;\n  min-width: 60px;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box ion-icon {\n  background: var(--primary);\n  border: 1px solid var(--primary);\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  color: var(--white);\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n  font-size: 1.1rem;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box ion-icon:nth-child(even) {\n  width: 0px;\n  height: 0px;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box.active ion-icon {\n  background: var(--transparent);\n  color: var(--primary);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box.active ion-icon:nth-child(odd) {\n  width: 0px;\n  height: 0px;\n}\n.tab_container ion-list ion-item .item_inner .text_box p span.icon_box.active ion-icon:nth-child(even) {\n  width: 25px;\n  height: 25px;\n}\n.tab_container .collapse {\n  position: relative;\n  overflow: hidden;\n  background: var(--white);\n  margin-bottom: 4px;\n  height: 59px;\n  overflow: hidden;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container .collapse h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 400;\n  padding: 17px 20px 17px 20px;\n}\n.tab_container .collapse h2 ion-icon {\n  color: var(--secondary);\n  font-size: 1.5rem;\n  overflow: hidden;\n  width: 14px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container .collapse ion-list ion-item {\n  padding: 10px 0px 23px 0px;\n}\n.tab_container .collapse.active {\n  height: auto;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container .collapse.active h2 ion-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.tab_container.review ion-list {\n  background: var(--white) !important;\n  padding: 12px 0;\n}\n.tab_container.review ion-list ion-item {\n  padding: 12px 15px;\n}\n.tab_container.review ion-list ion-item .item_inner {\n  width: 100%;\n}\n.tab_container.review ion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 400;\n  font-size: 0.95rem;\n  margin-bottom: 10px;\n}\n.tab_container.review ion-list ion-item .item_inner h3 {\n  margin: 0;\n  margin-bottom: 10px;\n}\n.tab_container.review ion-list ion-item .item_inner h3 ion-badge {\n  background: var(--primary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 3px;\n  width: 32px;\n  height: 17px;\n  font-size: 0.7rem !important;\n  font-weight: 500;\n  line-height: 16px;\n}\n.tab_container.review ion-list ion-item .item_inner h3 span {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.tab_container.review ion-list ion-item .item_inner h3 span.rating_icon {\n  margin: 0 10px;\n}\n.tab_container.review ion-list ion-item .item_inner h3 span.rating_icon ion-icon {\n  font-size: 1rem;\n  color: var(--text-light);\n  opacity: 0.5;\n}\n.tab_container.review ion-list ion-item .item_inner h3 span.rating_icon ion-icon.active {\n  color: var(--yelow_color);\n  opacity: 1;\n}\n.tab_container.review ion-list ion-item .item_inner p {\n  margin: 0;\n  color: var(--text-dark2);\n  font-weight: 300;\n  font-size: 0.9rem;\n  line-height: 19px;\n}\n.tab_container.info ion-list ion-item {\n  width: 100%;\n  margin-bottom: 4px;\n  padding: 0px 15px;\n  background: var(--white);\n}\n.tab_container.info ion-list ion-item .item_inner {\n  width: 100%;\n}\n.tab_container.info ion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  margin: 0;\n}\n.tab_container.info ion-list ion-item .item_inner h3 span {\n  font-size: 1rem;\n  font-weight: 400;\n  min-width: 40%;\n  display: block;\n}\n.tab_container.info ion-list ion-item .item_inner h3 strong {\n  min-width: 57%;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #000;\n}\n.tab_container.info ion-list ion-item.status_open .item_inner h3 strong {\n  color: var(--primary);\n}\n.tab_container.info ion-list ion-item.status_cloes .item_inner h3 strong {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxhcnVtdWdhbS9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FDQ0Q7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNDRjtBRElFO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0ZIO0FESUc7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0c7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURRRztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ05KO0FEUUk7RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNOTDtBRFNJO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNQTDtBRGVDO0VBQ0Msd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNiRjtBRGVFO0VBQ0Msd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2JIO0FEZUc7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2JKO0FEaUJFO0VBQ0MsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtBQ2ZIO0FEb0JBO0VBQ0MsZUFBQTtBQ2pCRDtBRG1CQztFQUNDLHlDQUFBO0VBQ0EsVUFBQTtBQ2pCRjtBRG1CRTtFQUNDLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDakJIO0FEbUJHO0VBQ0MsbUNBQUE7VUFBQSxrQ0FBQTtBQ2pCSjtBRG1CSTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqQkw7QURvQkk7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNsQkw7QURvQks7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbEJOO0FEcUJPO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDd0IsZ0JBQUE7RUFDQSxtQkFBQTtFQUN4Qix1QkFBQTtFQUNBLGVBQUE7QUNuQlI7QURzQk87RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNwQlI7QUR5Qks7RUFDQyx3QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdkJOO0FEMEJPO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ3hCUjtBRDBCUTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ3hCVDtBRDJCUTtFQUNDLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUN6QlQ7QUQ4Qk87RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDNUJSO0FEK0JPO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDN0JSO0FEK0JRO0VBQ0MsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQzdCVDtBRCtCUztFQUNDLFVBQUE7RUFDQSxXQUFBO0FDN0JWO0FEa0NTO0VBQ0MsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNoQ1Y7QURrQ1U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQ2hDWDtBRG1DVTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDakNYO0FEZ0RDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDOUNGO0FEZ0RFO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQzlDSDtBRGdERztFQUNDLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDOUNKO0FEbURHO0VBQ0MsMEJBQUE7QUNqREo7QURxREU7RUFDQyxZQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ25ESDtBRHNESTtFQUNDLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDcERMO0FENkRFO0VBQ0MsbUNBQUE7RUFDQSxlQUFBO0FDM0RIO0FENkRHO0VBQ0Msa0JBQUE7QUMzREo7QUQ2REk7RUFDQyxXQUFBO0FDM0RMO0FENkRLO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzNETjtBRDhESztFQUNDLFNBQUE7RUFDQSxtQkFBQTtBQzVETjtBRDhETTtFQUNDLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQzVEUDtBRCtETTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzdEUDtBRCtETztFQUNDLGNBQUE7QUM3RFI7QUQrRFE7RUFDQyxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDN0RUO0FEK0RTO0VBQ0MseUJBQUE7RUFDQSxVQUFBO0FDN0RWO0FEb0VLO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbEVOO0FEMkVHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ3pFSjtBRDJFSTtFQUNDLFdBQUE7QUN6RUw7QUQyRUs7RUFDQyx3QkFBQTtFQUNBLFNBQUE7QUN6RU47QUQyRU07RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3pFUDtBRDRFTTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQzFFUDtBRGtGTztFQUNDLHFCQUFBO0FDaEZSO0FEeUZPO0VBQ0MsdUJBQUE7QUN2RlIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDgzcHg7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuXHJcblx0fVxyXG5cclxuXHRpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdFx0aDIge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMTJweDtcclxuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHRcdHNtYWxsIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTFweDtcclxuXHRcdFx0XHRmb250LXNpemU6IC42cmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzdHJvbmcge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHNwYW4ge1xyXG5cdFx0XHQmLmNhcnRfaWNvbiB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1pbi13aWR0aDogMjNweDtcclxuXHJcblx0XHRcdFx0aW9uLWJhZGdlIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdFx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDA7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDExcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC40NXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAxMnB4O1xyXG5cdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR0b3A6IDNweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX2JveCB7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRtaW4taGVpZ2h0OiA0NXB4O1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0XHRib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdFx0XHRtaW4td2lkdGg6IDM1cHg7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRvcGFjaXR5OiAuNTtcclxuXHJcblx0XHRcdCYuem1kaS10dW5lIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcclxuXHRcdFx0XHRsZWZ0OiB1bnNldDtcclxuXHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlvbi1zZWFyY2hiYXIge1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG5cdFx0XHQtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4udGFiX2NvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG5cclxuXHRpb24tbGlzdCB7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblxyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblxyXG5cdFx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuXHJcblx0XHRcdFx0LmltZ19ib3gge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDU4cHg7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDU4cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDU4cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGV4dF9ib3gge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogM3B4O1xyXG5cclxuXHRcdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuXHRcdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0Ji5pdGVtX25hbWUge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQmLmVuZCB7XHJcblx0XHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDY4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHQmLmFkZC1yZW1vdmUge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZiZjdmNztcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHJcblx0XHRcdFx0XHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0c3Ryb25nIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDIzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Ji5pdGVtX2Fib3V0IHtcclxuXHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdFx0XHRcdFx0XHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdFx0XHRcdFx0XHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ji5pY29uX2JveCB7XHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDYwcHg7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZChldmVuKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC40cztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JjpudGgtY2hpbGQob2RkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZChldmVuKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jb2xsYXBzZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cdFx0aGVpZ2h0OiA1OXB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XHJcblxyXG5cdFx0aDIge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRwYWRkaW5nOiAxN3B4IDIwcHggMTdweCAyMHB4O1xyXG5cclxuXHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0d2lkdGg6IDE0cHg7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC40cztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlvbi1saXN0IHtcclxuXHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggMHB4IDIzcHggMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XHJcblxyXG5cdFx0XHRoMiB7XHJcblx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdCYucmV2aWV3IHtcclxuXHRcdGlvbi1saXN0IHtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcblx0XHRcdHBhZGRpbmc6IDEycHggMDtcclxuXHJcblx0XHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblxyXG5cdFx0XHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblx0XHRcdFx0XHRcdGlvbi1iYWRnZSB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHRcdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMDtcclxuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxN3B4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ji5yYXRpbmdfaWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMTBweDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAuNTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ji5pbmZvIHtcclxuXHRcdGlvbi1saXN0IHtcclxuXHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDRweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwcHggMTVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdFx0XHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDQwJTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0c3Ryb25nIHtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDU3JTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCYuc3RhdHVzX29wZW4ge1xyXG5cdFx0XHRcdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRcdFx0c3Ryb25nIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCYuc3RhdHVzX2Nsb2VzIHtcclxuXHRcdFx0XHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0XHRcdFx0aDMge1xyXG5cdFx0XHRcdFx0XHRcdHN0cm9uZyB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4M3B4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDIgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDIgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgc3Bhbi5jYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjNweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC40NXJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBzcGFuLmNhcnRfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgei1pbmRleDogOTk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAwLjU7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uLnptZGktdHVuZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGFiX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi50YWJfY29udGFpbmVyIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgcGFkZGluZzogMDtcbn1cbi50YWJfY29udGFpbmVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cbi50YWJfY29udGFpbmVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pbWdfYm94IHtcbiAgd2lkdGg6IDU4cHg7XG4gIG1pbi13aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50YWJfY29udGFpbmVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLnRhYl9jb250YWluZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi50YWJfY29udGFpbmVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyBzcGFuLml0ZW1fbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMgc3Bhbi5lbmQge1xuICBtaW4td2lkdGg6IDY4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLmFkZC1yZW1vdmUge1xuICBiYWNrZ3JvdW5kOiAjZmJmN2Y3O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLmFkZC1yZW1vdmUgaW9uLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLmFkZC1yZW1vdmUgc3Ryb25nIHtcbiAgbWFyZ2luOiAwO1xuICBtaW4td2lkdGg6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLml0ZW1fYWJvdXQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xufVxuLnRhYl9jb250YWluZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAgc3Bhbi5pY29uX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLnRhYl9jb250YWluZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAgc3Bhbi5pY29uX2JveCBpb24taWNvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLmljb25fYm94IGlvbi1pY29uOm50aC1jaGlsZChldmVuKSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuLnRhYl9jb250YWluZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAgc3Bhbi5pY29uX2JveC5hY3RpdmUgaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4udGFiX2NvbnRhaW5lciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCBzcGFuLmljb25fYm94LmFjdGl2ZSBpb24taWNvbjpudGgtY2hpbGQob2RkKSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuLnRhYl9jb250YWluZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAgc3Bhbi5pY29uX2JveC5hY3RpdmUgaW9uLWljb246bnRoLWNoaWxkKGV2ZW4pIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi50YWJfY29udGFpbmVyIC5jb2xsYXBzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGhlaWdodDogNTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4udGFiX2NvbnRhaW5lciAuY29sbGFwc2UgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTdweCAyMHB4IDE3cHggMjBweDtcbn1cbi50YWJfY29udGFpbmVyIC5jb2xsYXBzZSBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLnRhYl9jb250YWluZXIgLmNvbGxhcHNlIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAwcHggMjNweCAwcHg7XG59XG4udGFiX2NvbnRhaW5lciAuY29sbGFwc2UuYWN0aXZlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi50YWJfY29udGFpbmVyIC5jb2xsYXBzZS5hY3RpdmUgaDIgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi50YWJfY29udGFpbmVyLnJldmlldyBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4udGFiX2NvbnRhaW5lci5yZXZpZXcgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG59XG4udGFiX2NvbnRhaW5lci5yZXZpZXcgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi50YWJfY29udGFpbmVyLnJldmlldyBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRhYl9jb250YWluZXIucmV2aWV3IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRhYl9jb250YWluZXIucmV2aWV3IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4udGFiX2NvbnRhaW5lci5yZXZpZXcgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGFiX2NvbnRhaW5lci5yZXZpZXcgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMgc3Bhbi5yYXRpbmdfaWNvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnRhYl9jb250YWluZXIucmV2aWV3IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHNwYW4ucmF0aW5nX2ljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnRhYl9jb250YWluZXIucmV2aWV3IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHNwYW4ucmF0aW5nX2ljb24gaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbiAgb3BhY2l0eTogMTtcbn1cbi50YWJfY29udGFpbmVyLnJldmlldyBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi50YWJfY29udGFpbmVyLmluZm8gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuLnRhYl9jb250YWluZXIuaW5mbyBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYl9jb250YWluZXIuaW5mbyBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgbWFyZ2luOiAwO1xufVxuLnRhYl9jb250YWluZXIuaW5mbyBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4td2lkdGg6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGFiX2NvbnRhaW5lci5pbmZvIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHN0cm9uZyB7XG4gIG1pbi13aWR0aDogNTclO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4udGFiX2NvbnRhaW5lci5pbmZvIGlvbi1saXN0IGlvbi1pdGVtLnN0YXR1c19vcGVuIC5pdGVtX2lubmVyIGgzIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi50YWJfY29udGFpbmVyLmluZm8gaW9uLWxpc3QgaW9uLWl0ZW0uc3RhdHVzX2Nsb2VzIC5pdGVtX2lubmVyIGgzIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_loadingservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/loadingservice */ "./src/providers/loadingservice.ts");
/* harmony import */ var _providers_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/database */ "./src/providers/database.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");







var SearchPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function SearchPage(authService, router, route, loading, db) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = loading;
        this.db = db;
        this.favorite_icon = false;
        this.Add_icon1 = false;
        this.Add_icon2 = false;
        this.Add_icon3 = false;
        this.Add_icon4 = false;
        this.Add_icon5 = false;
        this.Add_icon6 = false;
        this.Add_icon7 = false;
        this.Add_icon8 = false;
        this.Add_icon9 = false;
        this.Add_icon10 = false;
        this.Add_icon11 = false;
        this.Add_icon12 = false;
        this.Add_icon13 = false;
        this.Add_icon14 = false;
        this.Add_icon15 = false;
        this.tab = "cuisine";
        this.currentItems = 0;
        this.cart = [];
        this.products = [];
        this.getProductList = [];
        this.getcountfromdb = 0;
        this.items = [];
        this.loadedDataCount = 0;
        this.changedProduct = {};
        this.loggeduserid = localStorage.getItem('loggeduserid');
        // this.router.params.subscribe(params => {
        //   this.productList = JSON.parse(params['productlist']);
        //   console.log("ppppp" + this.productList);
        // }
        // );
        //  this.db.deleteAllRecordRid(this.loggeduserid);
        this.authService.productChanged.subscribe(function (value) {
            _this.changedProduct = value;
            console.log("app component changes observed....", value, _this.items, _this.changedProduct);
            _this.items = [];
            // this.items.filter((data)=>{
            //   if(data.id === value['id']){
            //     data.currentItems = value['itemQuantity'];
            //   }
            // })
        });
    }
    SearchPage.prototype.doRefresh = function (refresher) {
        this.callapi(this.catid, null);
        this.calldata();
        setTimeout(function () {
            refresher.target.complete();
        }, 2000);
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.router.params.subscribe(function (params) {
                            if (params && params['catid']) {
                                _this.catid = JSON.parse(params['catid']);
                                _this.filterParamValue = null;
                            }
                            else if (params && params['data']) {
                                _this.filterParamValue = JSON.parse(params['data']);
                            }
                        });
                        this.callapi(this.catid, this.filterParamValue);
                        this.calldata();
                        this.loggeduserid = localStorage.getItem('loggeduserid');
                        return [4 /*yield*/, this.db.getAllrecords(this.loggeduserid).then(function (res) {
                                _this.getdbvalues = res;
                            })];
                    case 1:
                        _a.sent();
                        for (i = 0; i < this.getdbvalues.length; i++) {
                            this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.callapi = function (catid, filterParam) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getApikey = localStorage.getItem('apikey');
                this.loadedDataCount = 5;
                this.loading.present();
                this.loadProductList(catid, this.loadedDataCount, filterParam);
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.loadProductList = function (catid, count, filterParam) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("list values", this.changedProduct);
                        return [4 /*yield*/, this.authService.getProductlist(this.getApikey, catid, count, filterParam).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a, i;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = this;
                                            return [4 /*yield*/, this.getProductListValues(res['response']['data'])];
                                        case 1:
                                            _a.getProductList = _b.sent();
                                            console.log('getProductList', this.getProductList);
                                            this.totalRecordCount = res['response']['data'].recordsTotal;
                                            for (i = count - 5; i < count; i++) {
                                                if (this.changedProduct) {
                                                    if (this.getProductList[i].id === this.changedProduct.id) {
                                                        this.getProductList[i].currentItems = this.changedProduct.itemQuantity;
                                                    }
                                                }
                                                this.items.push(this.getProductList[i]);
                                            }
                                            this.loading.dismiss();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        console.log("final value", this.items);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.getProductCountFromArray = function (productId, dataDB) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countQty, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                countQty = 0;
                for (i = 0; i < dataDB.length; i++) {
                    // console.log(calls.id)
                    if (dataDB[i].id == productId) {
                        return [2 /*return*/, dataDB[i].itemQuantity];
                    }
                }
                return [2 /*return*/, countQty];
            });
        });
    };
    SearchPage.prototype.calldata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = localStorage.getItem('loggeduserid');
                        return [4 /*yield*/, this.db.getAllrecords(userId).then(function (res) {
                                data = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    SearchPage.prototype.getProductCountFromDB = function (productId, userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countval;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        countval = 0;
                        return [4 /*yield*/, this.db.getRecordByID(userId, productId).subscribe(function (res) {
                                if (res.length == 0) {
                                    countval = 0;
                                }
                                else {
                                    countval = res[0].itemQuantity;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, countval];
                }
            });
        });
    };
    SearchPage.prototype.getProductListValues = function (datas) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var products, userId, dataDB, _a, _b, _i, index, productId, countQty;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        products = [];
                        userId = localStorage.getItem('loggeduserid');
                        return [4 /*yield*/, this.calldata()];
                    case 1:
                        dataDB = _c.sent();
                        _a = [];
                        for (_b in datas)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        index = _a[_i];
                        productId = datas[index].id;
                        return [4 /*yield*/, this.getProductCountFromArray(productId, dataDB)];
                    case 3:
                        countQty = _c.sent();
                        if (index !== 'recordsTotal') {
                            datas[index].currentItems = countQty;
                            products.push(datas[index]);
                        }
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, products];
                }
            });
        });
    };
    // doInfinite(infiniteScroll){
    // console.log('Begin async operation');
    // let startCount = this.loadedDataCount;
    // this.loadedDataCount += 5 ;
    // setTimeout(() => {
    //   if(this.loadedDataCount < this.getProductList.length){
    //     for (let i = startCount; i < this.loadedDataCount; i++) {
    //       this.items.push( this.getProductList[i] );
    //     }
    //   } else {
    //     for (let i = startCount; i < this.getProductList.length; i++) {
    //       this.items.push( this.getProductList[i] );
    //     }
    //     infiniteScroll.target.disabled = true;
    //   }
    //   console.log('Async operation has ended',this.items);
    //   infiniteScroll.target.complete();
    // }, 500);
    // }
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.loadedDataCount += 5;
        if (this.loadedDataCount < this.totalRecordCount) {
            setTimeout(function () {
                _this.loadProductList(_this.catid, _this.loadedDataCount, _this.filterParamValue);
                infiniteScroll.target.complete();
            }, 500);
        }
        else {
            this.loadProductList(this.catid, this.totalRecordCount, this.filterParamValue);
            infiniteScroll.target.disabled = true;
        }
    };
    SearchPage.prototype.cartt = function () {
        this.getcountfromdb = 0;
        this.route.navigate(['./cart']);
        //  this.route.navigate(['./carthome']);
    };
    SearchPage.prototype.increment = function (index, id, currentItems, data) {
        var _this = this;
        var countItem = parseInt(this.items[index].currentItems) + 1;
        data.currentItems = countItem;
        this.items[index].currentItems = countItem;
        this.val = countItem;
        this.db.getRecordByProductID(id).subscribe(function (res) {
            _this.getproductbyids = res;
            if (res.length == 0) {
                var data_1 = { id: id, loggeduserid: _this.loggeduserid, itemQuantity: _this.val };
                _this.db.insertRecordRow(data_1);
            }
            else {
                var data_2 = { id: id, loggeduserid: _this.loggeduserid, itemQuantity: _this.val };
                var printupdate = _this.db.updateRecordRow(id, _this.loggeduserid, _this.val);
                //update
            }
            _this.callcartcount();
        });
    };
    SearchPage.prototype.callcartcount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getcountfromdb, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getcountfromdb = 0;
                        this.loggeduserid = localStorage.getItem('loggeduserid');
                        return [4 /*yield*/, this.db.getAllrecords(this.loggeduserid).then(function (res) {
                                _this.getdbvalues = res;
                            })];
                    case 1:
                        _a.sent();
                        // this.getdbvalues = await this.db.getAllrecords(this.loggeduserid);
                        for (i = 0; i < this.getdbvalues.length; i++) {
                            this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
                            getcountfromdb = getcountfromdb + this.getdbvalues[i].itemQuantity;
                        }
                        this.getcountfromdb = getcountfromdb;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.decrement = function (index, id, currentItems, data) {
        this.decreaseval = this.items[index].currentItems -= 1;
        data.currentItems = this.decreaseval;
        if (this.decreaseval < 0) {
            this.items[index].currentItems = 0;
            // this.currentNumber=0;
        }
        else if (this.decreaseval == 0) {
            // let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.decreaseval };
            // console.log(data);
            var printupdate = this.db.updateRecordRow(id, this.loggeduserid, this.decreaseval);
        }
        else {
            // let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.decreaseval };
            // console.log(data);
            var printupdate = this.db.updateRecordRow(id, this.loggeduserid, this.decreaseval);
        }
        this.callcartcount();
    };
    SearchPage.prototype.toggleSaveIcon1 = function () {
        this.favorite_icon = !this.favorite_icon;
    };
    SearchPage.prototype.toggleAddIcon1 = function () {
        this.Add_icon1 = !this.Add_icon1;
    };
    SearchPage.prototype.toggleAddIcon2 = function () {
        this.Add_icon2 = !this.Add_icon2;
    };
    SearchPage.prototype.toggleAddIcon3 = function () {
        this.Add_icon3 = !this.Add_icon3;
    };
    SearchPage.prototype.toggleAddIcon4 = function () {
        this.Add_icon4 = !this.Add_icon4;
    };
    SearchPage.prototype.toggleAddIcon5 = function () {
        this.Add_icon5 = !this.Add_icon5;
    };
    SearchPage.prototype.toggleAddIcon6 = function () {
        this.Add_icon6 = !this.Add_icon6;
    };
    SearchPage.prototype.toggleAddIcon7 = function () {
        this.Add_icon7 = !this.Add_icon7;
    };
    SearchPage.prototype.toggleAddIcon8 = function () {
        this.Add_icon8 = !this.Add_icon8;
    };
    SearchPage.prototype.toggleAddIcon9 = function () {
        this.Add_icon9 = !this.Add_icon9;
    };
    SearchPage.prototype.toggleAddIcon10 = function () {
        this.Add_icon10 = !this.Add_icon10;
    };
    SearchPage.prototype.toggleAddIcon11 = function () {
        this.Add_icon11 = !this.Add_icon11;
    };
    SearchPage.prototype.toggleAddIcon12 = function () {
        this.Add_icon12 = !this.Add_icon12;
    };
    SearchPage.prototype.toggleAddIcon13 = function () {
        this.Add_icon13 = !this.Add_icon13;
    };
    SearchPage.prototype.toggleAddIcon14 = function () {
        this.Add_icon14 = !this.Add_icon14;
    };
    SearchPage.prototype.toggleAddIcon15 = function () {
        this.Add_icon15 = !this.Add_icon15;
    };
    SearchPage.prototype.item_detail = function () {
        // this.route.navigate(['./online-menu']);
        this.getcountfromdb = 0;
        this.route.navigateByUrl('/online-menu', {
            replaceUrl: true
        });
    };
    SearchPage.prototype.callProductDetails = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading.present();
                        this.getApikey = localStorage.getItem('apikey');
                        return [4 /*yield*/, this.authService.getProductDetails(this.getApikey, id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.loading.dismiss();
                                    this.getResdata = res['response'].data;
                                    this.getcountfromdb = 0;
                                    this.route.navigate(['./online-menu', { getResdata: JSON.stringify(this.getResdata), getid: id }]);
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.reset = function () {
        this.faqExpand1 = true;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
    };
    SearchPage.prototype.faqExpandToggle1 = function () {
        this.reset();
        this.faqExpand1 = true;
    };
    SearchPage.prototype.faqExpandToggle2 = function () {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    };
    SearchPage.prototype.faqExpandToggle3 = function () {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    };
    SearchPage.prototype.faqExpandToggle4 = function () {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    };
    SearchPage.prototype.faqExpandToggle5 = function () {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    };
    SearchPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _providers_loadingservice__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
        { type: _providers_database__WEBPACK_IMPORTED_MODULE_5__["DatabaseProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], SearchPage.prototype, "infiniteScroll", void 0);
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _providers_loadingservice__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _providers_database__WEBPACK_IMPORTED_MODULE_5__["DatabaseProvider"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module-es5.js.map