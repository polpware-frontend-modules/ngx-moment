import * as moment from 'moment';
import { Inject, Optional, Pipe } from '@angular/core';
import { NGX_MOMENT_OPTIONS } from './moment-options';
import * as i0 from "@angular/core";
export class DurationPipe {
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
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGX_MOMENT_OPTIONS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kdXJhdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLGtCQUFrQixDQUFDOztBQUd4RSxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFvRCxhQUFnQztRQUZwRixpQkFBWSxHQUFrQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQStCLEVBQUUsR0FBRyxJQUFjO1FBQzFELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztTQUN0RTtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBMEMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdGLENBQUM7SUFFTyxhQUFhLENBQUMsYUFBK0I7UUFDbkQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLEVBQUU7WUFDaEQsTUFBTSxLQUFLLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDckYsTUFBTSxhQUFhLEdBQWtCLEtBQUssQ0FBQyxNQUFNLENBQy9DLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDakQsQ0FBQztZQUNGLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7eUdBNUJVLFlBQVksa0JBR1Msa0JBQWtCO3VHQUh2QyxZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOzswQkFJYixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR1hfTU9NRU5UX09QVElPTlMsIE5neE1vbWVudE9wdGlvbnMgfSBmcm9tICcuL21vbWVudC1vcHRpb25zJztcblxuQFBpcGUoeyBuYW1lOiAnYW1EdXJhdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgYWxsb3dlZFVuaXRzOiBBcnJheTxzdHJpbmc+ID0gWydzcycsICdzJywgJ20nLCAnaCcsICdkJywgJ00nXTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NT01FTlRfT1BUSU9OUykgbW9tZW50T3B0aW9ucz86IE5neE1vbWVudE9wdGlvbnMpIHtcbiAgICB0aGlzLl9hcHBseU9wdGlvbnMobW9tZW50T3B0aW9ucyk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgYXJncyA9PT0gJ3VuZGVmaW5lZCcgfHwgYXJncy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVyYXRpb25QaXBlOiBtaXNzaW5nIHJlcXVpcmVkIHRpbWUgdW5pdCBhcmd1bWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHZhbHVlLCBhcmdzWzBdIGFzIG1vbWVudC51bml0T2ZUaW1lLkR1cmF0aW9uQ29uc3RydWN0b3IpLmh1bWFuaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseU9wdGlvbnMobW9tZW50T3B0aW9uczogTmd4TW9tZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghbW9tZW50T3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghIW1vbWVudE9wdGlvbnMucmVsYXRpdmVUaW1lVGhyZXNob2xkT3B0aW9ucykge1xuICAgICAgY29uc3QgdW5pdHM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhtb21lbnRPcHRpb25zLnJlbGF0aXZlVGltZVRocmVzaG9sZE9wdGlvbnMpO1xuICAgICAgY29uc3QgZmlsdGVyZWRVbml0czogQXJyYXk8c3RyaW5nPiA9IHVuaXRzLmZpbHRlcihcbiAgICAgICAgKHVuaXQpID0+IHRoaXMuYWxsb3dlZFVuaXRzLmluZGV4T2YodW5pdCkgIT09IC0xLFxuICAgICAgKTtcbiAgICAgIGZpbHRlcmVkVW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBtb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkKHVuaXQsIG1vbWVudE9wdGlvbnMucmVsYXRpdmVUaW1lVGhyZXNob2xkT3B0aW9uc1t1bml0XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==