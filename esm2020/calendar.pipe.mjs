/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
import { Pipe, EventEmitter, } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class CalendarPipe {
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe.initTimer(ngZone);
        CalendarPipe.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe.midnight.subscribe(() => {
            this.ngZone.run(() => this.cdRef.markForCheck());
        });
    }
    transform(value, ...args) {
        let formats = null;
        let referenceTime = null;
        for (let i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !moment.isMoment(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = moment(args[i]);
                }
            }
        }
        return moment(value).calendar(referenceTime, formats);
    }
    ngOnDestroy() {
        if (CalendarPipe.refs > 0) {
            CalendarPipe.refs--;
        }
        if (CalendarPipe.refs === 0) {
            CalendarPipe.removeTimer();
        }
        this.midnightSub.unsubscribe();
    }
    static initTimer(ngZone) {
        // initialize the timer
        if (!CalendarPipe.midnight) {
            CalendarPipe.midnight = new EventEmitter();
            if (typeof window !== 'undefined') {
                const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
                CalendarPipe.timer = ngZone.runOutsideAngular(() => {
                    return window.setTimeout(() => {
                        // emit the current date
                        CalendarPipe.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe.removeTimer();
                        CalendarPipe.initTimer(ngZone);
                    }, timeToUpdate);
                });
            }
        }
    }
    static removeTimer() {
        if (CalendarPipe.timer) {
            window.clearTimeout(CalendarPipe.timer);
            CalendarPipe.timer = null;
            CalendarPipe.midnight = null;
        }
    }
    static _getMillisecondsUntilUpdate() {
        const now = moment();
        const tomorrow = moment().startOf('day').add(1, 'days');
        const timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    }
}
/**
 * Internal reference counter, so we can clean up when no instances are in use
 */
