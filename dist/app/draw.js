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
var drawMetaData = (function () {
    function drawMetaData() {
    }
    return drawMetaData;
}());
drawMetaData.XTYPE = 'draw';
drawMetaData.INPUTNAMES = [
    'engine',
    'gradients',
    'resizeHandler',
    'sprites',
    'flex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
drawMetaData.OUTPUTS = [
    { name: 'bodyresize', parameters: 'size' },
    { name: 'spriteclick', parameters: 'sprite,event' },
    { name: 'spritedblclick', parameters: 'sprite,event' },
    { name: 'spritemousedown', parameters: 'sprite,event' },
    { name: 'spritemousemove', parameters: 'sprite,event' },
    { name: 'spritemouseout', parameters: 'sprite,event' },
    { name: 'spritemouseover', parameters: 'sprite,event' },
    { name: 'spritemouseup', parameters: 'sprite,event' },
    { name: 'spritetap', parameters: 'sprite,event' },
    { name: 'ready', parameters: '' }
];
drawMetaData.OUTPUTNAMES = [
    'bodyresize',
    'spriteclick',
    'spritedblclick',
    'spritemousedown',
    'spritemousemove',
    'spritemouseout',
    'spritemouseover',
    'spritemouseup',
    'spritetap',
    'ready'
];
var draw = draw_1 = (function (_super) {
    __extends(draw, _super);
    function draw(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, drawMetaData) || this;
    }
    draw.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    draw.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, drawMetaData); };
    return draw;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], draw.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], draw.prototype, "dynamicRef", void 0);
draw = draw_1 = __decorate([
    core_1.Component({
        selector: drawMetaData.XTYPE,
        inputs: drawMetaData.INPUTNAMES,
        outputs: drawMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return draw_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], draw);
exports.draw = draw;
var draw_1;
