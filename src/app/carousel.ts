import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.carousel.Carousel
class carouselMetaData {
	public static XTYPE: string = 'carousel';
	public static INPUTNAMES: string[] = [
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
		'direction',
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
		'indicator',
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
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,carousel,oldActiveItem'},
		{name:'add',parameters:'carousel,item,index'},
		{name:'added',parameters:'carousel,container,index'},
		{name:'beforehide',parameters:'carousel'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'carousel'},
		{name:'beforetofront',parameters:'carousel'},
		{name:'deactivate',parameters:'oldActiveItem,carousel,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'carousel'},
		{name:'floatingchange',parameters:'carousel,positioned'},
		{name:'fullscreen',parameters:'carousel'},
		{name:'hide',parameters:'carousel'},
		{name:'initialize',parameters:'carousel'},
		{name:'move',parameters:'carousel,item,toIndex,fromIndex'},
		{name:'moved',parameters:'carousel,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'carousel,positioned'},
		{name:'remove',parameters:'carousel,item,index'},
		{name:'removed',parameters:'carousel,container,index'},
		{name:'renderedchange',parameters:'carousel,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'carousel'},
		{name:'tofront',parameters:'carousel'},
		{name:'updatedata',parameters:'carousel,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
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
}
@Component({
  selector: carouselMetaData.XTYPE,
	inputs: carouselMetaData.INPUTNAMES,
	outputs: carouselMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => carousel)}],
	template: '<template #dynamic></template>'
})
export class carousel extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,carouselMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,carouselMetaData);}
}
