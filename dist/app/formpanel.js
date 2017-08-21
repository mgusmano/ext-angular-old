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
var formpanelMetaData = (function () {
    function formpanelMetaData() {
    }
    return formpanelMetaData;
}());
export { formpanelMetaData };
formpanelMetaData.XTYPE = 'formpanel';
formpanelMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'api',
    'autoDestroy',
    'axisLock',
    'baseCls',
    'baseParams',
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
    'enableSubmissionForm',
    'enctype',
    'enterAnimation',
    'exitAnimation',
    'fieldSeparators',
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
    'inputBorders',
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
    'method',
    'minHeight',
    'minWidth',
    'modal',
    'multipartDetection',
    'padding',
    'paramOrder',
    'paramsAsHash',
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
    'standardSubmit',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'submitOnAction',
    'timeout',
    'title',
    'toFrontOnShow',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackResetOnLoad',
    'translatable',
    'twoWayBindable',
    'ui',
    'url',
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
formpanelMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,formpanel,oldActiveItem' },
    { name: 'add', parameters: 'formpanel,item,index' },
    { name: 'added', parameters: 'formpanel,container,index' },
    { name: 'beforehide', parameters: 'formpanel' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'formpanel' },
    { name: 'beforesubmit', parameters: 'formpanel,values,options,e' },
    { name: 'beforetofront', parameters: 'formpanel' },
    { name: 'deactivate', parameters: 'oldActiveItem,formpanel,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'formpanel' },
    { name: 'exception', parameters: 'formpanel,result' },
    { name: 'floatingchange', parameters: 'formpanel,positioned' },
    { name: 'fullscreen', parameters: 'formpanel' },
    { name: 'hide', parameters: 'formpanel' },
    { name: 'initialize', parameters: 'formpanel' },
    { name: 'move', parameters: 'formpanel,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'formpanel,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'formpanel,positioned' },
    { name: 'remove', parameters: 'formpanel,item,index' },
    { name: 'removed', parameters: 'formpanel,container,index' },
    { name: 'renderedchange', parameters: 'formpanel,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'formpanel' },
    { name: 'submit', parameters: 'formpanel,result,e' },
    { name: 'tofront', parameters: 'formpanel' },
    { name: 'updatedata', parameters: 'formpanel,newData' },
    { name: 'ready', parameters: '' }
];
formpanelMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforesubmit',
    'beforetofront',
    'deactivate',
    'destroy',
    'erased',
    'exception',
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
    'submit',
    'tofront',
    'updatedata',
    'ready'
];
var formpanel = formpanel_1 = (function (_super) {
    __extends(formpanel, _super);
    function formpanel(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, formpanelMetaData) || this;
    }
    formpanel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    formpanel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, formpanelMetaData); };
    return formpanel;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], formpanel.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], formpanel.prototype, "dynamicRef", void 0);
formpanel = formpanel_1 = __decorate([
    Component({
        selector: formpanelMetaData.XTYPE,
        inputs: formpanelMetaData.INPUTNAMES,
        outputs: formpanelMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return formpanel_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], formpanel);
export { formpanel };
var formpanel_1;
