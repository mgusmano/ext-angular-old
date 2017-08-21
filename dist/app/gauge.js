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
var gaugeMetaData = (function () {
    function gaugeMetaData() {
    }
    return gaugeMetaData;
}());
export { gaugeMetaData };
gaugeMetaData.XTYPE = 'gauge';
gaugeMetaData.INPUTNAMES = [
    'angleOffset',
    'animation',
    'clockwise',
    'maxValue',
    'minValue',
    'padding',
    'textAlign',
    'textTpl',
    'trackLength',
    'trackStart',
    'trackStyle',
    'value',
    'valueStyle',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
gaugeMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
gaugeMetaData.OUTPUTNAMES = [
    'ready'
];
var gauge = gauge_1 = (function (_super) {
    __extends(gauge, _super);
    function gauge(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, gaugeMetaData) || this;
    }
    gauge.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    gauge.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, gaugeMetaData); };
    return gauge;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], gauge.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], gauge.prototype, "dynamicRef", void 0);
gauge = gauge_1 = __decorate([
    Component({
        selector: gaugeMetaData.XTYPE,
        inputs: gaugeMetaData.INPUTNAMES,
        outputs: gaugeMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return gauge_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], gauge);
export { gauge };
var gauge_1;
