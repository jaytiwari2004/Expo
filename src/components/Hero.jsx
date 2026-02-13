'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[120vh] w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero expo vedio.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center ">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                    <div className="flex items-start justify-between relative">
                        {/* Left Side - Main Heading */}
                        <div>
                            <h1 className="text-white">
                                <span
                                    className="block ml-[140px]"

                                    style={{
                                        fontFamily: "'Roc Grotesk'",
                                        fontSize: '146px',
                                        fontWeight: '500',
                                        lineHeight: '142px',
                                        color: 'rgb(255, 255, 255)'
                                    }}
                                >
                                    Unique
                                </span>
                                <div className="flex items-center gap-[100px] ml-[280px]">
                                    <div className="flex flex-col -space-y-[30px] leading-none">
                                        <motion.span
                                            className="text-[80px] lg:text-[100px] leading-[0.6]"
                                            animate={{ x: [0, 60, 60, 0, 0] }}
                                            transition={{
                                                duration: 4,
                                                times: [0, 0.3, 0.5, 0.8, 1],
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >→</motion.span>
                                        <motion.span
                                            className="text-[80px] lg:text-[100px] leading-[0.5] ml-[5px] "
                                            animate={{ x: [60, 0, 0, 60, 60] }}
                                            transition={{
                                                duration: 4,
                                                times: [0, 0.3, 0.5, 0.8, 1],
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >→</motion.span>
                                    </div>
                                    <span
                                        className="block"
                                        style={{
                                            fontFamily: "'Roc Grotesk'",
                                            fontSize: '146px',
                                            fontWeight: '500',
                                            lineHeight: '142px',
                                            color: 'rgb(255, 255, 255)'
                                        }}
                                    >
                                        Exhibition
                                    </span>
                                </div>
                                <span
                                    className="block ml-[150px]"
                                    style={{
                                        fontFamily: "'Roc Grotesk'",
                                        fontSize: '146px',
                                        fontWeight: '500',
                                        lineHeight: '142px',
                                        color: 'rgb(255, 255, 255)'
                                    }}
                                >
                                    Photography
                                </span>

                            </h1>
                        </div>

                        {/* Right Side - Date & Location */}
                        <div
                            className="hidden lg:block text-white absolute left-[900px] top-[20px]"
                            style={{ fontFamily: "'Roc Grotesk'" }}
                        >
                            <p className="text-[23px] font-medium tracking-wide mb-2">
                                8 JUNE – 15 AUGUST 2022
                            </p>
                            <p className="text-[23px] font-bold tracking-wide">
                                LONDON, UK
                            </p>
                        </div>


                    </div>
                </div>
            </div>



            {/* Mobile Date & Location */}
            <div className="lg:hidden absolute bottom-12 left-0 right-0 z-10 text-white text-center px-6">
                <p className="text-[14px] font-medium tracking-wide mb-1">
                    8 JUNE – 15 AUGUST 2022
                </p>
                <p className="text-[14px] font-bold tracking-wide">
                    LONDON, UK
                </p>
            </div>
        </section>
    );
}
