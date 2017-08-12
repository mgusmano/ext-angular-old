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
var pickerfieldMetaData = (function () {
    function pickerfieldMetaData() {
    }
    return pickerfieldMetaData;
}());
pickerfieldMetaData.XTYPE = 'pickerfield';
pickerfieldMetaData.INPUTNAMES = [
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
    'defaultListenerScope',
    'defaultPhonePickerConfig',
    'defaultTabletPickerConfig',
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
pickerfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'pickerfield,e' },
    { name: 'added', parameters: 'pickerfield,container,index' },
    { name: 'beforehide', parameters: 'pickerfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'pickerfield' },
    { name: 'beforetofront', parameters: 'pickerfield' },
    { name: 'blur', parameters: 'pickerfield,e' },
    { name: 'change', parameters: 'pickerfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'pickerfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'pickerfield' },
    { name: 'floatingchange', parameters: 'pickerfield,positioned' },
    { name: 'focus', parameters: 'pickerfield,e' },
    { name: 'fullscreen', parameters: 'pickerfield' },
    { name: 'hide', parameters: 'pickerfield' },
    { name: 'initialize', parameters: 'pickerfield' },
    { name: 'keyup', parameters: 'pickerfield,e' },
    { name: 'mousedown', parameters: 'pickerfield,e' },
    { name: 'moved', parameters: 'pickerfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'pickerfield,e' },
    { name: 'positionedchange', parameters: 'pickerfield,positioned' },
    { name: 'removed', parameters: 'pickerfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'pickerfield' },
    { name: 'tofront', parameters: 'pickerfield' },
    { name: 'updatedata', parameters: 'pickerfield,newData' },
    { name: 'ready', parameters: '' }
];
pickerfieldMetaData.OUTPUTNAMES = [
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
var pickerfield = pickerfield_1 = (function (_super) {
    __extends(pickerfield, _super);
    function pickerfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, pickerfieldMetaData) || this;
    }
    pickerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    pickerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, pickerfieldMetaData); };
    return pickerfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], pickerfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], pickerfield.prototype, "dynamicRef", void 0);
pickerfield = pickerfield_1 = __decorate([
    Component({
        selector: pickerfieldMetaData.XTYPE,
        inputs: pickerfieldMetaData.INPUTNAMES,
        outputs: pickerfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return pickerfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], pickerfield);
export { pickerfield };
var pickerfield_1;
