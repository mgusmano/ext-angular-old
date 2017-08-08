"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_1 = require("./base");
var pagingtoolbarMetaData = (function () {
    function pagingtoolbarMetaData() {
    }
    return pagingtoolbarMetaData;
}());
pagingtoolbarMetaData.XTYPE = 'pagingtoolbar';
pagingtoolbarMetaData.INPUTNAMES = [
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
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'nextButton',
    'padding',
    'plugins',
    'prevButton',
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
    'sliderField',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'summaryComponent',
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
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
pagingtoolbarMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,pagingtoolbar,oldActiveItem' },
    { name: 'add', parameters: 'pagingtoolbar,item,index' },
    { name: 'added', parameters: 'pagingtoolbar,container,index' },
    { name: 'beforehide', parameters: 'pagingtoolbar' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'pagingtoolbar' },
    { name: 'beforetofront', parameters: 'pagingtoolbar' },
    { name: 'deactivate', parameters: 'oldActiveItem,pagingtoolbar,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'pagingtoolbar' },
    { name: 'floatingchange', parameters: 'pagingtoolbar,positioned' },
    { name: 'fullscreen', parameters: 'pagingtoolbar' },
    { name: 'hide', parameters: 'pagingtoolbar' },
    { name: 'initialize', parameters: 'pagingtoolbar' },
    { name: 'move', parameters: 'pagingtoolbar,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'pagingtoolbar,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'pagingtoolbar,positioned' },
    { name: 'remove', parameters: 'pagingtoolbar,item,index' },
    { name: 'removed', parameters: 'pagingtoolbar,container,index' },
    { name: 'renderedchange', parameters: 'pagingtoolbar,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'pagingtoolbar' },
    { name: 'tofront', parameters: 'pagingtoolbar' },
    { name: 'updatedata', parameters: 'pagingtoolbar,newData' },
    { name: 'ready', parameters: '' }
];
pagingtoolbarMetaData.OUTPUTNAMES = [
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
var pagingtoolbar = pagingtoolbar_1 = (function (_super) {
    __extends(pagingtoolbar, _super);
    function pagingtoolbar(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, pagingtoolbarMetaData) || this;
    }
    pagingtoolbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    pagingtoolbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, pagingtoolbarMetaData); };
    return pagingtoolbar;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], pagingtoolbar.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], pagingtoolbar.prototype, "dynamicRef", void 0);
pagingtoolbar = pagingtoolbar_1 = __decorate([
    core_1.Component({
        selector: pagingtoolbarMetaData.XTYPE,
        inputs: pagingtoolbarMetaData.INPUTNAMES,
        outputs: pagingtoolbarMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return pagingtoolbar_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], pagingtoolbar);
exports.pagingtoolbar = pagingtoolbar;
var pagingtoolbar_1;
