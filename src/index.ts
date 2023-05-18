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
import { daysOfWeek } from './lib/day-of-week';
import { daysInMonth } from './lib/days-in-month';
import { calendar } from './lib/calendar';
import { gregorian } from './lib/gregorian';
import { timezones } from './lib/timezones';

import { nextDay } from './lib/next/day';
import { nextMonth } from './lib/next/month';
import { nextYear } from './lib/next/year';

import { periodHour } from './lib/period/hour';
import { periodDay } from './lib/period/day';
import { periodWeek } from './lib/period/week';
import { periodMonth } from './lib/period/month';
import { periodYear } from './lib/period/year';

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
        daysOfWeek,
        daysInMonth,
        calendar,
        gregorian,
        timezones,

        nextDay,
        nextMonth,
        nextYear,

        periodHour,
        periodDay,
        periodWeek,
        periodMonth,
        periodYear,
    };
};
