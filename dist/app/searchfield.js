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
var searchfieldMetaData = (function () {
    function searchfieldMetaData() {
    }
    return searchfieldMetaData;
}());
searchfieldMetaData.XTYPE = 'searchfield';
searchfieldMetaData.INPUTNAMES = [
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
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
searchfieldMetaData.OUTPUTS = [
    { name: 'action', parameters: 'searchfield,e' },
    { name: 'added', parameters: 'searchfield,container,index' },
    { name: 'beforehide', parameters: 'searchfield' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'searchfield' },
    { name: 'beforetofront', parameters: 'searchfield' },
    { name: 'blur', parameters: 'searchfield,e' },
    { name: 'change', parameters: 'searchfield,newValue,oldValue' },
    { name: 'clearicontap', parameters: 'searchfield,input,e' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'searchfield' },
    { name: 'floatingchange', parameters: 'searchfield,positioned' },
    { name: 'focus', parameters: 'searchfield,e' },
    { name: 'fullscreen', parameters: 'searchfield' },
    { name: 'hide', parameters: 'searchfield' },
    { name: 'initialize', parameters: 'searchfield' },
    { name: 'keyup', parameters: 'searchfield,e' },
    { name: 'mousedown', parameters: 'searchfield,e' },
    { name: 'moved', parameters: 'searchfield,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'paste', parameters: 'searchfield,e' },
    { name: 'positionedchange', parameters: 'searchfield,positioned' },
    { name: 'removed', parameters: 'searchfield,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'searchfield' },
    { name: 'tofront', parameters: 'searchfield' },
    { name: 'updatedata', parameters: 'searchfield,newData' },
    { name: 'ready', parameters: '' }
];
searchfieldMetaData.OUTPUTNAMES = [
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
var searchfield = searchfield_1 = (function (_super) {
    __extends(searchfield, _super);
    function searchfield(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, searchfieldMetaData) || this;
    }
    searchfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    searchfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, searchfieldMetaData); };
    return searchfield;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], searchfield.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], searchfield.prototype, "dynamicRef", void 0);
searchfield = searchfield_1 = __decorate([
    core_1.Component({
        selector: searchfieldMetaData.XTYPE,
        inputs: searchfieldMetaData.INPUTNAMES,
        outputs: searchfieldMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return searchfield_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], searchfield);
exports.searchfield = searchfield;
var searchfield_1;
