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
var listMetaData = (function () {
    function listMetaData() {
    }
    return listMetaData;
}());
export { listMetaData };
listMetaData.XTYPE = 'list';
listMetaData.INPUTNAMES = [
    'activeItem',
    'allowDeselect',
    'alwaysOnTop',
    'autoDestroy',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'bufferSize',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'container',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'disclosureProperty',
    'docked',
    'draggable',
    'emptyText',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'grouped',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'indexBar',
    'infinite',
    'inline',
    'itemCls',
    'itemConfig',
    'itemHeight',
    'itemId',
    'itemMap',
    'items',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastFocused',
    'lastSelected',
    'layout',
    'left',
    'listeners',
    'loadingText',
    'locked',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'mode',
    'onItemDisclosure',
    'padding',
    'pinHeaders',
    'pinnedHeader',
    'plugins',
    'pressedDelay',
    'preventSelectionOnDisclose',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'refreshHeightOnUpdate',
    'relative',
    'renderTo',
    'right',
    'rowLines',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selection',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'store',
    'striped',
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
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'useBodyElement',
    'useComponents',
    'userCls',
    'useSimpleItems',
    'variableHeights',
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
listMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,list,oldActiveItem' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'list,container,index' },
    { name: 'beforehide', parameters: 'list' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeselectionchange', parameters: 'list' },
    { name: 'beforeshow', parameters: 'list' },
    { name: 'beforetofront', parameters: 'list' },
    { name: 'containertap', parameters: '' },
    { name: 'deactivate', parameters: 'oldActiveItem,list,newActiveItem' },
    { name: 'deselect', parameters: 'list,record,supressed' },
    { name: 'destroy', parameters: '' },
    { name: 'disclose', parameters: 'list,record,target,index,e' },
    { name: 'erased', parameters: 'list' },
    { name: 'floatingchange', parameters: 'list,positioned' },
    { name: 'fullscreen', parameters: 'list' },
    { name: 'hide', parameters: 'list' },
    { name: 'initialize', parameters: 'list' },
    { name: 'itemdoubletap', parameters: 'list,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'list,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'list,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'list,index,target,record,e' },
    { name: 'itemswipe', parameters: 'list,index,target,record,e' },
    { name: 'itemtap', parameters: 'list,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'list,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'list,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'list,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'list,index,target,record,e' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'list,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'list,positioned' },
    { name: 'refresh', parameters: 'list' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'list,container,index' },
    { name: 'renderedchange', parameters: 'list,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'select', parameters: 'list,record' },
    { name: 'selectionchange', parameters: 'list,records' },
    { name: 'show', parameters: 'list' },
    { name: 'tofront', parameters: 'list' },
    { name: 'updatedata', parameters: 'list,newData' },
    { name: 'ready', parameters: '' }
];
listMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeselectionchange',
    'beforeshow',
    'beforetofront',
    'containertap',
    'deactivate',
    'deselect',
    'destroy',
    'disclose',
    'erased',
    'floatingchange',
    'fullscreen',
    'hide',
    'initialize',
    'itemdoubletap',
    'itemmouseenter',
    'itemmouseleave',
    'itemsingletap',
    'itemswipe',
    'itemtap',
    'itemtaphold',
    'itemtouchend',
    'itemtouchmove',
    'itemtouchstart',
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'refresh',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'select',
    'selectionchange',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var list = list_1 = (function (_super) {
    __extends(list, _super);
    function list(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, listMetaData) || this;
    }
    list.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    list.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, listMetaData); };
    return list;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], list.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], list.prototype, "dynamicRef", void 0);
list = list_1 = __decorate([
    Component({
        selector: listMetaData.XTYPE,
        inputs: listMetaData.INPUTNAMES,
        outputs: listMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return list_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], list);
export { list };
var list_1;
