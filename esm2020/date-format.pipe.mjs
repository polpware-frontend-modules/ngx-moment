/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class DateFormatPipe {
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return moment(value).format(args[0]);
    }
}
DateFormatPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
DateFormatPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, name: "amDateFormat" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amDateFormat' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRlLWZvcm1hdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUV4RCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFHakMsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUyxDQUFDLEtBQXlCLEVBQUUsR0FBRyxJQUFXO1FBQ2pELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OzJHQU5VLGNBQWM7eUdBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbURhdGVGb3JtYXQnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChhcmdzWzBdKTtcbiAgfVxufVxuIl19