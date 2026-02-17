import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground/5 border-t border-foreground/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            DigitalSystems
                        </Link>
                        <p className="mt-4 text-sm text-foreground/70">
                            Transform your business with intelligent digital systems, AI automation, and scalable web solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/web" className="text-sm text-foreground/70 hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/services/app" className="text-sm text-foreground/70 hover:text-primary transition-colors">App Development</Link></li>
                            <li><Link href="/services/ai" className="text-sm text-foreground/70 hover:text-primary transition-colors">AI Solutions</Link></li>
                            <li><Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">All Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-sm text-foreground/70">
                                <Mail className="h-4 w-4" />
                                <span>hello@digitalsystems.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm text-foreground/70">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2 text-sm text-foreground/70">
                                <MapPin className="h-4 w-4" />
                                <span>123 Innovation Dr, Tech City, CA</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} DigitalSystems. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
