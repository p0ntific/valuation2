import { Text } from "@/ui-kit/Text";
import Link from "next/link";

const links: { text: string; href: string }[] = [
    {
        text: "Продукт",
        href: "/about",
    },
    {
        text: "Настройки",
        href: "/settings",
    },
    {
        text: "Написать нам",
        href: "https://web.telegram.org/k/#@MaksIgitov",
    },
    {
        text: "Профиль",
        href: "/profile",
    },
];

export const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center py-8 gap-6 bg-gray-100 mt-auto">
            <div className="flex gap-4">
                {links.map((el) => (
                    <Link
                        key={el.href}
                        href={el.href}
                        className="hover:text-blue-400 transition text-gray-600"
                    >
                        <Text variant="subheader-3">{el.text}</Text>
                    </Link>
                ))}
            </div>
            <Text variant="header-1">Оценка квартиры онлайн</Text>
        </div>
    );
};
