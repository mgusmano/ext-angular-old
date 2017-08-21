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
var titleMetaData = (function () {
    function titleMetaData() {
    }
    return titleMetaData;
}());
export { titleMetaData };
titleMetaData.XTYPE = 'title';
titleMetaData.INPUTNAMES = [
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
titleMetaData.OUTPUTS = [
    { name: 'added', parameters: 'title,container,index' },
    { name: 'beforehide', parameters: 'title' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'title' },
    { name: 'beforetofront', parameters: 'title' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'title' },
    { name: 'floatingchange', parameters: 'title,positioned' },
    { name: 'fullscreen', parameters: 'title' },
    { name: 'hide', parameters: 'title' },
    { name: 'initialize', parameters: 'title' },
    { name: 'moved', parameters: 'title,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'title,positioned' },
    { name: 'removed', parameters: 'title,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'title' },
    { name: 'tofront', parameters: 'title' },
    { name: 'updatedata', parameters: 'title,newData' },
    { name: 'ready', parameters: '' }
];
titleMetaData.OUTPUTNAMES = [
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
var title = title_1 = (function (_super) {
    __extends(title, _super);
    function title(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, titleMetaData) || this;
    }
    title.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    title.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, titleMetaData); };
    return title;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], title.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], title.prototype, "dynamicRef", void 0);
title = title_1 = __decorate([
    Component({
        selector: titleMetaData.XTYPE,
        inputs: titleMetaData.INPUTNAMES,
        outputs: titleMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return title_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], title);
export { title };
var title_1;
