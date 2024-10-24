import { memo } from "react";
import { useNextStep } from "./hooks/useNextStep";
import { Text } from "@/ui-kit/Text";
import Link from "next/link";
import classNames from "classnames";
import { Loader } from "@/ui-kit/Loader";

interface INextStepButtonProps {
    className?: string;
    handleSubmit?: () => void;
    isLoading?: boolean;
}

const NextStepButton = ({
    className,
    handleSubmit,
    isLoading,
}: INextStepButtonProps) => {
    const {
        canGoNextStep,
        handleNextStepButton,
        stepNumber,
        countSteps,
        isNextButtonPressed,
    } = useNextStep();

    return (
        <div
            className={classNames(
                " bg-gray-100 rounded-xl h-[485px] text-slate-600 px-[60px] py-8 text-center flex flex-col ",
                className,
            )}
        >
            <div className="h-full flex justify-center items-center flex-col gap-3">
                <Text variant="header-2">
                    {stepNumber === countSteps
                        ? "Получить результат"
                        : "Перейти к следующему шагу"}
                </Text>
                <Text variant="subheader-2">
                    шаг {stepNumber} из {countSteps}
                </Text>

                <button onClick={handleSubmit ?? handleNextStepButton}>
                    {!isLoading ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className={classNames(
                                "size-20 hover:scale-110 transition cursor-pointer",
                                {
                                    "text-green-500": canGoNextStep,
                                    "text-red-500":
                                        !canGoNextStep && isNextButtonPressed,
                                },
                            )}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    ) : (
                        <Loader isDark className="h-20" />
                    )}
                </button>
                {!canGoNextStep && isNextButtonPressed && (
                    <Text variant="body-short" className="text-red-500">
                        Сначала заполните основные данные
                    </Text>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Link href="/about" className="hover:text-blue-500">
                    Как мы оцениваем квартиру
                </Link>

                <Text variant="body-short">
                    {stepNumber === 1
                        ? "Эти данные являются обязательным для корректной работымодели"
                        : "Эти данные помогут лучше определить стоимость квартиры"}
                </Text>
            </div>
        </div>
    );
};

const MemoizedNextStepButton = memo(NextStepButton);
export { MemoizedNextStepButton as NextStepButton };
