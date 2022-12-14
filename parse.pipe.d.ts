import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class ParsePipe implements PipeTransform {
    transform(value: moment.MomentInput, formats: string | string[]): moment.Moment;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParsePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ParsePipe, "amParse">;
}
