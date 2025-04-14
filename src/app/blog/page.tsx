import { getSortedPostsData } from '@/lib/blog'
import PostCard from '@/components/blog/PostCard'

export const metadata = {
  title: 'Blog | Vivek Mali',
  description: 'Read my thoughts on software development, gaming, and more.',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen bg-black">
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