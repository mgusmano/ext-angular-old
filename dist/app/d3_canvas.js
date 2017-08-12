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
var d3_canvasMetaData = (function () {
    function d3_canvasMetaData() {
    }
    return d3_canvasMetaData;
}());
d3_canvasMetaData.XTYPE = 'd3-canvas';
d3_canvasMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
    'cls',
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
    'hdpi',
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
    'left',
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
d3_canvasMetaData.OUTPUTS = [
    { name: 'added', parameters: 'd3-canvas,container,index' },
    { name: 'beforehide', parameters: 'd3-canvas' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'd3-canvas' },
    { name: 'beforetofront', parameters: 'd3-canvas' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'd3-canvas' },
    { name: 'floatingchange', parameters: 'd3-canvas,positioned' },
    { name: 'fullscreen', parameters: 'd3-canvas' },
    { name: 'hide', parameters: 'd3-canvas' },
    { name: 'initialize', parameters: 'd3-canvas' },
    { name: 'moved', parameters: 'd3-canvas,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'd3-canvas,positioned' },
    { name: 'removed', parameters: 'd3-canvas,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'sceneresize', parameters: 'component,canvas,size' },
    { name: 'show', parameters: 'd3-canvas' },
    { name: 'tofront', parameters: 'd3-canvas' },
    { name: 'updatedata', parameters: 'd3-canvas,newData' },
    { name: 'ready', parameters: '' }
];
d3_canvasMetaData.OUTPUTNAMES = [
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
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var d3_canvas = d3_canvas_1 = (function (_super) {
    __extends(d3_canvas, _super);
    function d3_canvas(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, d3_canvasMetaData) || this;
    }
    d3_canvas.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    d3_canvas.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, d3_canvasMetaData); };
    return d3_canvas;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], d3_canvas.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], d3_canvas.prototype, "dynamicRef", void 0);
d3_canvas = d3_canvas_1 = __decorate([
    Component({
        selector: d3_canvasMetaData.XTYPE,
        inputs: d3_canvasMetaData.INPUTNAMES,
        outputs: d3_canvasMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return d3_canvas_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], d3_canvas);
export { d3_canvas };
var d3_canvas_1;
