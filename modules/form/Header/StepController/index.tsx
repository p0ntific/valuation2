import { memo } from "react";
import { useStepController } from "./hooks/useStepController";
import { Text } from "@/ui-kit/Text";
import classNames from "classnames";

const StepController = () => {
    const { steps, countSteps } = useStepController();

    return (
        <div className="flex gap-4">
            {steps.map((step) => {
                return (
                    <div
                        onClick={step.onClick}
                        key={step.text}
                        className={classNames(
                            " rounded-xl group flex-col gap-1  transition w-32 h-24 flex justify-center items-center",
                            {
                                "bg-green-50 hover:bg-green-100 text-green-500":
                                    step.isActive,
                                "bg-gray-50 hover:bg-gray-100 text-gray-500":
                                    !step.isActive,
                                "cursor-pointer": step.canGoToThisStep,
                            },
                        )}
                    >
                        <Text variant="subheader-2">{step.text}</Text>
                        <Text variant="caption-2">
                            {step.number} из {countSteps}
                        </Text>
                    </div>
                );
            })}
        </div>
    );
};

const MemoizedStepController = memo(StepController);
export { MemoizedStepController as StepController };
