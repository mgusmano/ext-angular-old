import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { base } from './base';
export declare class navigationview extends base {
    constructor(eRef: ElementRef, resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    extbaseRef: QueryList<base>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}