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
    <article className="group relative p-6 bg-gradient-to-br from-card/50 via-card to-background rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Title with animated underline */}
        <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          <span className="relative">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
          </span>
        </h2>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-primary/5 text-primary rounded-full 
                         transform transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description with fade-in effect */}
        <p className="text-muted-foreground mb-6 transform transition-all duration-500 group-hover:text-foreground">
          {description}
        </p>

        {/* Links with hover effects */}
        <div className="flex items-center gap-4">
          {demoUrl && (
            <Link
              href={demoUrl}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium 
                         transition-all duration-300 hover:translate-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium 
                         transition-all duration-300 hover:translate-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
} 