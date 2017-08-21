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
var buttonMetaData = (function () {
    function buttonMetaData() {
    }
    return buttonMetaData;
}());
export { buttonMetaData };
buttonMetaData.XTYPE = 'button';
buttonMetaData.INPUTNAMES = [
    'allowDepress',
    'alwaysOnTop',
    'autoEvent',
    'axisLock',
    'badgeCls',
    'badgeText',
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
    'enableToggle',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'handler',
    'hasBadgeCls',
    'hasLabelCls',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelCls',
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
    'pressed',
    'pressedDelay',
    'pressingCls',
    'pressingCls',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'text',
    'textAlign',
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
buttonMetaData.OUTPUTS = [
    { name: 'added', parameters: 'button,container,index' },
    { name: 'beforehide', parameters: 'button' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'button' },
    { name: 'beforetofront', parameters: 'button' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'button' },
    { name: 'floatingchange', parameters: 'button,positioned' },
    { name: 'fullscreen', parameters: 'button' },
    { name: 'hide', parameters: 'button' },
    { name: 'initialize', parameters: 'button' },
    { name: 'moved', parameters: 'button,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'button,positioned' },
    { name: 'release', parameters: 'button,e' },
    { name: 'removed', parameters: 'button,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'button' },
    { name: 'tap', parameters: 'button,e' },
    { name: 'tofront', parameters: 'button' },
    { name: 'updatedata', parameters: 'button,newData' },
    { name: 'ready', parameters: '' }
];
buttonMetaData.OUTPUTNAMES = [
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
    'release',
    'removed',
    'resize',
    'show',
    'tap',
    'tofront',
    'updatedata',
    'ready'
];
var button = button_1 = (function (_super) {
    __extends(button, _super);
    function button(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, buttonMetaData) || this;
    }
    button.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    button.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, buttonMetaData); };
    return button;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], button.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], button.prototype, "dynamicRef", void 0);
button = button_1 = __decorate([
    Component({
        selector: buttonMetaData.XTYPE,
        inputs: buttonMetaData.INPUTNAMES,
        outputs: buttonMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return button_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], button);
export { button };
var button_1;
