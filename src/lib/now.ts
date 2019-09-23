import { JalaliDateTimeConfig } from '../interface/config';

import * as JDT from '../script/jdt';

export function now(config?: JalaliDateTimeConfig): string {
    config = JDT.check(config ? config : {}, JDT.type.now);
    const format = JDT.format(config.format ? config.format : '', ['Y', 'M', 'D', 'H', 'I', 'S']);

    return JDT.string(new Date(), config, format);
}
