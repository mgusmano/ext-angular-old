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
var selectfieldMetaData = (function () {
    function selectfieldMetaData() {
    }
    return selectfieldMetaData;
}());
export { selectfieldMetaData };
selectfieldMetaData.XTYPE = 'selectfield';
selectfieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'autoSelect',
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
    'displayField',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hiddenName',
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
    'options',
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
    'selection',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'store',
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
    'useClearIcon',
    'usePicker',
    'userCls',
    'value',
    'valueField',
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
selectfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'selectfield,e' },
    { name: 'added', parameters: 'selectfield,container,index' },
    { name: 'beforehide', parameters: 'selectfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'selectfield' },
    { name: 'beforetofront', parameters: 'selectfield' },
    { name: 'blur', parameters: 'selectfield,e' },
    { name: 'change', parameters: 'selectfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'selectfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'selectfield' },
    { name: 'floatingchange', parameters: 'selectfield,positioned' },
    { name: 'focus', parameters: 'selectfield,e' },
    { name: 'fullscreen', parameters: 'selectfield' },
    { name: 'hide', parameters: 'selectfield' },
    { name: 'initialize', parameters: 'selectfield' },
    { name: 'keyup', parameters: 'selectfield,e' },
    { name: 'mousedown', parameters: 'selectfield,e' },
    { name: 'moved', parameters: 'selectfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'selectfield,e' },
    { name: 'positionedchange', parameters: 'selectfield,positioned' },
    { name: 'removed', parameters: 'selectfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'selectfield' },
    { name: 'tofront', parameters: 'selectfield' },
    { name: 'updatedata', parameters: 'selectfield,newData' },
    { name: 'ready', parameters: '' }
];
selectfieldMetaData.OUTPUTNAMES = [
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
var selectfield = selectfield_1 = (function (_super) {
    __extends(selectfield, _super);
    function selectfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, selectfieldMetaData) || this;
    }
    selectfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    selectfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, selectfieldMetaData); };
    return selectfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], selectfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], selectfield.prototype, "dynamicRef", void 0);
selectfield = selectfield_1 = __decorate([
    Component({
        selector: selectfieldMetaData.XTYPE,
        inputs: selectfieldMetaData.INPUTNAMES,
        outputs: selectfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return selectfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], selectfield);
export { selectfield };
var selectfield_1;
