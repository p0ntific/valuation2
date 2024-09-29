"use client";
import { FiltersProvider } from "@/lib/filters/context";
import { Login } from "@/modules/login";
import { useLoginFilters } from "@/modules/login/hooks/useLoginFilters";

export default function RegistrationPage() {
    const contextData = useLoginFilters();
    return (
        <FiltersProvider contextValue={contextData}>
            <Login />
        </FiltersProvider>
    );
}
