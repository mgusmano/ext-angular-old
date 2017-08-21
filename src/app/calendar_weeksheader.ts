import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.header.Weeks
export class calendar_weeksheaderMetaData {
	public static XTYPE: string = 'calendar-weeksheader';
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
  selector: calendar_weeksheaderMetaData.XTYPE,
	inputs: calendar_weeksheaderMetaData.INPUTNAMES,
	outputs: calendar_weeksheaderMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_weeksheader)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_weeksheader extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weeksheaderMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weeksheaderMetaData);}
}
