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
var calendar_monthMetaData = (function () {
    function calendar_monthMetaData() {
    }
    return calendar_monthMetaData;
}());
calendar_monthMetaData.XTYPE = 'calendar-month';
calendar_monthMetaData.INPUTNAMES = [
    'configExtractor',
    'dayHeader',
    'eventRelayers',
    'value',
    'view',
    'visibleWeeks',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_monthMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-month,context' },
    { name: 'eventadd', parameters: 'calendar-month,context' },
    { name: 'eventedit', parameters: 'calendar-month,context' },
    { name: 'eventdrop', parameters: 'calendar-month,context' },
    { name: 'eventtap', parameters: 'calendar-month,context' },
    { name: 'validateeventadd', parameters: 'calendar-month,context' },
    { name: 'validateeventedit', parameters: 'calendar-month,context' },
    { name: 'validateeventdrop', parameters: 'calendar-month,context' },
    { name: 'valuechange', parameters: 'calendar-month,context' },
    { name: 'beforeeventadd', parameters: 'calendar-month,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-month,context' },
    { name: 'eventdrop', parameters: 'calendar-month,context' },
    { name: 'validateeventdrop', parameters: 'calendar-month,context' },
    { name: 'ready', parameters: '' }
];
calendar_monthMetaData.OUTPUTNAMES = [
    'beforeeventadd',
    'eventadd',
    'eventedit',
    'eventdrop',
    'eventtap',
    'validateeventadd',
    'validateeventedit',
    'validateeventdrop',
    'valuechange',
    'beforeeventadd',
    'beforeeventdragstart',
    'eventdrop',
    'validateeventdrop',
    'ready'
];
var calendar_month = calendar_month_1 = (function (_super) {
    __extends(calendar_month, _super);
    function calendar_month(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_monthMetaData) || this;
    }
    calendar_month.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_month.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_monthMetaData); };
    return calendar_month;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_month.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_month.prototype, "dynamicRef", void 0);
calendar_month = calendar_month_1 = __decorate([
    Component({
        selector: calendar_monthMetaData.XTYPE,
        inputs: calendar_monthMetaData.INPUTNAMES,
        outputs: calendar_monthMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_month_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_month);
export { calendar_month };
var calendar_month_1;
