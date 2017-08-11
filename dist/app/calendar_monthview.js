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
var calendar_monthviewMetaData = (function () {
    function calendar_monthviewMetaData() {
    }
    return calendar_monthviewMetaData;
}());
calendar_monthviewMetaData.XTYPE = 'calendar-monthview';
calendar_monthviewMetaData.INPUTNAMES = [
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
calendar_monthviewMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-monthview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-monthview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-monthview,context' },
    { name: 'eventadd', parameters: 'calendar-monthview,context' },
    { name: 'eventdrop', parameters: 'calendar-monthview,context' },
    { name: 'eventedit', parameters: 'calendar-monthview,context' },
    { name: 'eventtap', parameters: 'calendar-monthview,context' },
    { name: 'select', parameters: 'calendar-monthview,context' },
    { name: 'selectrange', parameters: 'calendar-monthview,context' },
    { name: 'validateeventadd', parameters: 'calendar-monthview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-monthview,context' },
    { name: 'validateeventedit', parameters: 'calendar-monthview,context' },
    { name: 'valuechange', parameters: 'calendar-monthview,context' },
    { name: 'ready', parameters: '' }
];
calendar_monthviewMetaData.OUTPUTNAMES = [
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
var calendar_monthview = calendar_monthview_1 = (function (_super) {
    __extends(calendar_monthview, _super);
    function calendar_monthview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_monthviewMetaData) || this;
    }
    calendar_monthview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_monthview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_monthviewMetaData); };
    return calendar_monthview;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_monthview.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_monthview.prototype, "dynamicRef", void 0);
calendar_monthview = calendar_monthview_1 = __decorate([
    core_1.Component({
        selector: calendar_monthviewMetaData.XTYPE,
        inputs: calendar_monthviewMetaData.INPUTNAMES,
        outputs: calendar_monthviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_monthview_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_monthview);
exports.calendar_monthview = calendar_monthview;
var calendar_monthview_1;
