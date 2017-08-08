import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.tab.Tab
class tabMetaData {
	public static XTYPE: string = 'tab';
	public static INPUTNAMES: string[] = [
		'active',
		'activeCls',
		'allowDepress',
		'alwaysOnTop',
		'autoEvent',
		'axisLock',
		'badgeCls',
		'badgeText',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enableToggle',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'handler',
		'hasBadgeCls',
		'hasLabelCls',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'labelCls',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'padding',
		'plugins',
		'pressed',
		'pressedCls',
		'pressedDelay',
		'pressingCls',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'right',
		'scope',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'text',
		'textAlign',
		'title',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
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
		{name:'activate',parameters:'tab'},
		{name:'added',parameters:'tab,container,index'},
		{name:'beforehide',parameters:'tab'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'tab'},
		{name:'beforetofront',parameters:'tab'},
		{name:'deactivate',parameters:'tab'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'tab'},
		{name:'floatingchange',parameters:'tab,positioned'},
		{name:'fullscreen',parameters:'tab'},
		{name:'hide',parameters:'tab'},
		{name:'initialize',parameters:'tab'},
		{name:'moved',parameters:'tab,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'tab,positioned'},
		{name:'release',parameters:'tab,e'},
		{name:'removed',parameters:'tab,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'tab'},
		{name:'tap',parameters:'tab,e'},
		{name:'tofront',parameters:'tab'},
		{name:'updatedata',parameters:'tab,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'deactivate',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'release',
		'removed',
		'resize',
		'show',
		'tap',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: tabMetaData.XTYPE,
	inputs: tabMetaData.INPUTNAMES,
	outputs: tabMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => tab)}],
	template: '<template #dynamic></template>'
})
export class tab extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,tabMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,tabMetaData);}
}
