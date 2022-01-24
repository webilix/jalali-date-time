import { JalaliDateTimeObject } from '../interface/object';
import { JalaliDateTimeGregorian } from '../interface/gregorian';
import { Moment } from 'moment';
import * as moment from 'moment-timezone';
declare const checkDate: (date: Date) => boolean;
declare const checkLocale: (locale: string) => boolean;
declare const checkTimezone: (timezone: string) => boolean;
declare const checkMonth: (month: string) => boolean;
declare const getMoment: (date: Date, timezone?: string | undefined) => moment.Moment;
declare const toJalali: (date: JalaliDateTimeObject) => JalaliDateTimeObject;
declare const toGregorian: (date: JalaliDateTimeObject) => JalaliDateTimeGregorian;
declare const toObject: (date: Moment) => JalaliDateTimeObject;
declare const toString: (jalali: JalaliDateTimeObject, format: string, locale: string) => string;
export { checkDate, checkLocale, checkTimezone, checkMonth, getMoment, toJalali, toGregorian, toObject, toString };
//# sourceMappingURL=date.d.ts.map