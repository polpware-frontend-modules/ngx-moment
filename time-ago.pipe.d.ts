import { ChangeDetectorRef, PipeTransform, OnDestroy, NgZone } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class TimeAgoPipe implements PipeTransform, OnDestroy {
    private cdRef;
    private ngZone;
    private currentTimer;
    private lastTime;
    private lastValue;
    private lastOmitSuffix;
    private lastLocale?;
    private lastText;
    private formatFn;
    constructor(cdRef: ChangeDetectorRef, ngZone: NgZone);
    format(m: moment.Moment): string;
    transform(value: moment.MomentInput, omitSuffix?: boolean, formatFn?: (m: moment.Moment) => string): string;
    ngOnDestroy(): void;
    private createTimer;
    private removeTimer;
    private getSecondsUntilUpdate;
    private hasChanged;
    private getTime;
    private getLocale;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeAgoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimeAgoPipe, "amTimeAgo">;
}
