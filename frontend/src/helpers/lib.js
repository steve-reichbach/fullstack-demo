export const dbFormatDate = date => (
    // FIXME: somehow default date.toISOString fails
    date.toISOString().replace('T', ' ').slice(0, -5)
);

export const smartTextEllipsis = (str, max = 10, sep = '...')  => {
    if (!str) {
        return str;
    }
    const separatorLength = sep.length;
    const len = str.length;
    const center = len / 2;
    const n = -.5 * (max - len - separatorLength);

    if (len > max) {
        if (separatorLength > max) {
            return str.substr(len - max);
        }
        const front = str.substr(0, center - n);
        const back = str.substr(len - center + n);

        return front + sep + back;
    }
    return str;
};
