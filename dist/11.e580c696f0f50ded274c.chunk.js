webpackJsonp([11,23],{636:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(206),l=n(678),a=n(208),d=n(765),c=function(){function t(){}return t=i([r.NgModule({imports:[l.MlButtonMod,a.MlSpinnerMod,s.RouterModule.forChild([{path:"",component:d.PagSpinner}])],declarations:[d.PagSpinner]}),o("design:paramtypes",[])],t)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},656:function(t,e){t.exports=".mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}"},664:function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(205),r=function(t){function e(e){t.call(this,e)}return i(e,t),e}(o.default);Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,r.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},r.prototype.blurHandler_=function(t){t&&this.element_.blur()},r.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var t=document.createElement("span");t.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),t.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(t)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}}},665:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(669),l=function(){function t(){}return t=i([r.NgModule({declarations:[s.MlIcon],exports:[s.MlIcon]}),o("design:paramtypes",[])],t)}();e.MlIconMod=l},666:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(667),l=function(){function t(){}return t=i([r.NgModule({declarations:[s.MlRipple],exports:[s.MlRipple]}),o("design:paramtypes",[])],t)}();e.MlRippleMod=l},667:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(668),l=n(204),a=function(){function t(t,e){this.host=t,this.ren=e}return t.prototype.ngOnInit=function(){var t=this;l.setClass(this.host,"mdl-js-ripple-effect",this.ren),setTimeout(function(){new s.default(t.host.nativeElement)},0)},t=i([r.Directive({selector:"[ripple]"}),o("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.ElementRef&&r.ElementRef)&&e||Object,"function"==typeof(n="undefined"!=typeof r.Renderer&&r.Renderer)&&n||Object])],t);var e,n}();e.MlRipple=a},668:function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(205),r=function(t){function e(e){t.call(this,e)}return i(e,t),e}(o.default);Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,r.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},r.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},r.prototype.downHandler_=function(t){if(!this.rippleElement_)return void console.warn("Ripple effect: applied to incorrect HTML element");if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var e=this.element_.getBoundingClientRect();this.boundHeight=e.height,this.boundWidth=e.width,this.rippleSize_=2*Math.sqrt(e.width*e.width+e.height*e.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===t.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===t.type&&(this.ignoringMouseDown_=!0);var n=this.getFrameCount();if(n>0)return;this.setFrameCount(1);var i,o,r=t.currentTarget.getBoundingClientRect();if(0===t.clientX&&0===t.clientY)i=Math.round(r.width/2),o=Math.round(r.height/2);else{var s=t.clientX?t.clientX:t.touches[0].clientX,l=t.clientY?t.clientY:t.touches[0].clientY;i=Math.round(s-r.left),o=Math.round(l-r.top)}this.setRippleXY(i,o),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},r.prototype.upHandler_=function(t){return this.rippleElement_?void(t&&2!==t.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)):void console.warn("Ripple effect: applied to incorrect HTML element")},r.prototype.init=function(){if(this.element_){var t=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(t){this.frameCount_=t},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(t,e){this.x_=t,this.y_=e},this.setRippleStyles=function(e){if(null!==this.rippleElement_){var n,i,o,r="translate("+this.x_+"px, "+this.y_+"px)";e?(i=this.Constant_.INITIAL_SCALE,o=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,o=this.rippleSize_+"px",t&&(r="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+r+i,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,e?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}}},669:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=function(){function t(){}return t=i([r.Component({selector:"ml-icon",template:"<ng-content></ng-content>",host:{class:"material-icons"}}),o("design:paramtypes",[])],t)}();e.MlIcon=s},677:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(664),l=n(204),a=function(){function t(t,e){this.host=t,this.ren=e}return t.prototype.ngOnInit=function(){l.isSubstring("raised",this.aspect)&&l.setClass(this.host,"mdl-button--raised",this.ren),l.isSubstring("colored",this.aspect)&&l.setClass(this.host,"mdl-button--colored",this.ren),l.isSubstring("accent",this.aspect)&&l.setClass(this.host,"mdl-button--accent",this.ren),l.isSubstring("fab",this.type)&&l.setClass(this.host,"mdl-button--fab",this.ren),l.isSubstring("minifab",this.type)&&(l.setClass(this.host,"mdl-button--fab",this.ren),l.setClass(this.host,"mdl-button--mini-fab",this.ren)),l.isSubstring("icon",this.type)&&l.setClass(this.host,"mdl-button--icon",this.ren),new s.default(this.host.nativeElement)},t.prototype.disable=function(){this.host.nativeElement.setAttribute("disabled",!0)},t.prototype.enable=function(){this.host.nativeElement.removeAttribute("disabled")},i([r.Input(),o("design:type",String)],t.prototype,"aspect",void 0),i([r.Input(),o("design:type",String)],t.prototype,"type",void 0),t=i([r.Component({selector:"ml-button",encapsulation:r.ViewEncapsulation.None,styles:[n(656)],host:{class:"mdl-button"},template:"<ng-content></ng-content>"}),o("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.ElementRef&&r.ElementRef)&&e||Object,"function"==typeof(a="undefined"!=typeof r.Renderer&&r.Renderer)&&a||Object])],t);var e,a}();e.MlButton=a},678:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(666),l=n(665),a=n(677),d=n(679),c=function(){function t(){}return t=i([r.NgModule({imports:[s.MlRippleMod,l.MlIconMod],declarations:[a.MlButton,d.MlButtonSubmit],exports:[s.MlRippleMod,l.MlIconMod,a.MlButton,d.MlButtonSubmit]}),o("design:paramtypes",[])],t)}();e.MlButtonMod=c},679:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=n(664),l=n(204),a=function(){function t(t){this.ren=t}return t.prototype.ngOnInit=function(){l.isSubstring("raised",this.aspect)&&l.setClass(this.input,"mdl-button--raised",this.ren),l.isSubstring("colored",this.aspect)&&l.setClass(this.input,"mdl-button--colored",this.ren),l.isSubstring("accent",this.aspect)&&l.setClass(this.input,"mdl-button--accent",this.ren),new s.default(this.input.nativeElement)},i([r.ViewChild("input"),o("design:type","function"==typeof(e="undefined"!=typeof r.ElementRef&&r.ElementRef)&&e||Object)],t.prototype,"input",void 0),i([r.Input(),o("design:type",String)],t.prototype,"aspect",void 0),i([r.Input(),o("design:type",String)],t.prototype,"value",void 0),i([r.Input(),o("design:type",String)],t.prototype,"disabled",void 0),t=i([r.Component({selector:"ml-button-submit",styles:[n(656)],template:'<input type="submit" class="mdl-button" [attr.value]="value" [disabled]="disabled" #input>'}),o("design:paramtypes",["function"==typeof(a="undefined"!=typeof r.Renderer&&r.Renderer)&&a||Object])],t);var e,a}();e.MlButtonSubmit=a},765:function(t,e,n){"use strict";var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=n(0),s=function(){function t(){}return t.prototype.clickBtn1=function(){this.spinner1.stop(),this.btn1.disable()},t.prototype.clickBtn2=function(){this.spinner1.start(),this.btn1.enable()},i([r.ViewChild("btn1"),o("design:type",Object)],t.prototype,"btn1",void 0),i([r.ViewChild("spinner1"),o("design:type",Object)],t.prototype,"spinner1",void 0),t=i([r.Component({template:'\n\n<h5>Spinner</h5>\n\nMulti-color:\n<ml-spinner #spinner1></ml-spinner>\n\n<br><br>\n\nSingle color:\n<ml-spinner single-color></ml-spinner>\n\n<br><br>\n\n<p>SPINNER API:</p>\n<p><ml-button #btn1 aspect="raised" (click)="clickBtn1()">Stop spinner 1</ml-button></p>\n<p><ml-button aspect="raised" (click)="clickBtn2()">Start spinner 1</ml-button></p>\n        \n'}),o("design:paramtypes",[])],t)}();e.PagSpinner=s}});