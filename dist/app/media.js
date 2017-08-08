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
var mediaMetaData = (function () {
    function mediaMetaData() {
    }
    return mediaMetaData;
}());
mediaMetaData.XTYPE = 'media';
mediaMetaData.INPUTNAMES = [
    'alwaysOnTop',
    'autoPause',
    'autoResume',
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
    'enableControls',
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
    'loop',
    'margin',
    'maxHeight',
    'maxWidth',
    'media',
    'minHeight',
    'minWidth',
    'modal',
    'muted',
    'padding',
    'plugins',
    'preload',
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
    'url',
    'useBodyElement',
    'userCls',
    'viewModel',
    'volume',
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
mediaMetaData.OUTPUTS = [
    { name: 'added', parameters: 'media,container,index' },
    { name: 'beforehide', parameters: 'media' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeshow', parameters: 'media' },
    { name: 'beforetofront', parameters: 'media' },
    { name: 'destroy', parameters: '' },
    { name: 'ended', parameters: 'media,time' },
    { name: 'erased', parameters: 'media' },
    { name: 'floatingchange', parameters: 'media,positioned' },
    { name: 'fullscreen', parameters: 'media' },
    { name: 'hide', parameters: 'media' },
    { name: 'initialize', parameters: 'media' },
    { name: 'moved', parameters: 'media,container,toIndex,fromIndex' },
    { name: 'mutedchange', parameters: 'media,muted' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'element' },
    { name: 'pause', parameters: 'media,time' },
    { name: 'play', parameters: 'media' },
    { name: 'positionedchange', parameters: 'media,positioned' },
    { name: 'removed', parameters: 'media,container,index' },
    { name: 'resize', parameters: 'element' },
    { name: 'show', parameters: 'media' },
    { name: 'stop', parameters: 'media' },
    { name: 'timeupdate', parameters: 'media,time' },
    { name: 'tofront', parameters: 'media' },
    { name: 'updatedata', parameters: 'media,newData' },
    { name: 'volumechange', parameters: 'media,volume' },
    { name: 'ready', parameters: '' }
];
mediaMetaData.OUTPUTNAMES = [
    'added',
    'beforehide',
    'beforeorientationchange',
    'beforeshow',
    'beforetofront',
    'destroy',
    'ended',
    'erased',
    'floatingchange',
    'fullscreen',
    'hide',
    'initialize',
    'moved',
    'mutedchange',
    'orientationchange',
    'painted',
    'pause',
    'play',
    'positionedchange',
    'removed',
    'resize',
    'show',
    'stop',
    'timeupdate',
    'tofront',
    'updatedata',
    'volumechange',
    'ready'
];
var media = media_1 = (function (_super) {
    __extends(media, _super);
    function media(eRef, resolver, vcRef) {
        return _super.call(this, eRef, resolver, vcRef, mediaMetaData) || this;
    }
    media.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    media.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, mediaMetaData); };
    return media;
}(base_1.base));
__decorate([
    core_1.ContentChildren(base_1.base, { read: base_1.base }),
    __metadata("design:type", core_1.QueryList)
], media.prototype, "extbaseRef", void 0);
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], media.prototype, "dynamicRef", void 0);
media = media_1 = __decorate([
    core_1.Component({
        selector: mediaMetaData.XTYPE,
        inputs: mediaMetaData.INPUTNAMES,
        outputs: mediaMetaData.OUTPUTNAMES,
        providers: [{ provide: base_1.base, useExisting: core_1.forwardRef(function () { return media_1; }) }],
        template: '<template #dynamic></template>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
], media);
exports.media = media;
var media_1;
