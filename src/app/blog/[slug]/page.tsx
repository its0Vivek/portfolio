import { getPostData, getSortedPostsData } from '@/lib/blog'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug)
  return {
    title: `${post.title} | Vivek Mali`,
    description: post.description || post.excerpt || 'Read this blog post by Vivek Mali',
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)
  return (
    <article className="prose prose-invert mx-auto py-8 px-4">
      <h1>{post.title}</h1>
      <div className="text-muted-foreground mb-8">
        <time>{post.date}</time>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
} 