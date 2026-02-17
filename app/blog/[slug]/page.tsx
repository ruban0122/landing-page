
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/CTASection";

// Allow caching
export const revalidate = 60;

// Dummy content if Supabase is empty
const dummyPost = {
    id: 1,
    slug: "ai-reduce-operational-costs",
    title: "How AI Can Reduce Operational Costs for SMEs",
    content: `
    <p>In today's fast-paced business environment, Small and Medium-sized Enterprises (SMEs) face increasing pressure to optimize operations and reduce costs. Artificial Intelligence (AI) has emerged as a powerful tool to achieve these goals.</p>
    <h2>1. Automating Repetitive Tasks</h2>
    <p>AI-powered tools can handle repetitive tasks such as data entry, scheduling, and customer support inquiries, freeing up employees to focus on more strategic initiatives.</p>
    <h2>2. Enhancing Decision Making</h2>
    <p>By analyzing large datasets, AI can provide actionable insights that help businesses make informed decisions, reducing the risk of costly errors.</p>
    <h2>3. Improving Customer Experience</h2>
    <p>AI chatbots and recommendation engines can provide personalized experiences to customers 24/7, increasing satisfaction and retention.</p>
    <p>Embracing AI is no longer a luxury for large corporations; it is a necessity for SMEs looking to stay competitive in the digital age.</p>
  `,
    published_at: "2023-10-15T10:00:00Z",
    category: "AI in Business",
    cover_image: null
};

async function getPost(slug: string) {
    const { data: post, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !post) {
        if (slug === dummyPost.slug) return dummyPost;
        return null;
    }

    return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: post.title,
        description: post.excerpt || post.content.substring(0, 160),
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-background min-h-screen pt-24 pb-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                        {post.category || "Article"}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <time className="text-gray-600 text-sm">
                        {formatDate(post.published_at)}
                    </time>
                </div>

                {post.cover_image && (
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 border-t border-gray-200 pt-8">
                    <CTASection />
                </div>
            </div>
        </article>
    );
}
