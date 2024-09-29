import classNames from "classnames";
import { memo } from "react";
import { Text } from "../Text";

interface IChipProps {
    content: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Chip = ({ content, isActive, onClick }: IChipProps) => {
    return (
        <div
            onClick={onClick}
            className={classNames(
                "rounded-full flex items-center justify-center px-6 h-fit py-3 transition cursor-pointer",
                {
                    "border border-blue-300 bg-blue-300 text-white": isActive,
                    "border border-gray-300  hover:bg-gray-100 ": !isActive,
                },
            )}
        >
            <Text variant="subheader-3">{content}</Text>
        </div>
    );
};

const MemoChip = memo(Chip) as typeof Chip;

export { MemoChip as Chip };
