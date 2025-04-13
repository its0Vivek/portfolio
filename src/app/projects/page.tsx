import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden border border-zinc-800">
          <div className="relative h-48 w-full">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-zinc-100">Project Name</h2>
            <p className="text-zinc-400 mb-4">
              A brief description of the project, what it does, and what problems it solves.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                View Demo
              </Link>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden border border-zinc-800">
          <div className="relative h-48 w-full">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-zinc-100">Another Project</h2>
            <p className="text-zinc-400 mb-4">
              A brief description of the project, what it does, and what problems it solves.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                View Demo
              </Link>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
        
        {/* Project Card 3 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden border border-zinc-800">
          <div className="relative h-48 w-full">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-zinc-100">Third Project</h2>
            <p className="text-zinc-400 mb-4">
              A brief description of the project, what it does, and what problems it solves.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Vue.js
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                View Demo
              </Link>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 