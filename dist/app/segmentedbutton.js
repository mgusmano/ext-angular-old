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
var segmentedbuttonMetaData = (function () {
    function segmentedbuttonMetaData() {
    }
    return segmentedbuttonMetaData;
}());
export { segmentedbuttonMetaData };
segmentedbuttonMetaData.XTYPE = 'segmentedbutton';
segmentedbuttonMetaData.INPUTNAMES = [
    'activeItem',
    'allowDepress',
    'allowMultiple',
    'allowToggle',
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
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'defaultUI',
    'disabled',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'forceSelection',
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
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'padding',
    'plugins',
    'pressedButtons',
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
    'vertical',
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
segmentedbuttonMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,segmentedbutton,oldActiveItem' },
    { name: 'add', parameters: 'segmentedbutton,item,index' },
    { name: 'added', parameters: 'segmentedbutton,container,index' },
    { name: 'beforehide', parameters: 'segmentedbutton' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'segmentedbutton' },
    { name: 'beforetofront', parameters: 'segmentedbutton' },
    { name: 'change', parameters: 'segmentedbutton,value,oldValue' },
    { name: 'deactivate', parameters: 'oldActiveItem,segmentedbutton,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'segmentedbutton' },
    { name: 'floatingchange', parameters: 'segmentedbutton,positioned' },
    { name: 'fullscreen', parameters: 'segmentedbutton' },
    { name: 'hide', parameters: 'segmentedbutton' },
    { name: 'initialize', parameters: 'segmentedbutton' },
    { name: 'move', parameters: 'segmentedbutton,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'segmentedbutton,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'segmentedbutton,positioned' },
    { name: 'remove', parameters: 'segmentedbutton,item,index' },
    { name: 'removed', parameters: 'segmentedbutton,container,index' },
    { name: 'renderedchange', parameters: 'segmentedbutton,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'segmentedbutton' },
    { name: 'tofront', parameters: 'segmentedbutton' },
    { name: 'toggle', parameters: 'segmentedbutton,button,isPressed' },
    { name: 'updatedata', parameters: 'segmentedbutton,newData' },
    { name: 'ready', parameters: '' }
];
segmentedbuttonMetaData.OUTPUTNAMES = [
    'activate',
    'add',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
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
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'show',
    'tofront',
    'toggle',
    'updatedata',
    'ready'
];
var segmentedbutton = segmentedbutton_1 = (function (_super) {
    __extends(segmentedbutton, _super);
    function segmentedbutton(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, segmentedbuttonMetaData) || this;
    }
    segmentedbutton.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    segmentedbutton.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, segmentedbuttonMetaData); };
    return segmentedbutton;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], segmentedbutton.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], segmentedbutton.prototype, "dynamicRef", void 0);
segmentedbutton = segmentedbutton_1 = __decorate([
    Component({
        selector: segmentedbuttonMetaData.XTYPE,
        inputs: segmentedbuttonMetaData.INPUTNAMES,
        outputs: segmentedbuttonMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return segmentedbutton_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], segmentedbutton);
export { segmentedbutton };
var segmentedbutton_1;
