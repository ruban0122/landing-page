
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export default function WebDevelopmentPage() {
    const services = [
        "Corporate websites",
        "SaaS platforms",
        "Admin dashboards",
        "E-commerce platforms",
        "Internal business systems"
    ];

    const benefits = [
        { title: "Fast Load Speed", description: "Seamless navigation and high performance." },
        { title: "Secure Authentication", description: "Robust user management and data protection." },
        { title: "Cloud Scalability", description: "Systems that grow with your business traffic." },
        { title: "SEO Optimization", description: "Designed for visibility and ranking." }
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10 blur-3xl" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            High-Performance Web Platforms Built for Growth
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            From responsive websites to complex SaaS platforms, we deliver web solutions engineered for speed, security, and scalability.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Modern Solutions</h2>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <Check className="h-5 w-5 text-primary mr-3" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-400">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
