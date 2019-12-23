export { JalaliDateTimeOptions } from './interface/options';
export { JalaliDateTimeConfig } from './interface/config';
export { JalaliDateTimeObject } from './interface/object';
export { JalaliDateTimeCalendar, JalaliDateTimeCalendarDay } from './interface/calendar';
export { JalaliDateTimeGregorian } from './interface/gregorian';

import * as JDT from './script/jdt';

import { now } from './lib/now';
import { toDate } from './lib/date';
import { toTime } from './lib/time';
import { toString } from './lib/string';
import { toTitle } from './lib/title';
import { toFullText } from './lib/full-text';
import { toObject } from './lib/object';
import { calendar } from './lib/calendar';
import { gregorian } from './lib/gregorian';
import { timezones } from './lib/timezones';

import { JalaliDateTimeOptions } from './interface/options';
export function JalaliDateTime(options?: JalaliDateTimeOptions) {
    JDT.init(options);

    return {
        now,
        toDate,
        toTime,
        toString,
        toTitle,
        toFullText,
        toObject,
        calendar,
        gregorian,
        timezones,
    };
}
