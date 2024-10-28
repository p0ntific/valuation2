import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { memo } from "react";
import { translations } from "./i18n";
import { useFiltersContext } from "@/lib/filters/context";
import { IFilters, IGetPriceResponse } from "@/shared/form/types";
import { SimilarObject } from "./SimilarObject";
import similar1 from "@/assets/similar1.jpg";
import similar2 from "@/assets/similar2.jpg";
import similar3 from "@/assets/similar3.jpg";
import similar4 from "@/assets/similar4.jpg";
import similar5 from "@/assets/similar5.jpg";
import { StaticImageData } from "next/image";

const imageArray: StaticImageData[] = [
    similar1,
    similar2,
    similar3,
    similar4,
    similar5,
];

const SimilarObjects = () => {
    const t = useTranslation(translations);
    const { response } = useFiltersContext<IFilters, IGetPriceResponse>();
    const { similar_objects } = response ?? {};
    return (
        <div className="flex flex-col gap-12">
            <Text variant="header-2">{t("title")}</Text>
            <div className="grid grid-cols-3 gap-8">
                {similar_objects ? (
                    similar_objects.map((object, index) => (
                        <SimilarObject
                            image={imageArray[index % 5]}
                            key={object.address + index}
                            {...object}
                        />
                    ))
                ) : (
                    <Text variant="body-3" className="text-gray-400">
                        Не удалось найти похожие квартиры
                    </Text>
                )}
            </div>
        </div>
    );
};

const MemoizedSimilarObjects = memo(SimilarObjects);
export { MemoizedSimilarObjects as SimilarObjects };
