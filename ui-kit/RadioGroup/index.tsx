import { memo, useCallback } from "react";
import { Chip } from "../Chip";
import { Text } from "../Text";
import classNames from "classnames";

interface IRadioGroup<V extends string> {
    title?: string;
    options: { content: string; value: V }[];
    value?: V;
    onChange?: (item: V | undefined) => void;
    errorMessage?: string;
    className?: string;
}

const RadioGroup = <V extends string>({
    title,
    options,
    value,
    onChange,
    className,
    errorMessage,
}: IRadioGroup<V>) => {
    const handleChange = useCallback(
        (optionValue: V) => {
            if (optionValue === value) {
                onChange?.(undefined);
            } else {
                onChange?.(optionValue);
            }
        },
        [value, onChange],
    );

    return (
        <div className={classNames("flex flex-col gap-4", className)}>
            {title && (
                <label>
                    <Text variant="subheader-2">{title}</Text>
                </label>
            )}
            <div className="flex gap-2 flex-wrap">
                {options.map((el) => {
                    return (
                        <Chip
                            key={el.value}
                            content={el.content}
                            onClick={() => handleChange(el.value)}
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
