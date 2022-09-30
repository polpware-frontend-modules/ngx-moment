import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class LocalTimePipe {
    transform(value) {
        return moment(value).local();
    }
}
LocalTimePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
LocalTimePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, name: "amLocal" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amLocal' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztBQUdqQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsS0FBeUI7UUFDakMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7MEdBSFUsYUFBYTt3R0FBYixhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBQaXBlKHsgbmFtZTogJ2FtTG9jYWwnIH0pXG5leHBvcnQgY2xhc3MgTG9jYWxUaW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG1vbWVudC5Nb21lbnQge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmxvY2FsKCk7XG4gIH1cbn1cbiJdfQ==