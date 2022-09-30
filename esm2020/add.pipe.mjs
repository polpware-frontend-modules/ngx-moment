/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class AddPipe {
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' ||
            (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return moment(value).add(amount, unit);
    }
}
AddPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AddPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
AddPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AddPipe, name: "amAdd" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: AddPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amAdd' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRkLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEO0FBRXhELE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztBQUdqQyxNQUFNLE9BQU8sT0FBTztJQUNsQixTQUFTLENBQ1AsS0FBeUIsRUFDekIsTUFBZ0MsRUFDaEMsSUFBK0I7UUFFL0IsSUFDRSxPQUFPLE1BQU0sS0FBSyxXQUFXO1lBQzdCLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUMzRDtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7b0dBYlUsT0FBTztrR0FBUCxPQUFPOzJGQUFQLE9BQU87a0JBRG5CLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBQaXBlKHsgbmFtZTogJ2FtQWRkJyB9KVxuZXhwb3J0IGNsYXNzIEFkZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsXG4gICAgYW1vdW50OiBtb21lbnQuRHVyYXRpb25JbnB1dEFyZzEsXG4gICAgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMixcbiAgKTogYW55IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgKHR5cGVvZiBhbW91bnQgPT09ICdudW1iZXInICYmIHR5cGVvZiB1bml0ID09PSAndW5kZWZpbmVkJylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWRkUGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuYWRkKGFtb3VudCwgdW5pdCk7XG4gIH1cbn1cbiJdfQ==