import { Loader as LoaderComponent } from "@gravity-ui/uikit";
import classNames from "classnames";
import styles from "./styles.module.css";

import { memo } from "react";

interface ILoaderProps {
    isDark?: boolean;
    className?: string;
}

const Loader = ({ isDark = false, className }: ILoaderProps) => {
    return (
        <LoaderComponent
            className={classNames(
                {
                    [styles.isDark]: isDark,
                    [styles.isLight]: !isDark,
                },
                className,
            )}
        />
    );
};

const MemoizedLoader = memo(Loader);
export { MemoizedLoader as Loader };
