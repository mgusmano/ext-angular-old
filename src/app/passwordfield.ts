import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.Password
class passwordfieldMetaData {
	public static XTYPE: string = 'passwordfield';
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
		'revealable',
		'revealed',
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'action',parameters:'passwordfield,e'},
		{name:'added',parameters:'passwordfield,container,index'},
		{name:'beforehide',parameters:'passwordfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'passwordfield'},
		{name:'beforetofront',parameters:'passwordfield'},
		{name:'blur',parameters:'passwordfield,e'},
		{name:'change',parameters:'passwordfield,newValue,oldValue'},
		{name:'clearicontap',parameters:'passwordfield,input,e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'passwordfield'},
		{name:'floatingchange',parameters:'passwordfield,positioned'},
		{name:'focus',parameters:'passwordfield,e'},
		{name:'fullscreen',parameters:'passwordfield'},
		{name:'hide',parameters:'passwordfield'},
		{name:'initialize',parameters:'passwordfield'},
		{name:'keyup',parameters:'passwordfield,e'},
		{name:'mousedown',parameters:'passwordfield,e'},
		{name:'moved',parameters:'passwordfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'passwordfield,e'},
		{name:'positionedchange',parameters:'passwordfield,positioned'},
		{name:'removed',parameters:'passwordfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'passwordfield'},
		{name:'tofront',parameters:'passwordfield'},
		{name:'updatedata',parameters:'passwordfield,newData'},
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
  selector: passwordfieldMetaData.XTYPE,
	inputs: passwordfieldMetaData.INPUTNAMES,
	outputs: passwordfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => passwordfield)}],
	template: '<template #dynamic></template>'
})
export class passwordfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,passwordfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,passwordfieldMetaData);}
}
