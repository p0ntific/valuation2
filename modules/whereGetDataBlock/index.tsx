"use client";

import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { memo } from "react";
import { translations } from "./i18n";
import Link from "next/link";

const WhereGetDataBlock = () => {
    const t = useTranslation(translations);

    return (
        <div className="flex flex-col gap-8 mb-32">
            <Text variant="display-2">{t("title")}</Text>
            <div className="flex gap-8">
                <div className="flex flex-col gap-6 text-black bg-blue-200 rounded-xl py-8 px-12 w-2/3">
                    <Text variant="display-2"> {t("title_block_1")}</Text>
                    <Text variant="body-3">{t("description_1")}</Text>

                    <div className="mt-16 flex gap-8 flex-wrap">
                        {[1, 2, 3, 4].map((el) => {
                            const i18nkey = ("link_name_" +
                                el) as keyof (typeof translations)["ru"];
                            return (
                                <Link href="#" key={el}>
                                    <Text
                                        variant="body-3"
                                        className="text-black hover:text-red-500"
                                    >
                                        {t(i18nkey)}
                                    </Text>
                                </Link>
                            );
                        })}
                    </div>
                    <Link
                        href="#"
                        className="py-2 px-4 rounded-xl bg-white text-black ml-auto hover:bg-gray-100"
                    >
                        {t("button")}
                    </Link>
                </div>
                <div className="flex flex-col gap-6 text-black bg-purple-200 rounded-xl py-8 px-10 w-1/3">
                    <Text variant="display-2"> {t("title_block_2")}</Text>
                    <Text variant="body-3"> {t("description_2")}</Text>
                    <Link
                        href="#"
                        className="py-2 px-4 rounded-xl bg-white text-black ml-auto mt-auto hover:bg-gray-100"
                    >
                        {t("button")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const MemoizedWhereGetDataBlock = memo(WhereGetDataBlock);
export { MemoizedWhereGetDataBlock as WhereGetDataBlock };
