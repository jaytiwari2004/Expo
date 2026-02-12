'use client';

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
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                    <div className="flex items-start justify-between">
                        {/* Left Side - Main Heading */}
                        <div className="flex-1">
                            <h1 className="text-white">
                                <span
                                    className="block"
                                    style={{
                                        fontFamily: "'Roc Grotesk', sans-serif",
                                        fontSize: '146px',
                                        fontWeight: '500',
                                        lineHeight: '142px',
                                        color: 'rgb(255, 255, 255)'
                                    }}
                                >
                                    Unique
                                </span>
                                <div className="flex items-center gap-6">
                                    <span className="text-[60px] lg:text-[80px]">→</span>
                                    <span
                                        className="block"
                                        style={{
                                            fontFamily: "'Roc Grotesk', sans-serif",
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
                                    className="block"
                                    style={{
                                        fontFamily: "'Roc Grotesk', sans-serif",
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
                        <div className="hidden lg:block text-white text-right">
                            <p className="text-[16px] font-medium tracking-wide mb-2">
                                8 JUNE – 15 AUGUST 2022
                            </p>
                            <p className="text-[16px] font-bold tracking-wide">
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
