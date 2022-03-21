(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/subcategory/subcategory.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subcategory/subcategory.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n    SubCategory\n    <span class=\"ion-float-end cart_icon\" (click)=\"cart()\">\n      <ion-icon class=\"zmdi zmdi-shopping-cart ion-text-start\"></ion-icon>\n      <ion-badge>{{getcountfromdb}}</ion-badge>\n    </span>\n\t\t</ion-title>\n  </ion-toolbar>\n  <div class=\"search_box d-flex\">\n\t\t<ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\n\t\t<ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" placeholder=\"\"></ion-searchbar>\n\t\t<!-- <ion-icon class=\"zmdi zmdi-tune ion-text-end\" ></ion-icon> -->\n\t</div>\n  </ion-header>\n\n<ion-content  >\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"like_to_order\">\n    <h2>SubCategory </h2>\n    </div>\n\n  <ion-grid fixed>\n\n<ion-row >\n   <ion-col size=\"4\" text-center *ngFor=\"let data of subcategory;\" (click)=\"gosearch(data.id)\">\n  \n        <div>\n        <img [src]=\"data.icons\" class=\"crop_img\">\n      </div>\n\n      <div>\n        <small>{{ data.title }}</small>\n      </div>\n  </ion-col> \n  \n</ion-row>\n \n\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/subcategory/subcategory-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/subcategory/subcategory-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SubcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageRoutingModule", function() { return SubcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/subcategory/subcategory.page.ts");




var routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoryPage"]
    }
];
var SubcategoryPageRoutingModule = /** @class */ (function () {
    function SubcategoryPageRoutingModule() {
    }
    SubcategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubcategoryPageRoutingModule);
    return SubcategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/subcategory/subcategory.module.ts":
/*!***************************************************!*\
  !*** ./src/app/subcategory/subcategory.module.ts ***!
  \***************************************************/
/*! exports provided: SubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageModule", function() { return SubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory-routing.module */ "./src/app/subcategory/subcategory-routing.module.ts");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/subcategory/subcategory.page.ts");







var SubcategoryPageModule = /** @class */ (function () {
    function SubcategoryPageModule() {
    }
    SubcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoryPageRoutingModule"]
            ],
            declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"]]
        })
    ], SubcategoryPageModule);
    return SubcategoryPageModule;
}());



/***/ }),

