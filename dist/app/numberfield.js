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
var numberfieldMetaData = (function () {
    function numberfieldMetaData() {
    }
    return numberfieldMetaData;
}());
numberfieldMetaData.XTYPE = 'numberfield';
numberfieldMetaData.INPUTNAMES = [
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
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
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
    'stepValue',
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
numberfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'numberfield,e' },
    { name: 'added', parameters: 'numberfield,container,index' },
    { name: 'beforehide', parameters: 'numberfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'numberfield' },
    { name: 'beforetofront', parameters: 'numberfield' },
    { name: 'blur', parameters: 'numberfield,e' },
    { name: 'change', parameters: 'numberfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'numberfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'numberfield' },
    { name: 'floatingchange', parameters: 'numberfield,positioned' },
    { name: 'focus', parameters: 'numberfield,e' },
    { name: 'fullscreen', parameters: 'numberfield' },
    { name: 'hide', parameters: 'numberfield' },
    { name: 'initialize', parameters: 'numberfield' },
    { name: 'keyup', parameters: 'numberfield,e' },
    { name: 'mousedown', parameters: 'numberfield,e' },
    { name: 'moved', parameters: 'numberfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'numberfield,e' },
    { name: 'positionedchange', parameters: 'numberfield,positioned' },
    { name: 'removed', parameters: 'numberfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'numberfield' },
    { name: 'tofront', parameters: 'numberfield' },
    { name: 'updatedata', parameters: 'numberfield,newData' },
    { name: 'ready', parameters: '' }
];
numberfieldMetaData.OUTPUTNAMES = [
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
var numberfield = numberfield_1 = (function (_super) {
    __extends(numberfield, _super);
    function numberfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, numberfieldMetaData) || this;
    }
    numberfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    numberfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, numberfieldMetaData); };
    return numberfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], numberfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], numberfield.prototype, "dynamicRef", void 0);
numberfield = numberfield_1 = __decorate([
    Component({
        selector: numberfieldMetaData.XTYPE,
        inputs: numberfieldMetaData.INPUTNAMES,
        outputs: numberfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return numberfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], numberfield);
export { numberfield };
var numberfield_1;
