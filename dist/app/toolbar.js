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
var toolbarMetaData = (function () {
    function toolbarMetaData() {
    }
    return toolbarMetaData;
}());
toolbarMetaData.XTYPE = 'toolbar';
toolbarMetaData.INPUTNAMES = [
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
    'defaultButtonUI',
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
    'title',
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
toolbarMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,toolbar,oldActiveItem' },
    { name: 'add', parameters: 'toolbar,item,index' },
    { name: 'added', parameters: 'toolbar,container,index' },
    { name: 'beforehide', parameters: 'toolbar' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'toolbar' },
    { name: 'beforetofront', parameters: 'toolbar' },
    { name: 'deactivate', parameters: 'oldActiveItem,toolbar,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'toolbar' },
    { name: 'floatingchange', parameters: 'toolbar,positioned' },
    { name: 'fullscreen', parameters: 'toolbar' },
    { name: 'hide', parameters: 'toolbar' },
    { name: 'initialize', parameters: 'toolbar' },
    { name: 'move', parameters: 'toolbar,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'toolbar,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'toolbar,positioned' },
    { name: 'remove', parameters: 'toolbar,item,index' },
    { name: 'removed', parameters: 'toolbar,container,index' },
    { name: 'renderedchange', parameters: 'toolbar,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'toolbar' },
    { name: 'tofront', parameters: 'toolbar' },
    { name: 'updatedata', parameters: 'toolbar,newData' },
    { name: 'ready', parameters: '' }
];
toolbarMetaData.OUTPUTNAMES = [
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
var toolbar = toolbar_1 = (function (_super) {
    __extends(toolbar, _super);
    function toolbar(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, toolbarMetaData) || this;
    }
    toolbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    toolbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, toolbarMetaData); };
    return toolbar;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], toolbar.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], toolbar.prototype, "dynamicRef", void 0);
toolbar = toolbar_1 = __decorate([
    Component({
        selector: toolbarMetaData.XTYPE,
        inputs: toolbarMetaData.INPUTNAMES,
        outputs: toolbarMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return toolbar_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], toolbar);
export { toolbar };
var toolbar_1;
