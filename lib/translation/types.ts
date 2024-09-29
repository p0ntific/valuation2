export type ILang = "ru" | "en";

// Определяем тип для ключей переводов
export type TranslationStrings<T extends string> = {
    [key in T]: string;
};

// Интерфейс накладывает ограничения на структуру перевода
export type ILangs<T extends string> = Record<ILang, TranslationStrings<T>>;

export interface ILangContext {
    lang: ILang;
    onChange: (lang: ILang) => void;
}
