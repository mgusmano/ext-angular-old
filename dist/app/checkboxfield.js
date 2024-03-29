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
var checkboxfieldMetaData = (function () {
    function checkboxfieldMetaData() {
    }
    return checkboxfieldMetaData;
}());
export { checkboxfieldMetaData };
checkboxfieldMetaData.XTYPE = 'checkboxfield';
checkboxfieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'checked',
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
    'labelMaskTap',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'name',
    'padding',
    'plugins',
    'publishes',
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
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
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
checkboxfieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'checkboxfield,container,index' },
    { name: 'beforehide', parameters: 'checkboxfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'checkboxfield' },
    { name: 'beforetofront', parameters: 'checkboxfield' },
    { name: 'change', parameters: 'checkboxfield,newValue,oldValue' },
    { name: 'check', parameters: 'checkboxfield' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'checkboxfield' },
    { name: 'floatingchange', parameters: 'checkboxfield,positioned' },
    { name: 'fullscreen', parameters: 'checkboxfield' },
    { name: 'hide', parameters: 'checkboxfield' },
    { name: 'initialize', parameters: 'checkboxfield' },
    { name: 'moved', parameters: 'checkboxfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'checkboxfield,positioned' },
    { name: 'removed', parameters: 'checkboxfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'checkboxfield' },
    { name: 'tofront', parameters: 'checkboxfield' },
    { name: 'uncheck', parameters: 'checkboxfield' },
    { name: 'updatedata', parameters: 'checkboxfield,newData' },
    { name: 'ready', parameters: '' }
];
checkboxfieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'check',
    'destroy',
    'erased',
    'floatingchange',
    'fullscreen',
    'hide',
    'initialize',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'removed',
    'resize',
    'show',
    'tofront',
    'uncheck',
    'updatedata',
    'ready'
];
var checkboxfield = checkboxfield_1 = (function (_super) {
    __extends(checkboxfield, _super);
    function checkboxfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, checkboxfieldMetaData) || this;
    }
    checkboxfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    checkboxfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, checkboxfieldMetaData); };
    return checkboxfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], checkboxfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], checkboxfield.prototype, "dynamicRef", void 0);
checkboxfield = checkboxfield_1 = __decorate([
    Component({
        selector: checkboxfieldMetaData.XTYPE,
        inputs: checkboxfieldMetaData.INPUTNAMES,
        outputs: checkboxfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return checkboxfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], checkboxfield);
export { checkboxfield };
var checkboxfield_1;
