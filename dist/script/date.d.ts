import { JalaliDateTimeObject } from '../interface/object';
import { JalaliDateTimeGregorian } from '../interface/gregorian';
import { Moment } from 'moment';
import * as moment from 'moment-timezone';
declare const isDate: (date: Date) => boolean;
declare const isLocale: (locale: string) => boolean;
declare const isTimezone: (timezone: string) => boolean;
declare const isMonth: (month: string) => boolean;
declare const getMoment: (date: Date, timezone?: string) => moment.Moment;
declare const toJalali: (date: JalaliDateTimeObject) => JalaliDateTimeObject;
declare const toGregorian: (date: JalaliDateTimeObject) => JalaliDateTimeGregorian;
declare const toObject: (date: Moment) => JalaliDateTimeObject;
declare const toString: (jalali: JalaliDateTimeObject, format: string, locale: string) => string;
export { isDate, isLocale, isTimezone, isMonth, getMoment, toJalali, toGregorian, toObject, toString };
//# sourceMappingURL=date.d.ts.map