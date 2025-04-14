import React from 'react';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, featuring a blog, dark mode, and responsive design. Uses Tailwind CSS for styling and TypeScript for type safety.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoUrl: "https://portfolio.dev",
    githubUrl: "https://github.com/username/portfolio"
  },
  {
    title: "Game Development Project",
    description: "A 2D platformer game built with Unity, featuring procedurally generated levels, dynamic difficulty adjustment, and pixel art graphics.",
    technologies: ["Unity", "C#", "Pixel Art", "Game Design"],
    demoUrl: "https://game.dev",
    githubUrl: "https://github.com/username/game"
  },
  {
    title: "Web Development Blog",
    description: "A technical blog sharing insights and tips about web development, game development, and software engineering best practices.",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://blog.dev",
    githubUrl: "https://github.com/username/blog"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-8 relative inline-block">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white to-transparent" />
          </h1>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            A collection of my recent work in web development, game development, and more.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
} 