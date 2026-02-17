
import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Cpu } from 'lucide-react';
import CTASection from '@/components/CTASection';

const services = [
    {
        title: "Web Development",
        description: "High-performance websites and SaaS platforms built for growth.",
        icon: Globe,
        link: "/services/web",
        features: ["Corporate websites", "SaaS platforms", "E-commerce", "Admin dashboards"]
    },
    {
        title: "App Development",
        description: "Cross-platform mobile applications designed for seamless user experience.",
        icon: Smartphone,
        link: "/services/app",
        features: ["iOS & Android", "Booking systems", "Marketplaces", "Real-time features"]
    },
    {
        title: "AI Solutions",
        description: "Smart AI chatbots, workflow automation, and data-driven insights.",
        icon: Cpu,
        link: "/services/ai",
        features: ["AI Chatbots", "Automation", "Recommendation engines", "Data analytics"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Digital Solutions</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide end-to-end development services to help your business scale, automate, and succeed in the digital age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col h-full bg-white shadow-sm border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-md transition-all">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                                <ul className="mb-8 space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
