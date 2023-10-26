import * as JDate from '../../script/date';
import * as JDT from '../../script/jdt';

/**
 * @deprecated This method is deprecated and will be removed in future versions. Please use nextDayOfWeek instead
 */
export function nextDay(day: number, date?: Date, timezone?: string): Date {
    return nextDayOfWeek(day, date || new Date(), timezone || JDT.timezone());
}

export function nextDayOfWeek(dayOfWeek: number): Date;
export function nextDayOfWeek(dayOfWeek: number, date: Date): Date;
export function nextDayOfWeek(dayOfWeek: number, timezone: string): Date;
export function nextDayOfWeek(dayOfWeek: number, date: Date, timezone: string): Date;
export function nextDayOfWeek(dayOfWeek: number, arg1?: any, arg2?: any): Date {
    if (isNaN(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) throw new TypeError('dayOfWeek must be between 0 and 6');

    const { date, timezone } = JDT.date_timezone(arg1, arg2);

    let next: Date = JDate.getMoment(date, timezone).add(1, 'd').startOf('D').toDate();
    while (JDate.getMoment(next, timezone).weekday() !== dayOfWeek) {
        next = JDate.getMoment(next, timezone).add(1, 'd').startOf('D').toDate();
    }

    return next;
}
