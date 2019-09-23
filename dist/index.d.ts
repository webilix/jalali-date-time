export { JalaliDateTimeOptions } from './interface/options';
export { JalaliDateTimeConfig } from './interface/config';
export { JalaliDateTimeObject } from './interface/object';
export { JalaliDateTimeGregorian } from './interface/gregorian';
import { now } from './lib/now';
import { toDate } from './lib/date';
import { toTime } from './lib/time';
import { toString } from './lib/string';
import { toTitle } from './lib/title';
import { toFullText } from './lib/full-text';
import { toObject } from './lib/object';
import { gregorian } from './lib/gregorian';
import { timezones } from './lib/timezones';
import { JalaliDateTimeOptions } from './interface/options';
export declare function JalaliDateTime(options?: JalaliDateTimeOptions): {
    now: typeof now;
    toDate: typeof toDate;
    toTime: typeof toTime;
    toString: typeof toString;
    toTitle: typeof toTitle;
    toFullText: typeof toFullText;
    toObject: typeof toObject;
    gregorian: typeof gregorian;
    timezones: typeof timezones;
};
//# sourceMappingURL=index.d.ts.map