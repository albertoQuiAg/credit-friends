(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-signup-signup-module"],{

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    height: 100vh;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.signup-container {\r\n    height: inherit;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.action-buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    margin: 20px 0 40px 0;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.login {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo-wrapper > img {\r\n    background-color: #4caf50;\r\n    padding: 6px;\r\n    border-radius: 8px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\n\n  <mat-card>\n\n    <div class=\"logo-wrapper\">\n      <img src=\"assets/logos/concredito.svg\" alt=\"concredito\">\n\n      <div style=\"margin-left: 10px;\">\n        <p class=\"mat-headline\">Registrate</p>\n        <p class=\"mat-body-1\">para continuar en <span class=\"mat-body-2\">Credit Friends</span></p>\n      </div>\n    </div>\n  \n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n\n      <mat-form-field appearance=\"legacy\">\n        <mat-label>E-mail</mat-label>\n        <input type=\"email\" matInput placeholder=\"Su cuenta E-mail sera su usuario\" formControlName=\"email\" required>\n        <mat-error *ngIf=\"signupForm.controls['email'].invalid\">{{getErrorMessage('email')}}</mat-error>\n      </mat-form-field><br>\n\n      <mat-form-field appearance=\"legacy\">\n          <mat-label>Nombre</mat-label>\n        <input type=\"text\" matInput placeholder=\"Su nombre\" formControlName=\"nombre\" required>\n        <mat-error *ngIf=\"signupForm.controls['nombre'].invalid\">{{getErrorMessage('nombre')}}</mat-error>\n      </mat-form-field><br>\n    \n      <div class=\"action-buttons\">\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"submitButton\">{{submitButton ? 'Registrando...' : 'Registrarme'}}</button>\n      </div>\n  \n    </form>\n\n    <mat-divider></mat-divider>\n\n    <div class=\"login\">\n      <p class=\"mat-body-1\">Ya tienes cuenta?</p>\n      <a mat-button color=\"primary\" routerLink=\"/login\">INICIA SESIÓN!</a>\n    </div>\n  \n  </mat-card>\n\n</div>\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_credit_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/credit-friends.service */ "./src/app/_services/credit-friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_router, form, snackBar, _cfService) {
        this._router = _router;
        this.form = form;
        this.snackBar = snackBar;
        this._cfService = _cfService;
        this.submitButton = false;
        this.signupForm = this.form.group({
            "nombre": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.getErrorMessage = function (control) {
        return this.signupForm.controls[control].hasError('required') ? 'Este campo es necesario.' :
            this.signupForm.controls[control].hasError('pattern') ? 'Ingrese un e-mail válido.' :
                this.signupForm.controls[control].hasError('emailErr') ? 'El correo ya existe' : '';
    };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        if (this.signupForm.valid) {
            this.submitButton = true;
            this._cfService.newUser(this.signupForm.value).subscribe(function (user) {
                _this.submitButton = false;
                if (user.error) {
                    _this.signupForm.controls['email'].setErrors({ emailErr: 'upss' });
                }
                else {
                    _this.snackBar.open('Usuario creado con éxito', 'OK', {
                        duration: 3600,
                    });
                    _this._router.navigate(['/login']);
                }
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _services_credit_friends_service__WEBPACK_IMPORTED_MODULE_4__["CreditFriendsService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _app_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_app-modules/shared.module */ "./src/app/_app-modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
                _app_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-signup-signup-module.js.map