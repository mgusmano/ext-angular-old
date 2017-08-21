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
var datepickerfieldMetaData = (function () {
    function datepickerfieldMetaData() {
    }
    return datepickerfieldMetaData;
}());
export { datepickerfieldMetaData };
datepickerfieldMetaData.XTYPE = 'datepickerfield';
datepickerfieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'axisLock',
    'baseCls',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'clearIcon',
    'cls',
    'component',
    'contentEl',
    'controller',
    'data',
    'dateFormat',
    'defaultListenerScope',
    'defaultPhonePickerConfig',
    'defaultTabletPickerConfig',
    'destroyPickerOnHide',
    'disabled',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'inputCls',
    'inputType',
    'isFocused',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'label',
    'labelAlign',
    'labelCls',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxLength',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'name',
    'padding',
    'picker',
    'pickerSlotAlign',
    'placeHolder',
    'plugins',
    'publishes',
    'readOnly',
    'record',
    'reference',
    'relative',
    'renderTo',
    'required',
    'right',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'tabIndex',
    'textAlign',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggers',
    'twoWayBindable',
    'ui',
    'useBodyElement',
    'usePicker',
    'userCls',
    'value',
    'viewModel',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
datepickerfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'datepickerfield,e' },
    { name: 'added', parameters: 'datepickerfield,container,index' },
    { name: 'beforehide', parameters: 'datepickerfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'datepickerfield' },
    { name: 'beforetofront', parameters: 'datepickerfield' },
    { name: 'blur', parameters: 'datepickerfield,e' },
    { name: 'change', parameters: 'datepickerfield,newDate,oldDate' },
    { name: 'clearicontap', parameters: 'datepickerfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'datepickerfield' },
    { name: 'floatingchange', parameters: 'datepickerfield,positioned' },
    { name: 'focus', parameters: 'datepickerfield,e' },
    { name: 'fullscreen', parameters: 'datepickerfield' },
    { name: 'hide', parameters: 'datepickerfield' },
    { name: 'initialize', parameters: 'datepickerfield' },
    { name: 'keyup', parameters: 'datepickerfield,e' },
    { name: 'mousedown', parameters: 'datepickerfield,e' },
    { name: 'moved', parameters: 'datepickerfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'datepickerfield,e' },
    { name: 'positionedchange', parameters: 'datepickerfield,positioned' },
    { name: 'removed', parameters: 'datepickerfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'datepickerfield' },
    { name: 'tofront', parameters: 'datepickerfield' },
    { name: 'updatedata', parameters: 'datepickerfield,newData' },
    { name: 'ready', parameters: '' }
];
datepickerfieldMetaData.OUTPUTNAMES = [
    'action',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'blur',
    'change',
    'clearicontap',
    'destroy',
    'erased',
    'floatingchange',
    'focus',
    'fullscreen',
    'hide',
    'initialize',
    'keyup',
    'mousedown',
    'moved',
    'orientationchange',
    'painted',
    'paste',
    'positionedchange',
    'removed',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var datepickerfield = datepickerfield_1 = (function (_super) {
    __extends(datepickerfield, _super);
    function datepickerfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, datepickerfieldMetaData) || this;
    }
    datepickerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    datepickerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, datepickerfieldMetaData); };
    return datepickerfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], datepickerfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], datepickerfield.prototype, "dynamicRef", void 0);
datepickerfield = datepickerfield_1 = __decorate([
    Component({
        selector: datepickerfieldMetaData.XTYPE,
        inputs: datepickerfieldMetaData.INPUTNAMES,
        outputs: datepickerfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return datepickerfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], datepickerfield);
export { datepickerfield };
var datepickerfield_1;
