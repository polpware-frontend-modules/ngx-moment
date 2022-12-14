import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class DateFormatPipe implements PipeTransform {
    transform(value: moment.MomentInput, ...args: any[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DateFormatPipe, "amDateFormat">;
}
