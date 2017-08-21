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
var containerMetaData = (function () {
    function containerMetaData() {
    }
    return containerMetaData;
}());
export { containerMetaData };
containerMetaData.XTYPE = 'container';
containerMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'autoDestroy',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultListenerScope',
    'defaults',
    'defaultType',
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
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
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
    'referenceHolder',
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
containerMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,container,oldActiveItem' },
    { name: 'add', parameters: 'container,item,index' },
    { name: 'added', parameters: 'container,container,index' },
    { name: 'beforehide', parameters: 'container' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'container' },
    { name: 'beforetofront', parameters: 'container' },
    { name: 'deactivate', parameters: 'oldActiveItem,container,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'container' },
    { name: 'floatingchange', parameters: 'container,positioned' },
    { name: 'fullscreen', parameters: 'container' },
    { name: 'hide', parameters: 'container' },
    { name: 'initialize', parameters: 'container' },
    { name: 'move', parameters: 'container,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'container,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'container,positioned' },
    { name: 'remove', parameters: 'container,item,index' },
    { name: 'removed', parameters: 'container,container,index' },
    { name: 'renderedchange', parameters: 'container,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'container' },
    { name: 'tofront', parameters: 'container' },
    { name: 'updatedata', parameters: 'container,newData' },
    { name: 'ready', parameters: '' }
];
containerMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'deactivate',
    'destroy',
    'erased',
    'floatingchange',
    'fullscreen',
    'hide',
    'initialize',
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var container = container_1 = (function (_super) {
    __extends(container, _super);
    function container(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, containerMetaData) || this;
    }
    container.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    container.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, containerMetaData); };
    return container;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], container.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], container.prototype, "dynamicRef", void 0);
container = container_1 = __decorate([
    Component({
        selector: containerMetaData.XTYPE,
        inputs: containerMetaData.INPUTNAMES,
        outputs: containerMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return container_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], container);
export { container };
var container_1;
