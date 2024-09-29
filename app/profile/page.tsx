"use client";
import { AboutPanel } from "@/modules/aboutPanel";
import { Footer } from "@/modules/footer";
import { Profile } from "@/modules/profile";
import { LangController } from "@/modules/langController";
import { Navbar } from "@/modules/navbar";
import { RegionController } from "@/modules/regionController";

export default function ProfilePage() {
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
            <AboutPanel title="Личный кабинет" />
            <Profile />
            <Footer />
        </div>
    );
}
