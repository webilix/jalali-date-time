import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export function dayOfWeek(): number;
export function dayOfWeek(date: Date): number;
export function dayOfWeek(timezone: string): number;
export function dayOfWeek(date: Date, timezone: string): number;
export function dayOfWeek(arg1?: any, arg2?: any): number {
    const date: Date = arg1 && JDate.checkDate(arg1) ? arg1 : new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');

    let timezone: string = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    if (!JDate.checkTimezone(timezone)) timezone = JDT.timezone();

    const moment: Date = JDate.getMoment(date, timezone).endOf('D').toDate();
    return (moment.getDay() + 1) % 7;
}