CalendarPipe.refs = 0;
CalendarPipe.timer = null;
CalendarPipe.midnight = null;
CalendarPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CalendarPipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Pipe });
CalendarPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CalendarPipe, name: "amCalendar", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CalendarPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amCalendar', pure: false }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYWxlbmRhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUV4RCxPQUFPLEVBQ0wsSUFBSSxFQUdKLFlBQVksR0FHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFJakMsTUFBTSxPQUFPLFlBQVk7SUFXdkIsWUFBb0IsS0FBd0IsRUFBVSxNQUFjO1FBQWhELFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNsRSxxRkFBcUY7UUFDckYsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEIsK0VBQStFO1FBQy9FLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQXlCLEVBQUUsR0FBRyxJQUFXO1FBQ2pELElBQUksT0FBTyxHQUFRLElBQUksQ0FBQztRQUN4QixJQUFJLGFBQWEsR0FBUSxJQUFJLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDNUQsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakM7YUFDRjtTQUNGO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDekIsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUMzQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7UUFDckMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQzFCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztZQUNqRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLDJCQUEyQixFQUFFLENBQUM7Z0JBQ2hFLFlBQVksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtvQkFDakQsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDNUIsd0JBQXdCO3dCQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7d0JBRXZDLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUMzQixZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVztRQUN4QixJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDMUIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRU8sTUFBTSxDQUFDLDJCQUEyQjtRQUN4QyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNyQixNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFELE9BQU8sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUMxRCxDQUFDOztBQXJGRDs7R0FFRztBQUNZLGlCQUFJLEdBQUcsQ0FBRSxDQUFBO0FBRVQsa0JBQUssR0FBa0IsSUFBSyxDQUFBO0FBQzVCLHFCQUFRLEdBQThCLElBQUssQ0FBQTt5R0FQL0MsWUFBWTt1R0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xuXG5pbXBvcnQge1xuICBQaXBlLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUGlwZVRyYW5zZm9ybSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUNhbGVuZGFyJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogSW50ZXJuYWwgcmVmZXJlbmNlIGNvdW50ZXIsIHNvIHdlIGNhbiBjbGVhbiB1cCB3aGVuIG5vIGluc3RhbmNlcyBhcmUgaW4gdXNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZWZzID0gMDtcblxuICBwcml2YXRlIHN0YXRpYyB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIG1pZG5pZ2h0OiBFdmVudEVtaXR0ZXI8RGF0ZT4gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIG1pZG5pZ2h0U3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICAvLyB1c2luZyBhIHNpbmdsZSBzdGF0aWMgdGltZXIgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhpcyBwaXBlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgQ2FsZW5kYXJQaXBlLmluaXRUaW1lcihuZ1pvbmUpO1xuXG4gICAgQ2FsZW5kYXJQaXBlLnJlZnMrKztcblxuICAgIC8vIHZhbHVlcyBzdWNoIGFzIFRvZGF5IHdpbGwgbmVlZCB0byBiZSByZXBsYWNlZCB3aXRoIFllc3RlcmRheSBhZnRlciBtaWRuaWdodCxcbiAgICAvLyBzbyBtYWtlIHN1cmUgd2Ugc3Vic2NyaWJlIHRvIGFuIEV2ZW50RW1pdHRlciB0aGF0IHdlIHNldCB1cCB0byBlbWl0IGF0IG1pZG5pZ2h0XG4gICAgdGhpcy5taWRuaWdodFN1YiA9IENhbGVuZGFyUGlwZS5taWRuaWdodC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBtb21lbnQuTW9tZW50SW5wdXQsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICBsZXQgZm9ybWF0czogYW55ID0gbnVsbDtcbiAgICBsZXQgcmVmZXJlbmNlVGltZTogYW55ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoYXJnc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdvYmplY3QnICYmICFtb21lbnQuaXNNb21lbnQoYXJnc1tpXSkpIHtcbiAgICAgICAgICBmb3JtYXRzID0gYXJnc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZlcmVuY2VUaW1lID0gbW9tZW50KGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuY2FsZW5kYXIocmVmZXJlbmNlVGltZSwgZm9ybWF0cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnJlZnMgPiAwKSB7XG4gICAgICBDYWxlbmRhclBpcGUucmVmcy0tO1xuICAgIH1cblxuICAgIGlmIChDYWxlbmRhclBpcGUucmVmcyA9PT0gMCkge1xuICAgICAgQ2FsZW5kYXJQaXBlLnJlbW92ZVRpbWVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5taWRuaWdodFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdFRpbWVyKG5nWm9uZTogTmdab25lKSB7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdGltZXJcbiAgICBpZiAoIUNhbGVuZGFyUGlwZS5taWRuaWdodCkge1xuICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHRpbWVUb1VwZGF0ZSA9IENhbGVuZGFyUGlwZS5fZ2V0TWlsbGlzZWNvbmRzVW50aWxVcGRhdGUoKTtcbiAgICAgICAgQ2FsZW5kYXJQaXBlLnRpbWVyID0gbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gZW1pdCB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgICAgICBDYWxlbmRhclBpcGUubWlkbmlnaHQuZW1pdChuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0aGUgdGltZXJcbiAgICAgICAgICAgIENhbGVuZGFyUGlwZS5yZW1vdmVUaW1lcigpO1xuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLmluaXRUaW1lcihuZ1pvbmUpO1xuICAgICAgICAgIH0sIHRpbWVUb1VwZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZVRpbWVyKCkge1xuICAgIGlmIChDYWxlbmRhclBpcGUudGltZXIpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoQ2FsZW5kYXJQaXBlLnRpbWVyKTtcbiAgICAgIENhbGVuZGFyUGlwZS50aW1lciA9IG51bGw7XG4gICAgICBDYWxlbmRhclBpcGUubWlkbmlnaHQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIF9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpIHtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgxLCAnZGF5cycpO1xuICAgIGNvbnN0IHRpbWVUb01pZG5pZ2h0ID0gdG9tb3Jyb3cudmFsdWVPZigpIC0gbm93LnZhbHVlT2YoKTtcbiAgICByZXR1cm4gdGltZVRvTWlkbmlnaHQgKyAxMDAwOyAvLyAxIHNlY29uZCBhZnRlciBtaWRuaWdodFxuICB9XG59XG4iXX0=