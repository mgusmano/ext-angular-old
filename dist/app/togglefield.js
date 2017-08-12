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
var togglefieldMetaData = (function () {
    function togglefieldMetaData() {
    }
    return togglefieldMetaData;
}());
togglefieldMetaData.XTYPE = 'togglefield';
togglefieldMetaData.INPUTNAMES = [
    'activeLabel',
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
    'inactiveLabel',
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
togglefieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'togglefield,container,index' },
    { name: 'beforehide', parameters: 'togglefield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'togglefield' },
    { name: 'beforetofront', parameters: 'togglefield' },
    { name: 'change', parameters: 'togglefield,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'drag', parameters: '' },
    { name: 'dragchange', parameters: 'me,newValue,oldValue' },
    { name: 'dragend', parameters: '' },
    { name: 'dragstart', parameters: '' },
    { name: 'erased', parameters: 'togglefield' },
    { name: 'floatingchange', parameters: 'togglefield,positioned' },
    { name: 'fullscreen', parameters: 'togglefield' },
    { name: 'hide', parameters: 'togglefield' },
    { name: 'initialize', parameters: 'togglefield' },
    { name: 'moved', parameters: 'togglefield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'togglefield,positioned' },
    { name: 'removed', parameters: 'togglefield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'togglefield' },
    { name: 'tofront', parameters: 'togglefield' },
    { name: 'updatedata', parameters: 'togglefield,newData' },
    { name: 'ready', parameters: '' }
];
togglefieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'destroy',
    'drag',
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
var togglefield = togglefield_1 = (function (_super) {
    __extends(togglefield, _super);
    function togglefield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, togglefieldMetaData) || this;
    }
    togglefield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    togglefield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, togglefieldMetaData); };
    return togglefield;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], togglefield.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], togglefield.prototype, "dynamicRef", void 0);
togglefield = togglefield_1 = __decorate([
    Component({
        selector: togglefieldMetaData.XTYPE,
        inputs: togglefieldMetaData.INPUTNAMES,
        outputs: togglefieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return togglefield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], togglefield);
export { togglefield };
var togglefield_1;
