import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.CartesianChart
class cartesianMetaData {
	public static XTYPE: string = 'cartesian';
	public static INPUTNAMES: string[] = [
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
	public static OUTPUTS: any[] = [
		{name:'beforerefresh',parameters:'cartesian'},
		{name:'bodyresize',parameters:'size'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'redraw',parameters:'cartesian'},
		{name:'refresh',parameters:'cartesian'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'storechange',parameters:'chart,newStore,oldStore'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
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
}
@Component({
  selector: cartesianMetaData.XTYPE,
	inputs: cartesianMetaData.INPUTNAMES,
	outputs: cartesianMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => cartesian)}],
	template: '<template #dynamic></template>'
})
export class cartesian extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,cartesianMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,cartesianMetaData);}
}
