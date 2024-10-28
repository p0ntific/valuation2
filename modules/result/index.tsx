"use client";

import { Email } from "./ui/Email";
import { HomeInfo } from "./ui/HomeInfo";
import { Price } from "./ui/Price";
import { RatePrice } from "./ui/RatePrice";
import { SimilarObjects } from "./ui/SimilarObjects";

export const Result = () => {
    return (
        <div className="flex flex-col gap-32 mt-32">
            <Price />
            <HomeInfo />
            <SimilarObjects />
            <RatePrice />
            <Email />
        </div>
    );
};
