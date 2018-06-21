(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-dashboard-dashboard-module"],{

/***/ "./src/app/_clases/Solicitud.ts":
/*!**************************************!*\
  !*** ./src/app/_clases/Solicitud.ts ***!
  \**************************************/
/*! exports provided: Solicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solicitud", function() { return Solicitud; });
var Solicitud = /** @class */ (function () {
    function Solicitud() {
    }
    return Solicitud;
}());



/***/ }),

/***/ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.css":
/*!************************************************************************!*\
  !*** ./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-radio-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 16px;\r\n}\r\n\r\nmat-radio-group mat-radio-button {\r\n    margin: 6px;\r\n    width: 200px;\r\n}\r\n\r\n.action-buttons {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}"

/***/ }),

/***/ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Generar nueva solicitud.</h2>\n  \n  <form [formGroup]=\"solicitudForm\" (ngSubmit)=\"onSolicitar()\">\n\n    <mat-form-field appearance=\"legacy\">\n      <mat-label>Monto</mat-label>\n      <input type=\"email\" matInput placeholder=\"Cantidad en pesos a solicitar\" formControlName=\"monto\" maxlength=\"6\" required>\n      <span matPrefix>$&nbsp;</span>\n      <span matSuffix>.00</span>\n      <mat-error *ngIf=\"solicitudForm.controls['monto'].invalid\">{{getErrorMessage('monto')}}</mat-error>\n    </mat-form-field>\n\n    <mat-radio-group formControlName=\"plazo\">\n      <mat-radio-button value=\"1\">3 pagos: 5% de interés</mat-radio-button>\n      <mat-radio-button value=\"2\">6 pagos: 7% de interés</mat-radio-button>\n      <mat-radio-button value=\"3\">9 pagos: 12% de interés</mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field appearance=\"outline\" floatLabel=\"always\" style=\"margin-top: 8px;\">\n      <mat-label>Total a pagar</mat-label>\n      <input matInput placeholder=\"\" formControlName=\"total\" [value]=\"solicitudForm.controls['total'].value\">\n      <span matPrefix>$&nbsp;</span>\n      <span matSuffix>.00</span>\n    </mat-form-field>\n\n    <div class=\"action-buttons\">\n      <button type=\"button\" mat-button mat-dialog-close tabindex=\"-1\" color=\"primary\">NO SOLICITAR</button>\n      <button type=\"submit\" mat-button color=\"primary\" [disabled]=\"submitButton\">{{submitButton ? 'SOLICITANDO...' : 'SOLICITAR'}}</button>\n    </div>\n\n  </form>"

/***/ }),

/***/ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.ts ***!
  \***********************************************************************/
/*! exports provided: NuevaSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaSolicitudComponent", function() { return NuevaSolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_credit_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/credit-friends.service */ "./src/app/_services/credit-friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuevaSolicitudComponent = /** @class */ (function () {
    function NuevaSolicitudComponent(form, dialogRef, snackBar, _cfService) {
        this.form = form;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this._cfService = _cfService;
        this.subs = [];
        this.submitButton = false;
        this.solicitudForm = this.form.group({
            "monto": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9][0-9]*$/)]],
            "plazo": ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "total": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 0, disabled: true }),
            "uid": [""],
            "fecha": [""],
            "status": ["V"],
            "favor": [0],
            "contra": [0]
        });
    }
    NuevaSolicitudComponent.prototype.ngOnInit = function () {
        var _this = this;
        var montoSub = this.solicitudForm.controls['monto'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this.calculaTotal(value);
        })).subscribe(function (res) {
            _this.solicitudForm.controls['total'].patchValue(res);
        });
        this.subs.push(montoSub);
        var plazoSub = this.solicitudForm.controls['plazo'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this.calculaTotal(_this.solicitudForm.controls['monto'].value);
        })).subscribe(function (res) {
            _this.solicitudForm.controls['total'].patchValue(res);
        });
        this.subs.push(plazoSub);
    };
    NuevaSolicitudComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    NuevaSolicitudComponent.prototype.onSolicitar = function () {
        var _this = this;
        if (this.solicitudForm.valid) {
            this.submitButton = true;
            this.solicitudForm.controls['monto'].patchValue(parseFloat(this.solicitudForm.controls['monto'].value));
            this.solicitudForm.controls['uid'].patchValue(this._cfService.userData.uid);
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":"
                + currentdate.getMinutes();
            this.solicitudForm.controls['fecha'].patchValue(datetime);
            this._cfService.nuevaSolicitud(this.solicitudForm.getRawValue()).subscribe(function () {
                _this.submitButton = false;
                _this.snackBar.open('Solicitud generada con éxito', 'OK', {
                    duration: 3600
                });
                _this.dialogRef.close();
            });
        }
    };
    NuevaSolicitudComponent.prototype.getErrorMessage = function (control) {
        return this.solicitudForm.controls[control].hasError('required') ? 'Este campo es necesario.' :
            this.solicitudForm.controls[control].hasError('pattern') ? 'Solamente números y mayor a 0.' : '';
    };
    NuevaSolicitudComponent.prototype.calculaTotal = function (monto) {
        var val = parseFloat(monto) | 0;
        if (!isNaN(val)) {
            switch (this.solicitudForm.controls['plazo'].value) {
                case '1': {
                    return val * 1.05;
                }
                case '2': {
                    return val * 1.07;
                }
                case '3': {
                    return val * 1.12;
                }
            }
        }
    };
    NuevaSolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nueva-solicitud',
            template: __webpack_require__(/*! ./nueva-solicitud.component.html */ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.html"),
            styles: [__webpack_require__(/*! ./nueva-solicitud.component.css */ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            src_app_services_credit_friends_service__WEBPACK_IMPORTED_MODULE_4__["CreditFriendsService"]])
    ], NuevaSolicitudComponent);
    return NuevaSolicitudComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/perfil/perfil.component.css":
