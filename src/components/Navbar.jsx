'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
        { name: 'Dribble', icon: 'globe' },
        { name: 'Instagram', icon: 'instagram' },
    ];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-28">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/expo%20logo.webp"
                                alt="Expo Logo"
                                width={120}
                                height={48}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Centered Navigation */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative transition-colors duration-200 group"
                                    style={{
                                        fontFamily: "'Roc Grotesk', sans-serif",
                                        fontSize: '19px',
                                        fontWeight: '500',
                                        color: 'rgb(25, 25, 25)',
                                        lineHeight: '29px'
                                    }}
                                >
                                    {link.name}
                                    <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#191919] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="flex flex-col gap-[6px] w-8 h-8 justify-center items-center cursor-pointer"
                            aria-label="Open menu"
                        >
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                            <span className="w-6 h-[2px] bg-black"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Slide-out Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        key="menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 2.0, ease: "easeInOut" }
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                    >
                        {/* Transparent Layer for click-outside */}
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-transparent"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{
                                y: '-100%',
                                transition: { duration: 2.0, ease: "easeInOut" }
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-[400px] bg-[#111111] flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Menu Header with Close Button */}
                            <div className="flex justify-between items-center px-8 pt-8 pb-4">
                                <Image
                                    src="/expo%20logo.webp"
                                    alt="Expo Logo"
                                    width={120}
                                    height={48}
                                    className="h-10 w-auto object-contain brightness-0 invert"
                                    priority
                                />
                                <motion.button
                                    initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 360, opacity: 0, scale: 0.5 }}
                                    whileHover={{ rotate: 180, scale: 1.1 }}
                                    whileTap={{ rotate: 360, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Menu Content */}
                            <div
                                className="flex-1 flex flex-col px-8 py-8 overflow-y-auto scrollbar-hide"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {/* Nav Links */}
                                <motion.div
                                    className="space-y-6 flex flex-col text-left mt-4"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                    }}
                                >
                                    {navLinks.map((link) => (
                                        <motion.div
                                            key={link.name}
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { x: 50, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-center justify-start gap-4 text-white text-[32px] font-bold tracking-tight transition-colors hover:text-gray-300"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                <span>{link.name}</span>
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    className="text-white/50 text-2xl group-hover:text-white transition-colors group-hover:translate-x-2 duration-300"
                                                >
                                                    →
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Footer Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                                    className="pt-10 mt-8"
                                >
                                    {/* Social Icons */}
                                    <div className="flex items-center gap-6">
                                        <a href="#" className="flex items-center justify-center text-white hover:text-gray-400 transition-all">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center text-white hover:text-gray-400 transition-all">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center text-white hover:text-gray-400 transition-all">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center text-white hover:text-gray-400 transition-all">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
