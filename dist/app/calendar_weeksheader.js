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
var calendar_weeksheaderMetaData = (function () {
    function calendar_weeksheaderMetaData() {
    }
    return calendar_weeksheaderMetaData;
}());
calendar_weeksheaderMetaData.XTYPE = 'calendar-weeksheader';
calendar_weeksheaderMetaData.INPUTNAMES = [
    'cellCls',
    'compact',
    'compactOptions',
    'format',
    'value',
    'visibleDays',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_weeksheaderMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
calendar_weeksheaderMetaData.OUTPUTNAMES = [
    'ready'
];
var calendar_weeksheader = calendar_weeksheader_1 = (function (_super) {
    __extends(calendar_weeksheader, _super);
    function calendar_weeksheader(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_weeksheaderMetaData) || this;
    }
    calendar_weeksheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_weeksheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_weeksheaderMetaData); };
    return calendar_weeksheader;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_weeksheader.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_weeksheader.prototype, "dynamicRef", void 0);
calendar_weeksheader = calendar_weeksheader_1 = __decorate([
    core_1.Component({
        selector: calendar_weeksheaderMetaData.XTYPE,
        inputs: calendar_weeksheaderMetaData.INPUTNAMES,
        outputs: calendar_weeksheaderMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_weeksheader_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_weeksheader);
exports.calendar_weeksheader = calendar_weeksheader;
var calendar_weeksheader_1;
