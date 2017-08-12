var fs = require('fs');
var data = require('./modern-all-classes-flatten.json');  
launch(data);

function launch(data) {
	var items = data.global.items;
	var commaOrBlank = "";
	var dist = "app/";
	var root = "src/";
	var folder = root + dist;
	var tab = "\t";
	var newLine = "\n";
	var imports = "";
	var exports = "";
	var declarations = "";
	var allClasses = "";
	var o = {};
	var numClasses = 0;
	for (i = 0; i < items.length; i++) { 
		o = items[i];
		if (o.alias != undefined && 
			o.alias.substring(0, 6) == 'widget' && 
			o.alias.substring(7).indexOf('.') == -1 && 
			o.alias.indexOf('actionsheet') == -1 && 
			o.alias.indexOf('audio') == -1 && 
			o.alias.indexOf('axis') == -1 && 
			o.alias.indexOf('carouselindicator') == -1 && 
			o.alias.substring(7).indexOf('item') == -1 && 
			o.alias.substring(7).indexOf('cell') == -1 && 
			o.alias.substring(7).indexOf('column') == -1 && 
			o.alias.substring(7).indexOf('row') == -1 && 
			o.alias.substring(7).indexOf('sparkline') == -1 && 
			o.alias.substring(7).indexOf('pivotconfig') == -1 && 
			o.alias.indexOf(',') == -1)
		{
			o.xtype = o.alias.substring(o.alias.indexOf(".") + 1);

			if (o.items != undefined) {
				var sINPUTS = "";
				var sOUTPUTS = "";
				var sOUTPUTNAMES = "";

				var configsArray = o.items.filter(function(obj) {return obj.$type == 'configs';});
				if (configsArray.length == 1) {
					configsArray[0].items.forEach(function (config, index, array) {
						sINPUTS = sINPUTS + tab + tab + "'" + config.name + "'" + "," + newLine;
					});
					sINPUTS = sINPUTS + tab + tab + "'" + "flex"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "platformConfig"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "responsiveConfig"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "fitToParent"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "config" + "'" + "" + newLine;
				}

				var eventsArray = o.items.filter(function(obj) {return obj.$type == 'events';});
				if (eventsArray.length == 1) {
					eventsArray[0].items.forEach(function (event, index, array) {
						if (event.name == undefined) {
							var s = event.inheritdoc;
							event.name = s.substr(s.indexOf('#') + 1);
						}
						sOUTPUTS = sOUTPUTS + tab + tab + "{name:'" + event.name + "',parameters:'";
						sOUTPUTNAMES = sOUTPUTNAMES + tab + tab + "'" + event.name + "'" + "," + newLine;
						if (event.items != undefined) {
							event.items.forEach(function (parameter, index, array) {
								if (index == array.length-1){commaOrBlank= ''} else {commaOrBlank= ','};
								if (parameter.name == 'this'){ parameter.name = o.xtype };
								sOUTPUTS = sOUTPUTS + "" + parameter.name + commaOrBlank;
							});
						}
						sOUTPUTS = sOUTPUTS + "'}" + "," + newLine;
					})
				}
				sOUTPUTS = sOUTPUTS + tab + tab + "{name:'" + "ready" + "',parameters:''}" + "" + newLine;
				sOUTPUTNAMES = sOUTPUTNAMES + tab + tab + "'" + "ready" + "'" + "" + newLine;
				var className =  o.xtype.replace(/-/g, "_")
				allClasses = allClasses + tab + "'" + o.name + "'," + tab + "// xtype='" + className + "'" + newLine;

				numClasses++; console.log(numClasses + ' - ' + className);

				fs.writeFile(folder + className + '.ts', doClass(o.xtype, sINPUTS, sOUTPUTS, sOUTPUTNAMES, o.name, className), 
					function(err) {if(err) { return console.log(err); }
				});

				imports = imports + "import { " + className + " } from './" + className + "';" + newLine;
				exports = exports + tab + tab + className + "," + newLine;
				declarations = declarations + tab + tab + className + "," + newLine;
			}
		}
	}

	fs.writeFile(folder + 'base' + '.ts', doExtBase(), 
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile('demo/misc/' + 'app' + '.js', doAppJS(allClasses),
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile(root + 'index' + '.ts', doIndex(dist),
		function(err) {if(err){return console.log(err);}
	});
	exports = exports.substring(0, exports.length - 2); exports = exports + newLine;
	declarations = declarations.substring(0, declarations.length - 2); declarations = declarations + newLine;
	fs.writeFile(folder + 'ExtAngularModule' + '.ts', doModule(imports, exports, declarations), 
		function(err) {if(err) { return console.log(err); }
	});
}

function doClass(xtype, sINPUTS, sOUTPUTS, sOUTPUTNAMES, name, className) {
return `import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - ${name}
class ${className}MetaData {
	public static XTYPE: string = '${xtype}';
	public static INPUTNAMES: string[] = [
${sINPUTS}];
	public static OUTPUTS: any[] = [
${sOUTPUTS}];
	public static OUTPUTNAMES: string[] = [
${sOUTPUTNAMES}];
}
@Component({
  selector: ${className}MetaData.XTYPE,
	inputs: ${className}MetaData.INPUTNAMES,
	outputs: ${className}MetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => ${className})}],
	template: '<ng-template #dynamic></ng-template>'
})
export class ${className} extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,${className}MetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,${className}MetaData);}
}
`;
};


function doExtBase() {
	return `/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import {AfterContentInit,AfterViewInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
	ElementRef,EventEmitter,OnInit,QueryList,Type,ViewChild,ViewContainerRef
} from '@angular/core';

export class base{
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;
	//private nofit: any;

	constructor(
		private myElement: any, 
		private componentFactoryResolver: ComponentFactoryResolver, 
		private viewContainerRef: ViewContainerRef, 
		private metaData: any
		) {
		this.xtype = metaData.XTYPE;
		this.inputs = metaData.INPUTNAMES;
		this.rootElement = myElement.nativeElement;
		this['ready'] = new EventEmitter();
		metaData.OUTPUTS.forEach( (event: any, n: any) => {
			(<any>this)[event.name] = new EventEmitter();
		});
	}

	AfterContentInit(ExtJSBaseRef) {
		//var extJSRootComponentRef : ViewContainerRef = ExtJSBaseRef.first;
		var extJSRootComponentRef : base = ExtJSBaseRef.first;
		//var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;
		var firstExtJS = extJSRootComponentRef.extjsObject;
		firstExtJS.setRenderTo(this.myElement.nativeElement);
		var ExtJSComponentRefArray: any = ExtJSBaseRef.toArray();
		var arrayLength = ExtJSComponentRefArray.length;
		for (var i = 1; i < arrayLength; i++) {
			//var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
			var obj = ExtJSComponentRefArray[i].extjsObject;
			if (obj.config.docked != null) {
				firstExtJS.insert(0, obj);
			}
			else {
				firstExtJS.add(obj);
			}
		}
	}

	OnInit(dynamicTarget,metadata?) {
		let me: any = this;
		let o: any = {};
		o.listeners = {};

		var eventnames = metadata.OUTPUTNAMES;
		if (eventnames != undefined) {
			eventnames.forEach(function (eventname, index, array) {
				var eventIndex = metadata.OUTPUTNAMES.indexOf(eventname);
				if (eventIndex != -1) {
					var eventparameters = metadata.OUTPUTS[eventIndex].parameters
					o.listeners[eventname] = function() {
							let parameters: any = eventparameters;
							let parms = parameters.split(',');
							let args = Array.prototype.slice.call(arguments);
							let o: any = {};
							for (let i = 0, j = parms.length; i < j; i++ ) {
									o[parms[i]] = args[i];
							}
							me[eventname].next(o);
					};
				}
			});
		}

		o.xtype = me.xtype;
		if (me.xtype != '') { o.xtype = me.xtype; }
		for (var i = 0; i < me.metaData.INPUTNAMES.length; i++) { 
			var prop = me.metaData.INPUTNAMES[i];
			//need to handle listeners coming in here
			if (me[prop] != undefined && 
					prop != 'listeners' && 
					prop != 'config' && 
					prop != 'fitToParent') { 
				o[prop] = me[prop]; 
			};
		}
		if ('true' == me.fitToParent) {
			o.top=0, 
			o.left=0, 
			o.width='100%', 
			o.height='100%'
		}
		if (me.config !== {} ) {
			Ext.apply(o, me.config);
		};
		me.extjsObject = Ext.create(o);
		me.ext = me.extjsObject;
		me.x = me.extjsObject;

		var componentFactory: ComponentFactory<any>;
		var type: Type<any>;

		if (me.component != undefined) {
			type = me.component;
			componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
			me.componentRef = dynamicTarget.createComponent(componentFactory);
			//me.componentRef.instance['buttontext'] = 'testing';
			var node = me.extjsObject.innerElement.dom;
			node.appendChild(me.componentRef['_hostElement'].nativeElement);
		}
		if (me.parent != undefined) {
			me.parent.insert(0, me.extjsObject);
		}
		me.ready.next(me);
	}
}
`
}

function doAppJS(allClasses) {
	return `Ext.require([
	'plugin.responsive',
	'widget.widgetcell',
	'widget.sparklineline',
	'plugin.grideditable',
	'plugin.gridviewoptions',
	'plugin.pagingtoolbar',
	'plugin.summaryrow',
	'plugin.columnresizing',
	'plugin.pivotconfigurator',
	'axis.numeric',
	'axis.category',
	'Ext.chart.series.Series',
	'series.bar',
	'series.pie',
${allClasses}]);
`
}

function doIndex(dist) {
return `export * from './${dist}ExtAngularModule'
`
}

function doModule(imports, exports, declarations) {
	return `import { NgModule } from "@angular/core";
import {  } from './';
${imports}
@NgModule({
	exports: [
${exports} ],
	declarations: [
${declarations} ]
})
export class ExtAngularModule { }
	`
}

// function doExt() {
// 	return `import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
// import { base } from './base';
// class extMetaData {
// 	public static XTYPE: string = '';
// 	public static INPUTNAMES: string[] = ['xtype','fittoparent'];
// 	public static OUTPUTS: any[] = [ { name: 'click', parameters: 'control,record,eOpts' }];
// 	public static OUTPUTNAMES: string[] = ['click'];
// }
// @Component({
//   selector: '' + extMetaData.XTYPE,
// 	inputs: extMetaData.INPUTNAMES.concat('config'),
// 	outputs: extMetaData.OUTPUTNAMES.concat('ready'),
// 	providers: [{provide: base, useExisting: forwardRef(() => )}],
// 	template: '<ng-template #dynamic></ng-template>'
// })
// export class  extends base implements OnInit {
// 	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
// 		super(myElement, componentFactoryResolver, viewContainerRef, extMetaData);
// 	}
// 	//@ContentChildren(base,{read: ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
// 	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
// 	@ViewChild('dynamic',{read: ViewContainerRef}) dynamicRef: ViewContainerRef;
// 	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
// 	ngOnInit() { this.OnInit(this.dynamicRef); }
// }
// `
// }

// function doExtNgComponent() {
// 	return `import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
// import { base } from './base';
// class ExtNgComponentMetaData {
// 	public static XTYPE: string = 'container';
// 	public static INPUTNAMES: string[] = ['selector','component','selectorParams'];
// 	public static OUTPUTS: any[] = [];
// 	public static OUTPUTNAMES: string[] = [];
// }
// @Component({
//   selector: 'ngcomponent',
// 	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
// 	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
// 	providers: [{provide: base, useExisting: forwardRef(() => ngcomponent)}],
// 	template: '<ng-template #dynamic></ng-template>'
// })
// export class ngcomponent  extends base {
// 	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
// 	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
// 	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef: ViewContainerRef;
// 	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
// 		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
// 	}
// 	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
// 	ngOnInit() { this.OnInit(this.dynamicRef); }
// }
// `
// }

// function doExtClass() {
// 	return `export class class {
// 	public className: any;
// 	public extend: any;
// 	public defineConfig: any;
// 	public createConfig: any;
// 	public extjsObject;

// 	constructor (className: any, extend: string, defineConfig: any, createConfig: any) {
// 		if (!Ext.ClassManager.isCreated(className)) {
// 			Ext.apply(defineConfig, { extend: extend });
// 			Ext.define(className, defineConfig);
// 		}
// 		this.className = className;
// 		this.extend = extend;
// 		this.defineConfig = defineConfig;
// 		this.createConfig = createConfig;
// 		this.extjsObject = Ext.create(className, createConfig);
// 		this.ext = this.extjsObject;
// 		this.x = this.extjsObject;
// 	}
// }
// `
// }
