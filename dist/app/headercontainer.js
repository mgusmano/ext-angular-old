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
var headercontainerMetaData = (function () {
    function headercontainerMetaData() {
    }
    return headercontainerMetaData;
}());
headercontainerMetaData.XTYPE = 'headercontainer';
headercontainerMetaData.INPUTNAMES = [
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
    'defaultColumnUI',
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
    'sortable',
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
headercontainerMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,headercontainer,oldActiveItem' },
    { name: 'add', parameters: 'headercontainer,item,index' },
    { name: 'added', parameters: 'headercontainer,container,index' },
    { name: 'beforehide', parameters: 'headercontainer' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'headercontainer' },
    { name: 'beforetofront', parameters: 'headercontainer' },
    { name: 'deactivate', parameters: 'oldActiveItem,headercontainer,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'headercontainer' },
    { name: 'floatingchange', parameters: 'headercontainer,positioned' },
    { name: 'fullscreen', parameters: 'headercontainer' },
    { name: 'hide', parameters: 'headercontainer' },
    { name: 'initialize', parameters: 'headercontainer' },
    { name: 'move', parameters: 'headercontainer,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'headercontainer,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'headercontainer,positioned' },
    { name: 'remove', parameters: 'headercontainer,item,index' },
    { name: 'removed', parameters: 'headercontainer,container,index' },
    { name: 'renderedchange', parameters: 'headercontainer,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'headercontainer' },
    { name: 'tofront', parameters: 'headercontainer' },
    { name: 'updatedata', parameters: 'headercontainer,newData' },
    { name: 'ready', parameters: '' }
];
headercontainerMetaData.OUTPUTNAMES = [
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
var headercontainer = headercontainer_1 = (function (_super) {
    __extends(headercontainer, _super);
    function headercontainer(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, headercontainerMetaData) || this;
    }
    headercontainer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    headercontainer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, headercontainerMetaData); };
    return headercontainer;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], headercontainer.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], headercontainer.prototype, "dynamicRef", void 0);
headercontainer = headercontainer_1 = __decorate([
    Component({
        selector: headercontainerMetaData.XTYPE,
        inputs: headercontainerMetaData.INPUTNAMES,
        outputs: headercontainerMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return headercontainer_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], headercontainer);
export { headercontainer };
var headercontainer_1;
