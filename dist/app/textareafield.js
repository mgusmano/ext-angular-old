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
var textareafieldMetaData = (function () {
    function textareafieldMetaData() {
    }
    return textareafieldMetaData;
}());
textareafieldMetaData.XTYPE = 'textareafield';
textareafieldMetaData.INPUTNAMES = [
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
    'maxRows',
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
textareafieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'textareafield,e' },
    { name: 'added', parameters: 'textareafield,container,index' },
    { name: 'beforehide', parameters: 'textareafield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'textareafield' },
    { name: 'beforetofront', parameters: 'textareafield' },
    { name: 'blur', parameters: 'textareafield,e' },
    { name: 'change', parameters: 'textareafield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'textareafield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'textareafield' },
    { name: 'floatingchange', parameters: 'textareafield,positioned' },
    { name: 'focus', parameters: 'textareafield,e' },
    { name: 'fullscreen', parameters: 'textareafield' },
    { name: 'hide', parameters: 'textareafield' },
    { name: 'initialize', parameters: 'textareafield' },
    { name: 'keyup', parameters: 'textareafield,e' },
    { name: 'mousedown', parameters: 'textareafield,e' },
    { name: 'moved', parameters: 'textareafield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'textareafield,e' },
    { name: 'positionedchange', parameters: 'textareafield,positioned' },
    { name: 'removed', parameters: 'textareafield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'textareafield' },
    { name: 'tofront', parameters: 'textareafield' },
    { name: 'updatedata', parameters: 'textareafield,newData' },
    { name: 'ready', parameters: '' }
];
textareafieldMetaData.OUTPUTNAMES = [
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
var textareafield = textareafield_1 = (function (_super) {
    __extends(textareafield, _super);
    function textareafield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, textareafieldMetaData) || this;
    }
    textareafield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    textareafield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, textareafieldMetaData); };
    return textareafield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], textareafield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], textareafield.prototype, "dynamicRef", void 0);
textareafield = textareafield_1 = __decorate([
    Component({
        selector: textareafieldMetaData.XTYPE,
        inputs: textareafieldMetaData.INPUTNAMES,
        outputs: textareafieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return textareafield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], textareafield);
export { textareafield };
var textareafield_1;