/***/ "./src/app/subcategory/subcategory.page.scss":
/*!***************************************************!*\
  !*** ./src/app/subcategory/subcategory.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: var(--bg-color);\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 83px;\n  top: 0;\n  left: 0;\n  display: block;\n  background: var(--primary);\n}\nion-header ion-toolbar ion-title h2 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 300;\n  line-height: 55px;\n  padding-top: 12px;\n  max-width: calc(100% - 50px);\n  overflow: hidden;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  line-height: 11px;\n  font-size: 0.6rem;\n}\nion-header ion-toolbar ion-title h2 strong {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title span.cart_icon {\n  position: relative;\n  min-width: 23px;\n}\nion-header ion-toolbar ion-title span.cart_icon ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  line-height: 11px;\n  display: block;\n  font-size: 0.45rem !important;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\nion-header ion-toolbar ion-title span.cart_icon ion-icon {\n  position: relative;\n  top: 3px;\n  font-size: 1.2rem;\n}\nion-header .search_box {\n  background: var(--white);\n  width: calc(100% - 10px);\n  border-radius: 3px;\n  margin: 0 auto;\n  padding: 0 15px;\n  position: relative;\n  overflow: hidden;\n  min-height: 45px;\n  z-index: 99;\n  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  opacity: 0.5;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-light);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n}\n.like_to_order {\n  background: var(--white);\n  padding-top: 15px;\n  margin-top: 12px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.like_to_order h2 {\n  margin: 0;\n  color: var(--text-dark2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  padding: 0 15px 15px 15px;\n}\n.like_to_order .scroll_container {\n  width: 100%;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: auto;\n}\n.like_to_order .scroll_container .item_srcoll {\n  display: inline-block;\n  margin: 0 3px;\n  width: 95px;\n}\n.like_to_order .scroll_container .item_srcoll .img_box {\n  width: 95px;\n  height: 95px;\n  border-radius: 10px;\n  margin-bottom: 13px;\n}\n.like_to_order .scroll_container .item_srcoll .item_detail h3 {\n  margin: 0;\n  font-size: 0.93rem;\n  font-weight: 400;\n  color: var(--text-dark2);\n  margin-bottom: 3px;\n}\n.like_to_order .scroll_container .item_srcoll .item_detail h4 {\n  margin: 0;\n  font-size: 0.6rem;\n  font-weight: 400;\n  color: var(--text-light);\n}\n.like_to_order .scroll_container .item_srcoll:first-child {\n  margin-left: 15px;\n}\n.like_to_order .scroll_container .item_srcoll:last-child {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY2F0ZWdvcnkvRDpcXGFydW11Z2FtL3NyY1xcYXBwXFxzdWJjYXRlZ29yeVxcc3ViY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBQTtBQ0NEO0FEQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDQ0Y7QURJRTtFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNGSDtBRElHO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtHO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKO0FEUUc7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNOSjtBRFFJO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDTkw7QURTSTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDUEw7QURlQztFQUNDLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0FDYkY7QURlRTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNiSDtBRGVHO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNiSjtBRGlCRTtFQUNDLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7QUNmSDtBRG1CQTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLDZDQUFBO0FDakJEO0FEbUJDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDakJGO0FEb0JDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDbEJGO0FEb0JFO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ2xCSDtBRG9CRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2xCSjtBRHNCSTtFQUNDLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ3BCTDtBRHVCSTtFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNyQkw7QUQwQkc7RUFDQyxpQkFBQTtBQ3hCSjtBRDJCRztFQUNDLGtCQUFBO0FDekJKIiwiZmlsZSI6InNyYy9hcHAvc3ViY2F0ZWdvcnkvc3ViY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cclxuXHQmOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogODNweDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0XHRoMiB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDU1cHg7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAxMnB4O1xyXG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRcdFx0c21hbGwge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjZyZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN0cm9uZyB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdCYuY2FydF9pY29uIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAyM3B4O1xyXG5cclxuXHRcdFx0XHRpb24tYmFkZ2Uge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEycHg7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTFweDtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjQ1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDEycHg7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHRvcDogM3B4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdC5zZWFyY2hfYm94IHtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdG1pbi1oZWlnaHQ6IDQ1cHg7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcblx0XHRpb24taWNvbiB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XHJcblx0XHRcdG1pbi13aWR0aDogMzVweDtcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdG9wYWNpdHk6IC41O1xyXG5cclxuXHRcdFx0Ji56bWRpLXR1bmUge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXNlYXJjaGJhciB7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0XHRcdC0tY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmxpa2VfdG9fb3JkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRwYWRkaW5nLXRvcDogMTVweDtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cclxuXHRib3gtc2hhZG93OiAwIDFweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmsyKTtcclxuXHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0cGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcclxuXHR9XHJcblxyXG5cdC5zY3JvbGxfY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHJcblx0XHQuaXRlbV9zcmNvbGwge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogMCAzcHg7XHJcblx0XHRcdHdpZHRoOiA5NXB4O1xyXG5cclxuXHRcdFx0LmltZ19ib3gge1xyXG5cdFx0XHRcdHdpZHRoOiA5NXB4O1xyXG5cdFx0XHRcdGhlaWdodDogOTVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pdGVtX2RldGFpbCB7XHJcblx0XHRcdFx0aDMge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOTNyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyazIpO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuNnJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4M3B4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDIgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDIgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgc3Bhbi5jYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjNweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC40NXJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBzcGFuLmNhcnRfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgei1pbmRleDogOTk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAwLjU7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uLnptZGktdHVuZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGlrZV90b19vcmRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5saWtlX3RvX29yZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xufVxuLmxpa2VfdG9fb3JkZXIgLnNjcm9sbF9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubGlrZV90b19vcmRlciAuc2Nyb2xsX2NvbnRhaW5lciAuaXRlbV9zcmNvbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHdpZHRoOiA5NXB4O1xufVxuLmxpa2VfdG9fb3JkZXIgLnNjcm9sbF9jb250YWluZXIgLml0ZW1fc3Jjb2xsIC5pbWdfYm94IHtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogOTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbi5saWtlX3RvX29yZGVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3NyY29sbCAuaXRlbV9kZXRhaWwgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyazIpO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ubGlrZV90b19vcmRlciAuc2Nyb2xsX2NvbnRhaW5lciAuaXRlbV9zcmNvbGwgLml0ZW1fZGV0YWlsIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmxpa2VfdG9fb3JkZXIgLnNjcm9sbF9jb250YWluZXIgLml0ZW1fc3Jjb2xsOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubGlrZV90b19vcmRlciAuc2Nyb2xsX2NvbnRhaW5lciAuaXRlbV9zcmNvbGw6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/subcategory/subcategory.page.ts":
/*!*************************************************!*\
  !*** ./src/app/subcategory/subcategory.page.ts ***!
  \*************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/loadingservice */ "./src/providers/loadingservice.ts");
