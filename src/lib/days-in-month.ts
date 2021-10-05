import * as JDate from '../script/date';

import { toString } from './string';
import { gregorian } from './gregorian';

export const daysInMonth = (month?: string): number => {
    month = month || toString(new Date(), { format: 'Y-M' });
    if (!JDate.checkMonth(month)) throw new TypeError('Invalid Month');

    let daysInMonth: number = 31;
    const jalaliMonth: number = Number(month.substr(5, 2));
    if (jalaliMonth > 6 && jalaliMonth < 12) daysInMonth = 30;
    else if (jalaliMonth === 12) {
        const date: string = gregorian(month + '-30').date + 'T12:00:00';
        const have30Days: boolean = toString(new Date(date)).substr(8, 2) === '30';
        daysInMonth = have30Days ? 30 : 29;
    }

    return daysInMonth;
};
