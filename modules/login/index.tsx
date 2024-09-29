"use client";
import { useMutation } from "@/hooks/useMutation";
import { useUrl } from "@/hooks/useUrl";
import { useFiltersContext } from "@/lib/filters/context";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { login } from "./api/login";
import { PasswordField } from "./fields/passwordField";
import { UsernameField } from "./fields/usernameField";
import { translations } from "./i18n";
import { ILogin } from "./types";

export const Login = () => {
    const t = useTranslation(translations);
    const { navigate } = useUrl();
    const { values } = useFiltersContext<ILogin>();
    const { mutate, isLoading, data } = useMutation<{
        data: { auth_token: string };
    }>(login);
    const handleSubmit = useCallback(() => {
        mutate(values);
    }, [values]);

    useEffect(() => {
        if (data && !isLoading) {
            localStorage.setItem("token", data.data.auth_token);
            navigate("/");
        }
    }, [data, isLoading, mutate]);
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-6">
                    <Link href="/">
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
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </Link>
                    <Text variant="display-2" className="text-blue-400">
                        {t("title")}
                    </Text>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <UsernameField />
                    <PasswordField />
                    <Button
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        view="action"
                        className="max-w-[300px] min-w-[300px] "
                    >
                        {t("login")}
                    </Button>
                    <Link href="/registration">{t("registration")}</Link>
                </div>
            </div>
        </div>
    );
};
