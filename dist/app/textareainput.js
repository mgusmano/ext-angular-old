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
var textareainputMetaData = (function () {
    function textareainputMetaData() {
    }
    return textareainputMetaData;
}());
textareainputMetaData.XTYPE = 'textareainput';
textareainputMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
    'checked',
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
    'fastFocus',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'isFocused',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxLength',
    'maxRows',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'name',
    'originalValue',
    'padding',
    'pattern',
    'placeHolder',
    'plugins',
    'publishes',
    'readOnly',
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
    'startValue',
    'stepValue',
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
    'type',
    'ui',
    'useBodyElement',
    'useMask',
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
textareainputMetaData.OUTPUTS = [
    { name: 'added', parameters: 'textareainput,container,index' },
    { name: 'beforehide', parameters: 'textareainput' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'textareainput' },
    { name: 'beforetofront', parameters: 'textareainput' },
    { name: 'blur', parameters: 'e' },
    { name: 'click', parameters: 'e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'textareainput' },
    { name: 'floatingchange', parameters: 'textareainput,positioned' },
    { name: 'focus', parameters: 'e' },
    { name: 'fullscreen', parameters: 'textareainput' },
    { name: 'hide', parameters: 'textareainput' },
    { name: 'initialize', parameters: 'textareainput' },
    { name: 'keyup', parameters: 'e' },
    { name: 'masktap', parameters: 'textareainput,e' },
    { name: 'mousedown', parameters: 'e' },
    { name: 'moved', parameters: 'textareainput,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'e' },
    { name: 'positionedchange', parameters: 'textareainput,positioned' },
    { name: 'removed', parameters: 'textareainput,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'textareainput' },
    { name: 'tofront', parameters: 'textareainput' },
    { name: 'updatedata', parameters: 'textareainput,newData' },
    { name: 'ready', parameters: '' }
];
textareainputMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'blur',
    'click',
    'destroy',
    'erased',
    'floatingchange',
    'focus',
    'fullscreen',
    'hide',
    'initialize',
    'keyup',
    'masktap',
    'mousedown',
    'moved',
    'orientationchange',
    'painted',
    'paste',
    'positionedchange',
    'removed',
    'resize',
    'show',
    'tofront',
    'updatedata',
    'ready'
];
var textareainput = textareainput_1 = (function (_super) {
    __extends(textareainput, _super);
    function textareainput(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, textareainputMetaData) || this;
    }
    textareainput.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    textareainput.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, textareainputMetaData); };
    return textareainput;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], textareainput.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], textareainput.prototype, "dynamicRef", void 0);
textareainput = textareainput_1 = __decorate([
    core_1.Component({
        selector: textareainputMetaData.XTYPE,
        inputs: textareainputMetaData.INPUTNAMES,
        outputs: textareainputMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return textareainput_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], textareainput);
exports.textareainput = textareainput;
var textareainput_1;
