import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.list.Tree
class treelistMetaData {
	public static XTYPE: string = 'treelist';
	public static INPUTNAMES: string[] = [
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforetofront',parameters:'treelist'},
		{name:'tofront',parameters:'treelist'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforetofront',
		'tofront',
		'ready'
];
}
@Component({
  selector: treelistMetaData.XTYPE,
	inputs: treelistMetaData.INPUTNAMES,
	outputs: treelistMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => treelist)}],
	template: '<template #dynamic></template>'
})
export class treelist extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,treelistMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,treelistMetaData);}
}
