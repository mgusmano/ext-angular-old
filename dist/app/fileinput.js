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
var fileinputMetaData = (function () {
    function fileinputMetaData() {
    }
    return fileinputMetaData;
}());
fileinputMetaData.XTYPE = 'fileinput';
fileinputMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
    'checked',
    'cls',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'fastFocus',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'isFocused',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxLength',
    'maxRows',
    'maxValue',
    'maxWidth',
    'me',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'name',
    'newValue',
    'originalValue',
    'padding',
    'pattern',
    'placeHolder',
    'plugins',
    'publishes',
    'readOnly',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'startValue',
    'stepValue',
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
    'type',
    'ui',
    'useBodyElement',
    'useMask',
    'userCls',
    'value',
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
fileinputMetaData.OUTPUTS = [
    { name: 'added', parameters: 'fileinput,container,index' },
    { name: 'beforehide', parameters: 'fileinput' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'fileinput' },
    { name: 'beforetofront', parameters: 'fileinput' },
    { name: 'blur', parameters: 'e' },
    { name: 'change', parameters: 'fileinput,newValue,oldValue' },
    { name: 'click', parameters: 'e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'fileinput' },
    { name: 'floatingchange', parameters: 'fileinput,positioned' },
    { name: 'focus', parameters: 'e' },
    { name: 'fullscreen', parameters: 'fileinput' },
    { name: 'hide', parameters: 'fileinput' },
    { name: 'initialize', parameters: 'fileinput' },
    { name: 'keyup', parameters: 'e' },
    { name: 'masktap', parameters: 'fileinput,e' },
    { name: 'mousedown', parameters: 'e' },
    { name: 'moved', parameters: 'fileinput,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'e' },
    { name: 'positionedchange', parameters: 'fileinput,positioned' },
    { name: 'removed', parameters: 'fileinput,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'fileinput' },
    { name: 'tofront', parameters: 'fileinput' },
    { name: 'updatedata', parameters: 'fileinput,newData' },
    { name: 'ready', parameters: '' }
];
fileinputMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'blur',
    'change',
    'click',
    'destroy',
    'erased',
    'floatingchange',
    'focus',
    'fullscreen',
    'hide',
    'initialize',
    'keyup',
    'masktap',
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
var fileinput = fileinput_1 = (function (_super) {
    __extends(fileinput, _super);
    function fileinput(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, fileinputMetaData) || this;
    }
    fileinput.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    fileinput.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, fileinputMetaData); };
    return fileinput;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], fileinput.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], fileinput.prototype, "dynamicRef", void 0);
fileinput = fileinput_1 = __decorate([
    Component({
        selector: fileinputMetaData.XTYPE,
        inputs: fileinputMetaData.INPUTNAMES,
        outputs: fileinputMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return fileinput_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], fileinput);
export { fileinput };
var fileinput_1;
