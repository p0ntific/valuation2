"use client";

import { HomeInfo } from "./ui/HomeInfo";
import { Price } from "./ui/Price";
import { SimilarObjects } from "./ui/SimilarObjects";

export const Result = () => {
    return (
        <div className="flex flex-col gap-32 mt-32">
            <Price />
            <HomeInfo />
            <SimilarObjects />
        </div>
    );
};
