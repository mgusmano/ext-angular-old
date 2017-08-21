import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { base } from './base';
export declare class calendarMetaData {
    static XTYPE: string;
    static INPUTNAMES: string[];
    static OUTPUTS: any[];
    static OUTPUTNAMES: string[];
}
export declare class calendar extends base {
    constructor(eRef: ElementRef, resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    extbaseRef: QueryList<base>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
