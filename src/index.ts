export { JalaliDateTimeOptions } from './interface/options';
export { JalaliDateTimeConfig } from './interface/config';
export { JalaliDateTimeObject } from './interface/object';
export { JalaliDateTimeCalendar, JalaliDateTimeCalendarDay } from './interface/calendar';
export { JalaliDateTimeGregorian } from './interface/gregorian';
export { JalaliDateTimePeriod } from './interface/period';

import * as JDT from './script/jdt';

import { now } from './lib/now';
import { toDate } from './lib/date';
import { toTime } from './lib/time';
import { toString } from './lib/string';
import { toTitle } from './lib/title';
import { toFullText } from './lib/full-text';
import { toObject } from './lib/object';
import { daysInMonth } from './lib/days-in-month';
import { calendar } from './lib/calendar';
import { gregorian } from './lib/gregorian';
import { timezones } from './lib/timezones';

import { periodHour } from './lib/period/hour';
import { periodDay } from './lib/period/day';
import { periodWeek } from './lib/period/week';
import { periodMonth } from './lib/period/month';

import { JalaliDateTimeOptions } from './interface/options';
export const JalaliDateTime = (options?: JalaliDateTimeOptions) => {
    JDT.init(options);

    return {
        now,
        toDate,
        toTime,
        toString,
        toTitle,
        toFullText,
        toObject,
        daysInMonth,
        calendar,
        gregorian,
        timezones,

        periodHour,
        periodDay,
        periodWeek,
        periodMonth,
    };
};
