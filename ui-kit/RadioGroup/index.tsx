import { memo } from "react";
import { Chip } from "../Chip";
import { Text } from "../Text";

interface IRadioGroup<V extends string | undefined> {
    title?: string;
    options: { content: string; value: V }[];
    value?: V;
    onChange?: (item: V) => void;
    errorMessage?: string;
}

const RadioGroup = <V extends string | undefined>({
    title,
    options,
    value,
    onChange,
    errorMessage,
}: IRadioGroup<V>) => {
    return (
        <div className="flex flex-col gap-4">
            {title && (
                <label>
                    <Text variant="header-1">{title}</Text>
                </label>
            )}
            <div className="flex gap-2">
                {options.map((el) => {
                    return (
                        <Chip
                            key={el.value}
                            content={el.content}
                            onClick={() => onChange?.(el.value)}
                            isActive={el.value === value}
                        />
                    );
                })}
            </div>
            {errorMessage && (
                <span className="text-red-500 text-s">{errorMessage}</span>
            )}
        </div>
    );
};

const memoRadioGroup = memo(RadioGroup) as typeof RadioGroup;
export { memoRadioGroup as RadioGroup };
