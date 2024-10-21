import { useFiltersContext } from "@/lib/filters/context";
import { memo } from "react";
import { IFilters } from "../types";
import { useFormStepContext } from "@/lib/formStep/context";
import classNames from "classnames";

const BASE_STEPS_COUNT = 4;

const Header = () => {
    const { touchedFieldsCount, defaultValues } = useFiltersContext<IFilters>();
    const { stepNumber, countSteps, step } = useFormStepContext();
    const percentOFCompletion = (
        (touchedFieldsCount / Object.keys(defaultValues).length) *
        100
    ).toFixed(0);
    return (
        <div className="relative w-full h-2 bg-gray-100 rounded-full">
            <div
                style={{ width: percentOFCompletion + "%" }}
                className={classNames(
                    "h-2  rounded-full absolute top-0 left-0 transition-all",
                    {
                        "bg-green-500": touchedFieldsCount >= BASE_STEPS_COUNT,
                        "bg-red-500": touchedFieldsCount < BASE_STEPS_COUNT,
                    },
                )}
            ></div>
        </div>
    );
};

const MemoizedHeader = memo(Header);

export { MemoizedHeader as Header };
