import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  id: string
  title: string
  date: string
  content: string
  description?: string
  excerpt?: string
  slug: string
}

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Create excerpt from content if not provided in frontmatter
    const excerpt = matterResult.data.excerpt || matterResult.content.slice(0, 200) + '...'

    // Combine the data with the id
    return {
      id,
      slug: id,
      excerpt,
      ...(matterResult.data as { date: string; title: string; description: string }),
      content: matterResult.content,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Create excerpt from content if not provided in frontmatter
  const excerpt = matterResult.data.excerpt || matterResult.content.slice(0, 200) + '...'

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    slug: id,
    excerpt,
    content: contentHtml,
    ...(matterResult.data as { date: string; title: string; description: string }),
  }
} 