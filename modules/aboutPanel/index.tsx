"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import cn from "classnames";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { translations } from "./i18n";

interface IPanelItem extends LinkProps {
    icon: ReactNode;
    text: string;
    className?: string;
}

const PanelItem = ({ icon, text, className, ...restprops }: IPanelItem) => {
    return (
        <Link
            {...restprops}
            className={cn(
                "flex flex-col rounded-xl items-center py-8 gap-2 transition",
                className,
            )}
        >
            <div className="text-2xl">{icon}</div>
            <Text variant="subheader-3">{text}</Text>
        </Link>
    );
};

export const AboutPanel = ({ title }: { title: string }) => {
    const t = useTranslation(translations);
    return (
        <div className="my-8 space-y-8 gap-8 flex items-end ">
            <div className="flex flex-col gap-8">
                <div className="text-4xl font-bold">{title}</div>

                <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between items-center w-[500px] px-6">
                    <div>
                        <p>
                            <span>{t("line11")}</span> &mdash; {t("line12")}
                        </p>
                        <p>
                            <span>{t("line21")}</span> &mdash; {t("line22")}
                        </p>
                    </div>
                    <div className="text-center mt-2 text-3xl">&#8595;</div>
                </div>
            </div>
            <div className=" grid-cols-4 w-full grid gap-6 text-white text-center">
                <PanelItem
                    href="/about"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                        </svg>
                    }
                    text={t("product")}
                    className="bg-blue-300 hover:bg-blue-400"
                />
                <PanelItem
                    href="/profile"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    }
                    text={t("profile")}
                    className="bg-violet-300 hover:bg-violet-400"
                />
                <PanelItem
                    href="/settings"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    }
                    text={t("settings")}
                    className="bg-purple-300 hover:bg-purple-400"
                />
                <PanelItem
                    href="https://web.telegram.org/k/#@MaksIgitov"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                            />
                        </svg>
                    }
                    text={t("message")}
                    className="bg-orange-300 hover:bg-orange-400"
                />
            </div>
        </div>
    );
};
