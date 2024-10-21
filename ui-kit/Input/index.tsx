import { TextInput, TextInputProps } from "@gravity-ui/uikit";
import classNames from "classnames";
import { useCallback } from "react";
import { Text } from "../Text";
import styles from "./styles.module.css";

interface IInput extends Omit<TextInputProps, "onChange"> {
    onChange?: (value: string) => void;
    hint?: string;
}

export const Input = (props: IInput) => {
    const { className, label, onChange, hint, errorMessage, ...restProps } =
        props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        },
        [onChange],
    );

    return (
        <div className="flex flex-col gap-2">
            <div
                className={classNames(
                    className,
                    "flex w-full gap-1 flex-col bg-gray-100 rounded-xl py-3 justify-center px-5",
                )}
            >
                {label && (
                    <label>
                        <Text variant="subheader-1" className="text-gray-500">
                            {label}
                        </Text>
                    </label>
                )}
                <TextInput
                    onChange={handleChange}
                    className={styles.input}
                    {...restProps}
                />
            </div>
            {hint && <span className="text-gray-400 text-s">* {hint}</span>}
            {errorMessage && (
                <span className="text-red-500 text-s">{errorMessage}</span>
            )}
        </div>
    );
};
