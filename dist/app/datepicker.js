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
var datepickerMetaData = (function () {
    function datepickerMetaData() {
    }
    return datepickerMetaData;
}());
export { datepickerMetaData };
datepickerMetaData.XTYPE = 'datepicker';
datepickerMetaData.INPUTNAMES = [
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
    'cancelButton',
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
    'dayText',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'disabled',
    'docked',
    'doneButton',
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
    'monthText',
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
    'slotOrder',
    'slots',
    'stretchX',
    'stretchY',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'title',
    'toFrontOnShow',
    'toolbar',
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
    'useTitles',
    'value',
    'viewModel',
    'width',
    'x',
    'xtype',
    'y',
    'yearFrom',
    'yearText',
    'yearTo',
    'zIndex',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
datepickerMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,datepicker,oldActiveItem' },
    { name: 'add', parameters: 'datepicker,item,index' },
    { name: 'added', parameters: 'datepicker,container,index' },
    { name: 'beforehide', parameters: 'datepicker' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'datepicker' },
    { name: 'beforetofront', parameters: 'datepicker' },
    { name: 'cancel', parameters: 'datepicker' },
    { name: 'change', parameters: 'datepicker,value' },
    { name: 'deactivate', parameters: 'oldActiveItem,datepicker,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'datepicker' },
    { name: 'floatingchange', parameters: 'datepicker,positioned' },
    { name: 'fullscreen', parameters: 'datepicker' },
    { name: 'hide', parameters: 'datepicker' },
    { name: 'initialize', parameters: 'datepicker' },
    { name: 'move', parameters: 'datepicker,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'datepicker,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'pick', parameters: 'datepicker,values,slot' },
    { name: 'positionedchange', parameters: 'datepicker,positioned' },
    { name: 'remove', parameters: 'datepicker,item,index' },
    { name: 'removed', parameters: 'datepicker,container,index' },
    { name: 'renderedchange', parameters: 'datepicker,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'datepicker' },
    { name: 'tofront', parameters: 'datepicker' },
    { name: 'updatedata', parameters: 'datepicker,newData' },
    { name: 'ready', parameters: '' }
];
datepickerMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'cancel',
    'change',
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
    'pick',
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
var datepicker = datepicker_1 = (function (_super) {
    __extends(datepicker, _super);
    function datepicker(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, datepickerMetaData) || this;
    }
    datepicker.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    datepicker.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, datepickerMetaData); };
    return datepicker;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], datepicker.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], datepicker.prototype, "dynamicRef", void 0);
datepicker = datepicker_1 = __decorate([
    Component({
        selector: datepickerMetaData.XTYPE,
        inputs: datepickerMetaData.INPUTNAMES,
        outputs: datepickerMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return datepicker_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], datepicker);
export { datepicker };
var datepicker_1;
