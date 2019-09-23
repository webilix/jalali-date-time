import * as moment from 'moment-timezone';

export function timezones(): string[] {
    return moment.tz.names();
}
