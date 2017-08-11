import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.TextArea
class textareafieldMetaData {
	public static XTYPE: string = 'textareafield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'clearIcon',
		'cls',
		'component',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'inputCls',
		'inputType',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxRows',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'name',
		'padding',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
		'record',
		'reference',
		'relative',
		'renderTo',
		'required',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tabIndex',
		'textAlign',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'triggers',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'userCls',
		'value',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'action',parameters:'textareafield,e'},
		{name:'added',parameters:'textareafield,container,index'},
		{name:'beforehide',parameters:'textareafield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'textareafield'},
		{name:'beforetofront',parameters:'textareafield'},
		{name:'blur',parameters:'textareafield,e'},
		{name:'change',parameters:'textareafield,newValue,oldValue'},
		{name:'clearicontap',parameters:'textareafield,input,e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'textareafield'},
		{name:'floatingchange',parameters:'textareafield,positioned'},
		{name:'focus',parameters:'textareafield,e'},
		{name:'fullscreen',parameters:'textareafield'},
		{name:'hide',parameters:'textareafield'},
		{name:'initialize',parameters:'textareafield'},
		{name:'keyup',parameters:'textareafield,e'},
		{name:'mousedown',parameters:'textareafield,e'},
		{name:'moved',parameters:'textareafield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'textareafield,e'},
		{name:'positionedchange',parameters:'textareafield,positioned'},
		{name:'removed',parameters:'textareafield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'textareafield'},
		{name:'tofront',parameters:'textareafield'},
		{name:'updatedata',parameters:'textareafield,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'action',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'change',
		'clearicontap',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: textareafieldMetaData.XTYPE,
	inputs: textareafieldMetaData.INPUTNAMES,
	outputs: textareafieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => textareafield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class textareafield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,textareafieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,textareafieldMetaData);}
}
