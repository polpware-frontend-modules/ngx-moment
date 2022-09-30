import * as moment from 'moment';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class IsBeforePipe {
    transform(value, otherValue, unit) {
        return moment(value).isBefore(moment(otherValue), unit);
    }
}
IsBeforePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsBeforePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
IsBeforePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsBeforePipe, name: "amIsBefore" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsBeforePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'amIsBefore',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYmVmb3JlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaXMtYmVmb3JlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FDUCxLQUF5QixFQUN6QixVQUE4QixFQUM5QixJQUFnQztRQUVoQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7O3lHQVBVLFlBQVk7dUdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUh4QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FtSXNCZWZvcmUnLFxufSlcbmV4cG9ydCBjbGFzcyBJc0JlZm9yZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsXG4gICAgb3RoZXJWYWx1ZTogbW9tZW50Lk1vbWVudElucHV0LFxuICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5TdGFydE9mLFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5pc0JlZm9yZShtb21lbnQob3RoZXJWYWx1ZSksIHVuaXQpO1xuICB9XG59XG4iXX0=