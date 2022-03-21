(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-shipping-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping/shipping.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button icon=\"ios-arrow-back\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'shipping_detail' | translate}}</ion-title>\n\t</ion-toolbar>\n\t<ion-row class=\"order-steps\">\n\t\t<ion-col col-4 text-center class=\"done\">\n\t\t\t<ion-icon class=\"zmdi zmdi-mall\"></ion-icon>\n\t\t</ion-col>\n\t\t<ion-col col-4 text-center class=\"\">\n\t\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t\t</ion-col>\n\t\t<ion-col col-4 text-center class=\"\">\n\t\t\t<ion-icon class=\"zmdi zmdi-assignment-check\"></ion-icon>\n\t\t</ion-col>\n\t</ion-row>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<!-- <ion-card>\n\t\t<h2>{{'when_you_want_delivery' | translate}}?</h2>\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-radio-group>\n\t\t\t\t<div class=\"item_box\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t{{'now' | translate}}\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"now\" checked></ion-radio>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<p>{{'asap_description' | translate}}</p>\n\t\t\t\t</div>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label> {{'later' | translate}} </ion-label>\n\t\t\t\t\t<ion-radio slot=\"start\" value=\"later\"></ion-radio>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-datetime slot=\"start\" displayFormat=\"DD MMM, YYYY H:mm\" value=\"\" placeholder=\"{{'select_date_time_of_delivery' | translate}}\"></ion-datetime>\n\t\t\t\t\t<ion-icon slot=\"end\" class=\"zmdi zmdi-calendar-alt ion-text-end\"></ion-icon>\n\t\t\t\t</ion-item>\n\t\t\t</ion-radio-group>\n\t\t</ion-list>\n\t</ion-card> -->\n\n\t<ion-card class=\"where_to_deliver\">\n\t\t<h2>{{'where_to_deliver' | translate}}?</h2>\n\t\t<!-- <ion-list radio-group>\n\t\t\t<ion-item *ngFor=\"let data of getResdata; let i = index\" >\n\t\t\t\t<ion-label>\n\t\t\t\t\t{{data.title}}\n\t\t\t\t\t<small>\n\t\t\t\t\t\t{{data.blockNo}}\n\t\t\t\t\t</small>\n\t\t\t\t\t<small>\n\t\t\t\t\t\t{{data.address}}\n\t\t\t\t\t</small>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-radio item-start  value=\"{{data.title}}\" (click)=\"getaddress(data.title,data.blockNo)\" ></ion-radio>\n\n\t\t\t\t\n\t\t\t</ion-item>\n\t\t  </ion-list> -->\n\t\t<ion-list lines=\"none\" radio-group >\n\t\t\t<ion-radio-group >\n\t\t\t\t<ion-item   *ngFor=\"let data of getResdata; let i = index\" (click)=\"getaddress(data.title,data.blockNo,data.id)\"  >\n\t\t\t\t\t<ion-label style=\"margin-left: 35px;\">\n\t\t\t\t\t\t{{data.title}}\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{data.blockNo}}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{data.address}}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-delete end ion-text-end iconColor\" (click)=\"deleteaddress(data.id)\"></ion-icon>\n\t\t\t\t\t<ion-radio style=\"position: absolute; top:3px;\" slot=\"start\"  value=\"{{data.id}}\"  [checked]=\"(radioByDefault && i === 0) || this.data.id===''\"></ion-radio>\n\t\t\t\t</ion-item>\n\n\t\t\t\t\n\t\t\t</ion-radio-group>\n\t\t\n\t\t</ion-list>\n\n\t\t<h5 class=\"d-flex\" (click)=\"add_address()\">\n\t\t\t<ion-icon class=\"ion-text-start zmdi zmdi-plus-circle-o\"></ion-icon>\n\t\t\t<span>{{'add_new_address' | translate}}</span>\n\t\t</h5>\n\t</ion-card>\n</ion-content>\n\n<ion-footer no-border >\n\t<ion-button size=\"large\" class=\"btn\" (click)=\"payment()\" [disabled]=\"disableButton\">\n\t\t{{'proceed_to_payment' | translate}}\n\t\t<ion-icon class=\"ion-text-end zmdi zmdi-chevron-right\"></ion-icon>\n\t</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/shipping/shipping-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shipping/shipping-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShippingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageRoutingModule", function() { return ShippingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipping_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping.page */ "./src/app/shipping/shipping.page.ts");




var routes = [
    {
        path: '',
        component: _shipping_page__WEBPACK_IMPORTED_MODULE_3__["ShippingPage"]
    }
];
var ShippingPageRoutingModule = /** @class */ (function () {
    function ShippingPageRoutingModule() {
    }
    ShippingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShippingPageRoutingModule);
    return ShippingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/shipping/shipping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shipping/shipping.module.ts ***!
  \*********************************************/
/*! exports provided: ShippingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageModule", function() { return ShippingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shipping_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-routing.module */ "./src/app/shipping/shipping-routing.module.ts");
/* harmony import */ var _shipping_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping.page */ "./src/app/shipping/shipping.page.ts");








