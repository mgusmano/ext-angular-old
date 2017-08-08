import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Day
class calendar_dayMetaData {
	public static XTYPE: string = 'calendar-day';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'view',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-day,context'},
		{name:'eventadd',parameters:'calendar-day,context'},
		{name:'eventedit',parameters:'calendar-day,context'},
		{name:'eventdrop',parameters:'calendar-day,context'},
		{name:'eventtap',parameters:'calendar-day,context'},
		{name:'validateeventadd',parameters:'calendar-day,context'},
		{name:'validateeventedit',parameters:'calendar-day,context'},
		{name:'validateeventdrop',parameters:'calendar-day,context'},
		{name:'valuechange',parameters:'calendar-day,context'},
		{name:'beforeeventadd',parameters:'calendar-day,context'},
		{name:'beforeeventdragstart',parameters:'calendar-day,context'},
		{name:'beforeeventresizestart',parameters:'calendar-day,context'},
		{name:'eventdrop',parameters:'calendar-day,context'},
		{name:'eventresize',parameters:'calendar-day,context'},
		{name:'validateeventdrop',parameters:'calendar-day,context'},
		{name:'validateeventresize',parameters:'calendar-day,context'},
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
  selector: calendar_dayMetaData.XTYPE,
	inputs: calendar_dayMetaData.INPUTNAMES,
	outputs: calendar_dayMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_day)}],
	template: '<template #dynamic></template>'
})
export class calendar_day extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_dayMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_dayMetaData);}
}
