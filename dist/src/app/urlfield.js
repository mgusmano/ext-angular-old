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
var urlfieldMetaData = (function () {
    function urlfieldMetaData() {
    }
    return urlfieldMetaData;
}());
urlfieldMetaData.XTYPE = 'urlfield';
urlfieldMetaData.INPUTNAMES = [
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
    'maxLength',
    'maxWidth',
    'minHeight',
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
urlfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'urlfield,e' },
    { name: 'added', parameters: 'urlfield,container,index' },
    { name: 'beforehide', parameters: 'urlfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'urlfield' },
    { name: 'beforetofront', parameters: 'urlfield' },
    { name: 'blur', parameters: 'urlfield,e' },
    { name: 'change', parameters: 'urlfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'urlfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'urlfield' },
    { name: 'floatingchange', parameters: 'urlfield,positioned' },
    { name: 'focus', parameters: 'urlfield,e' },
    { name: 'fullscreen', parameters: 'urlfield' },
    { name: 'hide', parameters: 'urlfield' },
    { name: 'initialize', parameters: 'urlfield' },
    { name: 'keyup', parameters: 'urlfield,e' },
    { name: 'mousedown', parameters: 'urlfield,e' },
    { name: 'moved', parameters: 'urlfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'urlfield,e' },
    { name: 'positionedchange', parameters: 'urlfield,positioned' },
    { name: 'removed', parameters: 'urlfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'urlfield' },
    { name: 'tofront', parameters: 'urlfield' },
    { name: 'updatedata', parameters: 'urlfield,newData' },
    { name: 'ready', parameters: '' }
];
urlfieldMetaData.OUTPUTNAMES = [
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
    'tofront',
    'updatedata',
    'ready'
];
var urlfield = urlfield_1 = (function (_super) {
    __extends(urlfield, _super);
    function urlfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, urlfieldMetaData) || this;
    }
    urlfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    urlfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, urlfieldMetaData); };
    return urlfield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], urlfield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], urlfield.prototype, "dynamicRef", void 0);
urlfield = urlfield_1 = __decorate([
    core_1.Component({
        selector: urlfieldMetaData.XTYPE,
        inputs: urlfieldMetaData.INPUTNAMES,
        outputs: urlfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return urlfield_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], urlfield);
exports.urlfield = urlfield;
var urlfield_1;
