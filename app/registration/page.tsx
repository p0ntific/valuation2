"use client";
import { FiltersProvider } from "@/lib/filters/context";
import { Registration } from "@/modules/registration";
import { useRegistrationFilters } from "@/modules/registration/hooks/useRegistrationFilters";

export default function LoginPage() {
    const contextData = useRegistrationFilters();
    return (
        <FiltersProvider contextValue={contextData}>
            <Registration />
        </FiltersProvider>
    );
}
