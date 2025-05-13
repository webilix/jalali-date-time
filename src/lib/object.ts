import { JalaliDateTimeObject } from '../interface/object';

import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export function toObject(date: Date): JalaliDateTimeObject;
export function toObject(date: Date, timezone: string): JalaliDateTimeObject;
export function toObject(date: Date, timezone?: string): JalaliDateTimeObject {
    if (!JDate.isDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.isTimezone(timezone || '')) timezone = JDT.timezone();

    const value = JDate.getMoment(date, timezone);
    return JDate.toJalali(JDate.toObject(value));
}
