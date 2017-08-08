import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Panel
class panelMetaData {
	public static XTYPE: string = 'panel';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconCls',
		'id',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'tools',
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
		{name:'activate',parameters:'newActiveItem,panel,oldActiveItem'},
		{name:'add',parameters:'panel,item,index'},
		{name:'added',parameters:'panel,container,index'},
		{name:'beforehide',parameters:'panel'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'panel'},
		{name:'beforetofront',parameters:'panel'},
		{name:'deactivate',parameters:'oldActiveItem,panel,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'panel'},
		{name:'floatingchange',parameters:'panel,positioned'},
		{name:'fullscreen',parameters:'panel'},
		{name:'hide',parameters:'panel'},
		{name:'initialize',parameters:'panel'},
		{name:'move',parameters:'panel,item,toIndex,fromIndex'},
		{name:'moved',parameters:'panel,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'panel,positioned'},
		{name:'remove',parameters:'panel,item,index'},
		{name:'removed',parameters:'panel,container,index'},
		{name:'renderedchange',parameters:'panel,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'panel'},
		{name:'tofront',parameters:'panel'},
		{name:'updatedata',parameters:'panel,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
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
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: panelMetaData.XTYPE,
	inputs: panelMetaData.INPUTNAMES,
	outputs: panelMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => panel)}],
	template: '<template #dynamic></template>'
})
export class panel extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,panelMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,panelMetaData);}
}
