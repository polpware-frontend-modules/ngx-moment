import * as moment from 'moment';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IsBeforePipe implements PipeTransform {
    transform(value: moment.MomentInput, otherValue: moment.MomentInput, unit?: moment.unitOfTime.StartOf): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsBeforePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsBeforePipe, "amIsBefore">;
}
