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
var sheetMetaData = (function () {
    function sheetMetaData() {
    }
    return sheetMetaData;
}());
sheetMetaData.XTYPE = 'sheet';
sheetMetaData.INPUTNAMES = [
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
    'stretchX',
    'stretchY',
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
sheetMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,sheet,oldActiveItem' },
    { name: 'add', parameters: 'sheet,item,index' },
    { name: 'added', parameters: 'sheet,container,index' },
    { name: 'beforehide', parameters: 'sheet' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'sheet' },
    { name: 'beforetofront', parameters: 'sheet' },
    { name: 'deactivate', parameters: 'oldActiveItem,sheet,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'sheet' },
    { name: 'floatingchange', parameters: 'sheet,positioned' },
    { name: 'fullscreen', parameters: 'sheet' },
    { name: 'hide', parameters: 'sheet' },
    { name: 'initialize', parameters: 'sheet' },
    { name: 'move', parameters: 'sheet,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'sheet,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'sheet,positioned' },
    { name: 'remove', parameters: 'sheet,item,index' },
    { name: 'removed', parameters: 'sheet,container,index' },
    { name: 'renderedchange', parameters: 'sheet,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'sheet' },
    { name: 'tofront', parameters: 'sheet' },
    { name: 'updatedata', parameters: 'sheet,newData' },
    { name: 'ready', parameters: '' }
];
sheetMetaData.OUTPUTNAMES = [
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
var sheet = sheet_1 = (function (_super) {
    __extends(sheet, _super);
    function sheet(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, sheetMetaData) || this;
    }
    sheet.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    sheet.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, sheetMetaData); };
    return sheet;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], sheet.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], sheet.prototype, "dynamicRef", void 0);
sheet = sheet_1 = __decorate([
    core_1.Component({
        selector: sheetMetaData.XTYPE,
        inputs: sheetMetaData.INPUTNAMES,
        outputs: sheetMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return sheet_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], sheet);
exports.sheet = sheet;
var sheet_1;
