import * as moment from 'moment';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IsAfterPipe implements PipeTransform {
    transform(value: moment.MomentInput, otherValue: moment.MomentInput, unit?: moment.unitOfTime.StartOf): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsAfterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsAfterPipe, "amIsAfter">;
}
