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
var carouselMetaData = (function () {
    function carouselMetaData() {
    }
    return carouselMetaData;
}());
carouselMetaData.XTYPE = 'carousel';
carouselMetaData.INPUTNAMES = [
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
    'direction',
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
    'indicator',
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
carouselMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,carousel,oldActiveItem' },
    { name: 'add', parameters: 'carousel,item,index' },
    { name: 'added', parameters: 'carousel,container,index' },
    { name: 'beforehide', parameters: 'carousel' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'carousel' },
    { name: 'beforetofront', parameters: 'carousel' },
    { name: 'deactivate', parameters: 'oldActiveItem,carousel,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'carousel' },
    { name: 'floatingchange', parameters: 'carousel,positioned' },
    { name: 'fullscreen', parameters: 'carousel' },
    { name: 'hide', parameters: 'carousel' },
    { name: 'initialize', parameters: 'carousel' },
    { name: 'move', parameters: 'carousel,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'carousel,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'carousel,positioned' },
    { name: 'remove', parameters: 'carousel,item,index' },
    { name: 'removed', parameters: 'carousel,container,index' },
    { name: 'renderedchange', parameters: 'carousel,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'carousel' },
    { name: 'tofront', parameters: 'carousel' },
    { name: 'updatedata', parameters: 'carousel,newData' },
    { name: 'ready', parameters: '' }
];
carouselMetaData.OUTPUTNAMES = [
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
var carousel = carousel_1 = (function (_super) {
    __extends(carousel, _super);
    function carousel(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, carouselMetaData) || this;
    }
    carousel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    carousel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, carouselMetaData); };
    return carousel;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], carousel.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], carousel.prototype, "dynamicRef", void 0);
carousel = carousel_1 = __decorate([
    Component({
        selector: carouselMetaData.XTYPE,
        inputs: carouselMetaData.INPUTNAMES,
        outputs: carouselMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return carousel_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], carousel);
export { carousel };
var carousel_1;
