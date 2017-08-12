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
var textfieldMetaData = (function () {
    function textfieldMetaData() {
    }
    return textfieldMetaData;
}());
textfieldMetaData.XTYPE = 'textfield';
textfieldMetaData.INPUTNAMES = [
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
textfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'textfield,e' },
    { name: 'added', parameters: 'textfield,container,index' },
    { name: 'beforehide', parameters: 'textfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'textfield' },
    { name: 'beforetofront', parameters: 'textfield' },
    { name: 'blur', parameters: 'textfield,e' },
    { name: 'change', parameters: 'textfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'textfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'textfield' },
    { name: 'floatingchange', parameters: 'textfield,positioned' },
    { name: 'focus', parameters: 'textfield,e' },
    { name: 'fullscreen', parameters: 'textfield' },
    { name: 'hide', parameters: 'textfield' },
    { name: 'initialize', parameters: 'textfield' },
    { name: 'keyup', parameters: 'textfield,e' },
    { name: 'mousedown', parameters: 'textfield,e' },
    { name: 'moved', parameters: 'textfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'textfield,e' },
    { name: 'positionedchange', parameters: 'textfield,positioned' },
    { name: 'removed', parameters: 'textfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'textfield' },
    { name: 'tofront', parameters: 'textfield' },
    { name: 'updatedata', parameters: 'textfield,newData' },
    { name: 'ready', parameters: '' }
];
textfieldMetaData.OUTPUTNAMES = [
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
var textfield = textfield_1 = (function (_super) {
    __extends(textfield, _super);
    function textfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, textfieldMetaData) || this;
    }
    textfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    textfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, textfieldMetaData); };
    return textfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], textfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], textfield.prototype, "dynamicRef", void 0);
textfield = textfield_1 = __decorate([
    Component({
        selector: textfieldMetaData.XTYPE,
        inputs: textfieldMetaData.INPUTNAMES,
        outputs: textfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return textfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], textfield);
export { textfield };
var textfield_1;
