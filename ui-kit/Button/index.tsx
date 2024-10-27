import { ButtonProps } from "@gravity-ui/uikit";
import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { Loader } from "../Loader";

interface IButtonProps extends ButtonProps {
    isLoading?: boolean;
    isSquare?: boolean;
    onClick?: () => void;
    shouldConfirm?: boolean;
    isDark?: boolean;
}

export const Button = (props: IButtonProps) => {
    const {
        className,
        isSquare,
        onClick,
        view,
        shouldConfirm,
        isDark,
        isLoading,
        children,
        ...restProps
    } = props;
    const [isSecondClick, setIsSecondClick] = useState(false);
    const buttonClassName = useMemo(() => {
        switch (view) {
            case "action":
                return "bg-blue-400 hover:bg-blue-500 text-white";
            case "flat-action":
                return "bg-blue-300 hover:bg-blue-200 text-white";
            case "flat-danger":
                return "bg-white hover:bg-gray-100 text-black";
            case "flat-info":
                return "hover:bg-gray-800 text-white bg-black";
            default:
                return "bg-gray-200 hover:bg-gray-300";
        }
    }, [view]);

    const content = useMemo(() => {
        if (isLoading) {
            return <Loader isDark={isDark} />;
        }
        if (isSecondClick) {
            return "Вы уверены?";
        }
        return children;
    }, [children, isDark, isLoading, isSecondClick]);

    const handleClick = useCallback(() => {
        if (shouldConfirm) setIsSecondClick(true);
        if (!shouldConfirm || isSecondClick) {
            onClick?.();
            setIsSecondClick(false);
        }
    }, [onClick, shouldConfirm, isSecondClick]);
    return (
        <button
            {...restProps}
            onClick={handleClick}
            className={classNames(
                "px-8 py-3 transition font-semibold text-[18px]",
                {
                    "rounded-full": !isSquare,
                    "rounded-xl": isSquare,
                },
                buttonClassName,
                className,
            )}
        >
            {content}
        </button>
    );
};
