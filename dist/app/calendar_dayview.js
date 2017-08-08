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
var calendar_dayviewMetaData = (function () {
    function calendar_dayviewMetaData() {
    }
    return calendar_dayviewMetaData;
}());
calendar_dayviewMetaData.XTYPE = 'calendar-dayview';
calendar_dayviewMetaData.INPUTNAMES = [
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
calendar_dayviewMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-dayview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-dayview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-dayview,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-dayview,context' },
    { name: 'eventadd', parameters: 'calendar-dayview,context' },
    { name: 'eventdrop', parameters: 'calendar-dayview,context' },
    { name: 'eventedit', parameters: 'calendar-dayview,context' },
    { name: 'eventresize', parameters: 'calendar-dayview,context' },
    { name: 'eventtap', parameters: 'calendar-dayview,context' },
    { name: 'validateeventadd', parameters: 'calendar-dayview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-dayview,context' },
    { name: 'validateeventedit', parameters: 'calendar-dayview,context' },
    { name: 'validateeventresize', parameters: 'calendar-dayview,context' },
    { name: 'valuechange', parameters: 'calendar-dayview,context' },
    { name: 'ready', parameters: '' }
];
calendar_dayviewMetaData.OUTPUTNAMES = [
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
var calendar_dayview = calendar_dayview_1 = (function (_super) {
    __extends(calendar_dayview, _super);
    function calendar_dayview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_dayviewMetaData) || this;
    }
    calendar_dayview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_dayview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_dayviewMetaData); };
    return calendar_dayview;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_dayview.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_dayview.prototype, "dynamicRef", void 0);
calendar_dayview = calendar_dayview_1 = __decorate([
    core_1.Component({
        selector: calendar_dayviewMetaData.XTYPE,
        inputs: calendar_dayviewMetaData.INPUTNAMES,
        outputs: calendar_dayviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_dayview_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_dayview);
exports.calendar_dayview = calendar_dayview;
var calendar_dayview_1;
