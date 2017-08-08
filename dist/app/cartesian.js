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
var cartesianMetaData = (function () {
    function cartesianMetaData() {
    }
    return cartesianMetaData;
}());
cartesianMetaData.XTYPE = 'cartesian';
cartesianMetaData.INPUTNAMES = [
    'animation',
    'axes',
    'background',
    'colors',
    'engine',
    'flipXY',
    'gradients',
    'highlightItem',
    'innerPadding',
    'insetPadding',
    'interactions',
    'legend',
    'mainRect',
    'resizeHandler',
    'series',
    'sprites',
    'store',
    'style',
    'theme',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
cartesianMetaData.OUTPUTS = [
    { name: 'beforerefresh', parameters: 'cartesian' },
    { name: 'bodyresize', parameters: 'size' },
    { name: 'itemclick', parameters: 'chart,item,event' },
    { name: 'itemdblclick', parameters: 'chart,item,event' },
    { name: 'itemmousedown', parameters: 'chart,item,event' },
    { name: 'itemmousemove', parameters: 'chart,item,event' },
    { name: 'itemmouseout', parameters: 'chart,item,event' },
    { name: 'itemmouseover', parameters: 'chart,item,event' },
    { name: 'itemmouseup', parameters: 'chart,item,event' },
    { name: 'itemtap', parameters: 'chart,item,event' },
    { name: 'redraw', parameters: 'cartesian' },
    { name: 'refresh', parameters: 'cartesian' },
    { name: 'spriteclick', parameters: 'sprite,event' },
    { name: 'spritedblclick', parameters: 'sprite,event' },
    { name: 'spritemousedown', parameters: 'sprite,event' },
    { name: 'spritemousemove', parameters: 'sprite,event' },
    { name: 'spritemouseout', parameters: 'sprite,event' },
    { name: 'spritemouseover', parameters: 'sprite,event' },
    { name: 'spritemouseup', parameters: 'sprite,event' },
    { name: 'spritetap', parameters: 'sprite,event' },
    { name: 'storechange', parameters: 'chart,newStore,oldStore' },
    { name: 'ready', parameters: '' }
];
cartesianMetaData.OUTPUTNAMES = [
    'beforerefresh',
    'bodyresize',
    'itemclick',
    'itemdblclick',
    'itemmousedown',
    'itemmousemove',
    'itemmouseout',
    'itemmouseover',
    'itemmouseup',
    'itemtap',
    'redraw',
    'refresh',
    'spriteclick',
    'spritedblclick',
    'spritemousedown',
    'spritemousemove',
    'spritemouseout',
    'spritemouseover',
    'spritemouseup',
    'spritetap',
    'storechange',
    'ready'
];
var cartesian = cartesian_1 = (function (_super) {
    __extends(cartesian, _super);
    function cartesian(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, cartesianMetaData) || this;
    }
    cartesian.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    cartesian.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, cartesianMetaData); };
    return cartesian;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], cartesian.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], cartesian.prototype, "dynamicRef", void 0);
cartesian = cartesian_1 = __decorate([
    core_1.Component({
        selector: cartesianMetaData.XTYPE,
        inputs: cartesianMetaData.INPUTNAMES,
        outputs: cartesianMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return cartesian_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], cartesian);
exports.cartesian = cartesian;
var cartesian_1;
