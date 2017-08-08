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
var calendar_form_addMetaData = (function () {
    function calendar_form_addMetaData() {
    }
    return calendar_form_addMetaData;
}());
calendar_form_addMetaData.XTYPE = 'calendar-form-add';
calendar_form_addMetaData.INPUTNAMES = [
    'defaultEndTime',
    'defaultStartTime',
    'event',
    'title',
    'view',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_form_addMetaData.OUTPUTS = [
    { name: 'cancel', parameters: 'calendar-form-add' },
    { name: 'drop', parameters: 'calendar-form-add' },
    { name: 'save', parameters: 'calendar-form-add,context' },
    { name: 'ready', parameters: '' }
];
calendar_form_addMetaData.OUTPUTNAMES = [
    'cancel',
    'drop',
    'save',
    'ready'
];
var calendar_form_add = calendar_form_add_1 = (function (_super) {
    __extends(calendar_form_add, _super);
    function calendar_form_add(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_form_addMetaData) || this;
    }
    calendar_form_add.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_form_add.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_form_addMetaData); };
    return calendar_form_add;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], calendar_form_add.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], calendar_form_add.prototype, "dynamicRef", void 0);
calendar_form_add = calendar_form_add_1 = __decorate([
    core_1.Component({
        selector: calendar_form_addMetaData.XTYPE,
        inputs: calendar_form_addMetaData.INPUTNAMES,
        outputs: calendar_form_addMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return calendar_form_add_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], calendar_form_add);
exports.calendar_form_add = calendar_form_add;
var calendar_form_add_1;
