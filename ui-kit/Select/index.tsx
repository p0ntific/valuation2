import { Select as SelectComponent, SelectProps } from "@gravity-ui/uikit";
import { memo, useCallback, useMemo } from "react";
import { Text } from "../Text";
import classNames from "classnames";

type ISelectBase = string;

interface ISelectProps<V extends ISelectBase>
    extends Omit<SelectProps, "value" | "options"> {
    value: V | undefined;
    onChange: (item: V) => void;
    options: { value: V; content: string }[];
}

const OPTION_HEIGHT = 40;

const Select = <V extends ISelectBase>(props: ISelectProps<V>) => {
    const {
        value: externalValue,
        options,
        onChange,
        label,
        className,
        placeholder,
        ...restprops
    } = props;

    const value = useMemo(() => {
        if (externalValue === undefined) {
            return [];
        } else
            return Array.isArray(externalValue)
                ? externalValue
                : [externalValue];
    }, [externalValue]);

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
        }, "") ?? null;

    return (
        <SelectComponent
            renderPopup={({
                renderFilter,
                renderList,
            }: {
                renderFilter: () => React.JSX.Element | null;
                renderList: () => React.JSX.Element;
            }) => {
                return (
                    <div className="bg-white py-0 rounded-xl border-0">
                        {renderFilter()}
                        {renderList()}
                    </div>
                );
            }}
            renderOption={(option) => {
                return (
                    <div>
                        <Text variant="subheader-2">{option.content}</Text>
                    </div>
                );
            }}
            getOptionHeight={() => OPTION_HEIGHT}
            options={options}
            renderControl={({ triggerProps }) => {
                return (
                    <button
                        {...triggerProps}
                        className={classNames(
                            "py-3 px-5 rounded-xl bg-gray-100 flex justify-between gap-6 items-start hover:bg-gray-100 ",
                            className,
                        )}
                    >
                        <div className="flex flex-col gap-1 items-start text-start">
                            {label && (
                                <Text
                                    variant="subheader-1"
                                    className="text-slate-500"
                                >
                                    {label}
                                </Text>
                            )}
                            {}
                            {title ? (
                                <Text variant="body-3">{title}</Text>
                            ) : (
                                placeholder && (
                                    <Text
                                        variant="body-2"
                                        className="text-gray-400"
                                    >
                                        {placeholder}
                                    </Text>
                                )
                            )}
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={4}
                            stroke="currentColor"
                            className="size-3 text-slate-500 shrink-0 my-auto"
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
            popupClassName="shadow-0  border-none outline-none mt-1"
            className="text-l shadow-0"
            onUpdate={onUpdate}
            {...restprops}
            value={value}
        />
    );
};

const MemoizedSelect = memo(Select) as typeof Select;
export { MemoizedSelect as Select };
