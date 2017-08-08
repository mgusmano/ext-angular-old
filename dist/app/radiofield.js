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
var radiofieldMetaData = (function () {
    function radiofieldMetaData() {
    }
    return radiofieldMetaData;
}());
radiofieldMetaData.XTYPE = 'radiofield';
radiofieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'checked',
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
    'labelMaskTap',
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
radiofieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'radiofield,container,index' },
    { name: 'beforehide', parameters: 'radiofield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'radiofield' },
    { name: 'beforetofront', parameters: 'radiofield' },
    { name: 'change', parameters: 'radiofield,newValue,oldValue' },
    { name: 'check', parameters: 'radiofield' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'radiofield' },
    { name: 'floatingchange', parameters: 'radiofield,positioned' },
    { name: 'fullscreen', parameters: 'radiofield' },
    { name: 'hide', parameters: 'radiofield' },
    { name: 'initialize', parameters: 'radiofield' },
    { name: 'moved', parameters: 'radiofield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'radiofield,positioned' },
    { name: 'removed', parameters: 'radiofield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'radiofield' },
    { name: 'tofront', parameters: 'radiofield' },
    { name: 'uncheck', parameters: 'radiofield' },
    { name: 'updatedata', parameters: 'radiofield,newData' },
    { name: 'ready', parameters: '' }
];
radiofieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'check',
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
    'uncheck',
    'updatedata',
    'ready'
];
var radiofield = radiofield_1 = (function (_super) {
    __extends(radiofield, _super);
    function radiofield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, radiofieldMetaData) || this;
    }
    radiofield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    radiofield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, radiofieldMetaData); };
    return radiofield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], radiofield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], radiofield.prototype, "dynamicRef", void 0);
radiofield = radiofield_1 = __decorate([
    core_1.Component({
        selector: radiofieldMetaData.XTYPE,
        inputs: radiofieldMetaData.INPUTNAMES,
        outputs: radiofieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return radiofield_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], radiofield);
exports.radiofield = radiofield;
var radiofield_1;
