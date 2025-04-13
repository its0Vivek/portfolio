'use client'

import { useState, useEffect } from 'react'
import PostCard from '@/components/blog/PostCard'
import SearchBar from '@/components/blog/SearchBar'

interface Post {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
  coverImage?: string
  category: string
  tags: string[]
}

export default function Posts() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch posts')
        }
        const data = await response.json()
        if (Array.isArray(data)) {
          setAllPosts(data)
          setFilteredPosts(data)
        } else if (data.error) {
          throw new Error(data.error)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
        setError(error instanceof Error ? error.message : 'Failed to load posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Posts</h1>
            <p className="text-muted-foreground mb-8">Loading posts...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Posts</h1>
            <p className="text-red-500 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    )
  }

  const categories = Array.from(new Set(allPosts.map(post => post.category)))
  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags)))

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Posts</h1>
          <p className="text-muted-foreground mb-8">
            Here I share my thoughts on software development, game development, and my journey in tech.
          </p>

          <SearchBar
            posts={allPosts}
            onSearch={setFilteredPosts}
            categories={categories}
            tags={tags}
          />
          
          <div className="grid grid-cols-1 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No posts found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 