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
var togglesliderMetaData = (function () {
    function togglesliderMetaData() {
    }
    return togglesliderMetaData;
}());
togglesliderMetaData.XTYPE = 'toggleslider';
togglesliderMetaData.INPUTNAMES = [
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
togglesliderMetaData.OUTPUTS = [
    { name: 'added', parameters: 'toggleslider,container,index' },
    { name: 'beforehide', parameters: 'toggleslider' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'toggleslider' },
    { name: 'beforetofront', parameters: 'toggleslider' },
    { name: 'change', parameters: 'toggleslider,thumb,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'drag', parameters: 'toggleslider,thumb,e' },
    { name: 'dragend', parameters: 'toggleslider,thumb,value,e' },
    { name: 'dragstart', parameters: 'toggleslider,thumb,value,e' },
    { name: 'erased', parameters: 'toggleslider' },
    { name: 'floatingchange', parameters: 'toggleslider,positioned' },
    { name: 'fullscreen', parameters: 'toggleslider' },
    { name: 'hide', parameters: 'toggleslider' },
    { name: 'initialize', parameters: 'toggleslider' },
    { name: 'moved', parameters: 'toggleslider,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'toggleslider,positioned' },
    { name: 'removed', parameters: 'toggleslider,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'toggleslider' },
    { name: 'tofront', parameters: 'toggleslider' },
    { name: 'updatedata', parameters: 'toggleslider,newData' },
    { name: 'ready', parameters: '' }
];
togglesliderMetaData.OUTPUTNAMES = [
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
var toggleslider = toggleslider_1 = (function (_super) {
    __extends(toggleslider, _super);
    function toggleslider(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, togglesliderMetaData) || this;
    }
    toggleslider.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    toggleslider.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, togglesliderMetaData); };
    return toggleslider;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], toggleslider.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], toggleslider.prototype, "dynamicRef", void 0);
toggleslider = toggleslider_1 = __decorate([
    Component({
        selector: togglesliderMetaData.XTYPE,
        inputs: togglesliderMetaData.INPUTNAMES,
        outputs: togglesliderMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return toggleslider_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], toggleslider);
export { toggleslider };
var toggleslider_1;
