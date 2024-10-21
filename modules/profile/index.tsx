"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useQuery } from "@/hooks/useQuery";
import { useUrl } from "@/hooks/useUrl";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";
import { useCallback, useEffect } from "react";
import { getInfo } from "./api/getInfo";
import { translations } from "./i18n";

export function Profile() {
    const { token } = useLocalStorage();
    const { navigate, reloadPage } = useUrl();
    const t = useTranslation(translations);
    const { data, isLoading } = useQuery(getInfo);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [navigate, token]);

    const handleClose = useCallback(() => {
        localStorage.removeItem("token");
        reloadPage();
    }, [reloadPage]);

    if (isLoading || !data) {
        return "загрузка...";
    }

    return (
        <div className="flex flex-col items-start gap-6">
            <Text variant="header-1">{t("title")}</Text>
            <Text variant="body-3">
                {t("name")}: {data.data[0].username}
            </Text>
            <Text variant="body-3">
                {t("email")}: {data.data[0].email}
            </Text>
            <Button
                onClick={handleClose}
                isSquare
                shouldConfirm
                view="flat-danger"
            >
                {t("leave")}
            </Button>
        </div>
    );
}
