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
var tabMetaData = (function () {
    function tabMetaData() {
    }
    return tabMetaData;
}());
tabMetaData.XTYPE = 'tab';
tabMetaData.INPUTNAMES = [
    'active',
    'activeCls',
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
    'pressedCls',
    'pressedDelay',
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
    'title',
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
tabMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'tab' },
    { name: 'added', parameters: 'tab,container,index' },
    { name: 'beforehide', parameters: 'tab' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'tab' },
    { name: 'beforetofront', parameters: 'tab' },
    { name: 'deactivate', parameters: 'tab' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'tab' },
    { name: 'floatingchange', parameters: 'tab,positioned' },
    { name: 'fullscreen', parameters: 'tab' },
    { name: 'hide', parameters: 'tab' },
    { name: 'initialize', parameters: 'tab' },
    { name: 'moved', parameters: 'tab,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'tab,positioned' },
    { name: 'release', parameters: 'tab,e' },
    { name: 'removed', parameters: 'tab,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'tab' },
    { name: 'tap', parameters: 'tab,e' },
    { name: 'tofront', parameters: 'tab' },
    { name: 'updatedata', parameters: 'tab,newData' },
    { name: 'ready', parameters: '' }
];
tabMetaData.OUTPUTNAMES = [
    'activate',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'deactivate',
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
var tab = tab_1 = (function (_super) {
    __extends(tab, _super);
    function tab(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, tabMetaData) || this;
    }
    tab.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    tab.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, tabMetaData); };
    return tab;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], tab.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], tab.prototype, "dynamicRef", void 0);
tab = tab_1 = __decorate([
    Component({
        selector: tabMetaData.XTYPE,
        inputs: tabMetaData.INPUTNAMES,
        outputs: tabMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return tab_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], tab);
export { tab };
var tab_1;
