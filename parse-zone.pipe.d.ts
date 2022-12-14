import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class ParseZonePipe implements PipeTransform {
    transform(value: moment.MomentInput): moment.Moment;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParseZonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ParseZonePipe, "amParseZone">;
}