var ShippingPageModule = /** @class */ (function () {
    function ShippingPageModule() {
    }
    ShippingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _shipping_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShippingPageRoutingModule"]
            ],
            declarations: [_shipping_page__WEBPACK_IMPORTED_MODULE_7__["ShippingPage"]]
        })
    ], ShippingPageModule);
    return ShippingPageModule;
}());



/***/ }),

/***/ "./src/app/shipping/shipping.page.scss":
/*!*********************************************!*\
  !*** ./src/app/shipping/shipping.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-steps {\n  background: var(--primary);\n  overflow: hidden;\n  padding-bottom: 10px;\n}\n.order-steps ion-col {\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  padding: 0 0;\n  margin: 0 5px;\n  width: calc(33.33% - 5px);\n  max-width: calc(33.33% - 5px);\n  margin: 0 auto;\n}\n.order-steps ion-col ion-icon {\n  font-size: 1.45rem;\n  color: var(--white);\n  width: 35px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 99;\n  background: var(--primary);\n  min-height: unset;\n  top: 7px;\n}\n.order-steps ion-col ion-icon::before {\n  opacity: 0.5;\n}\n.order-steps ion-col::before, .order-steps ion-col::after {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 50%;\n  height: 3px;\n  z-index: 1;\n  background: url('dot.png');\n  background-repeat: no-repeat;\n  background-repeat: repeat-x;\n  background-size: 10px;\n  opacity: 0.5;\n}\n.order-steps ion-col::after {\n  right: 0;\n  left: unset;\n}\n.order-steps ion-col:first-child::before {\n  display: none;\n}\n.order-steps ion-col:last-child::after {\n  display: none;\n}\n.order-steps ion-col.done ion-icon::before {\n  opacity: 1;\n}\n.order-steps ion-col.done::after, .order-steps ion-col.done::before {\n  opacity: 1;\n}\nion-card {\n  width: 100%;\n  margin: 0;\n  background: var(--white);\n  margin-top: 10px;\n  border-radius: 0;\n  padding: 17px 20px 20px 20px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.1);\n}\nion-card:first-child {\n  margin-top: 23px;\n}\nion-card h2 {\n  margin: 0;\n  color: var(--text-dark2);\n  font-size: 0.95rem;\n  padding-bottom: 20px;\n}\nion-card ion-list {\n  padding: 0;\n}\nion-card ion-list ion-item {\n  padding: 0;\n  min-height: unset !important;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --align-items: flex-start;\n  --inner-padding-end: 0px;\n  --padding-start: 0;\n  padding-bottom: 4px;\n}\nion-card ion-list ion-item ion-radio {\n  margin: 0;\n  margin-right: 18px;\n  --color-checked: var(--secondary) !important;\n  --border-width: 1.5px !important;\n}\nion-card ion-list ion-item ion-label {\n  margin: 0;\n  color: var(--secondary);\n  font-weight: 500;\n  font-size: 0.95rem;\n}\nion-card ion-list ion-item ion-label small {\n  margin: 0;\n  color: var(--text-dark2);\n  font-size: 0.75rem;\n  display: block;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 5px;\n}\nion-card ion-list ion-item.item-datetime ion-datetime {\n  padding: 0;\n  padding-left: 38px;\n  color: var(--text-dark2) !important;\n  font-size: 0.75rem;\n}\nion-card ion-list ion-item.item-datetime ion-icon {\n  margin: 0;\n  color: var(--secondary);\n  font-size: 1.3rem;\n}\nion-card ion-list p {\n  margin: 0;\n  color: var(--text-dark2);\n  padding-left: 38px;\n  font-size: 0.75rem;\n}\nion-card ion-list .item_box {\n  padding-bottom: 30px;\n}\nion-card h5 {\n  margin: 0;\n  color: var(--secondary);\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding-bottom: 30px;\n}\nion-card h5 ion-icon {\n  font-size: 1.4rem;\n  min-width: 36px;\n}\nion-card.where_to_deliver {\n  padding-bottom: 5px !important;\n}\nion-card.where_to_deliver ion-list ion-item {\n  padding-bottom: 20px;\n}\n.iconColor {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvRDpcXGFydW11Z2FtL3NyY1xcYXBwXFxzaGlwcGluZ1xcc2hpcHBpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9zaGlwcGluZy9zaGlwcGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQywwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRDtBREVDO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDQUY7QURFRTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0FDQUg7QURFRztFQUNDLFlBQUE7QUNBSjtBRElFO0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0hIO0FETUU7RUFDQyxRQUFBO0VBQ0EsV0FBQTtBQ0pIO0FEUUc7RUFDQyxhQUFBO0FDTko7QURXRztFQUNDLGFBQUE7QUNUSjtBRGVJO0VBQ0MsVUFBQTtBQ2JMO0FEaUJHO0VBRUMsVUFBQTtBQ2hCSjtBRHNCQTtFQUNDLFdBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtBQ25CRDtBRHFCQztFQUNDLGdCQUFBO0FDbkJGO0FEc0JDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ3BCRjtBRHVCQztFQUNDLFVBQUE7QUNyQkY7QUR1QkU7RUFDQyxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQkg7QUR1Qkc7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FDckJKO0FEd0JHO0VBQ0MsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3RCSjtBRHdCSTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDdEJMO0FEMkJJO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQ3pCTDtBRDRCSTtFQUNDLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDMUJMO0FEK0JFO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzdCSDtBRGdDRTtFQUNDLG9CQUFBO0FDOUJIO0FEbUNDO0VBQ0MsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDakNGO0FEbUNFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDakNIO0FEcUNDO0VBQ0MsOEJBQUE7QUNuQ0Y7QURxQ0c7RUFDQyxvQkFBQTtBQ25DSjtBRHdDQTtFQUNDLHVCQUFBO0FDckNEIiwiZmlsZSI6InNyYy9hcHAvc2hpcHBpbmcvc2hpcHBpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLXN0ZXBzIHtcblx0Ly9wYWRkaW5nLXRvcDogMTBweDtcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG5cdGlvbi1jb2wge1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMCAwO1xuXHRcdG1hcmdpbjogMCA1cHg7XG5cdFx0d2lkdGg6IGNhbGMoMzMuMzMlIC0gNXB4KTtcblx0XHRtYXgtd2lkdGg6IGNhbGMoMzMuMzMlIC0gNXB4KTtcblx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdGlvbi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogMS40NXJlbTtcblx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHR3aWR0aDogMzVweDtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRcdG1pbi1oZWlnaHQ6IHVuc2V0O1xuXHRcdFx0dG9wOiA3cHg7XG5cblx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOjpiZWZvcmUsXG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogM3B4O1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRoZWlnaHQ6IDNweDtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3QucG5nKTtcblx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XG5cdFx0XHRvcGFjaXR5OiAwLjU7XG5cdFx0fVxuXG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHR9XG5cblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdCY6OmFmdGVyIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmRvbmUge1xuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Jjo6YWZ0ZXIsXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5pb24tY2FyZCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IDA7XG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcblx0cGFkZGluZzogMTdweCAyMHB4IDIwcHggMjBweDtcblx0Ym94LXNoYWRvdzogMCAxcHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdCY6Zmlyc3QtY2hpbGQge1xuXHRcdG1hcmdpbi10b3A6IDIzcHg7XG5cdH1cblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmsyKTtcblx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0fVxuXG5cdGlvbi1saXN0IHtcblx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0XHQtLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDRweDtcblxuXHRcdFx0aW9uLXJhZGlvIHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE4cHg7XG5cdFx0XHRcdC0tY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuXHRcdFx0XHQtLWJvcmRlci13aWR0aDogMS41cHggIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cblx0XHRcdFx0c21hbGwge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji5pdGVtLWRhdGV0aW1lIHtcblx0XHRcdFx0aW9uLWRhdGV0aW1lIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMzhweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrMikgIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXNpemU6IC43NXJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmsyKTtcblx0XHRcdHBhZGRpbmctbGVmdDogMzhweDtcblx0XHRcdGZvbnQtc2l6ZTogLjc1cmVtO1xuXHRcdH1cblxuXHRcdC5pdGVtX2JveCB7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuXHRcdH1cblx0fVxuXG5cdGg1IHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuXHRcdGlvbi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdFx0bWluLXdpZHRoOiAzNnB4O1xuXHRcdH1cblx0fVxuXG5cdCYud2hlcmVfdG9fZGVsaXZlciB7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuXHRcdGlvbi1saXN0IHtcblx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4uaWNvbkNvbG9ye1xuXHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn0iLCIub3JkZXItc3RlcHMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ub3JkZXItc3RlcHMgaW9uLWNvbCB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDAgNXB4O1xuICB3aWR0aDogY2FsYygzMy4zMyUgLSA1cHgpO1xuICBtYXgtd2lkdGg6IGNhbGMoMzMuMzMlIC0gNXB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3JkZXItc3RlcHMgaW9uLWNvbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIHRvcDogN3B4O1xufVxuLm9yZGVyLXN0ZXBzIGlvbi1jb2wgaW9uLWljb246OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5vcmRlci1zdGVwcyBpb24tY29sOjpiZWZvcmUsIC5vcmRlci1zdGVwcyBpb24tY29sOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZG90LnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4ub3JkZXItc3RlcHMgaW9uLWNvbDo6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgbGVmdDogdW5zZXQ7XG59XG4ub3JkZXItc3RlcHMgaW9uLWNvbDpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vcmRlci1zdGVwcyBpb24tY29sOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vcmRlci1zdGVwcyBpb24tY29sLmRvbmUgaW9uLWljb246OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ub3JkZXItc3RlcHMgaW9uLWNvbC5kb25lOjphZnRlciwgLm9yZGVyLXN0ZXBzIGlvbi1jb2wuZG9uZTo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE3cHggMjBweCAyMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMjNweDtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5pb24tY2FyZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5pb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgc21hbGwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmsyKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0tZGF0ZXRpbWUgaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1sZWZ0OiAzOHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrMikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1kYXRldGltZSBpb24taWNvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyazIpO1xuICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IC5pdGVtX2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuaW9uLWNhcmQgaDUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuaW9uLWNhcmQgaDUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWluLXdpZHRoOiAzNnB4O1xufVxuaW9uLWNhcmQud2hlcmVfdG9fZGVsaXZlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLndoZXJlX3RvX2RlbGl2ZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmljb25Db2xvciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shipping/shipping.page.ts":
/*!*******************************************!*\
  !*** ./src/app/shipping/shipping.page.ts ***!
  \*******************************************/
