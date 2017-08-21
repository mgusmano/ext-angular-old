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
var calendar_dayMetaData = (function () {
    function calendar_dayMetaData() {
    }
    return calendar_dayMetaData;
}());
export { calendar_dayMetaData };
calendar_dayMetaData.XTYPE = 'calendar-day';
calendar_dayMetaData.INPUTNAMES = [
    'configExtractor',
    'dayHeader',
    'eventRelayers',
    'view',
    'visibleDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_dayMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-day,context' },
    { name: 'eventadd', parameters: 'calendar-day,context' },
    { name: 'eventedit', parameters: 'calendar-day,context' },
    { name: 'eventdrop', parameters: 'calendar-day,context' },
    { name: 'eventtap', parameters: 'calendar-day,context' },
    { name: 'validateeventadd', parameters: 'calendar-day,context' },
    { name: 'validateeventedit', parameters: 'calendar-day,context' },
    { name: 'validateeventdrop', parameters: 'calendar-day,context' },
    { name: 'valuechange', parameters: 'calendar-day,context' },
    { name: 'beforeeventadd', parameters: 'calendar-day,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-day,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-day,context' },
    { name: 'eventdrop', parameters: 'calendar-day,context' },
    { name: 'eventresize', parameters: 'calendar-day,context' },
    { name: 'validateeventdrop', parameters: 'calendar-day,context' },
    { name: 'validateeventresize', parameters: 'calendar-day,context' },
    { name: 'ready', parameters: '' }
];
calendar_dayMetaData.OUTPUTNAMES = [
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
    'beforeeventresizestart',
    'eventdrop',
    'eventresize',
    'validateeventdrop',
    'validateeventresize',
    'ready'
];
var calendar_day = calendar_day_1 = (function (_super) {
    __extends(calendar_day, _super);
    function calendar_day(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_dayMetaData) || this;
    }
    calendar_day.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_day.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_dayMetaData); };
    return calendar_day;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_day.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_day.prototype, "dynamicRef", void 0);
calendar_day = calendar_day_1 = __decorate([
    Component({
        selector: calendar_dayMetaData.XTYPE,
        inputs: calendar_dayMetaData.INPUTNAMES,
        outputs: calendar_dayMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_day_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_day);
export { calendar_day };
var calendar_day_1;
