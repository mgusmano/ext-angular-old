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
var calendar_weekMetaData = (function () {
    function calendar_weekMetaData() {
    }
    return calendar_weekMetaData;
}());
calendar_weekMetaData.XTYPE = 'calendar-week';
calendar_weekMetaData.INPUTNAMES = [
    'configExtractor',
    'dayHeader',
    'eventRelayers',
    'firstDayOfWeek',
    'value',
    'view',
    'visibleDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_weekMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-week,context' },
    { name: 'eventadd', parameters: 'calendar-week,context' },
    { name: 'eventedit', parameters: 'calendar-week,context' },
    { name: 'eventdrop', parameters: 'calendar-week,context' },
    { name: 'eventtap', parameters: 'calendar-week,context' },
    { name: 'validateeventadd', parameters: 'calendar-week,context' },
    { name: 'validateeventedit', parameters: 'calendar-week,context' },
    { name: 'validateeventdrop', parameters: 'calendar-week,context' },
    { name: 'valuechange', parameters: 'calendar-week,context' },
    { name: 'beforeeventadd', parameters: 'calendar-week,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-week,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-week,context' },
    { name: 'eventdrop', parameters: 'calendar-week,context' },
    { name: 'eventresize', parameters: 'calendar-week,context' },
    { name: 'validateeventdrop', parameters: 'calendar-week,context' },
    { name: 'validateeventresize', parameters: 'calendar-week,context' },
    { name: 'ready', parameters: '' }
];
calendar_weekMetaData.OUTPUTNAMES = [
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
var calendar_week = calendar_week_1 = (function (_super) {
    __extends(calendar_week, _super);
    function calendar_week(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_weekMetaData) || this;
    }
    calendar_week.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_week.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_weekMetaData); };
    return calendar_week;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_week.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_week.prototype, "dynamicRef", void 0);
calendar_week = calendar_week_1 = __decorate([
    Component({
        selector: calendar_weekMetaData.XTYPE,
        inputs: calendar_weekMetaData.INPUTNAMES,
        outputs: calendar_weekMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_week_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_week);
export { calendar_week };
var calendar_week_1;
