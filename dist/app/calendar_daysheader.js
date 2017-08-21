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
var calendar_daysheaderMetaData = (function () {
    function calendar_daysheaderMetaData() {
    }
    return calendar_daysheaderMetaData;
}());
export { calendar_daysheaderMetaData };
calendar_daysheaderMetaData.XTYPE = 'calendar-daysheader';
calendar_daysheaderMetaData.INPUTNAMES = [
    'cellCls',
    'compact',
    'compactOptions',
    'format',
    'value',
    'visibleDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_daysheaderMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
calendar_daysheaderMetaData.OUTPUTNAMES = [
    'ready'
];
var calendar_daysheader = calendar_daysheader_1 = (function (_super) {
    __extends(calendar_daysheader, _super);
    function calendar_daysheader(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_daysheaderMetaData) || this;
    }
    calendar_daysheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_daysheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_daysheaderMetaData); };
    return calendar_daysheader;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_daysheader.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_daysheader.prototype, "dynamicRef", void 0);
calendar_daysheader = calendar_daysheader_1 = __decorate([
    Component({
        selector: calendar_daysheaderMetaData.XTYPE,
        inputs: calendar_daysheaderMetaData.INPUTNAMES,
        outputs: calendar_daysheaderMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_daysheader_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_daysheader);
export { calendar_daysheader };
var calendar_daysheader_1;
