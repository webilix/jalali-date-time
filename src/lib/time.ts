import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export const toTime = (date: Date, config?: JalaliDateTimeConfig): string => {
    config = JDT.check(config || {}, JDT.type.time);
    const format = JDT.format(config.format || '', ['H', 'I', 'S']);

    return JDT.string(date, config, format);
};
