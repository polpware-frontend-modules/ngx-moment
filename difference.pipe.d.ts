import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class DifferencePipe implements PipeTransform {
    transform(value: moment.MomentInput, otherValue: moment.MomentInput, unit?: moment.unitOfTime.Diff, precision?: boolean): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<DifferencePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DifferencePipe, "amDifference">;
}
