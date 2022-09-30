/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class FromUnixPipe {
    transform(value, ...args) {
        return typeof value === 'string' ? moment.unix(parseInt(value, 10)) : moment.unix(value);
    }
}
FromUnixPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUnixPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FromUnixPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUnixPipe, name: "amFromUnix" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUnixPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amFromUnix' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS11bml4LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnJvbS11bml4LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEO0FBRXhELE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztBQUdqQyxNQUFNLE9BQU8sWUFBWTtJQUN2QixTQUFTLENBQUMsS0FBc0IsRUFBRSxHQUFHLElBQWM7UUFDakQsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNGLENBQUM7O3lHQUhVLFlBQVk7dUdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUR4QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5neC1tb21lbnQgKGMpIDIwMTUsIDIwMTYgVXJpIFNoYWtlZCAvIE1JVCBMaWNlbmNlICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21Vbml4JyB9KVxuZXhwb3J0IGNsYXNzIEZyb21Vbml4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbW9tZW50LnVuaXgocGFyc2VJbnQodmFsdWUsIDEwKSkgOiBtb21lbnQudW5peCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==