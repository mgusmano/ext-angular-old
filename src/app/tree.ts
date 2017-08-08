import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.Tree
class treeMetaData {
	public static XTYPE: string = 'tree';
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
		'enterAnimation',
		'exitAnimation',
		'expanderOnly',
		'flex',
		'floated',
		'folderSort',
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
		'listeners',
		'loadingText',
		'locked',
		'manageBorders',
		'margin',
		'masked',
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
		'selectOnExpander',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'singleExpand',
		'store',
		'striped',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'tooltip',
		'top',
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
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,tree,oldActiveItem'},
		{name:'add',parameters:''},
		{name:'added',parameters:'tree,container,index'},
		{name:'beforehide',parameters:'tree'},
		{name:'beforeload',parameters:'store,operation'},
		{name:'beforenodecollapse',parameters:'node,record'},
		{name:'beforenodeexpand',parameters:'row,record'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeselectionchange',parameters:'tree'},
		{name:'beforeshow',parameters:'tree'},
		{name:'beforetofront',parameters:'tree'},
		{name:'columnadd',parameters:'tree,column,index'},
		{name:'columnhide',parameters:'tree,column'},
		{name:'columnmove',parameters:'tree,column,fromIndex,toIndex'},
		{name:'columnremove',parameters:'tree,column'},
		{name:'columnresize',parameters:'tree,column,width'},
		{name:'columnshow',parameters:'tree,column'},
		{name:'columnsort',parameters:'tree,column,direction'},
		{name:'containertap',parameters:''},
		{name:'deactivate',parameters:'oldActiveItem,tree,newActiveItem'},
		{name:'deselect',parameters:'tree,record,supressed'},
		{name:'destroy',parameters:''},
		{name:'disclose',parameters:'tree,record,target,index,e'},
		{name:'erased',parameters:'tree'},
		{name:'floatingchange',parameters:'tree,positioned'},
		{name:'fullscreen',parameters:'tree'},
		{name:'hide',parameters:'tree'},
		{name:'initialize',parameters:'tree'},
		{name:'itemdoubletap',parameters:'tree,index,target,record,e'},
		{name:'itemmouseenter',parameters:'tree,index,target,record,e'},
		{name:'itemmouseleave',parameters:'tree,index,target,record,e'},
		{name:'itemsingletap',parameters:'tree,index,target,record,e'},
		{name:'itemswipe',parameters:'tree,index,target,record,e'},
		{name:'itemtap',parameters:'tree,index,target,record,e'},
		{name:'itemtaphold',parameters:'tree,index,target,record,e'},
		{name:'itemtouchend',parameters:'tree,index,target,record,e'},
		{name:'itemtouchmove',parameters:'tree,index,target,record,e'},
		{name:'itemtouchstart',parameters:'tree,index,target,record,e'},
		{name:'load',parameters:''},
		{name:'move',parameters:''},
		{name:'moved',parameters:'tree,container,toIndex,fromIndex'},
		{name:'nodecollapse',parameters:'node,record'},
		{name:'nodeexpand',parameters:'row,record'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'tree,positioned'},
		{name:'refresh',parameters:'tree'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'tree,container,index'},
		{name:'renderedchange',parameters:'tree,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'select',parameters:'tree,record'},
		{name:'selectionchange',parameters:'tree,records'},
		{name:'show',parameters:'tree'},
		{name:'tofront',parameters:'tree'},
		{name:'updatedata',parameters:'tree,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeload',
		'beforenodecollapse',
		'beforenodeexpand',
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
		'load',
		'move',
		'moved',
		'nodecollapse',
		'nodeexpand',
		'orientationchange',
		'painted',
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
  selector: treeMetaData.XTYPE,
	inputs: treeMetaData.INPUTNAMES,
	outputs: treeMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => tree)}],
	template: '<template #dynamic></template>'
})
export class tree extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,treeMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,treeMetaData);}
}
