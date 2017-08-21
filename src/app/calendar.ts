import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Panel
export class calendarMetaData {
	public static XTYPE: string = 'calendar';
	public static INPUTNAMES: string[] = [
		'calendarList',
		'calendarList',
		'compact',
		'compactOptions',
		'createButtonPosition',
		'dateTitle',
		'defaultView',
		'nextButton',
		'nextButton',
		'sideBar',
		'store',
		'switcher',
		'switcherPosition',
		'timezoneOffset',
		'titleBar',
		'todayButton',
		'value',
		'views',
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
  selector: calendarMetaData.XTYPE,
	inputs: calendarMetaData.INPUTNAMES,
	outputs: calendarMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendarMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendarMetaData);}
}
