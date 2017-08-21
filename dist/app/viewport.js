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
var viewportMetaData = (function () {
    function viewportMetaData() {
    }
    return viewportMetaData;
}());
export { viewportMetaData };
viewportMetaData.XTYPE = 'viewport';
viewportMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'autoDestroy',
    'autoRender',
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
    'preventZooming',
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
viewportMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,viewport,oldActiveItem' },
    { name: 'add', parameters: 'viewport,item,index' },
    { name: 'added', parameters: 'viewport,container,index' },
    { name: 'beforehide', parameters: 'viewport' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'viewport' },
    { name: 'beforetofront', parameters: 'viewport' },
    { name: 'deactivate', parameters: 'oldActiveItem,viewport,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'viewport' },
    { name: 'floatingchange', parameters: 'viewport,positioned' },
    { name: 'fullscreen', parameters: 'viewport' },
    { name: 'hide', parameters: 'viewport' },
    { name: 'initialize', parameters: 'viewport' },
    { name: 'maximize', parameters: 'viewport' },
    { name: 'move', parameters: 'viewport,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'viewport,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: 'viewport,newOrientation,width,height' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'viewport,positioned' },
    { name: 'ready', parameters: 'viewport' },
    { name: 'remove', parameters: 'viewport,item,index' },
    { name: 'removed', parameters: 'viewport,container,index' },
    { name: 'renderedchange', parameters: 'viewport,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'viewport' },
    { name: 'tofront', parameters: 'viewport' },
    { name: 'updatedata', parameters: 'viewport,newData' },
    { name: 'ready', parameters: '' }
];
viewportMetaData.OUTPUTNAMES = [
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
    'maximize',
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'ready',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var viewport = viewport_1 = (function (_super) {
    __extends(viewport, _super);
    function viewport(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, viewportMetaData) || this;
    }
    viewport.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    viewport.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, viewportMetaData); };
    return viewport;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], viewport.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], viewport.prototype, "dynamicRef", void 0);
viewport = viewport_1 = __decorate([
    Component({
        selector: viewportMetaData.XTYPE,
        inputs: viewportMetaData.INPUTNAMES,
        outputs: viewportMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return viewport_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], viewport);
export { viewport };
var viewport_1;
