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
var titlebarMetaData = (function () {
    function titlebarMetaData() {
    }
    return titlebarMetaData;
}());
export { titlebarMetaData };
titlebarMetaData.XTYPE = 'titlebar';
titlebarMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'autoDestroy',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultButtonUI',
    'defaultListenerScope',
    'defaults',
    'defaultType',
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
    'maxButtonWidth',
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
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'title',
    'titleAlign',
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
titlebarMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,titlebar,oldActiveItem' },
    { name: 'add', parameters: 'titlebar,item,index' },
    { name: 'added', parameters: 'titlebar,container,index' },
    { name: 'beforehide', parameters: 'titlebar' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'titlebar' },
    { name: 'beforetofront', parameters: 'titlebar' },
    { name: 'deactivate', parameters: 'oldActiveItem,titlebar,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'titlebar' },
    { name: 'floatingchange', parameters: 'titlebar,positioned' },
    { name: 'fullscreen', parameters: 'titlebar' },
    { name: 'hide', parameters: 'titlebar' },
    { name: 'initialize', parameters: 'titlebar' },
    { name: 'move', parameters: 'titlebar,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'titlebar,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'titlebar,positioned' },
    { name: 'remove', parameters: 'titlebar,item,index' },
    { name: 'removed', parameters: 'titlebar,container,index' },
    { name: 'renderedchange', parameters: 'titlebar,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'titlebar' },
    { name: 'tofront', parameters: 'titlebar' },
    { name: 'updatedata', parameters: 'titlebar,newData' },
    { name: 'ready', parameters: '' }
];
titlebarMetaData.OUTPUTNAMES = [
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
var titlebar = titlebar_1 = (function (_super) {
    __extends(titlebar, _super);
    function titlebar(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, titlebarMetaData) || this;
    }
    titlebar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    titlebar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, titlebarMetaData); };
    return titlebar;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], titlebar.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], titlebar.prototype, "dynamicRef", void 0);
titlebar = titlebar_1 = __decorate([
    Component({
        selector: titlebarMetaData.XTYPE,
        inputs: titlebarMetaData.INPUTNAMES,
        outputs: titlebarMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return titlebar_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], titlebar);
export { titlebar };
var titlebar_1;
