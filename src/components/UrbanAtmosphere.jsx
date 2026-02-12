'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function UrbanAtmosphere() {
    const slides = [
        {
            category: "Black and White",
            title: "Urban Atmosphere",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            category: "Black and White",
            title: "Contemplating Art",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop"
        },
        {
            category: "Black and White",
            title: "Moment of Tranquility",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-24 px-6 lg:px-12 bg-white flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side - Image */}
                <div className="relative group overflow-hidden">
                    <div className="aspect-[4/3] relative w-full overflow-hidden bg-gray-100">
                        <img
                            key={slides[currentSlide].image}
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 animate-fade-in"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col space-y-8 animate-fade-in" key={currentSlide}>
                    <div className="space-y-4">
                        <span className="text-sm font-bold tracking-[0.2em] text-black uppercase">
                            {slides[currentSlide].category}
                        </span>
                        <h2
                            className="text-[60px] lg:text-[80px] leading-none font-black text-black"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            {slides[currentSlide].title}
                        </h2>
                    </div>

                    <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                        {slides[currentSlide].description}
                    </p>

                    <div className="flex items-center space-x-12 pt-8">
                        <button className="group flex items-center space-x-4 text-black font-bold text-lg hover:text-gray-600 transition-colors">
                            <span className="border-b-2 border-transparent group-hover:border-black transition-all">Read More</span>
                            <div className="flex items-center">
                                <div className="w-16 h-[1.5px] bg-[#802a2a]"></div>
                                <span className="text-[#802a2a] -ml-1 text-xl">→</span>
                            </div>
                        </button>

                        {/* Navigation Buttons */}
                        <div className="flex space-x-3 items-center">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all group active:scale-95"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all group active:scale-95"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
