import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class ParsePipe {
    transform(value, formats) {
        return moment(value, formats);
    }
}
ParsePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ParsePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, name: "amParse" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amParse' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztBQUdqQyxNQUFNLE9BQU8sU0FBUztJQUNwQixTQUFTLENBQUMsS0FBeUIsRUFBRSxPQUEwQjtRQUM3RCxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7c0dBSFUsU0FBUztvR0FBVCxTQUFTOzJGQUFULFNBQVM7a0JBRHJCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBQaXBlKHsgbmFtZTogJ2FtUGFyc2UnIH0pXG5leHBvcnQgY2xhc3MgUGFyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0LCBmb3JtYXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IG1vbWVudC5Nb21lbnQge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUsIGZvcm1hdHMpO1xuICB9XG59XG4iXX0=