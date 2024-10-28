import { ISimilarObject } from "@/shared/form/types";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { memo } from "react";

interface ISimilarObjectProps extends ISimilarObject {
    className?: string;
    image: StaticImageData;
}

const SimilarObject = ({
    address,
    floor,
    floors,
    has_lift,
    area,
    price,
    cnt_rooms,
    image,
    className,
}: ISimilarObjectProps) => {
    return (
        <div
            className={classNames(
                "bg-gray-50 rounded-xl flex flex-col overflow-hidden",
                className,
            )}
        >
            <Image src={image} alt="" className="w-full h-[250px]" />
            <div className="px-4 py-4 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Text variant="subheader-3" className="line-clamp-2">
                        {address}
                    </Text>
                    <Link href="#" className=" ">
                        Подробнее
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-y-2">
                    <Text variant="subheader-1">
                        Цена: {(price / 1000000).toFixed(2)} млн. ₽
                    </Text>
                    <Text variant="subheader-1">Площадь: {area} м2</Text>
                    <Text variant="subheader-1">
                        Количество комнат:{" "}
                        {cnt_rooms === "0.7"
                            ? "студия"
                            : Number(cnt_rooms).toFixed(0)}
                    </Text>
                    <Text variant="subheader-1">Этаж: {floor}</Text>
                    <Text variant="subheader-1">
                        Всего этажей в доме: {floors}
                    </Text>
                    <Text variant="subheader-1">
                        Лифт в доме: {has_lift ? "есть" : "нет"}
                    </Text>
                </div>
                <div className="flex gap-4 flex-col items-center">
                    <Button isSquare view="action" className="w-full">
                        Посетить сайт
                    </Button>
                </div>
            </div>
        </div>
    );
};

const MemoizedSimilarObject = memo(SimilarObject);
export { MemoizedSimilarObject as SimilarObject };
