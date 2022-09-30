import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class ParseZonePipe {
    transform(value) {
        return moment.parseZone(value);
    }
}
ParseZonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParseZonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ParseZonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParseZonePipe, name: "amParseZone" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParseZonePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amParseZone' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2Utem9uZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhcnNlLXpvbmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFHakMsTUFBTSxPQUFPLGFBQWE7SUFDeEIsU0FBUyxDQUFDLEtBQXlCO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzswR0FIVSxhQUFhO3dHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQFBpcGUoeyBuYW1lOiAnYW1QYXJzZVpvbmUnIH0pXG5leHBvcnQgY2xhc3MgUGFyc2Vab25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG1vbWVudC5Nb21lbnQge1xuICAgIHJldHVybiBtb21lbnQucGFyc2Vab25lKHZhbHVlKTtcbiAgfVxufVxuIl19