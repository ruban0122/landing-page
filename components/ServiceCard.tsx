"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
        >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
