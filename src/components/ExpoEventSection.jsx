'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GalleryMasonry from './GalleryMasonry';
import EventSchedule from './EventSchedule';

export default function ExpoEventSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 150]);

    return (
        <section ref={ref} className="relative bg-white overflow-hidden">
            {/* Sticky Background Container */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* Balloon & Button Container - Positioned to match Expo Header (Right side) */}
                    <div className="absolute top-32 lg:top-56 right-6 lg:right-12 w-20 h-20 flex items-center justify-center">

                        {/* The Balloon (Scales Up) */}
                        <motion.div
                            style={{ scale }}
                            className="absolute inset-0 w-full h-full bg-[#802121] rounded-full z-0 origin-center"
                        />

                        {/* The Arrow Button (Stays Visible) */}
                        <div className="relative z-10 w-12 h-12 rounded-full bg-[#802121] flex items-center justify-center animate-bounce pointer-events-auto">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            {/* Content Content - Transparent Backgrounds */}
            <div className="relative z-10">
                <GalleryMasonry />
                <EventSchedule />
            </div>
        </section>
    );
}
