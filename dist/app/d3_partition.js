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
var d3_partitionMetaData = (function () {
    function d3_partitionMetaData() {
    }
    return d3_partitionMetaData;
}());
d3_partitionMetaData.XTYPE = 'd3-partition';
d3_partitionMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
    'clipScene',
    'cls',
    'colorAxis',
    'componentCls',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'expandEventName',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'hierarchyCls',
    'html',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'nodeChildren',
    'nodeClass',
    'nodeKey',
    'nodeText',
    'nodeTransform',
    'nodeValue',
    'noSizeLayout',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderLinks',
    'renderTo',
    'right',
    'rootVisible',
    'scrollable',
    'selectEventName',
    'selection',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'size',
    'sorter',
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
d3_partitionMetaData.OUTPUTS = [
    { name: 'added', parameters: 'd3-partition,container,index' },
    { name: 'beforehide', parameters: 'd3-partition' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'd3-partition' },
    { name: 'beforetofront', parameters: 'd3-partition' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'd3-partition' },
    { name: 'floatingchange', parameters: 'd3-partition,positioned' },
    { name: 'fullscreen', parameters: 'd3-partition' },
    { name: 'hide', parameters: 'd3-partition' },
    { name: 'initialize', parameters: 'd3-partition' },
    { name: 'moved', parameters: 'd3-partition,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'd3-partition,positioned' },
    { name: 'removed', parameters: 'd3-partition,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'sceneresize', parameters: 'component,scene,size' },
    { name: 'scenesetup', parameters: 'component,scene' },
    { name: 'show', parameters: 'd3-partition' },
    { name: 'tofront', parameters: 'd3-partition' },
    { name: 'updatedata', parameters: 'd3-partition,newData' },
    { name: 'ready', parameters: '' }
];
d3_partitionMetaData.OUTPUTNAMES = [
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
    'sceneresize',
    'scenesetup',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var d3_partition = d3_partition_1 = (function (_super) {
    __extends(d3_partition, _super);
    function d3_partition(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, d3_partitionMetaData) || this;
    }
    d3_partition.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    d3_partition.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, d3_partitionMetaData); };
    return d3_partition;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], d3_partition.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], d3_partition.prototype, "dynamicRef", void 0);
d3_partition = d3_partition_1 = __decorate([
    Component({
        selector: d3_partitionMetaData.XTYPE,
        inputs: d3_partitionMetaData.INPUTNAMES,
        outputs: d3_partitionMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return d3_partition_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], d3_partition);
export { d3_partition };
var d3_partition_1;
