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
var componentMetaData = (function () {
    function componentMetaData() {
    }
    return componentMetaData;
}());
export { componentMetaData };
componentMetaData.XTYPE = 'component';
componentMetaData.INPUTNAMES = [
    'alwaysOnTop',
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
componentMetaData.OUTPUTS = [
    { name: 'added', parameters: 'component,container,index' },
    { name: 'beforehide', parameters: 'component' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'component' },
    { name: 'beforetofront', parameters: 'component' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'component' },
    { name: 'floatingchange', parameters: 'component,positioned' },
    { name: 'fullscreen', parameters: 'component' },
    { name: 'hide', parameters: 'component' },
    { name: 'initialize', parameters: 'component' },
    { name: 'moved', parameters: 'component,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'component,positioned' },
    { name: 'removed', parameters: 'component,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'component' },
    { name: 'tofront', parameters: 'component' },
    { name: 'updatedata', parameters: 'component,newData' },
    { name: 'ready', parameters: '' }
];
componentMetaData.OUTPUTNAMES = [
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
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var component = component_1 = (function (_super) {
    __extends(component, _super);
    function component(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, componentMetaData) || this;
    }
    component.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    component.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, componentMetaData); };
    return component;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], component.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], component.prototype, "dynamicRef", void 0);
component = component_1 = __decorate([
    Component({
        selector: componentMetaData.XTYPE,
        inputs: componentMetaData.INPUTNAMES,
        outputs: componentMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return component_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], component);
export { component };
var component_1;
