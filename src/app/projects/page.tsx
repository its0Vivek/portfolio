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
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work in web development, game development, and more.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="transform transition-all duration-500 hover:-translate-y-1"
              style={{
                marginTop: index % 2 === 0 ? '0' : '2rem',
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 