"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = __importStar(require("moment-timezone"));
const checkDate = (date) => {
    return Object.prototype.toString.call(date) === '[object Date]';
};
exports.checkDate = checkDate;
const checkLocale = (locale) => {
    return ['EN', 'FA'].indexOf(locale.toUpperCase()) !== -1;
};
exports.checkLocale = checkLocale;
const checkTimezone = (timezone) => {
    return moment.tz.names().indexOf(timezone) !== -1;
};
exports.checkTimezone = checkTimezone;
const _week = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
const _month = [
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
    'اسفند'
];
const _fa = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const _en = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const _div = (a, b) => {
    return Math.floor(a / b);
};
const _zeroFill = (value) => {
    return (value < 10 ? '0' : '') + value.toString();
};
const toJalali = (date) => {
    let gy = date.year - 1600;
    let gm = date.month - 1;
    let gd = date.day - 1;
    let g_day_no = 365 * gy + _div(gy + 3, 4) - _div(gy + 99, 100) + _div(gy + 399, 400);
    for (var i = 0; i < gm; ++i)
        g_day_no += _en[i];
    if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || gy % 400 == 0))
        ++g_day_no;
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
    for (var i = 0; i < 11 && j_day_no >= _fa[i]; ++i)
        j_day_no -= _fa[i];
    let jm = i + 1;
    let jd = j_day_no + 1;
    return {
        week: date.week,
        year: jy,
        month: jm,
        day: jd,
        hour: date.hour,
        minute: date.minute,
        second: date.second
    };
};
exports.toJalali = toJalali;
const toGregorian = (date) => {
    let jy = date.year - 979;
    let jm = date.month - 1;
    let jd = date.day - 1;
    let j_day_no = 365 * jy + _div(jy, 33) * 8 + _div((jy % 33) + 3, 4);
    for (var i = 0; i < jm; ++i)
        j_day_no += _fa[i];
    j_day_no += jd;
    let g_day_no = j_day_no + 79;
    let gy = 1600 + 400 * _div(g_day_no, 146097);
    g_day_no = g_day_no % 146097;
    let leap = true;
    if (g_day_no >= 36525) {
        g_day_no--;
        gy += 100 * _div(g_day_no, 36524);
        g_day_no = g_day_no % 36524;
        if (g_day_no >= 365)
            g_day_no++;
        else
            leap = false;
    }
    gy += 4 * _div(g_day_no, 1461);
    g_day_no %= 1461;
    if (g_day_no >= 366) {
        leap = false;
        g_day_no--;
        gy += _div(g_day_no, 365);
        g_day_no = g_day_no % 365;
    }
    for (var i = 0; g_day_no >= _en[i] + (i === 1 && leap ? 1 : 0); i++)
        g_day_no -= _en[i] + (i === 1 && leap ? 1 : 0);
    let gm = i + 1;
    let gd = g_day_no + 1;
    const gregorian = gy.toString() + '-' + _zeroFill(gm) + '-' + _zeroFill(gd);
    return {
        year: gy,
        month: gm,
        day: gd,
        date: gregorian
    };
};
exports.toGregorian = toGregorian;
const toObject = (date) => {
    return {
        week: (date.day() + 1) % 7,
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        hour: date.hour(),
        minute: date.minute(),
        second: date.second()
    };
};
exports.toObject = toObject;
const toString = (jalali, format, locale) => {
    format = format
        .replace(/W/g, _week[jalali.week])
        .replace(/N/g, _month[jalali.month - 1])
        .replace(/Y/g, jalali.year.toString())
        .replace(/y/g, jalali.year.toString().substring(2))
        .replace(/M/g, _zeroFill(jalali.month))
        .replace(/m/g, jalali.month.toString())
        .replace(/D/g, _zeroFill(jalali.day))
        .replace(/d/g, jalali.day.toString())
        .replace(/H/g, _zeroFill(jalali.hour))
        .replace(/h/g, jalali.hour.toString())
        .replace(/I/g, _zeroFill(jalali.minute))
        .replace(/i/g, jalali.minute.toString())
        .replace(/S/g, _zeroFill(jalali.second))
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
exports.toString = toString;
//# sourceMappingURL=date.js.map