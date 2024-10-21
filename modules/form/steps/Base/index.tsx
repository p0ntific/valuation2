"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { AddressField } from "../../fields/base/AddressField";
import { AreaField } from "../../fields/base/AreaField";
import { FloorField } from "../../fields/base/FloorField";
import { RoomsTotalField } from "../../fields/base/RoomsTotalField";
import { translations } from "../i18n";
import Link from "next/link";
import { useBaseStep } from "./hooks/useBaseStep";
import classNames from "classnames";

export const Base = () => {
    const t = useTranslation(translations);

    const { canGoNextStep, handleNextStepButton, isNextButtonPressed } =
        useBaseStep();

    return (
        <div className="flex gap-12 w-full">
            <div className="w-[465px] flex flex-col gap-10">
                <Text variant="display-1">{t("title_base")}</Text>
                <div className="flex flex-col gap-6">
                    <AddressField />
                    <div className="flex gap-4 w-full">
                        <AreaField />
                        <FloorField />
                    </div>
                    <RoomsTotalField />
                </div>
            </div>
            <div className="w-1/2 bg-gray-100 rounded-xl text-slate-600 px-[60px] py-8 text-center flex flex-col ">
                <div className="h-full flex justify-center items-center flex-col gap-3">
                    <Text variant="header-2">Перейти к следующему шагу</Text>
                    <Text variant="subheader-2">шаг 1 из 3</Text>

                    <button onClick={handleNextStepButton}>
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
                        Эти данные являются обязательным для корректной работы
                        модели
                    </Text>
                </div>
            </div>
        </div>
    );
};
