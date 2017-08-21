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
var gridMetaData = (function () {
    function gridMetaData() {
    }
    return gridMetaData;
}());
export { gridMetaData };
gridMetaData.XTYPE = 'grid';
gridMetaData.INPUTNAMES = [
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
    'columns',
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
    'hideHeaders',
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
    'title',
    'toFrontOnShow',
    'tooltip',
    'top',
    'totalColumnWidth',
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
gridMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,grid,oldActiveItem' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'grid,container,index' },
    { name: 'beforehide', parameters: 'grid' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeselectionchange', parameters: 'grid' },
    { name: 'beforeshow', parameters: 'grid' },
    { name: 'beforetofront', parameters: 'grid' },
    { name: 'columnadd', parameters: 'grid,column,index' },
    { name: 'columnhide', parameters: 'grid,column' },
    { name: 'columnmove', parameters: 'grid,column,fromIndex,toIndex' },
    { name: 'columnremove', parameters: 'grid,column' },
    { name: 'columnresize', parameters: 'grid,column,width' },
    { name: 'columnshow', parameters: 'grid,column' },
    { name: 'columnsort', parameters: 'grid,column,direction' },
    { name: 'containertap', parameters: '' },
    { name: 'deactivate', parameters: 'oldActiveItem,grid,newActiveItem' },
    { name: 'deselect', parameters: 'grid,record,supressed' },
    { name: 'destroy', parameters: '' },
    { name: 'disclose', parameters: 'grid,record,target,index,e' },
    { name: 'erased', parameters: 'grid' },
    { name: 'floatingchange', parameters: 'grid,positioned' },
    { name: 'fullscreen', parameters: 'grid' },
    { name: 'hide', parameters: 'grid' },
    { name: 'initialize', parameters: 'grid' },
    { name: 'itemdoubletap', parameters: 'grid,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'grid,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'grid,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'grid,index,target,record,e' },
    { name: 'itemswipe', parameters: 'grid,index,target,record,e' },
    { name: 'itemtap', parameters: 'grid,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'grid,index,target,record,e' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'grid,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'grid,positioned' },
    { name: 'refresh', parameters: 'grid' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'grid,container,index' },
    { name: 'renderedchange', parameters: 'grid,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'select', parameters: 'grid,record' },
    { name: 'selectionchange', parameters: 'grid,records' },
    { name: 'show', parameters: 'grid' },
    { name: 'tofront', parameters: 'grid' },
    { name: 'updatedata', parameters: 'grid,newData' },
    { name: 'ready', parameters: '' }
];
gridMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeselectionchange',
    'beforeshow',
    'beforetofront',
    'columnadd',
    'columnhide',
    'columnmove',
    'columnremove',
    'columnresize',
    'columnshow',
    'columnsort',
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
var grid = grid_1 = (function (_super) {
    __extends(grid, _super);
    function grid(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, gridMetaData) || this;
    }
    grid.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    grid.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, gridMetaData); };
    return grid;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], grid.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], grid.prototype, "dynamicRef", void 0);
grid = grid_1 = __decorate([
    Component({
        selector: gridMetaData.XTYPE,
        inputs: gridMetaData.INPUTNAMES,
        outputs: gridMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return grid_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], grid);
export { grid };
var grid_1;
