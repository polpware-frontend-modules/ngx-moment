import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class FromUtcPipe implements PipeTransform {
    transform(value: moment.MomentInput, formats?: string | string[], ...args: string[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FromUtcPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FromUtcPipe, "amFromUtc">;
}
