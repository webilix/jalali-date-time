import { JalaliDateTimeObject } from '../interface/object';
import * as moment from 'moment-timezone';

import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export function toObject(date: Date, timezone?: string): JalaliDateTimeObject {
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone ? timezone : '')) timezone = JDT.timezone();

    const value = moment.default(date).tz(timezone ? timezone : 'Asia/Tehran');
    return JDate.toJalali(JDate.toObject(value));
}
