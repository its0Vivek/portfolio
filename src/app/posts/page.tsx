import React from 'react';
import Link from 'next/link';

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Blog Posts</h1>
      
      <div className="grid gap-8">
        {/* Post Item 1 */}
        <article className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
          <div className="mb-4">
            <div className="text-sm text-zinc-400 mb-2">March 15, 2023</div>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/posts/first-post" className="text-zinc-100 hover:text-purple-500 transition-colors">
                Getting Started with Next.js and TypeScript
              </Link>
            </h2>
            <p className="text-zinc-400 mb-4">
              A comprehensive guide to setting up a new Next.js project with TypeScript, including best practices and common pitfalls to avoid.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                React
              </span>
            </div>
            <Link href="/posts/first-post" className="text-purple-500 hover:text-purple-400">
              Read more →
            </Link>
          </div>
        </article>
        
        {/* Post Item 2 */}
        <article className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
          <div className="mb-4">
            <div className="text-sm text-zinc-400 mb-2">February 28, 2023</div>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/posts/second-post" className="text-zinc-100 hover:text-purple-500 transition-colors">
                Building Responsive UIs with Tailwind CSS
              </Link>
            </h2>
            <p className="text-zinc-400 mb-4">
              Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This post covers the basics and advanced techniques.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Responsive Design
              </span>
            </div>
            <Link href="/posts/second-post" className="text-purple-500 hover:text-purple-400">
              Read more →
            </Link>
          </div>
        </article>
        
        {/* Post Item 3 */}
        <article className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
          <div className="mb-4">
            <div className="text-sm text-zinc-400 mb-2">January 10, 2023</div>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/posts/third-post" className="text-zinc-100 hover:text-purple-500 transition-colors">
                State Management in React Applications
              </Link>
            </h2>
            <p className="text-zinc-400 mb-4">
              A deep dive into different state management solutions for React applications, from useState to Redux and everything in between.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Redux
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                State Management
              </span>
            </div>
            <Link href="/posts/third-post" className="text-purple-500 hover:text-purple-400">
              Read more →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
} 