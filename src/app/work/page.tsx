import React from 'react';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Work Experience</h1>
      
      <div className="grid gap-8">
        {/* Work Item 1 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-100">Software Engineer</h2>
              <p className="text-zinc-400">Company Name</p>
            </div>
            <div className="text-sm text-zinc-400 mt-2 md:mt-0">
              Jan 2022 - Present
            </div>
          </div>
          
          <p className="mb-4 text-zinc-300">
            Description of your role and responsibilities. Highlight key achievements and technologies used.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              Node.js
            </span>
          </div>
        </div>
        
        {/* Work Item 2 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-100">Frontend Developer</h2>
              <p className="text-zinc-400">Previous Company</p>
            </div>
            <div className="text-sm text-zinc-400 mt-2 md:mt-0">
              Jun 2020 - Dec 2021
            </div>
          </div>
          
          <p className="mb-4 text-zinc-300">
            Description of your role and responsibilities. Highlight key achievements and technologies used.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              HTML/CSS
            </span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
              Vue.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 