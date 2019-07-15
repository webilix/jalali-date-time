'use strict';

const _fa = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const _en = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const _div = (a, b) => {
    return parseInt(a / b, 10);
};

const _zeroFill = value => {
    return (value < 10 ? '0' : '') + value;
};

const toJalali = date => {
    let gy = date.year - 1600;
    let gm = date.month - 1;
    let gd = date.day - 1;

    let g_day_no = 365 * gy + _div(gy + 3, 4) - _div(gy + 99, 100) + _div(gy + 399, 400);
    for (var i = 0; i < gm; ++i) g_day_no += _en[i];
    if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || gy % 400 == 0)) ++g_day_no;
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

    for (var i = 0; i < 11 && j_day_no >= _fa[i]; ++i) j_day_no -= _fa[i];
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

const toGregorian = date => {
    let jy = date.year - 979;
    let jm = date.month - 1;
    let jd = date.day - 1;

    let j_day_no = 365 * jy + _div(jy, 33) * 8 + _div((jy % 33) + 3, 4);
    for (var i = 0; i < jm; ++i) j_day_no += _fa[i];

    j_day_no += jd;
    let g_day_no = j_day_no + 79;
    let gy = 1600 + 400 * _div(g_day_no, 146097);
    g_day_no = g_day_no % 146097;

    let leap = true;
    if (g_day_no >= 36525) {
        g_day_no--;
        gy += 100 * _div(g_day_no, 36524);
        g_day_no = g_day_no % 36524;

        if (g_day_no >= 365) g_day_no++;
        else leap = false;
    }

    gy += 4 * _div(g_day_no, 1461);
    g_day_no %= 1461;

    if (g_day_no >= 366) {
        leap = false;

        g_day_no--;
        gy += _div(g_day_no, 365);
        g_day_no = g_day_no % 365;
    }

    for (var i = 0; g_day_no >= _en[i] + (i == 1 && leap); i++) g_day_no -= _en[i] + (i == 1 && leap);
    let gm = i + 1;
    let gd = g_day_no + 1;

    const gregorian = gy.toString() + '-' + _zeroFill(gm.toString()) + '-' + _zeroFill(gd.toString());

    return {
        year: gy,
        month: gm,
        day: gd,
        date: gregorian
    };
};

module.exports = {
    toJalali,
    toGregorian
};
