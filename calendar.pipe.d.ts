import { ChangeDetectorRef, PipeTransform, OnDestroy, NgZone } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class CalendarPipe implements PipeTransform, OnDestroy {
    private cdRef;
    private ngZone;
    /**
     * Internal reference counter, so we can clean up when no instances are in use
     */
    private static refs;
    private static timer;
    private static midnight;
    private midnightSub;
    constructor(cdRef: ChangeDetectorRef, ngZone: NgZone);
    transform(value: moment.MomentInput, ...args: any[]): any;
    ngOnDestroy(): void;
    private static initTimer;
    private static removeTimer;
    private static _getMillisecondsUntilUpdate;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CalendarPipe, "amCalendar">;
}
