"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        project_type: "",
        budget: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('leads')
                .insert([formData]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: "", email: "", company: "", project_type: "", budget: "", message: "" });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-background min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Let’s Build Something Powerful Together</h1>
                    <p className="text-gray-600">Tell us about your project, your challenges, and your goals. We’ll respond within 24 hours.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-white shadow-sm p-8 rounded-2xl border border-gray-200 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <p className="text-gray-900 font-medium">Email Us</p>
                                        <p className="text-gray-600">hello@digitalsystems.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <p className="text-gray-900 font-medium">Call Us</p>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <p className="text-gray-900 font-medium">Visit Us</p>
                                        <p className="text-gray-600">123 Innovation Dr, Tech City, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Strategy Call</h3>
                            <p className="text-gray-600 mb-6">Prefer to talk directly? Book a free 30-minute consultation with our experts.</p>
                            <button className="bg-gray-900 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                Book Consultation
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-sm p-8 rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-600 mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="project_type" className="block text-sm font-medium text-gray-600 mb-2">Project Type</label>
                                    <select
                                        id="project_type"
                                        name="project_type"
                                        value={formData.project_type}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="AI Solution">AI Solution</option>
                                        <option value="Consulting">Consulting</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-600 mb-2">Budget Range</label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                >
                                    <option value="" disabled>Select Budget</option>
                                    <option value="< $5k">Less than $5k</option>
                                    <option value="$5k - $10k">$5k - $10k</option>
                                    <option value="$10k - $25k">$10k - $25k</option>
                                    <option value="$25k+">$25k+</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all duration-200 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                {!status && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center mt-4">Thank you! Your message has been sent successfully.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center mt-4">Something went wrong. Please try again later.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
