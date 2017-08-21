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
var calendar_weeksviewMetaData = (function () {
    function calendar_weeksviewMetaData() {
    }
    return calendar_weeksviewMetaData;
}());
export { calendar_weeksviewMetaData };
calendar_weeksviewMetaData.XTYPE = 'calendar-weeksview';
calendar_weeksviewMetaData.INPUTNAMES = [
    'addForm',
    'addOnSelect',
    'allowSelection',
    'compact',
    'compactOptions',
    'controlStoreRange',
    'dayFormat',
    'draggable',
    'droppable',
    'editForm',
    'eventDefaults',
    'firstDayOfWeek',
    'gestureNavigation',
    'header',
    'overflowText',
    'showOverflow',
    'store',
    'timezoneOffset',
    'value',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_weeksviewMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-weeksview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-weeksview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-weeksview,context' },
    { name: 'eventadd', parameters: 'calendar-weeksview,context' },
    { name: 'eventdrop', parameters: 'calendar-weeksview,context' },
    { name: 'eventedit', parameters: 'calendar-weeksview,context' },
    { name: 'eventtap', parameters: 'calendar-weeksview,context' },
    { name: 'select', parameters: 'calendar-weeksview,context' },
    { name: 'selectrange', parameters: 'calendar-weeksview,context' },
    { name: 'validateeventadd', parameters: 'calendar-weeksview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-weeksview,context' },
    { name: 'validateeventedit', parameters: 'calendar-weeksview,context' },
    { name: 'valuechange', parameters: 'calendar-weeksview,context' },
    { name: 'ready', parameters: '' }
];
calendar_weeksviewMetaData.OUTPUTNAMES = [
    'beforeeventadd',
    'beforeeventdragstart',
    'beforeeventedit',
    'eventadd',
    'eventdrop',
    'eventedit',
    'eventtap',
    'select',
    'selectrange',
    'validateeventadd',
    'validateeventdrop',
    'validateeventedit',
    'valuechange',
    'ready'
];
var calendar_weeksview = calendar_weeksview_1 = (function (_super) {
    __extends(calendar_weeksview, _super);
    function calendar_weeksview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_weeksviewMetaData) || this;
    }
    calendar_weeksview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_weeksview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_weeksviewMetaData); };
    return calendar_weeksview;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_weeksview.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_weeksview.prototype, "dynamicRef", void 0);
calendar_weeksview = calendar_weeksview_1 = __decorate([
    Component({
        selector: calendar_weeksviewMetaData.XTYPE,
        inputs: calendar_weeksviewMetaData.INPUTNAMES,
        outputs: calendar_weeksviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_weeksview_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_weeksview);
export { calendar_weeksview };
var calendar_weeksview_1;
