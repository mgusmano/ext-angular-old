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
import { Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { base } from './base';
var treelistMetaData = (function () {
    function treelistMetaData() {
    }
    return treelistMetaData;
}());
treelistMetaData.XTYPE = 'treelist';
treelistMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'baseCls',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'defaults',
    'expanderOnly',
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
    'selection',
    'selectOnExpander',
    'session',
    'shadow',
    'shim',
    'singleExpand',
    'store',
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
treelistMetaData.OUTPUTS = [
    { name: 'beforetofront', parameters: 'treelist' },
    { name: 'tofront', parameters: 'treelist' },
    { name: 'ready', parameters: '' }
];
treelistMetaData.OUTPUTNAMES = [
    'beforetofront',
    'tofront',
    'ready'
];
var treelist = treelist_1 = (function (_super) {
    __extends(treelist, _super);
    function treelist(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, treelistMetaData) || this;
    }
    treelist.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    treelist.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, treelistMetaData); };
    return treelist;
}(base));
__decorate([
    ContentChildren(base, { read: base }),
    __metadata("design:type", QueryList)
], treelist.prototype, "extbaseRef", void 0);
__decorate([
    ViewChild('dynamic', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], treelist.prototype, "dynamicRef", void 0);
treelist = treelist_1 = __decorate([
    Component({
        selector: treelistMetaData.XTYPE,
        inputs: treelistMetaData.INPUTNAMES,
        outputs: treelistMetaData.OUTPUTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(function () { return treelist_1; }) }],
        template: '<ng-template #dynamic></ng-template>'
    }),
    __metadata("design:paramtypes", [ElementRef, ComponentFactoryResolver, ViewContainerRef])
], treelist);
export { treelist };
var treelist_1;
