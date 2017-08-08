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
var calendar_listMetaData = (function () {
    function calendar_listMetaData() {
    }
    return calendar_listMetaData;
}());
calendar_listMetaData.XTYPE = 'calendar-list';
calendar_listMetaData.INPUTNAMES = [
    'enableToggle',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_listMetaData.OUTPUTS = [
    { name: 'ready', parameters: '' }
];
calendar_listMetaData.OUTPUTNAMES = [
    'ready'
];
var calendar_list = calendar_list_1 = (function (_super) {
    __extends(calendar_list, _super);
    function calendar_list(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_listMetaData) || this;
    }
    calendar_list.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_list.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_listMetaData); };
    return calendar_list;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_list.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_list.prototype, "dynamicRef", void 0);
calendar_list = calendar_list_1 = __decorate([
    core_1.Component({
        selector: calendar_listMetaData.XTYPE,
        inputs: calendar_listMetaData.INPUTNAMES,
        outputs: calendar_listMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_list_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_list);
exports.calendar_list = calendar_list;
var calendar_list_1;
