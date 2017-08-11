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
var widgetMetaData = (function () {
    function widgetMetaData() {
    }
    return widgetMetaData;
}());
widgetMetaData.XTYPE = 'widget';
widgetMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'baseCls',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'flex',
    'floated',
    'height',
    'hidden',
    'id',
    'itemId',
    'listeners',
    'plugins',
    'publishes',
    'reference',
    'relative',
    'session',
    'shadow',
    'shim',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
widgetMetaData.OUTPUTS = [
    { name: 'beforetofront', parameters: 'widget' },
    { name: 'tofront', parameters: 'widget' },
    { name: 'ready', parameters: '' }
];
widgetMetaData.OUTPUTNAMES = [
    'beforetofront',
    'tofront',
    'ready'
];
var widget = widget_1 = (function (_super) {
    __extends(widget, _super);
    function widget(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, widgetMetaData) || this;
    }
    widget.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    widget.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, widgetMetaData); };
    return widget;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], widget.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], widget.prototype, "dynamicRef", void 0);
widget = widget_1 = __decorate([
    core_1.Component({
        selector: widgetMetaData.XTYPE,
        inputs: widgetMetaData.INPUTNAMES,
        outputs: widgetMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return widget_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], widget);
exports.widget = widget;
var widget_1;
