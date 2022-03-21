(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"bg_transparent\">\n\t<div class=\"logo_box ion-text-center\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"assets/images/arumugamicon.png\">\n\t\t\t<h2>{{'app_title' | translate}}</h2>\n\t\t\t<h6>Medicals</h6>\n\t\t</div>\n\t</div>\n\t<ion-toolbar>\n\t\t<ion-segment [(ngModel)]=\"tab\" lines=\"none\">\n\t\t\t<ion-segment-button value=\"sign_in\">\n\t\t\t\t<ion-label>\n\t\t\t\t\t{{'sign_in' | translate}}\n\t\t\t\t</ion-label>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"register\">\n\t\t\t\t<ion-label>\n\t\t\t\t\t{{'register' | translate}}\n\t\t\t\t</ion-label>\n\t\t\t</ion-segment-button>\n\t\t</ion-segment>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"form\" [ngSwitch]=\"tab\">\n\t\t<ion-list lines=\"none\" *ngSwitchCase=\"'sign_in'\">\n\t\t\t<form name=\"form-signin\" (ngSubmit)=\"f.form.valid && goTohome()\" #f=\"ngForm\" novalidate>\n\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t\t\t\t<div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'email_address' | translate}}</ion-label>\n\t\t\t\t\t<ion-input type=\"email\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\"></ion-input>\n\t\t\t\t\t<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">An valid username is required.</div>\n\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group mb-4\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'password' | translate}}</ion-label>\n\t\t\t\t\t<ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\"></ion-input>\n\t\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required.</div>\n\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<h3 class=\"ion-text-end\" (click)=\"goToForgotPassword()\">{{'forgot_password' | translate}}?</h3>\n\t\t\t\t<div class=\"botton_container\">\n\t\t\t\t\t<ion-button size=\"large\" shape=\"round\" class=\"btn\" type=\"submit\">{{'sign_in' | translate}}</ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ion-list>\n\n\t\t<ion-list lines=\"none\" *ngSwitchCase=\"'register'\" class=\"register\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label position=\"floating\">{{'full_name' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"name\" [(ngModel)]=\"registerval.name\" #name=\"ngModel\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label position=\"floating\" >{{'email_address' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"registerval.email\" #email=\"ngModel\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"registerval.password\" #password=\"ngModel\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label position=\"floating\" >{{'phone_number' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"number\"  [(ngModel)]=\"registerval.mobile\" #mobile=\"ngModel\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<div class=\"botton_container\">\n\t\t\t\t<ion-button size=\"large\" shape=\"round\" class=\"btn\" (click)=\"goToregister()\">{{'rigister_now' | translate}}</ion-button>\n\t\t\t</div>\n\t\t\t<!-- <ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"floating\">{{'new_password' | translate}}</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"user.userPassword\" #userPassword=\"ngModel\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"floating\">{{'confirm' | translate}}</ion-label>\n\t\t\t\t\t\t<ion-input type=\"email\" ></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row> -->\n\n\t\t\t<!-- <ion-item lines=\"none\">\n\t\t\t\t<ion-label position=\"floating\">{{'country' | translate}}</ion-label>\n\t\t\t\t<ion-select interface=\"action-sheet\">\n\t\t\t\t\t<ion-select-option value=\"1\"> India</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\"> Japan</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\"> Kenya</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"4\"> Lebanon</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"5\"> Libya</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"6\"> New Zealand</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item> -->\n\n\t\t\t\n\t\t</ion-list>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
        this.name = '';
        this.token = '';
        this.fullName = '';
        this.userMobile = '';
        this.userEmail = '';
        this.userPassword = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");




var routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
var SignInPageRoutingModule = /** @class */ (function () {
    function SignInPageRoutingModule() {
    }
    SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignInPageRoutingModule);
    return SignInPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");








var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]
            ],
            declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
        })
    ], SignInPageModule);
    return SignInPageModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header .logo_box {\n  width: 100%;\n  height: 214px;\n  position: relative;\n  overflow: hidden;\n  background-color: #0066cb;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-header .logo_box::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nion-header .logo_box .logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n  width: 100%;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nion-header .logo_box .logo img {\n  width: 90px;\n  margin-bottom: 5px;\n}\nion-header .logo_box .logo h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.45rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\nion-header .logo_box .logo h6 {\n  margin: 0;\n  margin-left: 80px;\n  color: var(--white);\n  font-size: 1rem;\n  font-weight: 200;\n}\nion-header ion-segment {\n  border: none !important;\n  position: relative;\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-header ion-segment::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 3px;\n  background: var(--bg-color);\n}\nion-header ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 1rem;\n  font-weight: 300;\n  color: var(--text-light) !important;\n  text-transform: unset !important;\n  letter-spacing: 0;\n  --color-checked: var(--transparent) !important;\n  text-align: justify !important;\n  --background-checked: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n}\nion-header ion-segment ion-segment-button ion-label {\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 7px;\n  opacity: 1;\n  -webkit-transform: all 0.5s;\n          transform: all 0.5s;\n}\nion-header ion-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  height: 2.5px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  width: 0;\n  background: var(--primary);\n  border-radius: 0px;\n}\nion-header ion-segment ion-segment-button.segment-button-checked {\n  color: var(--text-dark) !important;\n  font-weight: 500;\n}\nion-header ion-segment ion-segment-button.segment-button-checked ion-label {\n  -webkit-transform: all 0.5s;\n          transform: all 0.5s;\n}\nion-header ion-segment ion-segment-button.segment-button-checked::before {\n  width: 100px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\nion-header ion-segment.ios {\n  min-height: 55px;\n}\nion-header ion-segment.ios .ion-segment-button {\n  margin: 0 10px;\n}\nion-list {\n  overflow: visible !important;\n  padding: 0 !important;\n}\nion-list h3 {\n  color: var(--primary);\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-top: 17px;\n  margin-bottom: 25px;\n}\nion-list .botton_container {\n  border-radius: 50px;\n  box-shadow: 0 -14px 24px -16px var(--primary);\n  margin-top: 38px;\n}\nion-list.register .botton_container {\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9EOlxcYXJ1bXVnYW0vc3JjXFxhcHBcXHNpZ24taW5cXHNpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUY7QURFRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSDtBRElFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDRkg7QURJRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0c7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNISjtBREtHO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRFVDO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ1JGO0FEVUU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ1JIO0FEV0U7RUFDQywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtFQUNBLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1RIO0FEV0c7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ1RKO0FEYUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEY0c7RUFDQyxrQ0FBQTtFQUNBLGdCQUFBO0FDWko7QURjSTtFQUNDLDJCQUFBO1VBQUEsbUJBQUE7QUNaTDtBRGVJO0VBQ0MsWUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNiTDtBRG1CRTtFQUNDLGdCQUFBO0FDakJIO0FEbUJHO0VBQ0MsY0FBQTtBQ2pCSjtBRHdCQTtFQUNDLDRCQUFBO0VBQ0EscUJBQUE7QUNyQkQ7QUR1QkM7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQztFQUNDLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRDBCRTtFQUNDLGdCQUFBO0FDeEJIIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHQubG9nb19ib3gge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMjE0cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjZjYjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHQvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTIpO1xuXHRcdH1cblxuXHRcdC5sb2dvIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdHotaW5kZXg6IDk5O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogOTBweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjQ1cmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcblx0XHRcdH1cblx0XHRcdGg2IHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogODBweDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogMjAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cdH1cblxuXHRpb24tc2VnbWVudCB7XG5cdFx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcblx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAzcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cdFx0fVxuXG5cdFx0aW9uLXNlZ21lbnQtYnV0dG9uIHtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuXHRcdFx0LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuXG5cdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA3cHg7XG5cdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdHRyYW5zZm9ybTogYWxsIC41cztcblxuXHRcdFx0fVxuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDBweDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRoZWlnaHQ6IDIuNXB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjNzO1xuXHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdH1cblxuXHRcdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyaykgIWltcG9ydGFudDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblxuXHRcdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogYWxsIC41cztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdCYuaW9zIHtcblx0XHRcdG1pbi1oZWlnaHQ6IDU1cHg7XG5cblx0XHRcdC5pb24tc2VnbWVudC1idXR0b24ge1xuXHRcdFx0XHRtYXJnaW46IDAgMTBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5pb24tbGlzdCB7XG5cdG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuXHRoMyB7XG5cdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LXNpemU6IC43NXJlbTtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmctdG9wOiAxN3B4O1xuXHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdH1cblxuXHQuYm90dG9uX2NvbnRhaW5lciB7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRib3gtc2hhZG93OiAwIC0xNHB4IDI0cHggLTE2cHggdmFyKC0tcHJpbWFyeSk7XG5cdFx0bWFyZ2luLXRvcDogMzhweDtcblx0fVxuXG5cdCYucmVnaXN0ZXIge1xuXHRcdC5ib3R0b25fY29udGFpbmVyIHtcblx0XHRcdG1hcmdpbi10b3A6IDE4cHg7XG5cdFx0fVxuXHR9XG59XG4iLCJpb24taGVhZGVyIC5sb2dvX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2Y2I7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5pb24taGVhZGVyIC5sb2dvX2JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24taGVhZGVyIC5sb2dvX2JveCAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbmlvbi1oZWFkZXIgLmxvZ29fYm94IC5sb2dvIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24taGVhZGVyIC5sb2dvX2JveCAubG9nbyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5pb24taGVhZGVyIC5sb2dvX2JveCAubG9nbyBoNiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXNlZ21lbnQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWhlYWRlciBpb24tc2VnbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWhlYWRlciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogYWxsIDAuNXM7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDIuNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyaykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiBhbGwgMC41cztcbn1cbmlvbi1oZWFkZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50LmlvcyB7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50LmlvcyAuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaDMge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmlvbi1saXN0IC5ib3R0b25fY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAtMTRweCAyNHB4IC0xNnB4IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAzOHB4O1xufVxuaW9uLWxpc3QucmVnaXN0ZXIgLmJvdHRvbl9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _model_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../model/register */ "./src/app/model/register.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_loadingservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/loadingservice */ "./src/providers/loadingservice.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var SignInPage = /** @class */ (function () {
    function SignInPage(authService, route, splashScreen, fun, navCtrl, http, storage, loading, menuCtrl) {
        this.authService = authService;
        this.route = route;
        this.splashScreen = splashScreen;
        this.fun = fun;
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.tab = 'sign_in';
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.registerval = new _model_register__WEBPACK_IMPORTED_MODULE_8__["Register"]();
        this.API_URL = 'http://pos.demoplaces.in/secures/';
    }
    SignInPage.prototype.ngOnInit = function () {
    };
    SignInPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
        this.splashScreen.hide();
    };
    SignInPage.prototype.goToForgotPassword = function () {
        this.route.navigate(['./forgot-password']);
    };
    SignInPage.prototype.goToOtp = function () {
        this.route.navigate(['./otp']);
    };
    SignInPage.prototype.goToregister = function () {
        var _this = this;
        // this.route.navigate(['./otp']);
        this.loading.present();
        var formData = new FormData();
        formData.append('name', this.registerval.name);
        formData.append('email', this.registerval.email);
        formData.append('password', this.registerval.password);
        formData.append('mobile', this.registerval.mobile);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.http.post(this.API_URL + 'register', formData, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
            _this.storage.set('registerdata', data);
            _this.loading.dismiss();
            if (data['response'].code == 1) {
                localStorage.setItem('name', _this.registerval.name);
                localStorage.setItem('email', _this.registerval.email);
                localStorage.setItem('password', _this.registerval.password);
                localStorage.setItem('mobile', _this.registerval.mobile);
                localStorage.setItem('otpval', data['response'].data.otp);
                _this.route.navigate(['./otp']);
            }
            else {
                _this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
            }
        }, function (error) {
            _this.loading.dismiss();
            console.log(error);
        });
    };
    SignInPage.prototype.goTohome = function () {
        var _this = this;
        this.loading.present();
        this.authService.login(this.user).subscribe(function (data) {
            if (data.response.code === 1) {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot(['./home']);
            }
            else {
                _this.loading.dismiss();
                _this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
            // this.errorMessage = 'Username or password is incorrect.';
        });
    };
    SignInPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
        { type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
        { type: _providers_loadingservice__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
    ]; };
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html"),
            styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _providers_loadingservice__WEBPACK_IMPORTED_MODULE_10__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map