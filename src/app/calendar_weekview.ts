import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Week
class calendar_weekviewMetaData {
	public static XTYPE: string = 'calendar-weekview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'allowSelection',
		'compact',
		'compactOptions',
		'controlStoreRange',
		'displayOverlap',
		'draggable',
		'droppable',
		'editForm',
		'endHour',
		'eventDefaults',
		'firstDayOfWeek',
		'gestureNavigation',
		'header',
		'resizeEvents',
		'showNowMarker',
		'store',
		'timeFormat',
		'timeRenderer',
		'timezoneOffset',
		'value',
		'visibleDays',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforeeventadd',parameters:'calendar-weekview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weekview,context'},
		{name:'beforeeventedit',parameters:'calendar-weekview,context'},
		{name:'beforeeventresizestart',parameters:'calendar-weekview,context'},
		{name:'eventadd',parameters:'calendar-weekview,context'},
		{name:'eventdrop',parameters:'calendar-weekview,context'},
		{name:'eventedit',parameters:'calendar-weekview,context'},
		{name:'eventresize',parameters:'calendar-weekview,context'},
		{name:'eventtap',parameters:'calendar-weekview,context'},
		{name:'validateeventadd',parameters:'calendar-weekview,context'},
		{name:'validateeventdrop',parameters:'calendar-weekview,context'},
		{name:'validateeventedit',parameters:'calendar-weekview,context'},
		{name:'validateeventresize',parameters:'calendar-weekview,context'},
		{name:'valuechange',parameters:'calendar-weekview,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeeventresizestart',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventresize',
		'eventtap',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'validateeventresize',
		'valuechange',
		'ready'
];
}
@Component({
  selector: calendar_weekviewMetaData.XTYPE,
	inputs: calendar_weekviewMetaData.INPUTNAMES,
	outputs: calendar_weekviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_weekview)}],
	template: '<template #dynamic></template>'
})
export class calendar_weekview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weekviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weekviewMetaData);}
}
