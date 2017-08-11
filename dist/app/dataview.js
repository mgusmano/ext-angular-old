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
var dataviewMetaData = (function () {
    function dataviewMetaData() {
    }
    return dataviewMetaData;
}());
dataviewMetaData.XTYPE = 'dataview';
dataviewMetaData.INPUTNAMES = [
    'activeItem',
    'allowDeselect',
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
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'docked',
    'draggable',
    'emptyText',
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
    'inline',
    'itemCls',
    'itemConfig',
    'itemId',
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
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'right',
    'scrollable',
    'scrollToTopOnRefresh',
    'selection',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'store',
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
dataviewMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,dataview,oldActiveItem' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'dataview,container,index' },
    { name: 'beforehide', parameters: 'dataview' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeselectionchange', parameters: 'dataview' },
    { name: 'beforeshow', parameters: 'dataview' },
    { name: 'beforetofront', parameters: 'dataview' },
    { name: 'containertap', parameters: '' },
    { name: 'deactivate', parameters: 'oldActiveItem,dataview,newActiveItem' },
    { name: 'deselect', parameters: 'dataview,record,supressed' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'dataview' },
    { name: 'floatingchange', parameters: 'dataview,positioned' },
    { name: 'fullscreen', parameters: 'dataview' },
    { name: 'hide', parameters: 'dataview' },
    { name: 'initialize', parameters: 'dataview' },
    { name: 'itemdoubletap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'dataview,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'dataview,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemswipe', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtap', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'dataview,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'dataview,index,target,record,e' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'dataview,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'dataview,positioned' },
    { name: 'refresh', parameters: 'dataview' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'dataview,container,index' },
    { name: 'renderedchange', parameters: 'dataview,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'select', parameters: 'dataview,record' },
    { name: 'selectionchange', parameters: 'dataview,records' },
    { name: 'show', parameters: 'dataview' },
    { name: 'tofront', parameters: 'dataview' },
    { name: 'updatedata', parameters: 'dataview,newData' },
    { name: 'ready', parameters: '' }
];
dataviewMetaData.OUTPUTNAMES = [
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
var dataview = dataview_1 = (function (_super) {
    __extends(dataview, _super);
    function dataview(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, dataviewMetaData) || this;
    }
    dataview.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    dataview.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, dataviewMetaData); };
    return dataview;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], dataview.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], dataview.prototype, "dynamicRef", void 0);
dataview = dataview_1 = __decorate([
    core_1.Component({
        selector: dataviewMetaData.XTYPE,
        inputs: dataviewMetaData.INPUTNAMES,
        outputs: dataviewMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return dataview_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], dataview);
exports.dataview = dataview;
var dataview_1;
