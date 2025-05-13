"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.date_timezone = exports.string = exports.format = exports.timezone = exports.check = exports.init = exports.type = void 0;
const JDate = __importStar(require("./date"));
let _default = {};
const type = {
    now: 'NOW',
    date: 'DATE',
    time: 'TIME',
    title: 'TITLE',
    fullText: 'FULL-TEXT',
};
exports.type = type;
const init = (options) => {
    if (options === undefined)
        options = {};
    if (options.timezone === undefined || !JDate.isTimezone(options.timezone))
        options.timezone = 'Asia/Tehran';
    if (options.locale === undefined || !JDate.isLocale(options.locale))
        options.locale = 'en';
    if (options.fullTextFormat === undefined)
        options.fullTextFormat = 'W, D N Y H:I:S';
    if (options.titleFormat === undefined)
        options.titleFormat = 'W, D N Y';
    if (options.dateFormat === undefined)
        options.dateFormat = 'Y-M-D';
    if (options.timeFormat === undefined)
        options.timeFormat = 'H:I:S';
    _default = options;
    return _default;
};
exports.init = init;
const check = (config, format) => {
    if (config === undefined)
        config = {};
    if (config.timezone === undefined)
        config.timezone = _default.timezone;
    if (config.locale === undefined)
        config.locale = _default.locale;
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
exports.check = check;
const timezone = () => _default.timezone || 'Asia/Tehran';
exports.timezone = timezone;
const format = (format, check) => {
    const operators = ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S'];
    operators.forEach((operator) => {
        if (check.indexOf(operator) !== -1)
            return;
        const regex = new RegExp(operator, 'ig');
        format = format.replace(regex, '');
    });
    return format;
};
exports.format = format;
const string = (date, config, format) => {
    if (!JDate.isDate(date))
        throw new TypeError('Invalid Date');
    const value = JDate.getMoment(date, config.timezone);
    const jalali = JDate.toJalali(JDate.toObject(value));
    return JDate.toString(jalali, format, config.locale || 'en');
};
exports.string = string;
const date_timezone = (arg1, arg2) => {
    const date = arg1 && JDate.isDate(arg1) ? arg1 : new Date();
    if (!JDate.isDate(date))
        throw new TypeError('Invalid Date');
    const tz = arg1 && typeof arg1 === 'string' ? arg1 : arg2 || '';
    return { date, timezone: JDate.isTimezone(tz) ? tz : timezone() };
};
exports.date_timezone = date_timezone;
//# sourceMappingURL=jdt.js.map