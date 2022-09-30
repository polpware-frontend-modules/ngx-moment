/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class FromUtcPipe {
    transform(value, formats, ...args) {
        return formats ? moment.utc(value, formats) : moment.utc(value);
    }
}
FromUtcPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FromUtcPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, name: "amFromUtc" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amFromUtc' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS11dGMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mcm9tLXV0Yy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUV4RCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFHakMsTUFBTSxPQUFPLFdBQVc7SUFDdEIsU0FBUyxDQUFDLEtBQXlCLEVBQUUsT0FBMkIsRUFBRSxHQUFHLElBQWM7UUFDakYsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O3dHQUhVLFdBQVc7c0dBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21VdGMnIH0pXG5leHBvcnQgY2xhc3MgRnJvbVV0Y1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsIGZvcm1hdHM/OiBzdHJpbmcgfCBzdHJpbmdbXSwgLi4uYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiBmb3JtYXRzID8gbW9tZW50LnV0Yyh2YWx1ZSwgZm9ybWF0cykgOiBtb21lbnQudXRjKHZhbHVlKTtcbiAgfVxufVxuIl19