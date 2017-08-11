"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_1 = require("./base");
var treeMetaData = (function () {
    function treeMetaData() {
    }
    return treeMetaData;
}());
treeMetaData.XTYPE = 'tree';
treeMetaData.INPUTNAMES = [
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
    'expanderOnly',
    'flex',
    'floated',
    'folderSort',
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
    'selectOnExpander',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'singleExpand',
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
treeMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,tree,oldActiveItem' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'tree,container,index' },
    { name: 'beforehide', parameters: 'tree' },
    { name: 'beforeload', parameters: 'store,operation' },
    { name: 'beforenodecollapse', parameters: 'node,record' },
    { name: 'beforenodeexpand', parameters: 'row,record' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeselectionchange', parameters: 'tree' },
    { name: 'beforeshow', parameters: 'tree' },
    { name: 'beforetofront', parameters: 'tree' },
    { name: 'columnadd', parameters: 'tree,column,index' },
    { name: 'columnhide', parameters: 'tree,column' },
    { name: 'columnmove', parameters: 'tree,column,fromIndex,toIndex' },
    { name: 'columnremove', parameters: 'tree,column' },
    { name: 'columnresize', parameters: 'tree,column,width' },
    { name: 'columnshow', parameters: 'tree,column' },
    { name: 'columnsort', parameters: 'tree,column,direction' },
    { name: 'containertap', parameters: '' },
    { name: 'deactivate', parameters: 'oldActiveItem,tree,newActiveItem' },
    { name: 'deselect', parameters: 'tree,record,supressed' },
    { name: 'destroy', parameters: '' },
    { name: 'disclose', parameters: 'tree,record,target,index,e' },
    { name: 'erased', parameters: 'tree' },
    { name: 'floatingchange', parameters: 'tree,positioned' },
    { name: 'fullscreen', parameters: 'tree' },
    { name: 'hide', parameters: 'tree' },
    { name: 'initialize', parameters: 'tree' },
    { name: 'itemdoubletap', parameters: 'tree,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'tree,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'tree,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'tree,index,target,record,e' },
    { name: 'itemswipe', parameters: 'tree,index,target,record,e' },
    { name: 'itemtap', parameters: 'tree,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'tree,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'tree,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'tree,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'tree,index,target,record,e' },
    { name: 'load', parameters: '' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'tree,container,toIndex,fromIndex' },
    { name: 'nodecollapse', parameters: 'node,record' },
    { name: 'nodeexpand', parameters: 'row,record' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'tree,positioned' },
    { name: 'refresh', parameters: 'tree' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'tree,container,index' },
    { name: 'renderedchange', parameters: 'tree,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'select', parameters: 'tree,record' },
    { name: 'selectionchange', parameters: 'tree,records' },
    { name: 'show', parameters: 'tree' },
    { name: 'tofront', parameters: 'tree' },
    { name: 'updatedata', parameters: 'tree,newData' },
    { name: 'ready', parameters: '' }
];
treeMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeload',
    'beforenodecollapse',
    'beforenodeexpand',
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
    'load',
    'move',
    'moved',
    'nodecollapse',
    'nodeexpand',
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
var tree = tree_1 = (function (_super) {
    __extends(tree, _super);
    function tree(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, treeMetaData) || this;
    }
    tree.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    tree.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, treeMetaData); };
    return tree;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], tree.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], tree.prototype, "dynamicRef", void 0);
tree = tree_1 = __decorate([
    core_1.Component({
        selector: treeMetaData.XTYPE,
        inputs: treeMetaData.INPUTNAMES,
        outputs: treeMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return tree_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], tree);
exports.tree = tree;
var tree_1;
