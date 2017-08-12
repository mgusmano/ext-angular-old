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
var calendar_weekviewMetaData = (function () {
    function calendar_weekviewMetaData() {
    }
    return calendar_weekviewMetaData;
}());
calendar_weekviewMetaData.XTYPE = 'calendar-weekview';
calendar_weekviewMetaData.INPUTNAMES = [
    'addForm',
    'allowSelection',
    'compact',
    'compactOptions',
    'controlStoreRange',
    'displayOverlap',
    'draggable',
    'droppable',
    'editForm',
    'endHour',
    'eventDefaults',
    'firstDayOfWeek',
    'gestureNavigation',
    'header',
    'resizeEvents',
    'showNowMarker',
    'store',
    'timeFormat',
    'timeRenderer',
    'timezoneOffset',
    'value',
    'visibleDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_weekviewMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-weekview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-weekview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-weekview,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-weekview,context' },
    { name: 'eventadd', parameters: 'calendar-weekview,context' },
    { name: 'eventdrop', parameters: 'calendar-weekview,context' },
    { name: 'eventedit', parameters: 'calendar-weekview,context' },
    { name: 'eventresize', parameters: 'calendar-weekview,context' },
    { name: 'eventtap', parameters: 'calendar-weekview,context' },
    { name: 'validateeventadd', parameters: 'calendar-weekview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-weekview,context' },
    { name: 'validateeventedit', parameters: 'calendar-weekview,context' },
    { name: 'validateeventresize', parameters: 'calendar-weekview,context' },
    { name: 'valuechange', parameters: 'calendar-weekview,context' },
    { name: 'ready', parameters: '' }
];
calendar_weekviewMetaData.OUTPUTNAMES = [
    'beforeeventadd',
    'beforeeventdragstart',
    'beforeeventedit',
    'beforeeventresizestart',
    'eventadd',
    'eventdrop',
    'eventedit',
    'eventresize',
    'eventtap',
    'validateeventadd',
    'validateeventdrop',
    'validateeventedit',
    'validateeventresize',
    'valuechange',
    'ready'
];
var calendar_weekview = calendar_weekview_1 = (function (_super) {
    __extends(calendar_weekview, _super);
    function calendar_weekview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_weekviewMetaData) || this;
    }
    calendar_weekview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_weekview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_weekviewMetaData); };
    return calendar_weekview;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_weekview.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_weekview.prototype, "dynamicRef", void 0);
calendar_weekview = calendar_weekview_1 = __decorate([
    Component({
        selector: calendar_weekviewMetaData.XTYPE,
        inputs: calendar_weekviewMetaData.INPUTNAMES,
        outputs: calendar_weekviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_weekview_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_weekview);
export { calendar_weekview };
var calendar_weekview_1;
