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
var panelheaderMetaData = (function () {
    function panelheaderMetaData() {
    }
    return panelheaderMetaData;
}());
panelheaderMetaData.XTYPE = 'panelheader';
panelheaderMetaData.INPUTNAMES = [
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
    'title',
    'titleAlign',
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
panelheaderMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,panelheader,oldActiveItem' },
    { name: 'add', parameters: 'panelheader,item,index' },
    { name: 'added', parameters: 'panelheader,container,index' },
    { name: 'beforehide', parameters: 'panelheader' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'panelheader' },
    { name: 'beforetofront', parameters: 'panelheader' },
    { name: 'deactivate', parameters: 'oldActiveItem,panelheader,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'panelheader' },
    { name: 'floatingchange', parameters: 'panelheader,positioned' },
    { name: 'fullscreen', parameters: 'panelheader' },
    { name: 'hide', parameters: 'panelheader' },
    { name: 'initialize', parameters: 'panelheader' },
    { name: 'move', parameters: 'panelheader,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'panelheader,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'panelheader,positioned' },
    { name: 'remove', parameters: 'panelheader,item,index' },
    { name: 'removed', parameters: 'panelheader,container,index' },
    { name: 'renderedchange', parameters: 'panelheader,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'panelheader' },
    { name: 'tofront', parameters: 'panelheader' },
    { name: 'updatedata', parameters: 'panelheader,newData' },
    { name: 'ready', parameters: '' }
];
panelheaderMetaData.OUTPUTNAMES = [
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
var panelheader = panelheader_1 = (function (_super) {
    __extends(panelheader, _super);
    function panelheader(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, panelheaderMetaData) || this;
    }
    panelheader.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    panelheader.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, panelheaderMetaData); };
    return panelheader;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], panelheader.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], panelheader.prototype, "dynamicRef", void 0);
panelheader = panelheader_1 = __decorate([
    core_1.Component({
        selector: panelheaderMetaData.XTYPE,
        inputs: panelheaderMetaData.INPUTNAMES,
        outputs: panelheaderMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return panelheader_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], panelheader);
exports.panelheader = panelheader;
var panelheader_1;
