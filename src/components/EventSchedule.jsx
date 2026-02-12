'use client';

import Link from 'next/link';

export default function EventSchedule() {
    const events = [
        {
            time: '10:00 - 12:00',
            period: 'am',
            title: 'Reflection on Colour and Form',
            guide: 'Ashton Panton',
            guideRole: 'Guide',
            location: 'New York',
            venue: 'Manhattan Club'
        },
        {
            time: '12:00 - 14:00',
            period: 'pm',
            title: 'Reflection on Colour and Form',
            guide: 'Ben Gartler',
            guideRole: 'Guide',
            location: 'New York',
            venue: 'Manhattan Club'
        },
        {
            time: '15:00 - 17:00',
            period: 'pm',
            title: 'Reflection on Colour and Form',
            guide: 'Dylan Byrne',
            guideRole: 'Guide',
            location: 'New York',
            venue: 'Manhattan Club'
        },
        {
            time: '17:00 - 19:00',
            period: 'pm',
            title: 'Reflection on Colour and Form',
            guide: 'Kate Sykes',
            guideRole: 'Guide',
            location: 'New York',
            venue: 'Manhattan Club'
        }
    ];

    return (
        <section className="bg-transparent py-20 px-6 lg:px-12 border-t border-gray-200 relative">
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <h2
                        className="text-[48px] lg:text-[64px] font-medium text-black leading-none"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Event Schedule
                    </h2>
                    <Link
                        href="#"
                        className="text-black text-sm font-medium tracking-wide flex items-center gap-2 hover:gap-4 transition-all mt-4"
                    >
                        View More
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Date Tabs */}
                <div className="flex gap-8 mb-8 border-b border-gray-200 pb-4">
                    <button className="text-black text-sm font-medium tracking-wide border-b-2 border-black pb-2">
                        Day #1 - may 01.2021
                    </button>
                    <button className="text-gray-400 text-sm font-medium tracking-wide hover:text-black transition-colors">
                        Day #2 - may 02.2021
                    </button>
                    <button className="text-gray-400 text-sm font-medium tracking-wide hover:text-black transition-colors">
                        Day #3 - may 03.2021
                    </button>
                </div>

                {/* Events List */}
                <div className="space-y-0">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-gray-200 group hover:bg-gray-50 transition-all cursor-pointer px-4 -mx-4"
                        >
                            {/* Time */}
                            <div className="md:col-span-2 flex items-start">
                                <div>
                                    <div className="text-black text-lg font-medium">{event.time}</div>
                                    <div className="text-gray-500 text-xs">{event.period}</div>
                                </div>
                            </div>

                            {/* Event Title */}
                            <div className="md:col-span-4 flex items-center">
                                <h3 className="text-black text-lg font-medium">{event.title}</h3>
                            </div>

                            {/* Guide */}
                            <div className="md:col-span-2 flex items-start">
                                <div>
                                    <div className="text-black text-base font-medium">{event.guide}</div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider">{event.guideRole}</div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="md:col-span-3 flex items-start">
                                <div>
                                    <div className="text-black text-base font-medium">{event.location}</div>
                                    <div className="text-gray-500 text-xs">{event.venue}</div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="md:col-span-1 flex items-center justify-end">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    className="group-hover:translate-x-2 transition-transform"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
