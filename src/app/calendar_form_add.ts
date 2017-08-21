import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.form.Add
export class calendar_form_addMetaData {
	public static XTYPE: string = 'calendar-form-add';
	public static INPUTNAMES: string[] = [
		'defaultEndTime',
		'defaultStartTime',
		'event',
		'title',
		'view',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'cancel',parameters:'calendar-form-add'},
		{name:'drop',parameters:'calendar-form-add'},
		{name:'save',parameters:'calendar-form-add,context'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'cancel',
		'drop',
		'save',
		'ready'
];
}
@Component({
  selector: calendar_form_addMetaData.XTYPE,
	inputs: calendar_form_addMetaData.INPUTNAMES,
	outputs: calendar_form_addMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_form_add)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_form_add extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_form_addMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_form_addMetaData);}
}
