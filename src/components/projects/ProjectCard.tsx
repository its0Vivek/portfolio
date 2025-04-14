'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="block p-6 rounded-[20px] bg-[#0C0C0C] hover:bg-[#141414] transition-colors border border-[#1C1C1C]">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm text-[#888] bg-[#141414] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-[#888] text-[15px] leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4 pt-2">
          {demoUrl && (
            <Link
              href={demoUrl}
              className="text-sm text-white hover:text-[#888] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo →
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              className="text-sm text-white hover:text-[#888] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
} 