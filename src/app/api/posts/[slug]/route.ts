import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

type CategoryType = 'Game Development' | 'Web Development' | 'Portfolio' | 'General'

const defaultCoverImages: Record<CategoryType, string> = {
  'Game Development': '/images/blog/game-dev.jpg',
  'Web Development': '/images/blog/web-dev.jpg',
  'Portfolio': '/images/blog/portfolio.jpg',
  'General': '/images/blog/hello.jpg',
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const data = matterResult.data as {
      title: string
      date: string
      coverImage?: string
      category: string
      tags: string[]
    }

    const date = format(new Date(data.date), 'MMMM dd, yyyy')
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const content = processedContent.toString()
    const excerpt = matterResult.content.split('\n')[0]

    const coverImage = data.coverImage ||
      (data.category in defaultCoverImages
        ? defaultCoverImages[data.category as CategoryType]
        : '/images/blog/default.jpg')

    return NextResponse.json({
      slug,
      content,
      excerpt,
      ...data,
      date,
      coverImage,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 404 }
    )
  }
} 