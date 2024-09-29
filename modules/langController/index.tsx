import { useLangContext } from "@/lib/translation/context";
import { ILang } from "@/lib/translation/types";
import { Select } from "@/ui-kit/Select";

const options: { value: ILang; content: string }[] = [
    { value: "ru", content: "Русский" },
    { value: "en", content: "Английский" },
];

export const LangController = () => {
    const { lang, onChange } = useLangContext();

    return <Select options={options} value={lang} onChange={onChange} />;
};
