import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { base } from './base';
export declare class ngcomponent extends base {
    extbaseRef: QueryList<base>;
    dynamicRef: ViewContainerRef;
    constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
