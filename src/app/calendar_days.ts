import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Days
class calendar_daysMetaData {
	public static XTYPE: string = 'calendar-days';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'view',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-days,context'},
		{name:'eventadd',parameters:'calendar-days,context'},
		{name:'eventedit',parameters:'calendar-days,context'},
		{name:'eventdrop',parameters:'calendar-days,context'},
		{name:'eventtap',parameters:'calendar-days,context'},
		{name:'validateeventadd',parameters:'calendar-days,context'},
		{name:'validateeventedit',parameters:'calendar-days,context'},
		{name:'validateeventdrop',parameters:'calendar-days,context'},
		{name:'valuechange',parameters:'calendar-days,context'},
		{name:'beforeeventadd',parameters:'calendar-days,context'},
		{name:'beforeeventdragstart',parameters:'calendar-days,context'},
		{name:'beforeeventresizestart',parameters:'calendar-days,context'},
		{name:'eventdrop',parameters:'calendar-days,context'},
		{name:'eventresize',parameters:'calendar-days,context'},
		{name:'validateeventdrop',parameters:'calendar-days,context'},
		{name:'validateeventresize',parameters:'calendar-days,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'eventadd',
		'eventedit',
		'eventdrop',
		'eventtap',
		'validateeventadd',
		'validateeventedit',
		'validateeventdrop',
		'valuechange',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventresizestart',
		'eventdrop',
		'eventresize',
		'validateeventdrop',
		'validateeventresize',
		'ready'
];
}
@Component({
  selector: calendar_daysMetaData.XTYPE,
	inputs: calendar_daysMetaData.INPUTNAMES,
	outputs: calendar_daysMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_days)}],
	template: '<template #dynamic></template>'
})
export class calendar_days extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_daysMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_daysMetaData);}
}
