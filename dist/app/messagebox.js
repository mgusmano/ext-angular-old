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
var messageboxMetaData = (function () {
    function messageboxMetaData() {
    }
    return messageboxMetaData;
}());
export { messageboxMetaData };
messageboxMetaData.XTYPE = 'messagebox';
messageboxMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'autoDestroy',
    'axisLock',
    'baseCls',
    'bind',
    'bodyBorder',
    'bodyPadding',
    'border',
    'bottom',
    'buttons',
    'buttonToolbar',
    'cardSwitchAnimation',
    'centered',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultListenerScope',
    'defaults',
    'defaultTextHeight',
    'defaultType',
    'disabled',
    'docked',
    'draggable',
    'enter',
    'enterAnimation',
    'exit',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'header',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconCls',
    'id',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'message',
    'minHeight',
    'minWidth',
    'modal',
    'msg',
    'padding',
    'plugins',
    'prompt',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'right',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'stretchX',
    'stretchY',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'title',
    'toFrontOnShow',
    'tools',
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
messageboxMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,messagebox,oldActiveItem' },
    { name: 'add', parameters: 'messagebox,item,index' },
    { name: 'added', parameters: 'messagebox,container,index' },
    { name: 'beforehide', parameters: 'messagebox' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'messagebox' },
    { name: 'beforetofront', parameters: 'messagebox' },
    { name: 'deactivate', parameters: 'oldActiveItem,messagebox,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'messagebox' },
    { name: 'floatingchange', parameters: 'messagebox,positioned' },
    { name: 'fullscreen', parameters: 'messagebox' },
    { name: 'hide', parameters: 'messagebox' },
    { name: 'initialize', parameters: 'messagebox' },
    { name: 'move', parameters: 'messagebox,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'messagebox,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'messagebox,positioned' },
    { name: 'remove', parameters: 'messagebox,item,index' },
    { name: 'removed', parameters: 'messagebox,container,index' },
    { name: 'renderedchange', parameters: 'messagebox,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'messagebox' },
    { name: 'tofront', parameters: 'messagebox' },
    { name: 'updatedata', parameters: 'messagebox,newData' },
    { name: 'ready', parameters: '' }
];
messageboxMetaData.OUTPUTNAMES = [
    'activate',
    'add',
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
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var messagebox = messagebox_1 = (function (_super) {
    __extends(messagebox, _super);
    function messagebox(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, messageboxMetaData) || this;
    }
    messagebox.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    messagebox.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, messageboxMetaData); };
    return messagebox;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], messagebox.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], messagebox.prototype, "dynamicRef", void 0);
messagebox = messagebox_1 = __decorate([
    Component({
        selector: messageboxMetaData.XTYPE,
        inputs: messageboxMetaData.INPUTNAMES,
        outputs: messageboxMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return messagebox_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], messagebox);
export { messagebox };
var messagebox_1;
