import { Select as SelectComponent, SelectProps } from "@gravity-ui/uikit";
import { LegacyRef, memo, useCallback } from "react";
import { Text } from "../Text";

type ISelectBase = string;

interface ISelectProps<V extends ISelectBase>
    extends Omit<SelectProps, "value" | "options"> {
    value: V;
    onChange: (item: V) => void;
    options: { value: V; content: string }[];
}

const Select = <V extends ISelectBase>(props: ISelectProps<V>) => {
    const { value: externalValue, options, onChange, ...restprops } = props;

    const value = Array.isArray(externalValue)
        ? externalValue
        : [externalValue];

    const onUpdate = useCallback(
        (value: string[]) => {
            value.forEach((item) => onChange(item as V));
        },
        [onChange],
    );

    const title =
        options?.reduce((acc, option) => {
            if (value.includes(option.value)) {
                acc += option.content;
            }
            return acc;
        }, "") ?? "";

    return (
        <SelectComponent
            renderOption={(option) => {
                return (
                    <div className={`transition w-full rounded-m z-10 py-2`}>
                        <Text variant="subheader-3">{option.content}</Text>
                    </div>
                );
            }}
            options={options}
            renderControl={({ triggerProps }) => {
                return (
                    <button
                        {...triggerProps}
                        className="py-2 px-3 rounded-[8px] bg-gray-100 flex gap-2 items-center hover:bg-gray-200 transition"
                    >
                        <Text variant="subheader-3">{title}</Text>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>
                );
            }}
            popupClassName=" border border-gray-300 py-1 px-0 mt-1 "
            className="text-l"
            onUpdate={onUpdate}
            {...restprops}
            value={value}
        />
    );
};

const MemoizedSelect = memo(Select) as typeof Select;
export { MemoizedSelect as Select };
