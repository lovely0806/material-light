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
var core_1 = require('@angular/core');
var PagButton = (function () {
    function PagButton() {
    }
    PagButton = __decorate([
        core_1.Component({
            template: "\n\n<!--For incompatible attributes check: https://getmdl.io/components/index.html#buttons-section-->\n\n<h5>Button</h5>\n\n<p><ml-button ripple>Flat Button With Ripple</ml-button></p>\n\n<p><ml-button aspect=\"colored\">Flat Colored</ml-button></p>\n\n<p><ml-button aspect=\"raised\" ripple>Raised Button (Ripple)</ml-button></p>\n\n<p><ml-button aspect=\"raised, colored\" ripple>Raised Colored (Ripple)</ml-button></p>\n\n<p><ml-button aspect=\"raised, accent\">Rised Accent</ml-button></p>\n\n<p><ml-button aspect=\"raised, accent\" disabled>Disabled Button</ml-button></p>\n\n<p>Fab button: <ml-button type=\"fab\"><ml-icon>add</ml-icon></ml-button></p>\n\n<p>Fab colored: <ml-button type=\"fab\" aspect=\"colored\"><ml-icon>add</ml-icon></ml-button></p>\n\n<p>Mini-fab button: <ml-button type=\"minifab\"><ml-icon>add</ml-icon></ml-button></p>\n\n<p>Icon button: <ml-button type=\"icon\"><ml-icon>email</ml-icon></ml-button></p>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagButton);
    return PagButton;
}());
exports.PagButton = PagButton;
//# sourceMappingURL=pagButton.js.map