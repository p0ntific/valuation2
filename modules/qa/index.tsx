"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { useMemo } from "react";
import { translations } from "./i18n";
import Link from "next/link";

export const QA = () => {
    const t = useTranslation(translations);

    const items: { q: string; a: string }[] = useMemo(
        () =>
            [1, 2, 3, 4].map((el) => {
                return {
                    q: t(`question_${el}` as keyof (typeof translations)["ru"]),
                    a: t(`answer_${el}` as keyof (typeof translations)["ru"]),
                };
            }),
        [t],
    );

    return (
        <div className="flex flex-col gap-8 mb-32">
            <Text variant="display-2">{t("title")}</Text>
            <div className="grid grid-cols-4 gap-4">
                {items.map((el) => {
                    return (
                        <div
                            key={el.a}
                            className="h-full bg-gray-50 rounded-xl flex flex-col gap-4 p-6  w-full"
                        >
                            <Text variant="header-2">{el.q}</Text>
                            <Text variant="body-3" className="pb-6">
                                {el.a}
                            </Text>
                            <Link
                                href="about"
                                className="flex items-center gap-1 text-red-500 mt-auto ml-auto"
                            >
                                Подробнее{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
