import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare class LocalePipe implements PipeTransform {
    transform(value: moment.MomentInput, locale: string): moment.Moment;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LocalePipe, "amLocale">;
}
