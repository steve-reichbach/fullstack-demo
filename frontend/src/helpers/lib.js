export const dbFormatDate = (d) => (
    // FIXME: somehow default date.toISOString fails
    d.toISOString().replace('T', ' ').slice(0, -4)
);