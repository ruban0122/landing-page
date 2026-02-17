
import Link from "next/link";
import CTASection from "@/components/CTASection";

const projects = [
    {
        id: 1,
        title: "Eco-Friendly E-commerce Platform",
        category: "Web Development",
        image: null, // Placeholder
        description: "A sustainable marketplace connecting eco-conscious buyers with ethical brands.",
        technologies: ["Next.js", "Supabase", "Stripe"]
    },
    {
        id: 2,
        title: "Healthcare SaaS Dashboard",
        category: "App Development",
        image: null, // Placeholder
        description: "Real-time patient monitoring and appointment scheduling system for clinics.",
        technologies: ["React Native", "Firebase", "Node.js"]
    },
    {
        id: 3,
        title: "AI Customer Support Bot",
        category: "AI Solutions",
        image: null, // Placeholder
        description: "Intelligent chatbot handling 80% of customer inquiries automatically.",
        technologies: ["Python", "OpenAI API", "LangChain"]
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-background min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore how we've helped businesses transform their digital presence and operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300">
                            <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                                <span className="text-gray-400 text-4xl font-bold">Project Image</span>
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Link href="#" className="text-primary font-medium text-sm hover:underline">
                                    View Case Study &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection />
        </div>
    );
}
