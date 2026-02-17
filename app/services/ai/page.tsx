
import CTASection from "@/components/CTASection";
import { Bot, FileText, Database, Workflow, BarChart } from "lucide-react";

export default function AISolutionsPage() {
    const services = [
        { title: "AI Chatbots for Customer Support", icon: Bot },
        { title: "Automated Document Processing", icon: FileText },
        { title: "AI-based Recommendation Engines", icon: Database },
        { title: "Workflow Automation", icon: Workflow },
        { title: "Data Analytics Dashboards", icon: BarChart },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 -z-10 blur-3xl" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            AI-Powered Automation & Intelligence
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            Harness the power of artificial intelligence to automate complex tasks, gain insights, and drive efficiency.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Our AI Capabilities</h2>
                        <p className="text-gray-400 mt-4">Cutting-edge solutions for modern challenges</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                <service.icon className="h-10 w-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-400">
                                    Advanced algorithms tailored to your specific business needs.
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Transform your business from reactive to intelligent.
                        </p>
                    </div>

                </div>
            </section>

            <CTASection />
        </div>
    );
}
