import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Video
class videoMetaData {
	public static XTYPE: string = 'video';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'autoPause',
		'autoResume',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'contentEl',
		'controller',
		'controls',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enableControls',
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
		'listeners',
		'loop',
		'margin',
		'maxHeight',
		'maxWidth',
		'media',
		'minHeight',
		'minWidth',
		'modal',
		'muted',
		'padding',
		'plugins',
		'posterUrl',
		'preload',
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
		'url',
		'useBodyElement',
		'userCls',
		'viewModel',
		'volume',
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
		{name:'added',parameters:'video,container,index'},
		{name:'beforehide',parameters:'video'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'video'},
		{name:'beforetofront',parameters:'video'},
		{name:'destroy',parameters:''},
		{name:'ended',parameters:'video,time'},
		{name:'erased',parameters:'video'},
		{name:'floatingchange',parameters:'video,positioned'},
		{name:'fullscreen',parameters:'video'},
		{name:'hide',parameters:'video'},
		{name:'initialize',parameters:'video'},
		{name:'moved',parameters:'video,container,toIndex,fromIndex'},
		{name:'mutedchange',parameters:'video,muted'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pause',parameters:'video,time'},
		{name:'play',parameters:'video'},
		{name:'positionedchange',parameters:'video,positioned'},
		{name:'removed',parameters:'video,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'video'},
		{name:'stop',parameters:'video'},
		{name:'timeupdate',parameters:'video,time'},
		{name:'tofront',parameters:'video'},
		{name:'updatedata',parameters:'video,newData'},
		{name:'volumechange',parameters:'video,volume'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'destroy',
		'ended',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'moved',
		'mutedchange',
		'orientationchange',
		'painted',
		'pause',
		'play',
		'positionedchange',
		'removed',
		'resize',
		'show',
		'stop',
		'timeupdate',
		'tofront',
		'updatedata',
		'volumechange',
		'ready'
];
}
@Component({
  selector: videoMetaData.XTYPE,
	inputs: videoMetaData.INPUTNAMES,
	outputs: videoMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => video)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class video extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,videoMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,videoMetaData);}
}
