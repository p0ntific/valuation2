import { useFiltersContext } from "@/lib/filters/context";
import { memo } from "react";
import { IFilters } from "../../../shared/form/types";
import classNames from "classnames";
import { StepController } from "./StepController";

const BASE_STEPS_COUNT = 4;

const Header = () => {
    const { touchedFieldsCount, defaultValues } = useFiltersContext<IFilters>();
    const percentOFCompletion = (
        (touchedFieldsCount / Object.keys(defaultValues).length) *
        100
    ).toFixed(0);

    return (
        <div className="flex flex-col gap-4">
            <StepController />
            <div className="relative w-full h-2 bg-gray-100 rounded-full">
                <div
                    style={{ width: percentOFCompletion + "%" }}
                    className={classNames(
                        "h-2  rounded-full absolute top-0 left-0 transition-all",
                        {
                            "bg-green-500":
                                touchedFieldsCount >= BASE_STEPS_COUNT,
                            "bg-red-500": touchedFieldsCount < BASE_STEPS_COUNT,
                        },
                    )}
                ></div>
            </div>
        </div>
    );
};

const MemoizedHeader = memo(Header);

export { MemoizedHeader as Header };
