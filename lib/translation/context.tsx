"use client";
import { createContext, useContext } from "react";
import { ILangContext } from "./types";

export const LangContext = createContext<ILangContext | null>(null);

export const useLangNullable = () => {
    const context = useContext(LangContext);
    return context as ILangContext | null;
};

export const useLangContext = () => {
    const context = useContext(LangContext);

    if (!context) {
        throw new Error("useLangContext must be used inside provider");
    }

    return context as ILangContext;
};
