
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10 blur-3xl opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Building the Future of Digital Businesses
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a team of passionate developers, designers, and strategists dedicated to transforming ideas into scalable digital realities.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                To empower businesses with scalable digital systems and AI-driven automation, enabling them to operate more efficiently and grow faster.
                            </p>

                            <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-600">
                                To become a trusted technology partner for growth-focused companies, known for innovation, reliability, and excellence.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">A Note From Our Founder</h3>
                            <p className="text-gray-600 italic mb-6">
                                "This company was founded with one goal — to help businesses leverage modern technology without complexity. We believe in building systems that generate measurable impact, not just digital presence."
                            </p>
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-gray-300 mr-4" /> {/* Placeholder avatar */}
                                <div>
                                    <div className="font-bold text-gray-900">Founder Name</div>
                                    <div className="text-sm text-gray-500">CEO & Founder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
