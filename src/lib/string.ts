import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export const toString = (date: Date, config?: JalaliDateTimeConfig): string => {
    config = JDT.check(config || {}, JDT.type.now);
    const format = JDT.format(config.format || '', ['Y', 'M', 'D', 'H', 'I', 'S']);

    return JDT.string(date, config, format);
};
