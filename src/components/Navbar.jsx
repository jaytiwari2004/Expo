'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Exhibitions', href: '/exhibitions' },
        { name: 'Collections', href: '/collections' },
        { name: 'Pages', href: '/pages' },
        { name: 'Shop', href: '/shop' },
        { name: 'Contacts', href: '/contacts' },
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
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90]"
                    >
                        {/* Transparent Layer for click-outside */}
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-transparent"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-[380px] bg-[#1a1a1a] flex flex-col shadow-2xl"
                        >
                            {/* Menu Header */}
                            <div className="flex justify-between items-center px-10 h-32">
                                <Image
                                    src="/expo%20logo.webp"
                                    alt="Expo Logo"
                                    width={120}
                                    height={48}
                                    className="h-12 w-auto object-contain brightness-0 invert"
                                    priority
                                />
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white border border-white/10 transition-all group"
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
                                        className="transition-transform duration-300 group-hover:rotate-90"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Menu Content */}
                            <div className="flex-1 flex flex-col justify-center px-10 relative pb-40">
                                {/* Social Links */}
                                <div className="space-y-6">
                                    {socialLinks.map((social) => (
                                        <Link
                                            key={social.name}
                                            href="#"
                                            className="flex items-center gap-4 text-white group"
                                        >
                                            <div className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                                {social.icon === 'facebook' && (
                                                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                                )}
                                                {social.icon === 'twitter' && (
                                                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                                )}
                                                {social.icon === 'globe' && (
                                                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>
                                                )}
                                                {social.icon === 'instagram' && (
                                                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                                )}
                                            </div>
                                            <span
                                                className="text-[17px] font-bold tracking-wide"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                {social.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                {/* Contact Info Footer */}
                                <div className="absolute bottom-0 left-0 w-full px-10 pb-10">
                                    <div className="w-full h-[1px] bg-white/10 mb-8"></div>
                                    <div className="space-y-2">
                                        <p
                                            className="text-white text-[28px] font-bold tracking-tight"
                                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                        >
                                            +1 840 841 25 69
                                        </p>
                                        <p className="text-white/40 text-[15px]">info@email.com</p>
                                    </div>
                                </div>

                                {/* Yellow Sidebar Icons on the Right Edge */}
                                <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col">
                                    <div className="w-16 h-16 bg-[#8a8a1a] flex items-center justify-center text-white border-b border-black/10 cursor-pointer hover:bg-[#a0a020] transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg>
                                    </div>
                                    <div className="w-16 h-16 bg-[#8a8a1a] flex items-center justify-center text-white border-b border-black/10 cursor-pointer hover:bg-[#a0a020] transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                    </div>
                                    <div className="w-16 h-16 bg-[#8a8a1a] flex items-center justify-center text-white cursor-pointer hover:bg-[#a0a020] transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
