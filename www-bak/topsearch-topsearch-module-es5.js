(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topsearch-topsearch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/topsearch/topsearch.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topsearch/topsearch.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button icon=\"ios-arrow-back\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n      Search \n    </ion-title>\n\t</ion-toolbar>\n\n\t<div class=\"search_box d-flex\">\n\t\t<ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\n\t\t<ion-searchbar debounce=\"500\" (ionChange)=\"getItems($event)\" class=\"ion-no-padding\"  searchIcon=\"hide\" placeholder=\"\"></ion-searchbar>\n  </div>\n  \n\n</ion-header>\n\n<ion-content style=\"background-color: white;\">\n\n  <ion-list *ngIf=\"isItemAvailable\">\n\t\t<ion-item *ngFor=\"let item of items\">{{ item }}</ion-item>\n\t</ion-list>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/topsearch/topsearch-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/topsearch/topsearch-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TopsearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsearchPageRoutingModule", function() { return TopsearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _topsearch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topsearch.page */ "./src/app/topsearch/topsearch.page.ts");




var routes = [
    {
        path: '',
        component: _topsearch_page__WEBPACK_IMPORTED_MODULE_3__["TopsearchPage"]
    }
];
var TopsearchPageRoutingModule = /** @class */ (function () {
    function TopsearchPageRoutingModule() {
    }
    TopsearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TopsearchPageRoutingModule);
    return TopsearchPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/topsearch/topsearch.module.ts":
/*!***********************************************!*\
  !*** ./src/app/topsearch/topsearch.module.ts ***!
  \***********************************************/
/*! exports provided: TopsearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsearchPageModule", function() { return TopsearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _topsearch_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topsearch-routing.module */ "./src/app/topsearch/topsearch-routing.module.ts");
/* harmony import */ var _topsearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topsearch.page */ "./src/app/topsearch/topsearch.page.ts");







var TopsearchPageModule = /** @class */ (function () {
    function TopsearchPageModule() {
    }
    TopsearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _topsearch_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopsearchPageRoutingModule"]
            ],
            declarations: [_topsearch_page__WEBPACK_IMPORTED_MODULE_6__["TopsearchPage"]]
        })
    ], TopsearchPageModule);
    return TopsearchPageModule;
}());



/***/ }),

/***/ "./src/app/topsearch/topsearch.page.scss":
/*!***********************************************!*\
  !*** ./src/app/topsearch/topsearch.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: var(--primary);\n  padding-bottom: 15px;\n}\nion-header ion-toolbar ion-title ion-button.btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 55px;\n  font-size: 1.25rem;\n  font-weight: 400;\n  --background: var(--transparent);\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-header .search_box {\n  background: var(--white);\n  width: calc(100% - 25px);\n  border-radius: 3px;\n  margin: 0 auto;\n  padding: 0 15px;\n  position: relative;\n  overflow: hidden;\n  min-height: 45px;\n  z-index: 99;\n}\nion-header .search_box ion-icon {\n  color: var(--text-dark2);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-dark);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n}\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.map img {\n  width: 100%;\n  height: 100%;\n}\n.map ion-icon {\n  position: absolute;\n  z-index: 99;\n  color: var(--secondary);\n  font-size: 2.5rem;\n  width: 24px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wc2VhcmNoL0Q6XFxhcnVtdWdhbS9zcmNcXGFwcFxcdG9wc2VhcmNoXFx0b3BzZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC90b3BzZWFyY2gvdG9wc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0Esb0JBQUE7QUNDRDtBREVFO0VBQ0MsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSDtBRElDO0VBQ0Msd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRkY7QURJRTtFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZIO0FESUc7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FETUU7RUFDQywyQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0FDSkg7QURTQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTkQ7QURRQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDTkY7QURTQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3RvcHNlYXJjaC90b3BzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG5cdGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0XHRpb24tYnV0dG9uLmJ0biB7XHJcblx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRcdFx0aGVpZ2h0OiA1NXB4O1xyXG5cdFx0XHRmb250LXNpemU6IDEuMjVyZW07XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoX2JveCB7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRtaW4taGVpZ2h0OiA0NXB4O1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrMik7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdFx0XHRtaW4td2lkdGg6IDM1cHg7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cclxuXHRcdFx0Ji56bWRpLXR1bmUge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXNlYXJjaGJhciB7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0XHRcdC0tY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0LS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1hcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRpb24taWNvbiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG5cdFx0Zm9udC1zaXplOiAyLjVyZW07XHJcblx0XHR3aWR0aDogMjRweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1idXR0b24uYnRuIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmsyKTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1pbi13aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgei1pbmRleDogOTk7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uLnptZGktdHVuZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHdpZHRoOiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/topsearch/topsearch.page.ts":
/*!*********************************************!*\
  !*** ./src/app/topsearch/topsearch.page.ts ***!
  \*********************************************/
/*! exports provided: TopsearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsearchPage", function() { return TopsearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopsearchPage = /** @class */ (function () {
    function TopsearchPage() {
        this.items = [];
        this.isItemAvailable = false;
    }
    TopsearchPage.prototype.initializeItems = function () {
        this.items = ["Ram", "gopi", "dravid"];
    };
    TopsearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    };
    TopsearchPage.prototype.ngOnInit = function () {
    };
    TopsearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topsearch',
            template: __webpack_require__(/*! raw-loader!./topsearch.page.html */ "./node_modules/raw-loader/index.js!./src/app/topsearch/topsearch.page.html"),
            styles: [__webpack_require__(/*! ./topsearch.page.scss */ "./src/app/topsearch/topsearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopsearchPage);
    return TopsearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=topsearch-topsearch-module-es5.js.map