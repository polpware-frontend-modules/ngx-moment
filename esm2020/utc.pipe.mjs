import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class UtcPipe {
    transform(value) {
        return moment(value).utc();
    }
}
UtcPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: UtcPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
UtcPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: UtcPipe, name: "amUtc" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: UtcPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amUtc' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRjLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRjLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBR2pDLE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFNBQVMsQ0FBQyxLQUF5QjtRQUNqQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOztvR0FIVSxPQUFPO2tHQUFQLE9BQU87MkZBQVAsT0FBTztrQkFEbkIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQFBpcGUoeyBuYW1lOiAnYW1VdGMnIH0pXG5leHBvcnQgY2xhc3MgVXRjUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG1vbWVudC5Nb21lbnQge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLnV0YygpO1xuICB9XG59XG4iXX0=