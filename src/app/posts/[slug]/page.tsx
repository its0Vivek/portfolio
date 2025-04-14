import Link from 'next/link'
import { getPostData, getSortedPostsData } from '@/lib/blog'
import { Metadata } from 'next'
import { formatDate } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt
  }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const post = await getPostData(params.slug)

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="max-w-[800px] mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          href="/posts"
          className="inline-flex items-center text-[13px] text-[#888] hover:text-white transition-colors mb-12 tracking-wide"
        >
          ← BACK TO THE MAIN BLOG
        </Link>

        {/* Post header */}
        <header className="mb-20">
          <time dateTime={post.date} className="block text-[#888] text-[13px] mb-6 tracking-wide">
            {formatDate(post.date)}
          </time>
          
          <h1 className="text-[56px] font-bold leading-[1.1] mb-8">
            {post.title}
          </h1>
          
          <p className="text-[20px] text-[#888] leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-[13px] text-[#888]">
            <span>{post.readingTime} read</span>
          </div>
        </header>

        {/* Post content */}
        <article 
          className="prose prose-invert prose-lg max-w-none
            prose-p:text-[#888] prose-p:text-[17px] prose-p:leading-relaxed
            prose-headings:text-white prose-headings:font-semibold
            prose-a:text-white prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-code:text-white prose-code:bg-[#0C0C0C] prose-code:px-1 prose-code:rounded
            prose-pre:bg-[#0C0C0C] prose-pre:border prose-pre:border-[#1C1C1C]"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </div>
    </div>
  )
} 