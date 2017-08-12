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
var menuMetaData = (function () {
    function menuMetaData() {
    }
    return menuMetaData;
}());
menuMetaData.XTYPE = 'menu';
menuMetaData.INPUTNAMES = [
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
    'minHeight',
    'minWidth',
    'modal',
    'padding',
    'plugins',
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
menuMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,menu,oldActiveItem' },
    { name: 'add', parameters: 'menu,item,index' },
    { name: 'added', parameters: 'menu,container,index' },
    { name: 'beforehide', parameters: 'menu' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'menu' },
    { name: 'beforetofront', parameters: 'menu' },
    { name: 'deactivate', parameters: 'oldActiveItem,menu,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'menu' },
    { name: 'floatingchange', parameters: 'menu,positioned' },
    { name: 'fullscreen', parameters: 'menu' },
    { name: 'hide', parameters: 'menu' },
    { name: 'initialize', parameters: 'menu' },
    { name: 'move', parameters: 'menu,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'menu,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'menu,positioned' },
    { name: 'remove', parameters: 'menu,item,index' },
    { name: 'removed', parameters: 'menu,container,index' },
    { name: 'renderedchange', parameters: 'menu,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'menu' },
    { name: 'tofront', parameters: 'menu' },
    { name: 'updatedata', parameters: 'menu,newData' },
    { name: 'ready', parameters: '' }
];
menuMetaData.OUTPUTNAMES = [
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
var menu = menu_1 = (function (_super) {
    __extends(menu, _super);
    function menu(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, menuMetaData) || this;
    }
    menu.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    menu.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, menuMetaData); };
    return menu;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], menu.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], menu.prototype, "dynamicRef", void 0);
menu = menu_1 = __decorate([
    Component({
        selector: menuMetaData.XTYPE,
        inputs: menuMetaData.INPUTNAMES,
        outputs: menuMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return menu_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], menu);
export { menu };
var menu_1;
