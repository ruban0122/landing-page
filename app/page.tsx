import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Code, Smartphone, Cpu, Layout, Globe, Search } from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    description: "Modern, high-performance websites and SaaS platforms built with scalable architecture.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications designed for growth and seamless user experience.",
    icon: Smartphone,
  },
  {
    title: "AI Integration & Automation",
    description: "Smart AI chatbots, workflow automation, document processing, and data-driven insights.",
    icon: Cpu,
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Strategy & Discovery",
    description: "We understand your business goals, pain points, and growth vision.",
  },
  {
    step: "Step 2",
    title: "System Architecture",
    description: "We design scalable and secure digital infrastructure.",
  },
  {
    step: "Step 3",
    title: "Development & Integration",
    description: "Agile development with continuous feedback.",
  },
  {
    step: "Step 4",
    title: "Launch & Optimization",
    description: "We deploy, monitor, and optimize for performance.",
  },
];

const reasons = [
  "Modern Technology Stack (Next.js, Supabase, AI APIs)",
  "Performance-first architecture",
  "Scalable systems built for long-term growth",
  "Transparent communication",
  "AI-ready solutions",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Problem Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Most Businesses Are Losing Revenue Due to Inefficient Systems
            </h2>
            <div className="space-y-4 text-gray-600 text-lg mb-8 text-left max-w-xl mx-auto">
              <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> Manual processes slow down operations</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> Poor user experience reduces conversions</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> No automation means higher costs</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> No AI integration means falling behind competitors</p>
            </div>
            <p className="text-xl font-semibold text-primary">
              We solve these problems with modern, scalable digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive digital solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-20">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <p className="text-gray-600 mt-4">How we bring your vision to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/50 transition-colors shadow-sm">
                <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-8">We don't just write code; we build partners specific solutions that drive real growth.</p>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-gray-200 flex items-center justify-center p-8">
              {/* Abstract visual or placeholder for an image */}
              <div className="text-center">
                <Layout className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-mono text-sm">High Performance Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
