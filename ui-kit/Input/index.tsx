import { TextInput, TextInputProps } from "@gravity-ui/uikit";
import classNames from "classnames";
import { useCallback } from "react";
import { Text } from "../Text";
import styles from "./styles.module.css";

interface IInput extends Omit<TextInputProps, "onChange"> {
    onChange?: (value: string) => void;
    hint?: string;
    value?: string;
    fixedValue?: string;
}

export const Input = (props: IInput) => {
    const {
        className,
        fixedValue,
        label,
        onChange,
        hint,
        errorMessage,
        hasClear = true,
        value,
        ...restProps
    } = props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        },
        [onChange],
    );

    const handleClear = useCallback(() => {
        onChange?.("");
    }, [onChange]);

    return (
        <div className={classNames(className, "flex flex-col gap-2")}>
            <div className="flex w-full  flex-col bg-gray-100 relative  rounded-xl py-3 justify-center pl-5 pr-12">
                {label && (
                    <label className="mb-1">
                        <Text variant="subheader-1" className="text-gray-500 ">
                            {label}
                        </Text>
                    </label>
                )}
                <div>
                    {fixedValue}
                    <TextInput
                        autoComplete
                        onChange={handleChange}
                        value={value}
                        className={styles.input}
                        {...restProps}
                    />
                </div>
                {hasClear && value && value !== "" && (
                    <button onClick={handleClear}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-7 text-gray-500 hover:text-gray-600 transition absolute right-4 top-1/2 translate-y-[-50%]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                )}
            </div>
            {hint && <span className="text-gray-400 text-s">* {hint}</span>}
            {errorMessage && (
                <span className="text-red-500 text-s">{errorMessage}</span>
            )}
        </div>
    );
};
