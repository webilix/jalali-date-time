import * as moment from 'moment-timezone';

export const timezones = (): string[] => {
    return moment.tz.names();
};
