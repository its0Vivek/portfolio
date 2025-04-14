'use client'

import { useState } from 'react'
import { Post } from '@/lib/blog'

interface SearchBarProps {
  posts: Post[]
  onSearch: (filteredPosts: Post[]) => void
  categories: string[]
  tags: string[]
}

export default function SearchBar({ posts, onSearch, categories, tags }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  const handleSearch = (term: string, category: string, tag: string) => {
    const filtered = posts.filter((post) => {
      const searchLower = term.toLowerCase()
      const matchesTerm =
        term === '' ||
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        (post.content?.toLowerCase().includes(searchLower) ?? false)

      const matchesCategory = category === '' || post.category === category
      const matchesTag = tag === '' || (post.tags?.includes(tag) ?? false)

      return matchesTerm && matchesCategory && matchesTag
    })

    onSearch(filtered)
  }

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            handleSearch(e.target.value, selectedCategory, selectedTag)
          }}
        />
        <select
          className="px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            handleSearch(searchTerm, e.target.value, selectedTag)
          }}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedTag}
          onChange={(e) => {
            setSelectedTag(e.target.value)
            handleSearch(searchTerm, selectedCategory, e.target.value)
          }}
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
} 