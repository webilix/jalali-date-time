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
import { dayOfWeek } from './lib/day-of-week';
import { daysInMonth } from './lib/days-in-month';
import { calendar } from './lib/calendar';
import { gregorian } from './lib/gregorian';
import { timezones } from './lib/timezones';

import { nextDay, nextDayOfWeek } from './lib/next/day-of-week';
import { nextMonth, nextDayOfMonth } from './lib/next/day-of-month';
import { nextYear, nextDayOfYear } from './lib/next/day-of-year';

import { periodHour } from './lib/period/hour';
import { periodDay } from './lib/period/day';
import { periodWeek } from './lib/period/week';
import { periodMonth } from './lib/period/month';
import { periodYear } from './lib/period/year';

import { modify } from './lib/class/modify';

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
        dayOfWeek,
        daysInMonth,
        calendar,
        gregorian,
        timezones,

        nextDay,
        nextDayOfWeek,
        nextMonth,
        nextDayOfMonth,
        nextYear,
        nextDayOfYear,

        periodHour,
        periodDay,
        periodWeek,
        periodMonth,
        periodYear,

        modify,
    };
};
