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
var sliderMetaData = (function () {
    function sliderMetaData() {
    }
    return sliderMetaData;
}());
export { sliderMetaData };
sliderMetaData.XTYPE = 'slider';
sliderMetaData.INPUTNAMES = [
    'allowThumbsOverlapping',
    'alwaysOnTop',
    'animation',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
    'cls',
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
    'increment',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'padding',
    'plugins',
    'publishes',
    'readOnly',
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
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'thumbDefaults',
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
    'value',
    'valueIsArray',
    'values',
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
sliderMetaData.OUTPUTS = [
    { name: 'added', parameters: 'slider,container,index' },
    { name: 'beforehide', parameters: 'slider' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'slider' },
    { name: 'beforetofront', parameters: 'slider' },
    { name: 'change', parameters: 'slider,thumb,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'drag', parameters: 'slider,thumb,e' },
    { name: 'dragend', parameters: 'slider,thumb,value,e' },
    { name: 'dragstart', parameters: 'slider,thumb,value,e' },
    { name: 'erased', parameters: 'slider' },
    { name: 'floatingchange', parameters: 'slider,positioned' },
    { name: 'fullscreen', parameters: 'slider' },
    { name: 'hide', parameters: 'slider' },
    { name: 'initialize', parameters: 'slider' },
    { name: 'moved', parameters: 'slider,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'slider,positioned' },
    { name: 'removed', parameters: 'slider,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'slider' },
    { name: 'tofront', parameters: 'slider' },
    { name: 'updatedata', parameters: 'slider,newData' },
    { name: 'ready', parameters: '' }
];
sliderMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'destroy',
    'drag',
    'dragend',
    'dragstart',
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
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var slider = slider_1 = (function (_super) {
    __extends(slider, _super);
    function slider(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, sliderMetaData) || this;
    }
    slider.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    slider.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, sliderMetaData); };
    return slider;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], slider.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], slider.prototype, "dynamicRef", void 0);
slider = slider_1 = __decorate([
    Component({
        selector: sliderMetaData.XTYPE,
        inputs: sliderMetaData.INPUTNAMES,
        outputs: sliderMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return slider_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], slider);
export { slider };
var slider_1;