/*!******************************************************!*\
  !*** ./src/app/_dialogs/perfil/perfil.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-action-buttons {\r\n    font-weight: 500;\r\n}\r\n\r\n.mat-dialog-actions {\r\n    justify-content: flex-end;\r\n}"

/***/ }),

/***/ "./src/app/_dialogs/perfil/perfil.component.html":
/*!*******************************************************!*\
  !*** ./src/app/_dialogs/perfil/perfil.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.nombre}}</h2>\n\n<mat-dialog-content>\n\n  <mat-list>\n    <mat-list-item *ngFor=\"let solicitud of solicitudes | async\">\n        <p mat-line style=\"font-size: 14px;\"><b style=\"font-weight: 500;\">Monto:</b> ${{solicitud.monto}}</p>\n        <p mat-line><b style=\"font-weight: 500;\">Total:</b> ${{solicitud.total}}</p>\n        <p mat-line><b style=\"font-weight: 500;\">Financiamiento:</b> {{getPlazo(solicitud.plazo)}}</p>\n        <p mat-line><b style=\"font-weight: 500;\">Fecha: </b>{{solicitud.fecha}}</p>\n        <p mat-line>\n          <b style=\"font-weight: 500;\">Status: </b>\n          {{solicitud.status == 'R' ? \"Rechazada\" : solicitud.status == 'V' ? 'En votación' : \"Aceptada\"}}\n        </p>\n    </mat-list-item>\n  </mat-list>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button mat-dialog-close tabindex=\"-1\" color=\"primary\" class=\"my-action-buttons\">CERRAR</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/_dialogs/perfil/perfil.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_dialogs/perfil/perfil.component.ts ***!
  \*****************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_credit_friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/credit-friends.service */ "./src/app/_services/credit-friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(data, _cfService) {
        this.data = data;
        this._cfService = _cfService;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitudes = this._cfService.db.list('/solicitudes', function (ref) { return ref.orderByChild('uid').equalTo(_this.data.uid); }).valueChanges();
    };
    PerfilComponent.prototype.getPlazo = function (plazo) {
        return plazo == '1' ? '3 pagos: 5% de interés' : plazo == '2' ? '6 pagos: 7% de interés' : plazo == '3' ? '9 pagos: 12% de interés' : '';
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/_dialogs/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/_dialogs/perfil/perfil.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_services_credit_friends_service__WEBPACK_IMPORTED_MODULE_2__["CreditFriendsService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/_directives/timer.directive.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/timer.directive.ts ***!
  \************************************************/
/*! exports provided: TimerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerDirective", function() { return TimerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_credit_friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/credit-friends.service */ "./src/app/_services/credit-friends.service.ts");
/* harmony import */ var src_app_clases_Solicitud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_clases/Solicitud */ "./src/app/_clases/Solicitud.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerDirective = /** @class */ (function () {
    function TimerDirective(el, _cfService) {
        this.el = el;
        this._cfService = _cfService;
        this.timeUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TimerDirective.prototype.ngOnInit = function () {
        this.upSolicitud = {
            contra: this.solicitud.contra,
            favor: this.solicitud.favor,
            fecha: this.solicitud.fecha,
            monto: this.solicitud.monto,
            plazo: this.solicitud.plazo,
            status: this.solicitud.status,
            total: this.solicitud.total,
            uid: this.solicitud.uid
        };
        this.startTimer(this.upSolicitud.fecha);
    };
    TimerDirective.prototype.startTimer = function (fecha) {
        var _this = this;
        var arrDate = fecha.split(" ");
        var arrTime = arrDate[1].split(":");
        var currentdate = new Date();
        var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
        var time = currentdate.getHours() + ":" + currentdate.getMinutes();
        var currentArrTime = time.split(':');
        if (arrDate[0] != date) {
            if (this.upSolicitud.favor > this.upSolicitud.contra) {
                this.upSolicitud.status = 'A';
            }
            else {
                this.upSolicitud.status = "R";
            }
            this._cfService.db.list('solicitudes').update(this.solicitud.key, this.upSolicitud);
            return;
        }
        var calc = 5 - (parseInt(currentArrTime[1]) - parseInt(arrTime[1]));
        var duration = calc * 60;
        if (calc <= 0) {
            if (this.upSolicitud.favor > this.upSolicitud.contra) {
                this.upSolicitud.status = 'A';
            }
            else {
                this.upSolicitud.status = "R";
            }
            this._cfService.db.list('solicitudes').update(this.solicitud.key, this.upSolicitud);
            return;
        }
        var timer = duration, minutes, seconds;
        var interval = setInterval(function () {
            minutes = timer / 60;
            minutes = parseInt(minutes);
            seconds = timer % 60;
            seconds = parseInt(seconds);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if (--timer < 0) {
                _this.timeUp.emit(_this.solicitud);
                clearInterval(interval);
            }
            else {
                _this.el.nativeElement.innerHTML = minutes + ":" + seconds;
            }
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_clases_Solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"])
    ], TimerDirective.prototype, "solicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimerDirective.prototype, "timeUp", void 0);
    TimerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTimer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_credit_friends_service__WEBPACK_IMPORTED_MODULE_1__["CreditFriendsService"]])
    ], TimerDirective);
    return TimerDirective;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_services_router_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/router-guard.service */ "./src/app/_services/router-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [src_app_services_router_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouterGuardService"]] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    height: 100vh;\r\n    background-color: #f5f5f5f5;\r\n}\r\n\r\n.fill-space {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.widgets-wrapper {\r\n    background-color: inherit;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.widgets-wrapper > mat-card {\r\n    margin: 16px 16px;\r\n    height: 400px;\r\n    overflow: auto;\r\n    width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmat-card-header {\r\n    margin-bottom: 16px;\r\n}\r\n\r\nmat-card-content {\r\n    overflow: auto;\r\n    height: 100%;\r\n}\r\n\r\nmat-toolbar {\r\n    position: relative;\r\n}\r\n\r\n.my-badge {\r\n    padding: 0 10px;\r\n    color: #fff;\r\n    border-radius: 8px;\r\n    margin: 0 4px;\r\n}\r\n\r\n.positive {\r\n    background-color: green;\r\n}\r\n\r\n.negative {\r\n    background-color: red;\r\n}\r\n\r\n.re {\r\n    background-color: red;\r\n    color: #fff;\r\n    padding: 0 8px;\r\n}\r\n\r\n.ap {\r\n    background-color: green;\r\n    color: #fff;\r\n    padding: 0 8px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\r\n    Credit Friends\r\n\r\n    <span class=\"fill-space\"></span>\r\n\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon aria-label=\"Opciones\">more_vert</mat-icon>\r\n    </button>\r\n\r\n</mat-toolbar>\r\n\r\n<!-- menu -->\r\n<mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"onLogout()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        Cerrar sesión\r\n    </button>\r\n</mat-menu>\r\n<!-- end menu-->\r\n\r\n<div class=\"widgets-wrapper\">\r\n\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>account_circle</mat-icon>\r\n            <mat-card-title><p class=\"mat-title\">Perfil</p></mat-card-title>\r\n            <mat-card-subtitle>{{userData?.nombre || 'cargando datos...'}}</mat-card-subtitle>\r\n            <mat-card-subtitle>Solicitudes pendientes</mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n\r\n            <mat-list>\r\n                <mat-list-item *ngFor=\"let solicitud of solicitudesPendientes\" style=\"height: unset;\">\r\n                    \r\n                        <p mat-line style=\"font-size: 14px;\"><b style=\"font-weight: 500;\">Monto:</b> ${{solicitud.monto}}</p>\r\n                        <p mat-line><b style=\"font-weight: 500;\">Total:</b> ${{solicitud.total}}</p>\r\n                        <p mat-line><b style=\"font-weight: 500;\">Financiamiento:</b> {{getPlazo(solicitud.plazo)}}</p>\r\n                        <p mat-line><b style=\"font-weight: 500;\">Fecha: </b>{{solicitud.fecha}}</p>\r\n                        <p mat-line>\r\n                            <b style=\"font-weight: 500;\">Votaciones:</b>\r\n                            <span class=\"my-badge positive\">{{solicitud.favor}}</span>\r\n                            <span class=\"my-badge negative\">{{solicitud.contra}}</span>\r\n                        </p>\r\n                        <p mat-line>\r\n                            <b style=\"font-weight: 500;\">Vigencia:</b> \r\n                            <span appTimer [solicitud]=\"solicitud\" (timeUp)=\"timeUp($event)\" style=\"margin-left: 10px;\">Cargando...</span>\r\n                        </p>\r\n                        \r\n                        <mat-divider></mat-divider>\r\n                </mat-list-item>\r\n\r\n                <p class=\"mat-title\" *ngIf=\"solicitudesPendientes?.length == 0\" style=\"text-align: center;\">No hay registros.</p>\r\n                <mat-spinner style=\"margin: auto;\" *ngIf=\"!solicitudesPendientes\"></mat-spinner>\r\n\r\n            </mat-list>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"historial-widget\">\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>history</mat-icon>\r\n            <mat-card-title><p class=\"mat-title\">Historial</p></mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-list>\r\n                <mat-list-item *ngFor=\"let solicitud of historial\" style=\"height: unset;\">\r\n                    \r\n                    <p mat-line style=\"font-size: 14px;\"><b style=\"font-weight: 500;\">Monto:</b> ${{solicitud.monto}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Total:</b> ${{solicitud.total}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Financiamiento:</b> {{getPlazo(solicitud.plazo)}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Fecha: </b>{{solicitud.fecha}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Status: </b>\r\n                        <span [ngClass]=\"{'re' : solicitud.status == 'R', 'ap' : solicitud.status == 'A'}\">{{solicitud.status == 'R' ? \"Rechazada\" : \"Aprobada\"}}</span>\r\n                    </p>\r\n                    <p mat-line>\r\n                        <b style=\"font-weight: 500;\">Votaciones:</b>\r\n                        <span class=\"my-badge positive\">{{solicitud.favor}}</span>\r\n                        <span class=\"my-badge negative\">{{solicitud.contra}}</span>\r\n                    </p>\r\n\r\n                    <mat-divider></mat-divider>\r\n                </mat-list-item>\r\n\r\n                <p class=\"mat-title\" *ngIf=\"historial?.length == 0\" style=\"text-align: center;\">No hay registros.</p>\r\n                <mat-spinner style=\"margin: auto;\" *ngIf=\"!historial\"></mat-spinner>\r\n\r\n            </mat-list>\r\n        </mat-card-content>\r\n\r\n        <mat-card-actions>\r\n            <button mat-button color=\"accent\" (click)=\"onNuevaSolicitud()\">NUEVA SOLICITUD</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>bookmarks</mat-icon>\r\n            <mat-card-title><p class=\"mat-title\">Solicitudes</p></mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-list>\r\n                <mat-list-item *ngFor=\"let votar of aVotar\">\r\n                    \r\n                    <p mat-line style=\"font-size: 14px; cursor: pointer;\" (click)=\"onShowPerfil(votar)\">\r\n                        <b style=\"font-weight: 500;\">Solicitante:</b> {{votar.nombre}}\r\n                    </p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Monto:</b> ${{votar.monto}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Total:</b> ${{votar.total}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Financiamiento:</b> {{getPlazo(votar.plazo)}}</p>\r\n                    <p mat-line><b style=\"font-weight: 500;\">Fecha: </b>{{votar.fecha}}</p>\r\n                    <p mat-line>\r\n                        <b style=\"font-weight: 500;\">Vigencia:</b> \r\n                        <span appTimer [solicitud]=\"votar\" style=\"margin-left: 10px;\">Cargando...</span>\r\n                    </p>\r\n                    <p mat-line>\r\n                        <b style=\"font-weight: 500;\">Votaciones:</b>\r\n                        <span class=\"my-badge positive\">{{votar.favor}}</span>\r\n                        <span class=\"my-badge negative\">{{votar.contra}}</span>\r\n                    </p>\r\n                    \r\n                    <p mat-line>\r\n                        <button mat-button (click)=\"onVotar('r', votar)\">RECHAZAR</button>\r\n                        <button mat-button (click)=\"onVotar('a', votar)\">APROBAR</button>\r\n                    </p>\r\n\r\n                    <mat-divider></mat-divider>\r\n                </mat-list-item>\r\n\r\n                <p class=\"mat-title\" *ngIf=\"aVotar?.length == 0\" style=\"text-align: center;\">No hay registros.</p>\r\n                <mat-spinner style=\"margin: auto;\" *ngIf=\"!aVotar\"></mat-spinner>\r\n\r\n            </mat-list>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_credit_friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/credit-friends.service */ "./src/app/_services/credit-friends.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_nueva_solicitud_nueva_solicitud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_dialogs/nueva-solicitud/nueva-solicitud.component */ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dialogs_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_dialogs/perfil/perfil.component */ "./src/app/_dialogs/perfil/perfil.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_cfService, _router, dialog, snack) {
        this._cfService = _cfService;
        this._router = _router;
        this.dialog = dialog;
        this.snack = snack;
        this.subs = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUserData();
        this.onSolicitudChange();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) {
            s.unsubscribe();
        });
    };
    DashboardComponent.prototype.onLogout = function () {
        var _this = this;
        this._cfService.logout().then(function () {
            _this._router.navigate(['/login']);
        });
    };
    DashboardComponent.prototype.onNuevaSolicitud = function () {
        this.dialog.open(_dialogs_nueva_solicitud_nueva_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["NuevaSolicitudComponent"], {
            height: '400px',
            width: '600px'
        });
    };
    DashboardComponent.prototype.getUserData = function () {
        var _this = this;
        this._cfService.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) {
            _this._cfService.db.object('usuarios/' + user.uid).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (userData) {
                _this.userData = __assign({}, userData.payload.val(), { uid: userData.key });
                _this._cfService.userData = _this.userData;
                _this.getSolicitudesPendientes();
            });
        });
    };
    DashboardComponent.prototype.getSolicitudesPendientes = function () {
        var _this = this;
        this.solicitudesPendientes = [];
        this.historial = [];
        this.aVotar = [];
        var addSub = this._cfService.db.list('/solicitudes', function (ref) { return ref.orderByChild('uid'); }).
            stateChanges(['child_added']).subscribe(function (solicitud) {
            if (solicitud.payload.val().uid != _this.userData.uid) {
                if (solicitud.payload.val().status == 'V') {
                    _this._cfService.db.object('usuarios/' + solicitud.payload.val().uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (resUser) {
                        if (solicitud.payload.val().votantes) {
                            var find = solicitud.payload.val().votantes.indexOf(_this.userData.uid);
                            if (find < 0) {
                                _this.aVotar.push(__assign({ nombre: resUser.nombre, key: solicitud.key }, solicitud.payload.val()));
                                _this.snack.open(resUser.nombre + " a creado una solicitud.", 'OK', {
                                    duration: 3600
                                });
                            }
                        }
                        else {
                            _this.aVotar.push(__assign({ nombre: resUser.nombre, key: solicitud.key }, solicitud.payload.val()));
                            _this.snack.open(resUser.nombre + " a creado una solicitud.", 'OK', {
                                duration: 3600
                            });
                        }
                    });
                }
            }
            else {
                if (solicitud.payload.val().status == 'V') {
                    _this.solicitudesPendientes.push(__assign({ key: solicitud.key }, solicitud.payload.val()));
                }
                else {
                    _this.historial.push(__assign({ key: solicitud.key }, solicitud.payload.val()));
                }
            }
        });
        this.subs.push(addSub);
    };
    DashboardComponent.prototype.onSolicitudChange = function () {
        var _this = this;
        var changeSub = this._cfService.db.list('solicitudes').stateChanges(['child_changed']).subscribe(function (solicitud) {
            if (solicitud.payload.val().uid == _this.userData.uid && solicitud.payload.val().status != 'V') {
                var indice = _this.solicitudesPendientes.findIndex(function (x) { return x.key == solicitud.key; });
                if (indice >= 0) {
                    var moveSol = _this.solicitudesPendientes.splice(indice, 1);
                    _this.historial.push(solicitud.payload.val());
                }
            }
            else {
                if (solicitud.payload.val().status != 'V') {
                    var indice2 = _this.aVotar.findIndex(function (x) { return x.key == solicitud.key; });
                    if (indice2 >= 0) {
                        var moveVotar = _this.aVotar.splice(indice2, 1);
                    }
                }
                else {
                    var indice = _this.solicitudesPendientes.findIndex(function (x) { return x.key == solicitud.key; });
                    if (indice >= 0) {
                        _this.solicitudesPendientes[indice].contra = solicitud.payload.val().contra;
                        _this.solicitudesPendientes[indice].favor = solicitud.payload.val().favor;
                    }
                }
            }
        });
        this.subs.push(changeSub);
    };
    DashboardComponent.prototype.getPlazo = function (plazo) {
        return plazo == '1' ? '3 pagos: 5% de interés' : plazo == '2' ? '6 pagos: 7% de interés' : plazo == '3' ? '9 pagos: 12% de interés' : '';
    };
    DashboardComponent.prototype.onShowPerfil = function (solicitudData) {
        this.dialog.open(_dialogs_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"], {
            data: solicitudData
        });
    };
    DashboardComponent.prototype.onVotar = function (voto, solicitud) {
        var _this = this;
        var indice = this.aVotar.findIndex(function (x) { return x.key == solicitud.key; });
        this.aVotar.splice(indice, 1);
        var upSolicitud = {
            contra: solicitud.contra,
            favor: solicitud.favor,
            fecha: solicitud.fecha,
            monto: solicitud.monto,
            plazo: solicitud.plazo,
            status: solicitud.status,
            total: solicitud.total,
            uid: solicitud.uid,
            votantes: solicitud.votantes
        };
        if (!upSolicitud.votantes) {
            upSolicitud.votantes = [];
        }
        upSolicitud.votantes.push(this.userData.uid);
        if (voto == 'a') {
            upSolicitud.favor += 1;
        }
        else {
            upSolicitud.contra += 1;
        }
        this._cfService.db.list('solicitudes').update(solicitud.key, upSolicitud).then(function () {
            _this.snack.open('Voto emitido correctamente.', 'OK', {
                duration: 3600
            });
        });
    };
    DashboardComponent.prototype.timeUp = function (event) {
        var _this = this;
        var indice = this.solicitudesPendientes.findIndex(function (x) { return x.key == event.key; });
        var upSolicitud = {
            contra: this.solicitudesPendientes[indice].contra,
            favor: this.solicitudesPendientes[indice].favor,
            fecha: event.fecha,
            monto: event.monto,
            plazo: event.plazo,
            status: event.status,
            total: event.total,
            uid: event.uid
        };
        if (upSolicitud.favor > upSolicitud.contra) {
            upSolicitud.status = 'A';
        }
        else {
            upSolicitud.status = "R";
        }
        this._cfService.db.list('solicitudes').update(event.key, upSolicitud).then(function () {
            if (upSolicitud.uid == _this.userData.uid) {
                var status_1 = upSolicitud.status == 'A' ? 'Aprobada' : 'Rechazada';
                _this.snack.open("Tu solicitud de $" + upSolicitud.monto + " fue " + status_1 + ".", 'OK', {
                    duration: 3600
                });
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_credit_friends_service__WEBPACK_IMPORTED_MODULE_1__["CreditFriendsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_app-modules/shared.module */ "./src/app/_app-modules/shared.module.ts");
/* harmony import */ var _dialogs_nueva_solicitud_nueva_solicitud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_dialogs/nueva-solicitud/nueva-solicitud.component */ "./src/app/_dialogs/nueva-solicitud/nueva-solicitud.component.ts");
/* harmony import */ var _directives_timer_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_directives/timer.directive */ "./src/app/_directives/timer.directive.ts");
/* harmony import */ var src_app_dialogs_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_dialogs/perfil/perfil.component */ "./src/app/_dialogs/perfil/perfil.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _app_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _dialogs_nueva_solicitud_nueva_solicitud_component__WEBPACK_IMPORTED_MODULE_5__["NuevaSolicitudComponent"],
                src_app_dialogs_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"],
                _directives_timer_directive__WEBPACK_IMPORTED_MODULE_6__["TimerDirective"]
            ],
            entryComponents: [
                _dialogs_nueva_solicitud_nueva_solicitud_component__WEBPACK_IMPORTED_MODULE_5__["NuevaSolicitudComponent"],
                src_app_dialogs_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-dashboard-dashboard-module.js.map