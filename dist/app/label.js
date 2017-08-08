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
var labelMetaData = (function () {
    function labelMetaData() {
    }
    return labelMetaData;
}());
labelMetaData.XTYPE = 'label';
labelMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'axisLock',
    'baseCls',
    'bind',
    'border',
    'bottom',
    'centered',
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
    'flex',
    'floated',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideOnMaskTap',
    'html',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
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
labelMetaData.OUTPUTS = [
    { name: 'added', parameters: 'label,container,index' },
    { name: 'beforehide', parameters: 'label' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'label' },
    { name: 'beforetofront', parameters: 'label' },
    { name: 'destroy', parameters: '' },
    { name: 'erased', parameters: 'label' },
    { name: 'floatingchange', parameters: 'label,positioned' },
    { name: 'fullscreen', parameters: 'label' },
    { name: 'hide', parameters: 'label' },
    { name: 'initialize', parameters: 'label' },
    { name: 'moved', parameters: 'label,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'positionedchange', parameters: 'label,positioned' },
    { name: 'removed', parameters: 'label,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'label' },
    { name: 'tofront', parameters: 'label' },
    { name: 'updatedata', parameters: 'label,newData' },
    { name: 'ready', parameters: '' }
];
labelMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
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
var label = label_1 = (function (_super) {
    __extends(label, _super);
    function label(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, labelMetaData) || this;
    }
    label.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    label.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, labelMetaData); };
    return label;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], label.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], label.prototype, "dynamicRef", void 0);
label = label_1 = __decorate([
    core_1.Component({
        selector: labelMetaData.XTYPE,
        inputs: labelMetaData.INPUTNAMES,
        outputs: labelMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return label_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], label);
exports.label = label;
var label_1;
