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
var calendar_daysMetaData = (function () {
    function calendar_daysMetaData() {
    }
    return calendar_daysMetaData;
}());
calendar_daysMetaData.XTYPE = 'calendar-days';
calendar_daysMetaData.INPUTNAMES = [
    'configExtractor',
    'dayHeader',
    'eventRelayers',
    'view',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_daysMetaData.OUTPUTS = [
    { name: 'beforeeventadd', parameters: 'calendar-days,context' },
    { name: 'eventadd', parameters: 'calendar-days,context' },
    { name: 'eventedit', parameters: 'calendar-days,context' },
    { name: 'eventdrop', parameters: 'calendar-days,context' },
    { name: 'eventtap', parameters: 'calendar-days,context' },
    { name: 'validateeventadd', parameters: 'calendar-days,context' },
    { name: 'validateeventedit', parameters: 'calendar-days,context' },
    { name: 'validateeventdrop', parameters: 'calendar-days,context' },
    { name: 'valuechange', parameters: 'calendar-days,context' },
    { name: 'beforeeventadd', parameters: 'calendar-days,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-days,context' },
    { name: 'beforeeventresizestart', parameters: 'calendar-days,context' },
    { name: 'eventdrop', parameters: 'calendar-days,context' },
    { name: 'eventresize', parameters: 'calendar-days,context' },
    { name: 'validateeventdrop', parameters: 'calendar-days,context' },
    { name: 'validateeventresize', parameters: 'calendar-days,context' },
    { name: 'ready', parameters: '' }
];
calendar_daysMetaData.OUTPUTNAMES = [
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
var calendar_days = calendar_days_1 = (function (_super) {
    __extends(calendar_days, _super);
    function calendar_days(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_daysMetaData) || this;
    }
    calendar_days.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_days.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_daysMetaData); };
    return calendar_days;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_days.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_days.prototype, "dynamicRef", void 0);
calendar_days = calendar_days_1 = __decorate([
    core_1.Component({
        selector: calendar_daysMetaData.XTYPE,
        inputs: calendar_daysMetaData.INPUTNAMES,
        outputs: calendar_daysMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_days_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_days);
exports.calendar_days = calendar_days;
var calendar_days_1;
