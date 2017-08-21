import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Week
export class calendar_weekMetaData {
	public static XTYPE: string = 'calendar-week';
	public static INPUTNAMES: string[] = [
		'configExtractor',
		'dayHeader',
		'eventRelayers',
		'firstDayOfWeek',
		'value',
		'view',
		'visibleDays',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-week,context'},
		{name:'eventadd',parameters:'calendar-week,context'},
		{name:'eventedit',parameters:'calendar-week,context'},
		{name:'eventdrop',parameters:'calendar-week,context'},
		{name:'eventtap',parameters:'calendar-week,context'},
		{name:'validateeventadd',parameters:'calendar-week,context'},
		{name:'validateeventedit',parameters:'calendar-week,context'},
		{name:'validateeventdrop',parameters:'calendar-week,context'},
		{name:'valuechange',parameters:'calendar-week,context'},
		{name:'beforeeventadd',parameters:'calendar-week,context'},
		{name:'beforeeventdragstart',parameters:'calendar-week,context'},
		{name:'beforeeventresizestart',parameters:'calendar-week,context'},
		{name:'eventdrop',parameters:'calendar-week,context'},
		{name:'eventresize',parameters:'calendar-week,context'},
		{name:'validateeventdrop',parameters:'calendar-week,context'},
		{name:'validateeventresize',parameters:'calendar-week,context'},
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
  selector: calendar_weekMetaData.XTYPE,
	inputs: calendar_weekMetaData.INPUTNAMES,
	outputs: calendar_weekMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_week)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_week extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weekMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weekMetaData);}
}
