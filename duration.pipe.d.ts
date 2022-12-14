import * as moment from 'moment';
import { PipeTransform } from '@angular/core';
import { NgxMomentOptions } from './moment-options';
import * as i0 from "@angular/core";
export declare class DurationPipe implements PipeTransform {
    allowedUnits: Array<string>;
    constructor(momentOptions?: NgxMomentOptions);
    transform(value: moment.DurationInputArg1, ...args: string[]): string;
    private _applyOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<DurationPipe, [{ optional: true; }]>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DurationPipe, "amDuration">;
}
