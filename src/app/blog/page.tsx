import { getSortedPostsData } from '@/lib/blog'
import PostCard from '@/components/blog/PostCard'

export const metadata = {
  title: 'Blog | Vivek Mali',
  description: 'Read my thoughts on software development, gaming, and more.',
}

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
} 