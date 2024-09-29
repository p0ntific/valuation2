"use client";
import { useCallback, useState } from "react";
import { ILang } from "./types";

export const useLangController = () => {
    const [lang, setLang] = useState<ILang>("ru");

    const onChange = useCallback((lang: ILang) => {
        // можно логировать, например
        setLang(lang);
    }, []);
    return { lang, onChange };
};
