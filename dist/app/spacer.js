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
var spacerMetaData = (function () {
    function spacerMetaData() {
    }
    return spacerMetaData;
}());
spacerMetaData.XTYPE = 'spacer';
spacerMetaData.INPUTNAMES = [
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
spacerMetaData.OUTPUTS = [
    { name: 'added', parameters: 'spacer,container,index' },
    { name: 'beforehide', parameters: 'spacer' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'spacer' },
    { name: 'beforetofront', parameters: 'spacer' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'spacer' },
    { name: 'floatingchange', parameters: 'spacer,positioned' },
    { name: 'fullscreen', parameters: 'spacer' },
    { name: 'hide', parameters: 'spacer' },
    { name: 'initialize', parameters: 'spacer' },
    { name: 'moved', parameters: 'spacer,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'spacer,positioned' },
    { name: 'removed', parameters: 'spacer,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'spacer' },
    { name: 'tofront', parameters: 'spacer' },
    { name: 'updatedata', parameters: 'spacer,newData' },
    { name: 'ready', parameters: '' }
];
spacerMetaData.OUTPUTNAMES = [
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
var spacer = spacer_1 = (function (_super) {
    __extends(spacer, _super);
    function spacer(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, spacerMetaData) || this;
    }
    spacer.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    spacer.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, spacerMetaData); };
    return spacer;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], spacer.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], spacer.prototype, "dynamicRef", void 0);
spacer = spacer_1 = __decorate([
    core_1.Component({
        selector: spacerMetaData.XTYPE,
        inputs: spacerMetaData.INPUTNAMES,
        outputs: spacerMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return spacer_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], spacer);
exports.spacer = spacer;
var spacer_1;
