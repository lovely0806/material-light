"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mlSnackbar_1 = require("./mlSnackbar");
var MlSnackbarMod = (function () {
    function MlSnackbarMod() {
    }
    MlSnackbarMod = __decorate([
        core_1.NgModule({
            declarations: [mlSnackbar_1.MlSnackbar],
            exports: [mlSnackbar_1.MlSnackbar]
        }), 
        __metadata('design:paramtypes', [])
    ], MlSnackbarMod);
    return MlSnackbarMod;
}());
exports.MlSnackbarMod = MlSnackbarMod;
//# sourceMappingURL=mlSnackbarMod.js.map