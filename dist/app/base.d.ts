/// <reference path="../../node_modules/@types/extjs/index.d.ts" />
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
export declare class base {
    private myElement;
    private componentFactoryResolver;
    private viewContainerRef;
    private metaData;
    extjsObject: any;
    private rootElement;
    private listeners;
    private xtype;
    private inputs;
    constructor(myElement: any, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, metaData: any);
    AfterContentInit(ExtJSBaseRef: any): void;
    OnInit(dynamicTarget: any, metadata?: any): void;
}
