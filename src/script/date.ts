import { JalaliDateTimeObject } from '../interface/object';
import { JalaliDateTimeGregorian } from '../interface/gregorian';
import { Moment } from 'moment';
import * as moment from 'moment-timezone';

const isDate = (date: Date): boolean => Object.prototype.toString.call(date) === '[object Date]';
const isLocale = (locale: string): boolean => ['EN', 'FA'].indexOf(locale.toUpperCase()) !== -1;
const isTimezone = (timezone: string): boolean => moment.tz.names().indexOf(timezone) !== -1;
const isMonth = (month: string): boolean => {
    if (month.length !== 7 || month.indexOf('-') !== 4) return false;
    const [yString, mString] = month.split('-');

    var regex = new RegExp('^[0-9]+$');
    if (!regex.test(yString) || yString < '1000' || yString > '9999') return false;
    if (!regex.test(mString) || mString < '01' || mString > '12') return false;

    return true;
};

const getMoment = (date: Date, timezone?: string): moment.Moment => moment.default(date).tz(timezone || 'Asia/Tehran');

const _week: string[] = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
const _month: string[] = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
];

const _fa: number[] = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const _en: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const _div = (a: number, b: number) => {
    return Math.floor(a / b);
};

const toJalali = (date: JalaliDateTimeObject): JalaliDateTimeObject => {
    let gy = date.year - 1600;
    let gm = date.month - 1;
    let gd = date.day - 1;

    let g_day_no = 365 * gy + _div(gy + 3, 4) - _div(gy + 99, 100) + _div(gy + 399, 400);
    for (var i = 0; i < gm; ++i) g_day_no += _en[i];
    if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || gy % 400 == 0)) ++g_day_no;
    g_day_no += gd;

    let j_day_no = g_day_no - 79;
    let j_np = _div(j_day_no, 12053);
    j_day_no %= 12053;

    let jy = 979 + 33 * j_np + 4 * _div(j_day_no, 1461);
    j_day_no %= 1461;

    if (j_day_no >= 366) {
        jy += _div(j_day_no - 1, 365);
        j_day_no = (j_day_no - 1) % 365;
    }

    for (var i = 0; i < 11 && j_day_no >= _fa[i]; ++i) j_day_no -= _fa[i];
    let jm = i + 1;
    let jd = j_day_no + 1;

    return {
        week: date.week,
        year: jy,
        month: jm,
        day: jd,
        hour: date.hour,
        minute: date.minute,
        second: date.second,
    };
};

const toGregorian = (date: JalaliDateTimeObject): JalaliDateTimeGregorian => {
    let jy = date.year - 979;
    let jm = date.month - 1;
    let jd = date.day - 1;

    let j_day_no = 365 * jy + _div(jy, 33) * 8 + _div((jy % 33) + 3, 4);
    for (var i = 0; i < jm; ++i) j_day_no += _fa[i];

    j_day_no += jd;
    let g_day_no = j_day_no + 79;
    let gy = 1600 + 400 * _div(g_day_no, 146097);
    g_day_no = g_day_no % 146097;

    let leap = true;
    if (g_day_no >= 36525) {
        g_day_no--;
        gy += 100 * _div(g_day_no, 36524);
        g_day_no = g_day_no % 36524;

        if (g_day_no >= 365) g_day_no++;
        else leap = false;
    }

    gy += 4 * _div(g_day_no, 1461);
    g_day_no %= 1461;

    if (g_day_no >= 366) {
        leap = false;

        g_day_no--;
        gy += _div(g_day_no, 365);
        g_day_no = g_day_no % 365;
    }

    for (var i = 0; g_day_no >= _en[i] + (i === 1 && leap ? 1 : 0); i++) g_day_no -= _en[i] + (i === 1 && leap ? 1 : 0);
    let gm = i + 1;
    let gd = g_day_no + 1;

    const gregorian = gy.toString() + '-' + gm.toString().padStart(2, '0') + '-' + gd.toString().padStart(2, '0');

    return {
        year: gy,
        month: gm,
        day: gd,
        date: gregorian,
    };
};

const toObject = (date: Moment): JalaliDateTimeObject => {
    return {
        week: (date.day() + 1) % 7,
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        hour: date.hour(),
        minute: date.minute(),
        second: date.second(),
    };
};

const toString = (jalali: JalaliDateTimeObject, format: string, locale: string): string => {
    format = format
        .replace(/W/g, _week[jalali.week])
        .replace(/N/g, _month[jalali.month - 1])
        .replace(/Y/g, jalali.year.toString())
        .replace(/y/g, jalali.year.toString().substring(2))
        .replace(/M/g, jalali.month.toString().padStart(2, '0'))
        .replace(/m/g, jalali.month.toString())
        .replace(/D/g, jalali.day.toString().padStart(2, '0'))
        .replace(/d/g, jalali.day.toString())
        .replace(/H/g, jalali.hour.toString().padStart(2, '0'))
        .replace(/h/g, jalali.hour.toString())
        .replace(/I/g, jalali.minute.toString().padStart(2, '0'))
        .replace(/i/g, jalali.minute.toString())
        .replace(/S/g, jalali.second.toString().padStart(2, '0'))
        .replace(/s/g, jalali.second.toString());

    if (locale.toLowerCase() === 'fa') {
        format = format
            .replace(/0/g, '۰')
            .replace(/1/g, '۱')
            .replace(/2/g, '۲')
            .replace(/3/g, '۳')
            .replace(/4/g, '۴')
            .replace(/5/g, '۵')
            .replace(/6/g, '۶')
            .replace(/7/g, '۷')
            .replace(/8/g, '۸')
            .replace(/9/g, '۹');
    }

    return format;
};

export { isDate, isLocale, isTimezone, isMonth, getMoment, toJalali, toGregorian, toObject, toString };
