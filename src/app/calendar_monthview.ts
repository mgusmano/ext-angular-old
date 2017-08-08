import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Month
class calendar_monthviewMetaData {
	public static XTYPE: string = 'calendar-monthview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'addOnSelect',
		'allowSelection',
		'compact',
		'compactOptions',
		'controlStoreRange',
		'dayFormat',
		'draggable',
		'droppable',
		'editForm',
		'eventDefaults',
		'firstDayOfWeek',
		'gestureNavigation',
		'header',
		'overflowText',
		'showOverflow',
		'store',
		'timezoneOffset',
		'value',
		'visibleDays',
		'visibleWeeks',
		'weekendDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-monthview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-monthview,context'},
		{name:'beforeeventedit',parameters:'calendar-monthview,context'},
		{name:'eventadd',parameters:'calendar-monthview,context'},
		{name:'eventdrop',parameters:'calendar-monthview,context'},
		{name:'eventedit',parameters:'calendar-monthview,context'},
		{name:'eventtap',parameters:'calendar-monthview,context'},
		{name:'select',parameters:'calendar-monthview,context'},
		{name:'selectrange',parameters:'calendar-monthview,context'},
		{name:'validateeventadd',parameters:'calendar-monthview,context'},
		{name:'validateeventdrop',parameters:'calendar-monthview,context'},
		{name:'validateeventedit',parameters:'calendar-monthview,context'},
		{name:'valuechange',parameters:'calendar-monthview,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'select',
		'selectrange',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'ready'
];
}
@Component({
  selector: calendar_monthviewMetaData.XTYPE,
	inputs: calendar_monthviewMetaData.INPUTNAMES,
	outputs: calendar_monthviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_monthview)}],
	template: '<template #dynamic></template>'
})
export class calendar_monthview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_monthviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_monthviewMetaData);}
}
