import { Pipe } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class LocalePipe {
    transform(value, locale) {
        return moment(value).locale(locale);
    }
}
LocalePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
LocalePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalePipe, name: "amLocale" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amLocale' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9jYWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBR2pDLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFNBQVMsQ0FBQyxLQUF5QixFQUFFLE1BQWM7UUFDakQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O3VHQUhVLFVBQVU7cUdBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUR0QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUxvY2FsZScgfSlcbmV4cG9ydCBjbGFzcyBMb2NhbGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0LCBsb2NhbGU6IHN0cmluZyk6IG1vbWVudC5Nb21lbnQge1xuICAgIHJldHVybiBtb21lbnQodmFsdWUpLmxvY2FsZShsb2NhbGUpO1xuICB9XG59XG4iXX0=