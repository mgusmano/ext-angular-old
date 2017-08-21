import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.Event
export class calendar_eventMetaData {
	public static XTYPE: string = 'calendar-event';
	public static INPUTNAMES: string[] = [
		'defaultTitle',
		'endDate',
		'mode',
		'model',
		'palette',
		'resize',
		'startDate',
		'timeFormat',
		'title',
		'touchAction',
		'view',
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
  selector: calendar_eventMetaData.XTYPE,
	inputs: calendar_eventMetaData.INPUTNAMES,
	outputs: calendar_eventMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_event)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_event extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_eventMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_eventMetaData);}
}
