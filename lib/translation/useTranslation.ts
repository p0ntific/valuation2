"use client";
import { useLangContext } from "./context";
import { ILang, ILangs } from "./types";

export const useTranslation = <T extends string>(langs: ILangs<T>) => {
    type Keys = keyof (typeof langs)[ILang];
    const { lang } = useLangContext();

    return (key: Keys): string => {
        return langs[lang][key] ?? key;
    };
};
