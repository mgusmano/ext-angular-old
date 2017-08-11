import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.form.Edit
class calendar_form_editMetaData {
	public static XTYPE: string = 'calendar-form-edit';
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
		{name:'cancel',parameters:'calendar-form-edit'},
		{name:'drop',parameters:'calendar-form-edit'},
		{name:'save',parameters:'calendar-form-edit,context'},
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
  selector: calendar_form_editMetaData.XTYPE,
	inputs: calendar_form_editMetaData.INPUTNAMES,
	outputs: calendar_form_editMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_form_edit)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_form_edit extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_form_editMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_form_editMetaData);}
}
