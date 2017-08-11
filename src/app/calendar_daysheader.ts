import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.header.Days
class calendar_daysheaderMetaData {
	public static XTYPE: string = 'calendar-daysheader';
	public static INPUTNAMES: string[] = [
		'cellCls',
		'compact',
		'compactOptions',
		'format',
		'value',
		'visibleDays',
		'flex',
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
  selector: calendar_daysheaderMetaData.XTYPE,
	inputs: calendar_daysheaderMetaData.INPUTNAMES,
	outputs: calendar_daysheaderMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_daysheader)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_daysheader extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_daysheaderMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_daysheaderMetaData);}
}
