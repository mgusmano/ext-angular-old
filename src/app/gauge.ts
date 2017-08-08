import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.Gauge
class gaugeMetaData {
	public static XTYPE: string = 'gauge';
	public static INPUTNAMES: string[] = [
		'angleOffset',
		'animation',
		'clockwise',
		'maxValue',
		'minValue',
		'padding',
		'textAlign',
		'textTpl',
		'trackLength',
		'trackStart',
		'trackStyle',
		'value',
		'valueStyle',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: gaugeMetaData.XTYPE,
	inputs: gaugeMetaData.INPUTNAMES,
	outputs: gaugeMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => gauge)}],
	template: '<template #dynamic></template>'
})
export class gauge extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,gaugeMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,gaugeMetaData);}
}
