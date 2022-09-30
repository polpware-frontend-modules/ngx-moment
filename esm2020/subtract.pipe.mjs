/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class SubtractPipe {
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' ||
            (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return moment(value).subtract(amount, unit);
    }
}
SubtractPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SubtractPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SubtractPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SubtractPipe, name: "amSubtract" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SubtractPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amSubtract' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdWJ0cmFjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUV4RCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFHakMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUNQLEtBQXlCLEVBQ3pCLE1BQWdDLEVBQ2hDLElBQStCO1FBRS9CLElBQ0UsT0FBTyxNQUFNLEtBQUssV0FBVztZQUM3QixDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsRUFDM0Q7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7O3lHQWJVLFlBQVk7dUdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUR4QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbVN1YnRyYWN0JyB9KVxuZXhwb3J0IGNsYXNzIFN1YnRyYWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCxcbiAgICBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSxcbiAgICB1bml0PzogbW9tZW50LkR1cmF0aW9uSW5wdXRBcmcyLFxuICApOiBhbnkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAodHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJ0cmFjdFBpcGU6IG1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnQodmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XG4gIH1cbn1cbiJdfQ==