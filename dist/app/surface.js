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
var surfaceMetaData = (function () {
    function surfaceMetaData() {
    }
    return surfaceMetaData;
}());
surfaceMetaData.XTYPE = 'surface';
surfaceMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'background',
    'baseCls',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'dirty',
    'flex',
    'flipRtlText',
    'floated',
    'height',
    'hidden',
    'id',
    'itemId',
    'items',
    'listeners',
    'plugins',
    'publishes',
    'rect',
    'reference',
    'relative',
    'session',
    'shadow',
    'shim',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
surfaceMetaData.OUTPUTS = [
    { name: 'beforetofront', parameters: 'surface' },
    { name: 'tofront', parameters: 'surface' },
    { name: 'ready', parameters: '' }
];
surfaceMetaData.OUTPUTNAMES = [
    'beforetofront',
    'tofront',
    'ready'
];
var surface = surface_1 = (function (_super) {
    __extends(surface, _super);
    function surface(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, surfaceMetaData) || this;
    }
    surface.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    surface.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, surfaceMetaData); };
    return surface;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], surface.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], surface.prototype, "dynamicRef", void 0);
surface = surface_1 = __decorate([
    Component({
        selector: surfaceMetaData.XTYPE,
        inputs: surfaceMetaData.INPUTNAMES,
        outputs: surfaceMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return surface_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], surface);
export { surface };
var surface_1;
