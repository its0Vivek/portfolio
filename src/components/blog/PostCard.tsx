import Link from 'next/link'
import { Post } from '@/lib/blog'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
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