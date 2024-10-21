"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { translations } from "./i18n";

const defaultActiveState = {
    1: false,
    2: false,
    3: false,
    4: false,
} as const;

type IActiveState = { [key in keyof typeof defaultActiveState]: boolean };

export const QA = () => {
    const [activeQuestion, setActiveQuestion] =
        useState<IActiveState>(defaultActiveState);

    const t = useTranslation(translations);

    const items: { q: string; a: string }[] = useMemo(
        () =>
            Object.keys(defaultActiveState).map((el) => {
                return {
                    q: t(`question_${el}` as keyof (typeof translations)["ru"]),
                    a: t(`answer_${el}` as keyof (typeof translations)["ru"]),
                };
            }),
        [t],
    );

    return (
        <div className="flex flex-col mb-16 ">
            <Text
                variant="display-2"
                className="pb-16 mb-6 border-b border-gray-800 "
            >
                {t("title")}
            </Text>
            <div className="flex flex-col">
                {items.map((el, index) => {
                    const isActive =
                        activeQuestion[index as keyof IActiveState];

                    return (
                        <div
                            key={index + "qa"}
                            className="flex gap-4 group w-full flex-col pt-4 pb-6 mb-4 cursor-pointer border-b border-gray-800"
                        >
                            <div
                                className="flex justify-between "
                                onClick={() =>
                                    setActiveQuestion({
                                        ...defaultActiveState,
                                        [index]: !isActive,
                                    })
                                }
                            >
                                <Text
                                    variant="header-1"
                                    className="text-gray-700 group-hover:text-blue-500"
                                >
                                    {el.q}
                                </Text>
                                <span className="p-2 rounded-full hover:bg-gray-100 transition">
                                    {isActive ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>
                            <p
                                className={classNames(
                                    "text-lg transform transition-all duration-500",
                                    {
                                        " max-h-[400px]": isActive,
                                        "max-h-0 overflow-hidden": !isActive,
                                    },
                                )}
                            >
                                {el.a}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
