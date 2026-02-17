
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils'; // I need to create this utility or just format inline

export const revalidate = 60; // Revalidate every minute

async function getBlogPosts() {
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }

    return posts || [];
}

// Fallback dummy data if Supabase is empty or not connected
const dummyPosts = [
    {
        id: 1,
        slug: "ai-reduce-operational-costs",
        title: "How AI Can Reduce Operational Costs for SMEs",
        excerpt: "Discover how artificial intelligence is transforming small business operations and cutting costs significantly.",
        published_at: "2023-10-15T10:00:00Z",
        category: "AI in Business",
        cover_image: null
    },
    {
        id: 2,
        slug: "custom-software-necessity",
        title: "Why Every Growing Business Needs Custom Software",
        excerpt: "Off-the-shelf solutions can only take you so far. Learn why custom software is the key to scaling.",
        published_at: "2023-10-20T14:30:00Z",
        category: "Digital Transformation",
        cover_image: null
    },
    {
        id: 3,
        slug: "cost-of-manual-processes",
        title: "The Real Cost of Manual Business Processes",
        excerpt: "Manual data entry and workflows are silently killing your profitability. Here's how to fix it.",
        published_at: "2023-11-05T09:15:00Z",
        category: "Automation Strategies",
        cover_image: null
    }
];

export default async function BlogPage() {
    let posts = await getBlogPosts();

    if (posts.length === 0) {
        posts = dummyPosts; // Use dummy data for display purposes
    }

    return (
        <div className="bg-background min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h1>
                    <p className="text-gray-600">Trends, strategies, and technology updates for forward-thinking businesses.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                            <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                <div className="aspect-video bg-gray-100 w-full relative">
                                    {/* Placeholder for cover image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
                                        {post.cover_image ? (
                                            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-4xl opacity-40">Image</span>
                                        )}
                                    </div>
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category || 'Tech'}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 mb-3">
                                        {new Date(post.published_at).toLocaleDateString()}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-primary font-medium text-sm flex items-center mt-auto">
                                        Read Article &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
