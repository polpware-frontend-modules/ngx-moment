import * as moment from 'moment';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class IsAfterPipe {
    transform(value, otherValue, unit) {
        return moment(value).isAfter(moment(otherValue), unit);
    }
}
IsAfterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsAfterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
IsAfterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsAfterPipe, name: "amIsAfter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: IsAfterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'amIsAfter',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYWZ0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pcy1hZnRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQ1AsS0FBeUIsRUFDekIsVUFBOEIsRUFDOUIsSUFBZ0M7UUFFaEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzt3R0FQVSxXQUFXO3NHQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFIdkIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhbUlzQWZ0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBJc0FmdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCxcbiAgICBvdGhlclZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsXG4gICAgdW5pdD86IG1vbWVudC51bml0T2ZUaW1lLlN0YXJ0T2YsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmlzQWZ0ZXIobW9tZW50KG90aGVyVmFsdWUpLCB1bml0KTtcbiAgfVxufVxuIl19