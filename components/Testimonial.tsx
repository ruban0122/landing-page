"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-white shadow-sm border border-gray-200"
        >
            <div className="flex flex-col h-full">
                <blockquote className="flex-grow text-lg italic text-gray-700 mb-6">
                    "{quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary mr-4" />
                    <div>
                        <div className="font-semibold text-gray-900">{author}</div>
                        <div className="text-sm text-gray-500">{role}, {company}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
