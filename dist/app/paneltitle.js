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
var paneltitleMetaData = (function () {
    function paneltitleMetaData() {
    }
    return paneltitleMetaData;
}());
paneltitleMetaData.XTYPE = 'paneltitle';
paneltitleMetaData.INPUTNAMES = [
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
    'glyph',
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
paneltitleMetaData.OUTPUTS = [
    { name: 'added', parameters: 'paneltitle,container,index' },
    { name: 'beforehide', parameters: 'paneltitle' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'paneltitle' },
    { name: 'beforetofront', parameters: 'paneltitle' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'paneltitle' },
    { name: 'floatingchange', parameters: 'paneltitle,positioned' },
    { name: 'fullscreen', parameters: 'paneltitle' },
    { name: 'hide', parameters: 'paneltitle' },
    { name: 'initialize', parameters: 'paneltitle' },
    { name: 'moved', parameters: 'paneltitle,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'paneltitle,positioned' },
    { name: 'removed', parameters: 'paneltitle,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'paneltitle' },
    { name: 'tofront', parameters: 'paneltitle' },
    { name: 'updatedata', parameters: 'paneltitle,newData' },
    { name: 'ready', parameters: '' }
];
paneltitleMetaData.OUTPUTNAMES = [
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
var paneltitle = paneltitle_1 = (function (_super) {
    __extends(paneltitle, _super);
    function paneltitle(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, paneltitleMetaData) || this;
    }
    paneltitle.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    paneltitle.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, paneltitleMetaData); };
    return paneltitle;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], paneltitle.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], paneltitle.prototype, "dynamicRef", void 0);
paneltitle = paneltitle_1 = __decorate([
    Component({
        selector: paneltitleMetaData.XTYPE,
        inputs: paneltitleMetaData.INPUTNAMES,
        outputs: paneltitleMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return paneltitle_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], paneltitle);
export { paneltitle };
var paneltitle_1;
