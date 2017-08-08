import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Widget
class widgetMetaData {
	public static XTYPE: string = 'widget';
	public static INPUTNAMES: string[] = [
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforetofront',parameters:'widget'},
		{name:'tofront',parameters:'widget'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront',
		'ready'
];
}
@Component({
  selector: widgetMetaData.XTYPE,
	inputs: widgetMetaData.INPUTNAMES,
	outputs: widgetMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => widget)}],
	template: '<template #dynamic></template>'
})
export class widget extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,widgetMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,widgetMetaData);}
}
