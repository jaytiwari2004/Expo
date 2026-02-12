'use client';

import React from 'react';

export default function SidebarButtons() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col gap-[2px]">
            {/* Buy Theme Button */}
            <button className="group relative h-[60px] transition-all duration-300 flex items-center justify-end overflow-hidden">
                <div className="bg-[#f5a962] group-hover:bg-[#e69952] px-6 h-[60px] flex items-center justify-center transition-all duration-300 opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto overflow-hidden">
                    <span className="text-white font-bold text-sm uppercase tracking-wide whitespace-nowrap">
                        Buy Theme
                    </span>
                </div>
                <div className="w-[60px] h-[60px] bg-[#7a8208] group-hover:bg-[#6b7307] flex items-center justify-center flex-shrink-0 transition-colors duration-300 border-l border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            </button>

            {/* Our Bestsellers Button */}
            <button className="group relative h-[60px] transition-all duration-300 flex items-center justify-end overflow-hidden">
                <div className="bg-[#f5a962] group-hover:bg-[#e69952] px-6 h-[60px] flex items-center justify-center transition-all duration-300 opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto overflow-hidden">
                    <span className="text-white font-bold text-sm uppercase tracking-wide whitespace-nowrap">
                        Our Bestsellers
                    </span>
                </div>
                <div className="w-[60px] h-[60px] bg-[#7a8208] group-hover:bg-[#6b7307] flex items-center justify-center flex-shrink-0 transition-colors duration-300 border-l border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </button>

            {/* Hide Panel Button */}
            <button className="group relative h-[60px] transition-all duration-300 flex items-center justify-end overflow-hidden">
                <div className="bg-[#f5a962] group-hover:bg-[#e69952] px-6 h-[60px] flex items-center justify-center transition-all duration-300 opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto overflow-hidden">
                    <span className="text-white font-bold text-sm uppercase tracking-wide whitespace-nowrap">
                        Hide Panel
                    </span>
                </div>
                <div className="w-[60px] h-[60px] bg-[#7a8208] group-hover:bg-[#6b7307] flex items-center justify-center flex-shrink-0 transition-colors duration-300 border-l border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                </div>
            </button>
        </div>
    );
}
