(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["track-order-track-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/track-order/track-order.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/track-order/track-order.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button icon=\"ios-arrow-back\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'order' | translate}} #CKG214\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"map\">\n\t\t<img src=\"assets/images/map.png\">\n\t\t<ion-icon class=\"zmdi zmdi-home\" style=\"top:38%; right: 50%;\"></ion-icon>\n\t\t<ion-icon class=\"zmdi zmdi-cutlery\" style=\"top:62%; right: 20%;\"></ion-icon>\n\t</div>\n</ion-content>\n\n<ion-footer no-border>\n\t<ion-button size=\"large\" class=\"btn\">\n\t\t<ion-icon class=\"ion-text-start zmdi zmdi-phone\"></ion-icon>\n\t\t{{'call_deliveryman' | translate}}\n\t</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/track-order/track-order-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/track-order/track-order-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TrackOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPageRoutingModule", function() { return TrackOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _track_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-order.page */ "./src/app/track-order/track-order.page.ts");




const routes = [
    {
        path: '',
        component: _track_order_page__WEBPACK_IMPORTED_MODULE_3__["TrackOrderPage"]
    }
];
let TrackOrderPageRoutingModule = class TrackOrderPageRoutingModule {
};
TrackOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/track-order/track-order.module.ts":
/*!***************************************************!*\
  !*** ./src/app/track-order/track-order.module.ts ***!
  \***************************************************/
/*! exports provided: TrackOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPageModule", function() { return TrackOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _track_order_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track-order-routing.module */ "./src/app/track-order/track-order-routing.module.ts");
/* harmony import */ var _track_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./track-order.page */ "./src/app/track-order/track-order.page.ts");








let TrackOrderPageModule = class TrackOrderPageModule {
};
TrackOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _track_order_routing_module__WEBPACK_IMPORTED_MODULE_6__["TrackOrderPageRoutingModule"]
        ],
        declarations: [_track_order_page__WEBPACK_IMPORTED_MODULE_7__["TrackOrderPage"]]
    })
], TrackOrderPageModule);



/***/ }),

/***/ "./src/app/track-order/track-order.page.scss":
/*!***************************************************!*\
  !*** ./src/app/track-order/track-order.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.15rem !important;\n}\n\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.map ion-icon {\n  position: absolute;\n  z-index: 99;\n  color: var(--white);\n  background: var(--primary);\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.8rem;\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n\nion-footer ion-button {\n  font-weight: 500 !important;\n}\n\nion-footer ion-button ion-icon {\n  font-size: 1.2rem;\n  min-width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2stb3JkZXIvRDpcXGFydW11Z2FtL3NyY1xcYXBwXFx0cmFjay1vcmRlclxcdHJhY2stb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC90cmFjay1vcmRlci90cmFjay1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FES0M7RUFDQywyQkFBQTtBQ0ZGOztBRElFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDRkgiLCJmaWxlIjoic3JjL2FwcC90cmFjay1vcmRlci90cmFjay1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMS4xNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cblxuXHRpb24taWNvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDk5O1xuXHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRmb250LXNpemU6IC44cmVtO1xuXHRcdHdpZHRoOiAyMHB4O1xuXHRcdGhlaWdodDogMjBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG59XG5cbmlvbi1mb290ZXIge1xuXHRpb24tYnV0dG9uIHtcblx0XHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cblx0XHRpb24taWNvbiB7XG5cdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdG1pbi13aWR0aDogMjVweDtcblx0XHR9XG5cdH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/track-order/track-order.page.ts":
/*!*************************************************!*\
  !*** ./src/app/track-order/track-order.page.ts ***!
  \*************************************************/
/*! exports provided: TrackOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPage", function() { return TrackOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackOrderPage = class TrackOrderPage {
    constructor() { }
    ngOnInit() {
    }
};
TrackOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-order',
        template: __webpack_require__(/*! raw-loader!./track-order.page.html */ "./node_modules/raw-loader/index.js!./src/app/track-order/track-order.page.html"),
        styles: [__webpack_require__(/*! ./track-order.page.scss */ "./src/app/track-order/track-order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrackOrderPage);



/***/ })

}]);
//# sourceMappingURL=track-order-track-order-module-es2015.js.map