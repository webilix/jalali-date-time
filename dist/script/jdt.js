"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = exports.format = exports.timezone = exports.check = exports.init = exports.type = void 0;
const JDate = __importStar(require("./date"));
const moment = __importStar(require("moment-timezone"));
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
    if (options.timezone === undefined || !JDate.checkTimezone(options.timezone))
        options.timezone = 'Asia/Tehran';
    if (options.locale === undefined || !JDate.checkLocale(options.locale))
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
const timezone = () => (_default.timezone ? _default.timezone : 'Asia/Tehran');
exports.timezone = timezone;
const format = (format, check) => {
    const operators = ['W', 'N', 'Y', 'M', 'D', 'H', 'I', 'S'];
    operators.forEach(operator => {
        if (check.indexOf(operator) !== -1)
            return;
        const regex = new RegExp(operator, 'ig');
        format = format.replace(regex, '');
    });
    return format;
};
exports.format = format;
const string = (date, config, format) => {
    if (!JDate.checkDate(date))
        throw new TypeError('Invalid Date');
    const value = moment.default(date).tz(config.timezone ? config.timezone : 'Asia/Tehran');
    const jalali = JDate.toJalali(JDate.toObject(value));
    return JDate.toString(jalali, format, config.locale ? config.locale : 'en');
};
exports.string = string;
//# sourceMappingURL=jdt.js.map