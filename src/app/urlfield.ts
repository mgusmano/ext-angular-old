import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.Url
class urlfieldMetaData {
	public static XTYPE: string = 'urlfield';
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
		{name:'action',parameters:'urlfield,e'},
		{name:'added',parameters:'urlfield,container,index'},
		{name:'beforehide',parameters:'urlfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'urlfield'},
		{name:'beforetofront',parameters:'urlfield'},
		{name:'blur',parameters:'urlfield,e'},
		{name:'change',parameters:'urlfield,newValue,oldValue'},
		{name:'clearicontap',parameters:'urlfield,input,e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'urlfield'},
		{name:'floatingchange',parameters:'urlfield,positioned'},
		{name:'focus',parameters:'urlfield,e'},
		{name:'fullscreen',parameters:'urlfield'},
		{name:'hide',parameters:'urlfield'},
		{name:'initialize',parameters:'urlfield'},
		{name:'keyup',parameters:'urlfield,e'},
		{name:'mousedown',parameters:'urlfield,e'},
		{name:'moved',parameters:'urlfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'urlfield,e'},
		{name:'positionedchange',parameters:'urlfield,positioned'},
		{name:'removed',parameters:'urlfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'urlfield'},
		{name:'tofront',parameters:'urlfield'},
		{name:'updatedata',parameters:'urlfield,newData'},
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
  selector: urlfieldMetaData.XTYPE,
	inputs: urlfieldMetaData.INPUTNAMES,
	outputs: urlfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => urlfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class urlfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,urlfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,urlfieldMetaData);}
}
