/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class DifferencePipe {
    transform(value, otherValue, unit, precision) {
        const date = moment(value);
        const date2 = otherValue !== null ? moment(otherValue) : moment();
        return date.diff(date2, unit, precision);
    }
}
DifferencePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DifferencePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
DifferencePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DifferencePipe, name: "amDifference" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DifferencePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amDifference' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpZmZlcmVuY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7QUFFeEQsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBR2pDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FDUCxLQUF5QixFQUN6QixVQUE4QixFQUM5QixJQUE2QixFQUM3QixTQUFtQjtRQUVuQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzsyR0FYVSxjQUFjO3lHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQFBpcGUoeyBuYW1lOiAnYW1EaWZmZXJlbmNlJyB9KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0LFxuICAgIG90aGVyVmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCxcbiAgICB1bml0PzogbW9tZW50LnVuaXRPZlRpbWUuRGlmZixcbiAgICBwcmVjaXNpb24/OiBib29sZWFuLFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQodmFsdWUpO1xuICAgIGNvbnN0IGRhdGUyID0gb3RoZXJWYWx1ZSAhPT0gbnVsbCA/IG1vbWVudChvdGhlclZhbHVlKSA6IG1vbWVudCgpO1xuXG4gICAgcmV0dXJuIGRhdGUuZGlmZihkYXRlMiwgdW5pdCwgcHJlY2lzaW9uKTtcbiAgfVxufVxuIl19