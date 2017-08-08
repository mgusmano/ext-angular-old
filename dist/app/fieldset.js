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
var fieldsetMetaData = (function () {
    function fieldsetMetaData() {
    }
    return fieldsetMetaData;
}());
fieldsetMetaData.XTYPE = 'fieldset';
fieldsetMetaData.INPUTNAMES = [
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
    'fieldSeparators',
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'inputBorders',
    'instructions',
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
fieldsetMetaData.OUTPUTS = [
    { name: 'activate', parameters: 'newActiveItem,fieldset,oldActiveItem' },
    { name: 'add', parameters: 'fieldset,item,index' },
    { name: 'added', parameters: 'fieldset,container,index' },
    { name: 'beforehide', parameters: 'fieldset' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'fieldset' },
    { name: 'beforetofront', parameters: 'fieldset' },
    { name: 'deactivate', parameters: 'oldActiveItem,fieldset,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'fieldset' },
    { name: 'floatingchange', parameters: 'fieldset,positioned' },
    { name: 'fullscreen', parameters: 'fieldset' },
    { name: 'hide', parameters: 'fieldset' },
    { name: 'initialize', parameters: 'fieldset' },
    { name: 'move', parameters: 'fieldset,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'fieldset,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'fieldset,positioned' },
    { name: 'remove', parameters: 'fieldset,item,index' },
    { name: 'removed', parameters: 'fieldset,container,index' },
    { name: 'renderedchange', parameters: 'fieldset,item,rendered' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'fieldset' },
    { name: 'tofront', parameters: 'fieldset' },
    { name: 'updatedata', parameters: 'fieldset,newData' },
    { name: 'ready', parameters: '' }
];
fieldsetMetaData.OUTPUTNAMES = [
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
var fieldset = fieldset_1 = (function (_super) {
    __extends(fieldset, _super);
    function fieldset(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, fieldsetMetaData) || this;
    }
    fieldset.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    fieldset.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, fieldsetMetaData); };
    return fieldset;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], fieldset.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], fieldset.prototype, "dynamicRef", void 0);
fieldset = fieldset_1 = __decorate([
    core_1.Component({
        selector: fieldsetMetaData.XTYPE,
        inputs: fieldsetMetaData.INPUTNAMES,
        outputs: fieldsetMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return fieldset_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], fieldset);
exports.fieldset = fieldset;
var fieldset_1;
