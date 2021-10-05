import { JalaliDateTimeGregorian } from '../interface/gregorian';

import * as JDate from '../script/date';

export const gregorian = (jalali: string): JalaliDateTimeGregorian => {
    if (typeof jalali !== 'string') throw new TypeError('Date is not String');

    let [Y, M, D] = jalali.split('-');

    let year = parseInt(Y, 10);
    if (isNaN(year) || year < 1000) throw new RangeError('Year must be 4 digits');

    let month = parseInt(M, 10);
    if (isNaN(month) || month < 1 || month > 12) throw new RangeError('Month is not between 1, 12');

    let day = parseInt(D, 10);
    if (isNaN(day) || day < 1 || day > 31) throw new RangeError('Day is not between 1, 31');

    return JDate.toGregorian({ year, month, day, week: 0, hour: 0, minute: 0, second: 0 });
};
