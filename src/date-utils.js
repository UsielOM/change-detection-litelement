export function isSameDate(date1, date2) {
    return date1?.toLocalDateString() === date2?.toLocalDateString();
}

export function localDateFromUTC(utcDate){
    return new Date(
        utcDate.getUTCFullYear(),
        utcDate.getUTCMonth(),
        utcDate.getUTCDate()
    );
}