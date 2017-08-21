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
var tooltipMetaData = (function () {
    function tooltipMetaData() {
    }
    return tooltipMetaData;
}());
export { tooltipMetaData };
tooltipMetaData.XTYPE = 'tooltip';
tooltipMetaData.INPUTNAMES = [
    'activeItem',
    'align',
    'alignDelegate',
    'allowOver',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'anchorToTarget',
    'autoDestroy',
    'autoHide',
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
    'delegate',
    'disabled',
    'dismissDelay',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'header',
    'height',
    'hidden',
    'hideAnimation',
    'hideDelay',
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
    'mouseOffset',
    'padding',
    'plugins',
    'publishes',
    'quickShowInterval',
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
    'showDelay',
    'showOnTap',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'target',
    'title',
    'toFrontOnShow',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackMouse',
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
tooltipMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,tooltip,oldActiveItem' },
    { name: 'add', parameters: 'tooltip,item,index' },
    { name: 'added', parameters: 'tooltip,container,index' },
    { name: 'beforehide', parameters: 'tooltip' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'tooltip' },
    { name: 'beforetofront', parameters: 'tooltip' },
    { name: 'deactivate', parameters: 'oldActiveItem,tooltip,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'tooltip' },
    { name: 'floatingchange', parameters: 'tooltip,positioned' },
    { name: 'fullscreen', parameters: 'tooltip' },
    { name: 'hide', parameters: 'tooltip' },
    { name: 'initialize', parameters: 'tooltip' },
    { name: 'move', parameters: 'tooltip,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'tooltip,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'tooltip,positioned' },
    { name: 'remove', parameters: 'tooltip,item,index' },
    { name: 'removed', parameters: 'tooltip,container,index' },
    { name: 'renderedchange', parameters: 'tooltip,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'tooltip' },
    { name: 'tofront', parameters: 'tooltip' },
    { name: 'updatedata', parameters: 'tooltip,newData' },
    { name: 'ready', parameters: '' }
];
tooltipMetaData.OUTPUTNAMES = [
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
var tooltip = tooltip_1 = (function (_super) {
    __extends(tooltip, _super);
    function tooltip(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, tooltipMetaData) || this;
    }
    tooltip.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    tooltip.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, tooltipMetaData); };
    return tooltip;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], tooltip.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], tooltip.prototype, "dynamicRef", void 0);
tooltip = tooltip_1 = __decorate([
    Component({
        selector: tooltipMetaData.XTYPE,
        inputs: tooltipMetaData.INPUTNAMES,
        outputs: tooltipMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return tooltip_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], tooltip);
export { tooltip };
var tooltip_1;