/*! exports provided: ShippingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPage", function() { return ShippingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/loadingservice */ "./src/providers/loadingservice.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");








var ShippingPage = /** @class */ (function () {
    function ShippingPage(router, fun, http, loading, geolocation, route, authService) {
        this.router = router;
        this.fun = fun;
        this.http = http;
        this.loading = loading;
        this.geolocation = geolocation;
        this.route = route;
        this.authService = authService;
        this.radioByDefault = false;
        this.disableButton = true;
        this.data = {
            id: ''
        };
        this.API_URL = 'http://pos.demoplaces.in/apis/';
    }
    ShippingPage.prototype.ngOnInit = function () {
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ShippingPage.prototype.deleteaddress = function (addressid) {
        var _this = this;
        this.getApikey = localStorage.getItem('apikey');
        this.loading.present();
        var formData = new FormData();
        formData.append('APIKEY', this.getApikey);
        formData.append('addressId', addressid);
        console.log("formdata" + formData);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.http.post(this.API_URL + 'deleteaddress', formData, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
            _this.loading.dismiss();
            if (data['response'].code == 1) {
                // this.getid=addressid;
                _this.callMyaddressapi();
            }
            else {
                _this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
            }
        }, function (error) {
            _this.loading.dismiss();
            console.log(error);
        });
    };
    ShippingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.finalprice = params['finalprice'];
            var carttt = localStorage.getItem("cart");
            console.log("carttt" + carttt);
        });
        this.callMyaddressapi();
    };
    ShippingPage.prototype.callMyaddressapi = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getApikey = localStorage.getItem('apikey');
                        this.loading.present();
                        return [4 /*yield*/, this.authService.getMyaddress(this.getApikey).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.getResdata = res['response'].data;
                                    this.radioByDefault = this.getResdata.length >= 1 ? true : false;
                                    this.disableButton = this.getResdata.length >= 1 ? false : true;
                                    this.getid = this.getResdata.length >= 1 ? this.getResdata[0].id : '';
                                    console.log(this.getResdata);
                                    this.loading.dismiss();
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
    ShippingPage.prototype.getaddress = function (title, blockno, getid) {
        console.log("shipblkno" + getid);
        this.getid = getid;
        this.disableButton = false;
    };
    ShippingPage.prototype.onChangeHandler = function ($event) {
        this.data.id = $event.target.value;
        console.log(this.data.id);
    };
    ShippingPage.prototype.add_address = function () {
        //this.route.navigate(['./googlesearch']);
        this.route.navigate(['./addaddress', { directopt: 0 }]);
    };
    ShippingPage.prototype.payment = function () {
        this.route.navigate(['./payment', { addressid: this.getid, finalprice: this.finalprice }]);
    };
    ShippingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _functions_service__WEBPACK_IMPORTED_MODULE_7__["FunctionsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ShippingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! raw-loader!./shipping.page.html */ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.page.html"),
            styles: [__webpack_require__(/*! ./shipping.page.scss */ "./src/app/shipping/shipping.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _functions_service__WEBPACK_IMPORTED_MODULE_7__["FunctionsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _providers_loadingservice__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ShippingPage);
    return ShippingPage;
}());



/***/ })

}]);
//# sourceMappingURL=shipping-shipping-module-es5.js.map