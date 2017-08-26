var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { base } from './base';
var ExtNgComponentMetaData = (function () {
    function ExtNgComponentMetaData() {
    }
    return ExtNgComponentMetaData;
}());
ExtNgComponentMetaData.XTYPE = 'container';
ExtNgComponentMetaData.INPUTNAMES = ['selector', 'component', 'selectorParams'];
ExtNgComponentMetaData.OUTPUTS = [];
ExtNgComponentMetaData.OUTPUTNAMES = [];
var ngcomponent = ngcomponent_1 = (function (_super) {
    __extends(ngcomponent, _super);
    function ngcomponent(myElement, componentFactoryResolver, viewContainerRef) {
        return _super.call(this, myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData) || this;
    }
    ngcomponent.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    ngcomponent.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef); };
    return ngcomponent;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], ngcomponent.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ngcomponent.prototype, "dynamicRef", void 0);
ngcomponent = ngcomponent_1 = __decorate([
    Component({
        selector: 'ngcomponent',
        inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
        outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
        providers: [{ provide: base, useExisting: forwardRef(function () { return ngcomponent_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], ngcomponent);
export { ngcomponent };
var ngcomponent_1;
