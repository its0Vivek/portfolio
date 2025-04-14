import { getSortedPostsData, Post } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Posts | Vivek Mali',
  description: 'Read my thoughts on game development and programming.',
}

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/posts/${post.slug}`}
      className="block p-6 rounded-[20px] bg-[#0C0C0C] hover:bg-[#141414] transition-colors border border-[#1C1C1C]"
    >
      <article className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          {post.title}
        </h2>
        <p className="text-[#888] text-[15px] leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-[#888] text-sm">
          <span>{post.readingTime} read</span>
        </div>
      </article>
    </Link>
  )
}

export default function PostsPage() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-8">All posts</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}