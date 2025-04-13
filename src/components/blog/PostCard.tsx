import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/blog'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col space-y-4 bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {post.coverImage && (
        <div className="relative w-full h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {post.category}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-foreground hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-muted-foreground text-sm mb-4">{post.date}</p>
        <p className="text-foreground/80 flex-1">{post.excerpt}</p>
        <div className="mt-4">
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary/80 font-medium inline-block"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
} 