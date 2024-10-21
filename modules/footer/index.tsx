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
        <div className="w-full flex flex-col items-center py-32 gap-6 bg-gray-100 mt-auto">
            <div className="flex gap-4">
                {links.map((el) => (
                    <Link
                        key={el.href}
                        href={el.href}
                        className="hover:text-blue-400  text-gray-600"
                    >
                        <Text variant="subheader-3">{el.text}</Text>
                    </Link>
                ))}
            </div>

            <a
                href="#"
                className="px-4 py-2 rounded-full bg-white hover:bg-rose-800 hover:text-white transition"
            >
                <Text variant="subheader-3">Разработано Goji.studio</Text>
            </a>
        </div>
    );
};
