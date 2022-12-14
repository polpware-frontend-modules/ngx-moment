import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class AddPipe implements PipeTransform {
    transform(value: moment.MomentInput, amount: moment.DurationInputArg1, unit?: moment.DurationInputArg2): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AddPipe, "amAdd">;
}
