import { JalaliDateTimeOptions } from '../interface/options';
import { JalaliDateTimeConfig } from '../interface/config';

import * as JDate from './date';

let _default: JalaliDateTimeOptions = {};

const type = {
    now: 'NOW',
    date: 'DATE',
    time: 'TIME',
    title: 'TITLE',
    fullText: 'FULL-TEXT',
};

const init = (options?: JalaliDateTimeOptions): JalaliDateTimeOptions => {
    if (options === undefined) options = {};

    if (options.timezone === undefined || !JDate.checkTimezone(options.timezone)) options.timezone = 'Asia/Tehran';
    if (options.locale === undefined || !JDate.checkLocale(options.locale)) options.locale = 'en';
    if (options.fullTextFormat === undefined) options.fullTextFormat = 'W, D N Y H:I:S';
    if (options.titleFormat === undefined) options.titleFormat = 'W, D N Y';
    if (options.dateFormat === undefined) options.dateFormat = 'Y-M-D';
    if (options.timeFormat === undefined) options.timeFormat = 'H:I:S';
    _default = options;
    return _default;
};

const check = (config: JalaliDateTimeConfig, format: string): JalaliDateTimeConfig => {
    if (config === undefined) config = {};

    if (config.timezone === undefined) config.timezone = _default.timezone;
    if (config.locale === undefined) config.locale = _default.locale;
    if (config.format === undefined) {
        switch (format) {
            case type.now:
                config.format = _default.dateFormat + ' ' + _default.timeFormat;
                break;
            case type.date:
                config.format = _default.dateFormat;
                break;
            case type.time:
                config.format = _default.timeFormat;
                break;
            case type.title:
                config.format = _default.titleFormat;
                break;
            case type.fullText:
                config.format = _default.fullTextFormat;
                break;
        }
    }

    return config;
};

const timezone = (): string => _default.timezone || 'Asia/Tehran';

const format = (format: string, check: string[]): string => {
    const operators: string[] = ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S'];
    operators.forEach((operator) => {
        if (check.indexOf(operator) !== -1) return;

        const regex = new RegExp(operator, 'ig');
        format = format.replace(regex, '');
    });
    return format;
};

const string = (date: Date, config: JalaliDateTimeConfig, format: string): string => {
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');

    const value = JDate.getMoment(date, config.timezone);
    const jalali = JDate.toJalali(JDate.toObject(value));
    return JDate.toString(jalali, format, config.locale || 'en');
};

const date_timezone = (arg1: any, arg2: any): { date: Date; timezone: string } => {
    const date: Date = arg1 && JDate.checkDate(arg1) ? arg1 : new Date();
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');

    const tz: string = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';

    return { date, timezone: JDate.checkTimezone(tz) ? tz : timezone() };
};

export { type, init, check, timezone, format, string, date_timezone };
