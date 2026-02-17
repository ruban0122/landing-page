
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export default function AppDevelopmentPage() {
    const services = [
        "Cross-platform apps",
        "Booking systems",
        "Marketplace platforms",
        "On-demand service apps"
    ];

    const features = [
        { title: "Secure Backend", description: "Built on Supabase for robust data management." },
        { title: "Real-time Features", description: "Instant updates and synchronization." },
        { title: "Payment Gateways", description: "Seamless transaction integration." },
        { title: "Push Notifications", description: "Engage users directly on their devices." }
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-br from-secondary/10 to-primary/10 -z-10 blur-3xl opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Mobile Applications That Deliver Real Business Value
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            We design and develop high-performance mobile apps that engage users and streamline operations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">What We Build</h2>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <Check className="h-5 w-5 text-secondary mr-3" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-secondary/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
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
