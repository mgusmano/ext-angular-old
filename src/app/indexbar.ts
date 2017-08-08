import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.dataview.IndexBar
class indexbarMetaData {
	public static XTYPE: string = 'indexbar';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
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
		'direction',
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
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'letters',
		'listeners',
		'listPrefix',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'padding',
		'parentList',
		'plugins',
		'publishes',
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
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
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
		{name:'added',parameters:'indexbar,container,index'},
		{name:'beforehide',parameters:'indexbar'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'indexbar'},
		{name:'beforetofront',parameters:'indexbar'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'indexbar'},
		{name:'floatingchange',parameters:'indexbar,positioned'},
		{name:'fullscreen',parameters:'indexbar'},
		{name:'hide',parameters:'indexbar'},
		{name:'index',parameters:'indexbar,html,target'},
		{name:'initialize',parameters:'indexbar'},
		{name:'moved',parameters:'indexbar,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'indexbar,positioned'},
		{name:'removed',parameters:'indexbar,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'indexbar'},
		{name:'tofront',parameters:'indexbar'},
		{name:'updatedata',parameters:'indexbar,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'index',
		'initialize',
		'moved',
		'orientationchange',
		'painted',
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
  selector: indexbarMetaData.XTYPE,
	inputs: indexbarMetaData.INPUTNAMES,
	outputs: indexbarMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => indexbar)}],
	template: '<template #dynamic></template>'
})
export class indexbar extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,indexbarMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,indexbarMetaData);}
}
