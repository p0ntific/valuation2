import { AddressField } from "@/shared/form/fields/base/AddressField";
import { AreaField } from "@/shared/form/fields/base/AreaField";
import { FloorField } from "@/shared/form/fields/base/FloorField";
import classNames from "classnames";
import { memo } from "react";
import { RoomsTotalField } from "./fields/RoomsTotalField";
import { Button } from "@/ui-kit/Button";

interface IBottomBarProps {
    className?: string;
}

const BottomBar = ({ className }: IBottomBarProps) => {
    return (
        <div
            className={classNames(
                "py-4 px-4 mx-2 my-4 w-[90%] rounded-xl items-start bg-white flex gap-2",
                className,
            )}
        >
            <AddressField className="w-full" />
            <AreaField className="w-44 shrink-0" />
            <FloorField className="w-32 shrink-0" />
            <RoomsTotalField />
            <Button
                onClick={() => {}}
                isSquare
                view="action"
                className="h-[72px] w-64 ml-2 shrink-0"
            >
                Получить оценку
            </Button>
        </div>
    );
};

const MemoizedBottomBar = memo(BottomBar);
export { MemoizedBottomBar as BottomBar };
