import { ELocales } from "@interfaces/enums";
export { TRANSACTIONS_URL } from "@helpers/routes";

export const isNumber = (value: string | string[] | undefined): boolean => {
    return !isNaN(Number(value));
};

export const getCurrencyFormat = (
    amount: number,
    currencyCode: ELocales = ELocales.USD,
): string => {
    const currentLocale = currencyCode;
    const currentCode =
        Object.keys(ELocales)[Object.values(ELocales).indexOf(currentLocale)];
    const formatter = new Intl.NumberFormat(currentLocale, {
        style: "currency",
        currency: currentCode,
    });
    return formatter.format(amount);
};

export const getDateFormat = (
    date: string,
    locale = ELocales.USD,
    options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    },
): string => {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(new Date(date));
};

export const simpleValidateEmail = (email: string): boolean => {
    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    return re.test(email);
};
