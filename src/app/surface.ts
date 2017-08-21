import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.draw.Surface
export class surfaceMetaData {
	public static XTYPE: string = 'surface';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'background',
		'baseCls',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'dirty',
		'flex',
		'flipRtlText',
		'floated',
		'height',
		'hidden',
		'id',
		'itemId',
		'items',
		'listeners',
		'plugins',
		'publishes',
		'rect',
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
	public static OUTPUTS: any[] = [
		{name:'beforetofront',parameters:'surface'},
		{name:'tofront',parameters:'surface'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront',
		'ready'
];
}
@Component({
  selector: surfaceMetaData.XTYPE,
	inputs: surfaceMetaData.INPUTNAMES,
	outputs: surfaceMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => surface)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class surface extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,surfaceMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,surfaceMetaData);}
}
