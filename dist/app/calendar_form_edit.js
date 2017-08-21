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
var calendar_form_editMetaData = (function () {
    function calendar_form_editMetaData() {
    }
    return calendar_form_editMetaData;
}());
export { calendar_form_editMetaData };
calendar_form_editMetaData.XTYPE = 'calendar-form-edit';
calendar_form_editMetaData.INPUTNAMES = [
    'defaultEndTime',
    'defaultStartTime',
    'event',
    'title',
    'view',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_form_editMetaData.OUTPUTS = [
    { name: 'cancel', parameters: 'calendar-form-edit' },
    { name: 'drop', parameters: 'calendar-form-edit' },
    { name: 'save', parameters: 'calendar-form-edit,context' },
    { name: 'ready', parameters: '' }
];
calendar_form_editMetaData.OUTPUTNAMES = [
    'cancel',
    'drop',
    'save',
    'ready'
];
var calendar_form_edit = calendar_form_edit_1 = (function (_super) {
    __extends(calendar_form_edit, _super);
    function calendar_form_edit(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, calendar_form_editMetaData) || this;
    }
    calendar_form_edit.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    calendar_form_edit.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, calendar_form_editMetaData); };
    return calendar_form_edit;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], calendar_form_edit.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], calendar_form_edit.prototype, "dynamicRef", void 0);
calendar_form_edit = calendar_form_edit_1 = __decorate([
    Component({
        selector: calendar_form_editMetaData.XTYPE,
        inputs: calendar_form_editMetaData.INPUTNAMES,
        outputs: calendar_form_editMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return calendar_form_edit_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], calendar_form_edit);
export { calendar_form_edit };
var calendar_form_edit_1;
