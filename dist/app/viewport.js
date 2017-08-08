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
var viewportMetaData = (function () {
    function viewportMetaData() {
    }
    return viewportMetaData;
}());
viewportMetaData.XTYPE = 'viewport';
viewportMetaData.INPUTNAMES = [
    'activeItem',
    'alwaysOnTop',
    'autoDestroy',
    'autoRender',
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
    'padding',
    'plugins',
    'preventZooming',
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
viewportMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,viewport,oldActiveItem' },
    { name: 'add', parameters: 'viewport,item,index' },
    { name: 'added', parameters: 'viewport,container,index' },
    { name: 'beforehide', parameters: 'viewport' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'viewport' },
    { name: 'beforetofront', parameters: 'viewport' },
    { name: 'deactivate', parameters: 'oldActiveItem,viewport,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'viewport' },
    { name: 'floatingchange', parameters: 'viewport,positioned' },
    { name: 'fullscreen', parameters: 'viewport' },
    { name: 'hide', parameters: 'viewport' },
    { name: 'initialize', parameters: 'viewport' },
    { name: 'maximize', parameters: 'viewport' },
    { name: 'move', parameters: 'viewport,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'viewport,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: 'viewport,newOrientation,width,height' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'viewport,positioned' },
    { name: 'ready', parameters: 'viewport' },
    { name: 'remove', parameters: 'viewport,item,index' },
    { name: 'removed', parameters: 'viewport,container,index' },
    { name: 'renderedchange', parameters: 'viewport,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'viewport' },
    { name: 'tofront', parameters: 'viewport' },
    { name: 'updatedata', parameters: 'viewport,newData' },
    { name: 'ready', parameters: '' }
];
viewportMetaData.OUTPUTNAMES = [
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
    'maximize',
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'ready',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var viewport = viewport_1 = (function (_super) {
    __extends(viewport, _super);
    function viewport(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, viewportMetaData) || this;
    }
    viewport.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    viewport.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, viewportMetaData); };
    return viewport;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], viewport.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], viewport.prototype, "dynamicRef", void 0);
viewport = viewport_1 = __decorate([
    core_1.Component({
        selector: viewportMetaData.XTYPE,
        inputs: viewportMetaData.INPUTNAMES,
        outputs: viewportMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return viewport_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], viewport);
exports.viewport = viewport;
var viewport_1;
