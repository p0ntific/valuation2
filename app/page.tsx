"use client";
import { AboutPanel } from "@/modules/aboutPanel";
import { Footer } from "@/modules/footer";
import { LangController } from "@/modules/langController";
import { LinkToForm } from "@/modules/linkToForm";
import { Navbar } from "@/modules/navbar";
import { QA } from "@/modules/qa";
import { RegionController } from "@/modules/regionController";

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
            <Footer />
        </div>
    );
}
