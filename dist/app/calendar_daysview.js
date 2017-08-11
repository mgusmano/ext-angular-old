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
var calendar_daysviewMetaData = (function () {
    function calendar_daysviewMetaData() {
    }
    return calendar_daysviewMetaData;
}());
calendar_daysviewMetaData.XTYPE = 'calendar-daysview';
calendar_daysviewMetaData.INPUTNAMES = [
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
    'endHour',
    'eventDefaults',
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
calendar_daysviewMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-daysview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-daysview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-daysview,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-daysview,context' },
    { name: 'eventadd', parameters: 'calendar-daysview,context' },
    { name: 'eventdrop', parameters: 'calendar-daysview,context' },
    { name: 'eventedit', parameters: 'calendar-daysview,context' },
    { name: 'eventresize', parameters: 'calendar-daysview,context' },
    { name: 'eventtap', parameters: 'calendar-daysview,context' },
    { name: 'validateeventadd', parameters: 'calendar-daysview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-daysview,context' },
    { name: 'validateeventedit', parameters: 'calendar-daysview,context' },
    { name: 'validateeventresize', parameters: 'calendar-daysview,context' },
    { name: 'valuechange', parameters: 'calendar-daysview,context' },
    { name: 'ready', parameters: '' }
];
calendar_daysviewMetaData.OUTPUTNAMES = [
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
var calendar_daysview = calendar_daysview_1 = (function (_super) {
    __extends(calendar_daysview, _super);
    function calendar_daysview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_daysviewMetaData) || this;
    }
    calendar_daysview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_daysview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_daysviewMetaData); };
    return calendar_daysview;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_daysview.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_daysview.prototype, "dynamicRef", void 0);
calendar_daysview = calendar_daysview_1 = __decorate([
    core_1.Component({
        selector: calendar_daysviewMetaData.XTYPE,
        inputs: calendar_daysviewMetaData.INPUTNAMES,
        outputs: calendar_daysviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_daysview_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_daysview);
exports.calendar_daysview = calendar_daysview;
var calendar_daysview_1;
