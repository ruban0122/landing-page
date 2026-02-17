
-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT, -- HTML or Markdown
  excerpt TEXT,
  cover_image TEXT,
  category TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies for leads
-- Allow anyone (anon) to insert leads
CREATE POLICY "Allow public insert to leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view leads
CREATE POLICY "Allow auth select leads" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policies for blog_posts
-- Allow public to view published blog posts
CREATE POLICY "Allow public select published blog_posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Allow authenticated users (admins) to do everything with blog_posts
CREATE POLICY "Allow auth all blog_posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
