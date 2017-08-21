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
var calendar_weeksheaderMetaData = (function () {
    function calendar_weeksheaderMetaData() {
    }
    return calendar_weeksheaderMetaData;
}());
export { calendar_weeksheaderMetaData };
calendar_weeksheaderMetaData.XTYPE = 'calendar-weeksheader';
calendar_weeksheaderMetaData.INPUTNAMES = [
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
calendar_weeksheaderMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
calendar_weeksheaderMetaData.OUTPUTNAMES = [
    'ready'
];
var calendar_weeksheader = calendar_weeksheader_1 = (function (_super) {
    __extends(calendar_weeksheader, _super);
    function calendar_weeksheader(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_weeksheaderMetaData) || this;
    }
    calendar_weeksheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_weeksheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_weeksheaderMetaData); };
    return calendar_weeksheader;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_weeksheader.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_weeksheader.prototype, "dynamicRef", void 0);
calendar_weeksheader = calendar_weeksheader_1 = __decorate([
    Component({
        selector: calendar_weeksheaderMetaData.XTYPE,
        inputs: calendar_weeksheaderMetaData.INPUTNAMES,
        outputs: calendar_weeksheaderMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_weeksheader_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_weeksheader);
export { calendar_weeksheader };
var calendar_weeksheader_1;
