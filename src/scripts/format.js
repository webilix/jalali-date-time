'use strict';

const _week = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
const _month = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

const _zeroFill = value => {
    return (value < 10 ? '0' : '') + value;
};

const check = (format, check) => {
    const operators = ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S'];
    for (let o = 0; o < operators.length; o++) {
        if (check.includes(operators[o])) continue;
        let regex = new RegExp(operators[o], 'ig');
        format = format.replace(regex, '');
    }
    return format;
};

const toObject = date => {
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

const toString = (date, format, locale) => {
    format = format
        .replace(/W/g, _week[date.week])
        .replace(/N/g, _month[date.month - 1])
        .replace(/Y/g, date.year.toString())
        .replace(/y/g, date.year.toString().substring(2))
        .replace(/M/g, _zeroFill(date.month.toString()))
        .replace(/m/g, date.month.toString())
        .replace(/D/g, _zeroFill(date.day.toString()))
        .replace(/d/g, date.day.toString())
        .replace(/H/g, _zeroFill(date.hour.toString()))
        .replace(/h/g, date.hour.toString())
        .replace(/I/g, _zeroFill(date.minute.toString()))
        .replace(/i/g, date.minute.toString())
        .replace(/S/g, _zeroFill(date.second.toString()))
        .replace(/s/g, date.second.toString());

    if (locale === 'fa') {
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

module.exports = {
    check,
    toObject,
    toString
};
