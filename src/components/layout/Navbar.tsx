"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
    { label: "Shows", href: "/shows" },
    { label: "About", href: "/about" },
    { label: "Apply", href: "/apply" },
    { label: "Sponsors", href: "/sponsors" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-brand-black/90 backdrop-blur-xl border-b border-brand-border shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path
                                    d="M15 80 L15 35 Q15 20 30 20 L30 20 Q40 20 40 35 L40 55 L50 35 L60 55 L60 35 Q60 20 70 20 L70 20 Q85 20 85 35 L85 80"
                                    fill="none"
                                    stroke="url(#logoGradient)"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#E8435A" />
                                        <stop offset="50%" stopColor="#7DC83E" />
                                        <stop offset="100%" stopColor="#4CC9E0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="font-heading text-xl font-bold tracking-wide hidden sm:inline-block">
                            MULTIVISION
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative font-body text-sm font-medium text-brand-text-secondary hover:text-brand-text transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="cyan" href="/sponsors">
                            Become a Sponsor
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-brand-text p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="font-heading text-3xl font-bold text-brand-text hover:text-brand-coral transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            <Button variant="cyan" href="/sponsors">
                                Become a Sponsor
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
