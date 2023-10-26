export { JalaliDateTimeOptions } from './interface/options';
export { JalaliDateTimeConfig } from './interface/config';
export { JalaliDateTimeObject } from './interface/object';
export { JalaliDateTimeCalendar, JalaliDateTimeCalendarDay } from './interface/calendar';
export { JalaliDateTimeGregorian } from './interface/gregorian';
export { JalaliDateTimePeriod } from './interface/period';
import { nextDay, nextDayOfWeek } from './lib/next/day-of-week';
import { nextMonth, nextDayOfMonth } from './lib/next/day-of-month';
import { nextYear, nextDayOfYear } from './lib/next/day-of-year';
import { periodDay } from './lib/period/day';
import { JalaliDateTimeOptions } from './interface/options';
export declare const JalaliDateTime: (options?: JalaliDateTimeOptions) => {
    now: (config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toDate: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toTime: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toString: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toTitle: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toFullText: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toObject: (date: Date, timezone?: string | undefined) => import("./interface/object").JalaliDateTimeObject;
    dayOfWeek: (date?: Date | undefined, timezone?: string | undefined) => number;
    daysInMonth: (month?: string | undefined) => number;
    calendar: (month?: string | undefined) => import("./interface/calendar").JalaliDateTimeCalendar;
    gregorian: (jalali: string) => import("./interface/gregorian").JalaliDateTimeGregorian;
    timezones: () => string[];
    nextDay: typeof nextDay;
    nextDayOfWeek: typeof nextDayOfWeek;
    nextMonth: typeof nextMonth;
    nextDayOfMonth: typeof nextDayOfMonth;
    nextYear: typeof nextYear;
    nextDayOfYear: typeof nextDayOfYear;
    periodHour: (hours: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodDay: typeof periodDay;
    periodWeek: (weeks: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodMonth: (months: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodYear: (years: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
};
//# sourceMappingURL=index.d.ts.map