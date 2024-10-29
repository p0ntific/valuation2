"use client";
import { AboutPanel } from "@/modules/aboutPanel";
import { FastForm } from "@/modules/fastForm";
import { Footer } from "@/modules/footer";
import { LangController } from "@/modules/langController";
import { LinkToForm } from "@/modules/linkToForm";
import { Navbar } from "@/modules/navbar";
import { QA } from "@/modules/qa";
import { RegionController } from "@/modules/regionController";
import { WhereGetDataBlock } from "@/modules/whereGetDataBlock";

export default function Home() {
    return (
        <div className="flex flex-col h-full min-h-[100vh]">
            <Navbar
                rightAdorment={
                    <div className="flex items-center gap-2">
                        <LangController />
                        <RegionController />
                    </div>
                }
            ></Navbar>
            <AboutPanel title="Оценка квартиры" />
            <LinkToForm />
            <QA />
            <FastForm />
            <WhereGetDataBlock />
            <Footer />
        </div>
    );
}
