import Hero from "@/components/Hero";
import UrbanAtmosphere from "@/components/UrbanAtmosphere";
import WhatWeOffer from "@/components/WhatWeOffer";
import ExpoEventSection from "@/components/ExpoEventSection";
import LatestNews from "@/components/LatestNews";

export default function Home() {
    return (
        <div>
            <Hero />
            <UrbanAtmosphere />
            <WhatWeOffer />
            <ExpoEventSection />
            <LatestNews />
        </div>
    );
}
