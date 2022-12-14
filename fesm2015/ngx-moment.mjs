import * as i0 from '@angular/core';
import { Pipe, EventEmitter, InjectionToken, Optional, Inject, NgModule } from '@angular/core';
import * as moment from 'moment';

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class AddPipe {
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

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class CalendarPipe {
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

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class DateFormatPipe {
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return moment(value).format(args[0]);
    }
}
DateFormatPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
DateFormatPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, name: "amDateFormat" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DateFormatPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amDateFormat' }]
        }] });

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class DifferencePipe {
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

const NGX_MOMENT_OPTIONS = new InjectionToken('NGX_MOMENT_OPTIONS');

class DurationPipe {
    constructor(momentOptions) {
        this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
        this._applyOptions(momentOptions);
    }
    transform(value, ...args) {
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return moment.duration(value, args[0]).humanize();
    }
    _applyOptions(momentOptions) {
        if (!momentOptions) {
            return;
        }
        if (!!momentOptions.relativeTimeThresholdOptions) {
            const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
            const filteredUnits = units.filter((unit) => this.allowedUnits.indexOf(unit) !== -1);
            filteredUnits.forEach((unit) => {
                moment.relativeTimeThreshold(unit, momentOptions.relativeTimeThresholdOptions[unit]);
            });
        }
    }
}
DurationPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DurationPipe, deps: [{ token: NGX_MOMENT_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Pipe });
DurationPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DurationPipe, name: "amDuration" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DurationPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amDuration' }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [NGX_MOMENT_OPTIONS]
                    }] }];
    } });

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class FromUnixPipe {
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

class ParsePipe {
    transform(value, formats) {
        return moment(value, formats);
    }
}
ParsePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ParsePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, name: "amParse" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: ParsePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amParse' }]
        }] });

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class FromUtcPipe {
    transform(value, formats, ...args) {
        return formats ? moment.utc(value, formats) : moment.utc(value);
    }
}
FromUtcPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FromUtcPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, name: "amFromUtc" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: FromUtcPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amFromUtc' }]
        }] });

class IsAfterPipe {
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

class IsBeforePipe {
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

class LocalTimePipe {
    transform(value) {
        return moment(value).local();
    }
}
LocalTimePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
LocalTimePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, name: "amLocal" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: LocalTimePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amLocal' }]
        }] });

class LocalePipe {
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

class ParseZonePipe {
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

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class SubtractPipe {
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

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
class TimeAgoPipe {
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    format(m) {
        return m.from(moment(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.formatFn = formatFn || this.format.bind(this);
            this.removeTimer();
            this.createTimer();
            this.lastText = this.formatFn(moment(value));
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    createTimer() {
        if (this.currentTimer) {
            return;
        }
        const momentInstance = moment(this.lastValue);
        const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.lastText = this.formatFn(moment(this.lastValue));
                    this.currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    }
    removeTimer() {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    }
    getSecondsUntilUpdate(momentInstance) {
        const howOld = Math.abs(moment().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    }
    hasChanged(value, omitSuffix) {
        return (this.getTime(value) !== this.lastTime ||
            this.getLocale(value) !== this.lastLocale ||
            omitSuffix !== this.lastOmitSuffix);
    }
    getTime(value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return moment(value).valueOf();
        }
    }
    getLocale(value) {
        return moment.isMoment(value) ? value.locale() : moment.locale();
    }
}
TimeAgoPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TimeAgoPipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Pipe });
TimeAgoPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TimeAgoPipe, name: "amTimeAgo", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TimeAgoPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'amTimeAgo', pure: false }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; } });

class UtcPipe {
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

const ANGULAR_MOMENT_PIPES = [
    AddPipe,
    CalendarPipe,
    DateFormatPipe,
    DifferencePipe,
    DurationPipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
    TimeAgoPipe,
    UtcPipe,
    FromUtcPipe,
    LocalTimePipe,
    LocalePipe,
    ParseZonePipe,
    IsBeforePipe,
    IsAfterPipe,
];
class MomentModule {
    static forRoot(options) {
        return {
            ngModule: MomentModule,
            providers: [
                {
                    provide: NGX_MOMENT_OPTIONS,
                    useValue: Object.assign({}, options),
                },
            ],
        };
    }
}
MomentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MomentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MomentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MomentModule, declarations: [AddPipe,
        CalendarPipe,
        DateFormatPipe,
        DifferencePipe,
        DurationPipe,
        FromUnixPipe,
        ParsePipe,
        SubtractPipe,
        TimeAgoPipe,
        UtcPipe,
        FromUtcPipe,
        LocalTimePipe,
        LocalePipe,
        ParseZonePipe,
        IsBeforePipe,
        IsAfterPipe], exports: [AddPipe,
        CalendarPipe,
        DateFormatPipe,
        DifferencePipe,
        DurationPipe,
        FromUnixPipe,
        ParsePipe,
        SubtractPipe,
        TimeAgoPipe,
        UtcPipe,
        FromUtcPipe,
        LocalTimePipe,
        LocalePipe,
        ParseZonePipe,
        IsBeforePipe,
        IsAfterPipe] });
MomentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MomentModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MomentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: ANGULAR_MOMENT_PIPES,
                    exports: ANGULAR_MOMENT_PIPES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, FromUtcPipe, IsAfterPipe, IsBeforePipe, LocalTimePipe, LocalePipe, MomentModule, NGX_MOMENT_OPTIONS, ParsePipe, ParseZonePipe, SubtractPipe, TimeAgoPipe, UtcPipe };
//# sourceMappingURL=ngx-moment.mjs.map