/* harmony import */ var _providers_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/database */ "./src/providers/database.ts");







var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(loading, route, router, db, authService) {
        var _this = this;
        this.loading = loading;
        this.route = route;
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.subcategory = [];
        this.getcountfromdb = 0;
        this.router.params.subscribe(function (params) {
            //  this.subcategory = JSON.parse(params['subcategory']);
            _this.id = JSON.parse(params['id']);
            console.log("iddddd" + _this.id);
            //  console.log(this.subcategory)
            _this.getApikey = localStorage.getItem('apikey');
            _this.gotoSubcategory(_this.id);
        });
    }
    SubcategoryPage.prototype.doRefresh = function (refresher) {
        this.gotoSubcategory(this.id);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.target.complete();
        }, 2000);
    };
    SubcategoryPage.prototype.gotoSubcategory = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading.present();
                        this.getApikey = localStorage.getItem('apikey');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        return [4 /*yield*/, this.authService.getsubCategory(this.getApikey, id).subscribe(function (res) {
                                _this.loading.dismiss();
                                _this.subcategory = res['response']['data'];
                                console.log("loadd" + _this.subcategory);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubcategoryPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loggeduserid = localStorage.getItem('loggeduserid');
                        _a = this;
                        return [4 /*yield*/, this.db.getAllrecords(this.loggeduserid)];
                    case 1:
                        _a.getdbvalues = _b.sent();
                        console.log("valll" + this.getdbvalues.length);
                        console.log(JSON.stringify(this.getdbvalues));
                        for (i = 0; i < this.getdbvalues.length; i++) {
                            this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
                            console.log("counttttt" + this.getcountfromdb);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubcategoryPage.prototype.ionViewWillLeave = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    SubcategoryPage.prototype.gosearch = function (catid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getcountfromdb = 0;
                this.route.navigate(['./search', { catid: catid }]);
                return [2 /*return*/];
            });
        });
    };
    SubcategoryPage.prototype.cart = function () {
        this.getcountfromdb = 0;
        this.route.navigate(['./cart']);
    };
    SubcategoryPage.prototype.ngOnInit = function () {
    };
    SubcategoryPage.ctorParameters = function () { return [
        { type: _providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _providers_database__WEBPACK_IMPORTED_MODULE_6__["DatabaseProvider"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcategory',
            template: __webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/subcategory/subcategory.page.html"),
            styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/subcategory/subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_database__WEBPACK_IMPORTED_MODULE_6__["DatabaseProvider"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], SubcategoryPage);
    return SubcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=subcategory-subcategory-module-es5.js.map