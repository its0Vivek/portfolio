import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { format, parseISO } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

type CategoryType = 'Game Development' | 'Web Development' | 'Portfolio' | 'General'

const defaultCoverImages: Record<CategoryType, string> = {
  'Game Development': '/images/blog/game-dev.jpg',
  'Web Development': '/images/blog/web-dev.jpg',
  'Portfolio': '/images/blog/portfolio.jpg',
  'General': '/images/blog/hello.jpg',
}

export async function GET() {
  try {
    // Check if posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      return NextResponse.json([])
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        const data = matterResult.data as {
          title: string
          date: string
          coverImage?: string
          category: string
          tags: string[]
        }

        // Safely format the date
        let formattedDate = data.date
        try {
          // Handle both full ISO and simple YYYY-MM-DD formats
          const date = data.date.includes('T') ? data.date : `${data.date}T00:00:00.000Z`
          const parsedDate = parseISO(date)
          formattedDate = format(parsedDate, 'MMMM dd, yyyy')
        } catch (error) {
          console.warn(`Invalid date format for post ${fileName}: ${data.date}`)
          formattedDate = data.date // Fallback to original date string
        }

        const excerpt = matterResult.content.split('\n')[0]
        const coverImage = data.coverImage ||
          (data.category in defaultCoverImages
            ? defaultCoverImages[data.category as CategoryType]
            : '/images/blog/default.jpg')

        return {
          slug,
          ...data,
          date: formattedDate,
          content: matterResult.content,
          excerpt,
          coverImage,
        }
      })

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => {
      try {
        const dateA = parseISO(a.date)
        const dateB = parseISO(b.date)
        return dateB.getTime() - dateA.getTime()
      } catch {
        return 0
      }
    })

    return NextResponse.json(sortedPosts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
} 