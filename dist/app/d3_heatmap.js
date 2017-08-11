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
var d3_heatmapMetaData = (function () {
    function d3_heatmapMetaData() {
    }
    return d3_heatmapMetaData;
}());
d3_heatmapMetaData.XTYPE = 'd3-heatmap';
d3_heatmapMetaData.INPUTNAMES = [
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
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labels',
    'left',
    'legend',
    'listeners',
    'margin',
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
    'relative',
    'renderTo',
    'right',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'size',
    'store',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'tiles',
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
    'xAxis',
    'xtype',
    'y',
    'yAxis',
    'zIndex',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
d3_heatmapMetaData.OUTPUTS = [
    { name: 'added', parameters: 'd3-heatmap,container,index' },
    { name: 'beforehide', parameters: 'd3-heatmap' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'd3-heatmap' },
    { name: 'beforetofront', parameters: 'd3-heatmap' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'd3-heatmap' },
    { name: 'floatingchange', parameters: 'd3-heatmap,positioned' },
    { name: 'fullscreen', parameters: 'd3-heatmap' },
    { name: 'hide', parameters: 'd3-heatmap' },
    { name: 'initialize', parameters: 'd3-heatmap' },
    { name: 'moved', parameters: 'd3-heatmap,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'd3-heatmap,positioned' },
    { name: 'removed', parameters: 'd3-heatmap,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'sceneresize', parameters: 'component,scene,size' },
    { name: 'scenesetup', parameters: 'component,scene' },
    { name: 'show', parameters: 'd3-heatmap' },
    { name: 'tofront', parameters: 'd3-heatmap' },
    { name: 'updatedata', parameters: 'd3-heatmap,newData' },
    { name: 'ready', parameters: '' }
];
d3_heatmapMetaData.OUTPUTNAMES = [
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
var d3_heatmap = d3_heatmap_1 = (function (_super) {
    __extends(d3_heatmap, _super);
    function d3_heatmap(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, d3_heatmapMetaData) || this;
    }
    d3_heatmap.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    d3_heatmap.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, d3_heatmapMetaData); };
    return d3_heatmap;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], d3_heatmap.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], d3_heatmap.prototype, "dynamicRef", void 0);
d3_heatmap = d3_heatmap_1 = __decorate([
    core_1.Component({
        selector: d3_heatmapMetaData.XTYPE,
        inputs: d3_heatmapMetaData.INPUTNAMES,
        outputs: d3_heatmapMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return d3_heatmap_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], d3_heatmap);
exports.d3_heatmap = d3_heatmap;
var d3_heatmap_1;
