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
var singlesliderfieldMetaData = (function () {
    function singlesliderfieldMetaData() {
    }
    return singlesliderfieldMetaData;
}());
export { singlesliderfieldMetaData };
singlesliderfieldMetaData.XTYPE = 'singlesliderfield';
singlesliderfieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
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
    'increment',
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
    'liveUpdate',
    'margin',
    'maxHeight',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'name',
    'padding',
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
    'values',
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
singlesliderfieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'singlesliderfield,container,index' },
    { name: 'beforehide', parameters: 'singlesliderfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'singlesliderfield' },
    { name: 'beforetofront', parameters: 'singlesliderfield' },
    { name: 'change', parameters: 'me,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'drag', parameters: 'singlesliderfield,sl,thumb,e' },
    { name: 'dragchange', parameters: 'me,newValue,oldValue' },
    { name: 'dragchange', parameters: 'me,sl,newValue,oldValue' },
    { name: 'dragend', parameters: 'singlesliderfield,sl,thumb,value,e' },
    { name: 'dragstart', parameters: 'singlesliderfield,sl,thumb,value,e' },
    { name: 'erased', parameters: 'singlesliderfield' },
    { name: 'floatingchange', parameters: 'singlesliderfield,positioned' },
    { name: 'fullscreen', parameters: 'singlesliderfield' },
    { name: 'hide', parameters: 'singlesliderfield' },
    { name: 'initialize', parameters: 'singlesliderfield' },
    { name: 'moved', parameters: 'singlesliderfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'singlesliderfield,positioned' },
    { name: 'removed', parameters: 'singlesliderfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'singlesliderfield' },
    { name: 'tofront', parameters: 'singlesliderfield' },
    { name: 'updatedata', parameters: 'singlesliderfield,newData' },
    { name: 'ready', parameters: '' }
];
singlesliderfieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'destroy',
    'drag',
    'dragchange',
    'dragchange',
    'dragend',
    'dragstart',
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
    'updatedata',
    'ready'
];
var singlesliderfield = singlesliderfield_1 = (function (_super) {
    __extends(singlesliderfield, _super);
    function singlesliderfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, singlesliderfieldMetaData) || this;
    }
    singlesliderfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    singlesliderfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, singlesliderfieldMetaData); };
    return singlesliderfield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], singlesliderfield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], singlesliderfield.prototype, "dynamicRef", void 0);
singlesliderfield = singlesliderfield_1 = __decorate([
    Component({
        selector: singlesliderfieldMetaData.XTYPE,
        inputs: singlesliderfieldMetaData.INPUTNAMES,
        outputs: singlesliderfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return singlesliderfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], singlesliderfield);
export { singlesliderfield };
var singlesliderfield_1;
