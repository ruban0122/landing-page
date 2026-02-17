"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            DigitalSystems
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <div className="relative group">
                                <button className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                                    Services <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition-all duration-200 transform origin-top-right">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link href="/services/web" className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5" role="menuitem">Web Development</Link>
                                        <Link href="/services/app" className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5" role="menuitem">App Development</Link>
                                        <Link href="/services/ai" className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5" role="menuitem">AI Solutions</Link>
                                    </div>
                                </div>
                            </div>
                            <Link href="/portfolio" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                About
                            </Link>
                            <Link href="/blog" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Blog
                            </Link>
                            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-foreground/5 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-gray-900 hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-background border-b border-foreground/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="/services/web" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium pl-6">Web Development</Link>
                        <Link href="/services/app" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium pl-6">App Development</Link>
                        <Link href="/services/ai" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium pl-6">AI Solutions</Link>
                        <Link href="/portfolio" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
                        <Link href="/about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/blog" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                        <Link href="/contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
