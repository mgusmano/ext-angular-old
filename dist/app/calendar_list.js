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
var calendar_listMetaData = (function () {
    function calendar_listMetaData() {
    }
    return calendar_listMetaData;
}());
export { calendar_listMetaData };
calendar_listMetaData.XTYPE = 'calendar-list';
calendar_listMetaData.INPUTNAMES = [
    'enableToggle',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_listMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
calendar_listMetaData.OUTPUTNAMES = [
    'ready'
];
var calendar_list = calendar_list_1 = (function (_super) {
    __extends(calendar_list, _super);
    function calendar_list(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_listMetaData) || this;
    }
    calendar_list.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_list.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_listMetaData); };
    return calendar_list;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_list.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_list.prototype, "dynamicRef", void 0);
calendar_list = calendar_list_1 = __decorate([
    Component({
        selector: calendar_listMetaData.XTYPE,
        inputs: calendar_listMetaData.INPUTNAMES,
        outputs: calendar_listMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_list_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_list);
export { calendar_list };
var calendar_list_1;
