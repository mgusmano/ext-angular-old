import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.TextInput
class textinputMetaData {
	public static XTYPE: string = 'textinput';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'checked',
		'cls',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'fastFocus',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'isFocused',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxLength',
		'maxRows',
		'maxValue',
		'maxWidth',
		'minHeight',
		'minValue',
		'minWidth',
		'modal',
		'name',
		'originalValue',
		'padding',
		'pattern',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
		'record',
		'reference',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'startValue',
		'stepValue',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'tabIndex',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'twoWayBindable',
		'type',
		'ui',
		'useBodyElement',
		'useMask',
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
		{name:'added',parameters:'textinput,container,index'},
		{name:'beforehide',parameters:'textinput'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'textinput'},
		{name:'beforetofront',parameters:'textinput'},
		{name:'blur',parameters:'e'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'textinput'},
		{name:'floatingchange',parameters:'textinput,positioned'},
		{name:'focus',parameters:'e'},
		{name:'fullscreen',parameters:'textinput'},
		{name:'hide',parameters:'textinput'},
		{name:'initialize',parameters:'textinput'},
		{name:'keyup',parameters:'e'},
		{name:'masktap',parameters:'textinput,e'},
		{name:'mousedown',parameters:'e'},
		{name:'moved',parameters:'textinput,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'e'},
		{name:'positionedchange',parameters:'textinput,positioned'},
		{name:'removed',parameters:'textinput,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'textinput'},
		{name:'tofront',parameters:'textinput'},
		{name:'updatedata',parameters:'textinput,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'blur',
		'click',
		'destroy',
		'erased',
		'floatingchange',
		'focus',
		'fullscreen',
		'hide',
		'initialize',
		'keyup',
		'masktap',
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
  selector: textinputMetaData.XTYPE,
	inputs: textinputMetaData.INPUTNAMES,
	outputs: textinputMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => textinput)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class textinput extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,textinputMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,textinputMetaData);}
}
