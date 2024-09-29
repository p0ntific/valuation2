"use client";
import logo from "@/assets/logo.png";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import Image from "next/image";
import Link from "next/link";
import { translations } from "./i18n";

interface INavbar {
    rightAdorment?: React.ReactNode;
}

export const Navbar = ({ rightAdorment }: INavbar) => {
    const t = useTranslation(translations);

    return (
        <div className="w-full flex items-center justify-between py-4 gap-2">
            <Link
                href="/"
                className="flex gap-2 items-center hover:bg-gray-100 transition py-2 px-4 rounded-xl"
            >
                <Image src={logo} alt="лого" className="size-8" />
                <Text variant="header-2">{t("title")}</Text>
            </Link>
            <div className="ml-auto">{rightAdorment}</div>
            <Link
                href="/profile"
                className="text-gray-500 hover:bg-gray-200 transition p-2 rounded-xl hover:text-black"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            </Link>
        </div>
    );
};
