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
var filefieldMetaData = (function () {
    function filefieldMetaData() {
    }
    return filefieldMetaData;
}());
filefieldMetaData.XTYPE = 'filefield';
filefieldMetaData.INPUTNAMES = [
    'accept',
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'capture',
    'centered',
    'clearIcon',
    'cls',
    'component',
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
    'inputCls',
    'inputType',
    'isFocused',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'label',
    'labelAlign',
    'labelCls',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'multiple',
    'name',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'required',
    'right',
    'scrollable',
    'session',
    'shadow',
    'shim',
    'showAnimation',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'tabIndex',
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
filefieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'filefield,container,index' },
    { name: 'beforehide', parameters: 'filefield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'filefield' },
    { name: 'beforetofront', parameters: 'filefield' },
    { name: 'change', parameters: 'filefield,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'filefield' },
    { name: 'floatingchange', parameters: 'filefield,positioned' },
    { name: 'fullscreen', parameters: 'filefield' },
    { name: 'hide', parameters: 'filefield' },
    { name: 'initialize', parameters: 'filefield' },
    { name: 'moved', parameters: 'filefield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'filefield,positioned' },
    { name: 'removed', parameters: 'filefield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'filefield' },
    { name: 'tofront', parameters: 'filefield' },
    { name: 'updatedata', parameters: 'filefield,newData' },
    { name: 'ready', parameters: '' }
];
filefieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
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
var filefield = filefield_1 = (function (_super) {
    __extends(filefield, _super);
    function filefield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, filefieldMetaData) || this;
    }
    filefield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    filefield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, filefieldMetaData); };
    return filefield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], filefield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], filefield.prototype, "dynamicRef", void 0);
filefield = filefield_1 = __decorate([
    core_1.Component({
        selector: filefieldMetaData.XTYPE,
        inputs: filefieldMetaData.INPUTNAMES,
        outputs: filefieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return filefield_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], filefield);
exports.filefield = filefield;
var filefield_1;
