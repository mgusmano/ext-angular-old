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
var sliderfieldMetaData = (function () {
    function sliderfieldMetaData() {
    }
    return sliderfieldMetaData;
}());
sliderfieldMetaData.XTYPE = 'sliderfield';
sliderfieldMetaData.INPUTNAMES = [
    'alwaysOnTop',
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
    'increment',
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
    'liveUpdate',
    'margin',
    'maxHeight',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'name',
    'padding',
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
    'values',
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
sliderfieldMetaData.OUTPUTS = [
    { name: 'added', parameters: 'sliderfield,container,index' },
    { name: 'beforehide', parameters: 'sliderfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'sliderfield' },
    { name: 'beforetofront', parameters: 'sliderfield' },
    { name: 'change', parameters: 'me,newValue,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'drag', parameters: 'sliderfield,sl,thumb,e' },
    { name: 'dragchange', parameters: 'me,sl,thumb,newValue,oldValue' },
    { name: 'dragend', parameters: 'sliderfield,sl,thumb,value,e' },
    { name: 'dragstart', parameters: 'sliderfield,sl,thumb,value,e' },
    { name: 'erased', parameters: 'sliderfield' },
    { name: 'floatingchange', parameters: 'sliderfield,positioned' },
    { name: 'fullscreen', parameters: 'sliderfield' },
    { name: 'hide', parameters: 'sliderfield' },
    { name: 'initialize', parameters: 'sliderfield' },
    { name: 'moved', parameters: 'sliderfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'sliderfield,positioned' },
    { name: 'removed', parameters: 'sliderfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'sliderfield' },
    { name: 'tofront', parameters: 'sliderfield' },
    { name: 'updatedata', parameters: 'sliderfield,newData' },
    { name: 'ready', parameters: '' }
];
sliderfieldMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'change',
    'destroy',
    'drag',
    'dragchange',
    'dragend',
    'dragstart',
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
var sliderfield = sliderfield_1 = (function (_super) {
    __extends(sliderfield, _super);
    function sliderfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, sliderfieldMetaData) || this;
    }
    sliderfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    sliderfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, sliderfieldMetaData); };
    return sliderfield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], sliderfield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], sliderfield.prototype, "dynamicRef", void 0);
sliderfield = sliderfield_1 = __decorate([
    core_1.Component({
        selector: sliderfieldMetaData.XTYPE,
        inputs: sliderfieldMetaData.INPUTNAMES,
        outputs: sliderfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return sliderfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], sliderfield);
exports.sliderfield = sliderfield;
var sliderfield_1;
