import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class UtcPipe implements PipeTransform {
    transform(value: moment.MomentInput): moment.Moment;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtcPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<UtcPipe, "amUtc">;
}
