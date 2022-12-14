import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class SubtractPipe implements PipeTransform {
    transform(value: moment.MomentInput, amount: moment.DurationInputArg1, unit?: moment.DurationInputArg2): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubtractPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SubtractPipe, "amSubtract">;
}
