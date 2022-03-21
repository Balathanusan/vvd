(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signout-signout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signout/signout.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signout/signout.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>signout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signout/signout-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/signout/signout-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutPageRoutingModule", function() { return SignoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signout.page */ "./src/app/signout/signout.page.ts");




var routes = [
    {
        path: '',
        component: _signout_page__WEBPACK_IMPORTED_MODULE_3__["SignoutPage"]
    }
];
var SignoutPageRoutingModule = /** @class */ (function () {
    function SignoutPageRoutingModule() {
    }
    SignoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignoutPageRoutingModule);
    return SignoutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signout/signout.module.ts":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.module.ts ***!
  \*******************************************/
/*! exports provided: SignoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutPageModule", function() { return SignoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signout-routing.module */ "./src/app/signout/signout-routing.module.ts");
/* harmony import */ var _signout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signout.page */ "./src/app/signout/signout.page.ts");







var SignoutPageModule = /** @class */ (function () {
    function SignoutPageModule() {
    }
    SignoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _signout_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignoutPageRoutingModule"]
            ],
            declarations: [_signout_page__WEBPACK_IMPORTED_MODULE_6__["SignoutPage"]]
        })
    ], SignoutPageModule);
    return SignoutPageModule;
}());



/***/ }),

/***/ "./src/app/signout/signout.page.scss":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25vdXQvc2lnbm91dC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signout/signout.page.ts":
/*!*****************************************!*\
  !*** ./src/app/signout/signout.page.ts ***!
  \*****************************************/
/*! exports provided: SignoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutPage", function() { return SignoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/database */ "./src/providers/database.ts");





var SignoutPage = /** @class */ (function () {
    function SignoutPage(storage, navCtrl, db) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.db = db;
    }
    SignoutPage.prototype.ngOnInit = function () {
        this.storage.clear();
        localStorage.clear();
        localStorage.removeItem('firstName');
        localStorage.removeItem('email');
        localStorage.removeItem('apikey');
        // this.db.deleteAll();
        this.navCtrl.navigateRoot(['./sign-in']);
    };
    SignoutPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _providers_database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"] }
    ]; };
    SignoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signout',
            template: __webpack_require__(/*! raw-loader!./signout.page.html */ "./node_modules/raw-loader/index.js!./src/app/signout/signout.page.html"),
            styles: [__webpack_require__(/*! ./signout.page.scss */ "./src/app/signout/signout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"]])
    ], SignoutPage);
    return SignoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=signout-signout-module-es5.js.map