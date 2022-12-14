import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class LocalTimePipe implements PipeTransform {
    transform(value: moment.MomentInput): moment.Moment;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LocalTimePipe, "amLocal">;
}
