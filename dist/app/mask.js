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
var maskMetaData = (function () {
    function maskMetaData() {
    }
    return maskMetaData;
}());
maskMetaData.XTYPE = 'mask';
maskMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
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
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'padding',
    'plugins',
    'publishes',
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
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'transparent',
    'twoWayBindable',
    'ui',
    'useBodyElement',
    'userCls',
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
maskMetaData.OUTPUTS = [
    { name: 'added', parameters: 'mask,container,index' },
    { name: 'beforehide', parameters: 'mask' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'mask' },
    { name: 'beforetofront', parameters: 'mask' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'mask' },
    { name: 'floatingchange', parameters: 'mask,positioned' },
    { name: 'fullscreen', parameters: 'mask' },
    { name: 'hide', parameters: 'mask' },
    { name: 'initialize', parameters: 'mask' },
    { name: 'moved', parameters: 'mask,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'mask,positioned' },
    { name: 'removed', parameters: 'mask,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'mask' },
    { name: 'tap', parameters: 'mask,e' },
    { name: 'tofront', parameters: 'mask' },
    { name: 'updatedata', parameters: 'mask,newData' },
    { name: 'ready', parameters: '' }
];
maskMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
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
    'tap',
    'tofront',
    'updatedata',
    'ready'
];
var mask = mask_1 = (function (_super) {
    __extends(mask, _super);
    function mask(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, maskMetaData) || this;
    }
    mask.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    mask.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, maskMetaData); };
    return mask;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], mask.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], mask.prototype, "dynamicRef", void 0);
mask = mask_1 = __decorate([
    Component({
        selector: maskMetaData.XTYPE,
        inputs: maskMetaData.INPUTNAMES,
        outputs: maskMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return mask_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], mask);
export { mask };
var mask_1;
