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
var spinnerfieldMetaData = (function () {
    function spinnerfieldMetaData() {
    }
    return spinnerfieldMetaData;
}());
spinnerfieldMetaData.XTYPE = 'spinnerfield';
spinnerfieldMetaData.INPUTNAMES = [
    'accelerateOnTapHold',
    'alwaysOnTop',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'axisLock',
    'baseCls',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'clearIcon',
    'cls',
    'component',
    'contentEl',
    'controller',
    'cycle',
    'data',
    'defaultListenerScope',
    'defaultValue',
    'disabled',
    'docked',
    'draggable',
    'enterAnimation',
    'exitAnimation',
    'flex',
    'floated',
    'fullscreen',
    'groupButtons',
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
    'maxLength',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'name',
    'padding',
    'placeHolder',
    'plugins',
    'publishes',
    'readOnly',
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
    'stepValue',
    'style',
    'styleHtmlCls',
    'styleHtmlContent',
    'tabIndex',
    'textAlign',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggers',
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
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
spinnerfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: '' },
    { name: 'added', parameters: 'spinnerfield,container,index' },
    { name: 'beforehide', parameters: 'spinnerfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'spinnerfield' },
    { name: 'beforetofront', parameters: 'spinnerfield' },
    { name: 'blur', parameters: 'spinnerfield,e' },
    { name: 'change', parameters: 'spinnerfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'spinnerfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'spinnerfield' },
    { name: 'floatingchange', parameters: 'spinnerfield,positioned' },
    { name: 'focus', parameters: 'spinnerfield,e' },
    { name: 'fullscreen', parameters: 'spinnerfield' },
    { name: 'hide', parameters: 'spinnerfield' },
    { name: 'initialize', parameters: 'spinnerfield' },
    { name: 'keyup', parameters: 'spinnerfield,e' },
    { name: 'mousedown', parameters: 'spinnerfield,e' },
    { name: 'moved', parameters: 'spinnerfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'spinnerfield,e' },
    { name: 'positionedchange', parameters: 'spinnerfield,positioned' },
    { name: 'removed', parameters: 'spinnerfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'spinnerfield' },
    { name: 'spin', parameters: 'spinnerfield,value,direction' },
    { name: 'spindown', parameters: 'spinnerfield,value' },
    { name: 'spinup', parameters: 'spinnerfield,value' },
    { name: 'tofront', parameters: 'spinnerfield' },
    { name: 'updatedata', parameters: '' },
    { name: 'ready', parameters: '' }
];
spinnerfieldMetaData.OUTPUTNAMES = [
    'action',
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'blur',
    'change',
    'clearicontap',
    'destroy',
    'erased',
    'floatingchange',
    'focus',
    'fullscreen',
    'hide',
    'initialize',
    'keyup',
    'mousedown',
    'moved',
    'orientationchange',
    'painted',
    'paste',
    'positionedchange',
    'removed',
    'resize',
    'show',
    'spin',
    'spindown',
    'spinup',
    'tofront',
    'updatedata',
    'ready'
];
var spinnerfield = spinnerfield_1 = (function (_super) {
    __extends(spinnerfield, _super);
    function spinnerfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, spinnerfieldMetaData) || this;
    }
    spinnerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    spinnerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, spinnerfieldMetaData); };
    return spinnerfield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], spinnerfield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], spinnerfield.prototype, "dynamicRef", void 0);
spinnerfield = spinnerfield_1 = __decorate([
    core_1.Component({
        selector: spinnerfieldMetaData.XTYPE,
        inputs: spinnerfieldMetaData.INPUTNAMES,
        outputs: spinnerfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return spinnerfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], spinnerfield);
exports.spinnerfield = spinnerfield;
var spinnerfield_1;
