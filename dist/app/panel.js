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
var panelMetaData = (function () {
    function panelMetaData() {
    }
    return panelMetaData;
}());
panelMetaData.XTYPE = 'panel';
panelMetaData.INPUTNAMES = [
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
    'enterAnimation',
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
    'toFrontOnShow',
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
panelMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,panel,oldActiveItem' },
    { name: 'add', parameters: 'panel,item,index' },
    { name: 'added', parameters: 'panel,container,index' },
    { name: 'beforehide', parameters: 'panel' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'panel' },
    { name: 'beforetofront', parameters: 'panel' },
    { name: 'deactivate', parameters: 'oldActiveItem,panel,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'panel' },
    { name: 'floatingchange', parameters: 'panel,positioned' },
    { name: 'fullscreen', parameters: 'panel' },
    { name: 'hide', parameters: 'panel' },
    { name: 'initialize', parameters: 'panel' },
    { name: 'move', parameters: 'panel,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'panel,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'panel,positioned' },
    { name: 'remove', parameters: 'panel,item,index' },
    { name: 'removed', parameters: 'panel,container,index' },
    { name: 'renderedchange', parameters: 'panel,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'panel' },
    { name: 'tofront', parameters: 'panel' },
    { name: 'updatedata', parameters: 'panel,newData' },
    { name: 'ready', parameters: '' }
];
panelMetaData.OUTPUTNAMES = [
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
var panel = panel_1 = (function (_super) {
    __extends(panel, _super);
    function panel(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, panelMetaData) || this;
    }
    panel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    panel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, panelMetaData); };
    return panel;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], panel.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], panel.prototype, "dynamicRef", void 0);
panel = panel_1 = __decorate([
    core_1.Component({
        selector: panelMetaData.XTYPE,
        inputs: panelMetaData.INPUTNAMES,
        outputs: panelMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return panel_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], panel);
exports.panel = panel;
var panel_1;
