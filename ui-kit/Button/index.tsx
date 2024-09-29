import { ButtonProps, Loader } from "@gravity-ui/uikit";
import classNames from "classnames";
import { MouseEvent, useCallback, useMemo, useState } from "react";

interface IButtonProps extends ButtonProps {
    isLoading?: boolean;
    isSquare?: boolean;
    shouldConfirm?: boolean;
}

export const Button = (props: IButtonProps) => {
    const {
        className,
        isSquare,
        onClick,
        view,
        shouldConfirm,
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
                return "hover:bg-gray-100 text-red-500";
            default:
                return "bg-gray-200 hover:bg-gray-300";
        }
    }, [view]);

    const content = useMemo(() => {
        if (isLoading) {
            return <Loader />;
        }
        if (isSecondClick) {
            return "Вы уверены?";
        }
        return children;
    }, [children, isLoading, isSecondClick]);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            shouldConfirm && setIsSecondClick(true);
            if (!shouldConfirm || isSecondClick) {
                onClick?.(event);
                setIsSecondClick(false);
            }
        },
        [onClick, shouldConfirm, isSecondClick],
    );
    return (
        <button
            {...restProps}
            onClick={handleClick}
            className={classNames(
                "px-8 py-3  transition font-semibold text-xl",
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
