"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_1 = require("./base");
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
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_weekview.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_weekview.prototype, "dynamicRef", void 0);
calendar_weekview = calendar_weekview_1 = __decorate([
    core_1.Component({
        selector: calendar_weekviewMetaData.XTYPE,
        inputs: calendar_weekviewMetaData.INPUTNAMES,
        outputs: calendar_weekviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_weekview_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_weekview);
exports.calendar_weekview = calendar_weekview;
var calendar_weekview_1;
