import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.Grid
class pivotgridMetaData {
	public static XTYPE: string = 'pivotgrid';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'allowDeselect',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'bufferSize',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'clsGrandTotal',
		'clsGroupTotal',
		'columns',
		'container',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'deferEmptyText',
		'deselectOnContainerClick',
		'disabled',
		'disableSelection',
		'disclosureProperty',
		'docked',
		'draggable',
		'emptyText',
		'enableColumnSort',
		'enableLoadMask',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'grouped',
		'height',
		'hidden',
		'hideAnimation',
		'hideHeaders',
		'hideOnMaskTap',
		'html',
		'id',
		'indexBar',
		'infinite',
		'inline',
		'itemCls',
		'itemConfig',
		'itemHeight',
		'itemId',
		'itemMap',
		'items',
		'itemTpl',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lastFocused',
		'lastSelected',
		'layout',
		'left',
		'leftAxisCellConfig',
		'listeners',
		'loadingText',
		'locked',
		'manageBorders',
		'margin',
		'masked',
		'matrix',
		'maxHeight',
		'maxItemCache',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'mode',
		'onItemDisclosure',
		'padding',
		'pinHeaders',
		'pinnedHeader',
		'plugins',
		'pressedDelay',
		'preventSelectionOnDisclose',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'refreshHeightOnUpdate',
		'relative',
		'renderTo',
		'right',
		'rowLines',
		'scrollable',
		'scrollDock',
		'scrollToTopOnRefresh',
		'selection',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'startColGroupsCollapsed',
		'startRowGroupsCollapsed',
		'store',
		'striped',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'tooltip',
		'top',
		'topAxisCellConfig',
		'totalColumnWidth',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'triggerCtEvent',
		'triggerEvent',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'useComponents',
		'userCls',
		'useSimpleItems',
		'variableHeights',
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
		{name:'activate',parameters:'newActiveItem,pivotgrid,oldActiveItem'},
		{name:'add',parameters:''},
		{name:'added',parameters:'pivotgrid,container,index'},
		{name:'beforehide',parameters:'pivotgrid'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeselectionchange',parameters:'pivotgrid'},
		{name:'beforeshow',parameters:'pivotgrid'},
		{name:'beforetofront',parameters:'pivotgrid'},
		{name:'columnadd',parameters:'pivotgrid,column,index'},
		{name:'columnhide',parameters:'pivotgrid,column'},
		{name:'columnmove',parameters:'pivotgrid,column,fromIndex,toIndex'},
		{name:'columnremove',parameters:'pivotgrid,column'},
		{name:'columnresize',parameters:'pivotgrid,column,width'},
		{name:'columnshow',parameters:'pivotgrid,column'},
		{name:'columnsort',parameters:'pivotgrid,column,direction'},
		{name:'containertap',parameters:''},
		{name:'deactivate',parameters:'oldActiveItem,pivotgrid,newActiveItem'},
		{name:'deselect',parameters:'pivotgrid,record,supressed'},
		{name:'destroy',parameters:''},
		{name:'disclose',parameters:'pivotgrid,record,target,index,e'},
		{name:'erased',parameters:'pivotgrid'},
		{name:'floatingchange',parameters:'pivotgrid,positioned'},
		{name:'fullscreen',parameters:'pivotgrid'},
		{name:'hide',parameters:'pivotgrid'},
		{name:'initialize',parameters:'pivotgrid'},
		{name:'itemdoubletap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemmouseenter',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemmouseleave',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemsingletap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemswipe',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtaphold',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchend',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchmove',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchstart',parameters:'pivotgrid,index,target,record,e'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'pivotgrid,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pivotbeforereconfigure',parameters:'matrix,config'},
		{name:'pivotbeforerequest',parameters:'matrix,params'},
		{name:'pivotbuildtotals',parameters:'matrix,totals'},
		{name:'pivotcolumnsbuilt',parameters:'matrix,columns'},
		{name:'pivotdone',parameters:'matrix'},
		{name:'pivotgroupcelldoubletap',parameters:'params,e'},
		{name:'pivotgroupcelltap',parameters:'params,e'},
		{name:'pivotgroupcelltaphold',parameters:'params,e'},
		{name:'pivotgroupcollapse',parameters:'matrix,type,group'},
		{name:'pivotgroupdoubletap',parameters:'params,e'},
		{name:'pivotgroupexpand',parameters:'matrix,type,group'},
		{name:'pivotgrouptap',parameters:'params,e'},
		{name:'pivotgrouptaphold',parameters:'params,e'},
		{name:'pivotitemcelldoubletap',parameters:'params,e'},
		{name:'pivotitemcelltap',parameters:'params,e'},
		{name:'pivotitemcelltaphold',parameters:'params,e'},
		{name:'pivotitemdoubletap',parameters:'params,e'},
		{name:'pivotitemtap',parameters:'params,e'},
		{name:'pivotitemtaphold',parameters:'params,e'},
		{name:'pivotmodelbuilt',parameters:'matrix,model'},
		{name:'pivotprogress',parameters:'matrix,index,total'},
		{name:'pivotreconfigure',parameters:'matrix,config'},
		{name:'pivotrecordbuilt',parameters:'matrix,record'},
		{name:'pivotrequestexception',parameters:'matrix,response'},
		{name:'pivotstart',parameters:'matrix'},
		{name:'pivotstorebuilt',parameters:'matrix,store'},
		{name:'pivottotalcelldoubletap',parameters:'params,e'},
		{name:'pivottotalcelltap',parameters:'params,e'},
		{name:'pivottotalcelltaphold',parameters:'params,e'},
		{name:'pivottotaldoubletap',parameters:'params,e'},
		{name:'pivottotaltap',parameters:'params,e'},
		{name:'pivottotaltaphold',parameters:'params,e'},
		{name:'positionedchange',parameters:'pivotgrid,positioned'},
		{name:'refresh',parameters:'pivotgrid'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'pivotgrid,container,index'},
		{name:'renderedchange',parameters:'pivotgrid,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'select',parameters:'pivotgrid,record'},
		{name:'selectionchange',parameters:'pivotgrid,records'},
		{name:'show',parameters:'pivotgrid'},
		{name:'tofront',parameters:'pivotgrid'},
		{name:'updatedata',parameters:'pivotgrid,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeselectionchange',
		'beforeshow',
		'beforetofront',
		'columnadd',
		'columnhide',
		'columnmove',
		'columnremove',
		'columnresize',
		'columnshow',
		'columnsort',
		'containertap',
		'deactivate',
		'deselect',
		'destroy',
		'disclose',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'pivotbeforereconfigure',
		'pivotbeforerequest',
		'pivotbuildtotals',
		'pivotcolumnsbuilt',
		'pivotdone',
		'pivotgroupcelldoubletap',
		'pivotgroupcelltap',
		'pivotgroupcelltaphold',
		'pivotgroupcollapse',
		'pivotgroupdoubletap',
		'pivotgroupexpand',
		'pivotgrouptap',
		'pivotgrouptaphold',
		'pivotitemcelldoubletap',
		'pivotitemcelltap',
		'pivotitemcelltaphold',
		'pivotitemdoubletap',
		'pivotitemtap',
		'pivotitemtaphold',
		'pivotmodelbuilt',
		'pivotprogress',
		'pivotreconfigure',
		'pivotrecordbuilt',
		'pivotrequestexception',
		'pivotstart',
		'pivotstorebuilt',
		'pivottotalcelldoubletap',
		'pivottotalcelltap',
		'pivottotalcelltaphold',
		'pivottotaldoubletap',
		'pivottotaltap',
		'pivottotaltaphold',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'select',
		'selectionchange',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: pivotgridMetaData.XTYPE,
	inputs: pivotgridMetaData.INPUTNAMES,
	outputs: pivotgridMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotgrid)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotgrid extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotgridMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotgridMetaData);}
}
