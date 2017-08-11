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
var indexbarMetaData = (function () {
    function indexbarMetaData() {
    }
    return indexbarMetaData;
}());
indexbarMetaData.XTYPE = 'indexbar';
indexbarMetaData.INPUTNAMES = [
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
    'direction',
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
    'letters',
    'listeners',
    'listPrefix',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'padding',
    'parentList',
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
indexbarMetaData.OUTPUTS = [
    { name: 'added', parameters: 'indexbar,container,index' },
    { name: 'beforehide', parameters: 'indexbar' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'indexbar' },
    { name: 'beforetofront', parameters: 'indexbar' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'indexbar' },
    { name: 'floatingchange', parameters: 'indexbar,positioned' },
    { name: 'fullscreen', parameters: 'indexbar' },
    { name: 'hide', parameters: 'indexbar' },
    { name: 'index', parameters: 'indexbar,html,target' },
    { name: 'initialize', parameters: 'indexbar' },
    { name: 'moved', parameters: 'indexbar,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'indexbar,positioned' },
    { name: 'removed', parameters: 'indexbar,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'indexbar' },
    { name: 'tofront', parameters: 'indexbar' },
    { name: 'updatedata', parameters: 'indexbar,newData' },
    { name: 'ready', parameters: '' }
];
indexbarMetaData.OUTPUTNAMES = [
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
    'index',
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
var indexbar = indexbar_1 = (function (_super) {
    __extends(indexbar, _super);
    function indexbar(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, indexbarMetaData) || this;
    }
    indexbar.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    indexbar.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, indexbarMetaData); };
    return indexbar;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], indexbar.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], indexbar.prototype, "dynamicRef", void 0);
indexbar = indexbar_1 = __decorate([
    core_1.Component({
        selector: indexbarMetaData.XTYPE,
        inputs: indexbarMetaData.INPUTNAMES,
        outputs: indexbarMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return indexbar_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], indexbar);
exports.indexbar = indexbar;
var indexbar_1;
