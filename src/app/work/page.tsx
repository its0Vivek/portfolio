import React from 'react';

const skills = [
  {
    category: "Game Development",
    items: [
      { name: "Unity", level: "Learning" },
      { name: "C#", level: "Learning" },
      { name: "Game Design", level: "Learning" },
      { name: "Pixel Art", level: "Learning" },
      { name: "3D Modeling", level: "Learning" },
      { name: "Game Physics", level: "Learning" }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "Next.js", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML/CSS", level: "Advanced" },
    ]
  },
  {
    category: "Core Skills",
    items: [
      { name: "Problem Solving", level: "Advanced" },
      { name: "Git & Version Control", level: "Proficient" },
      { name: "Object-Oriented Programming", level: "Intermediate" },
      { name: "Software Architecture", level: "Learning" },
    ]
  }
];

const learningJourney = [
  {
    year: "2024",
    title: "Game Development Focus",
    description: "Transitioning into game development with Unity and C#. Learning game design principles, physics simulation, and creating interactive experiences. Currently working on small game prototypes to build a foundation.",
    current: true
  },
  {
    year: "2024",
    title: "Unity Game Projects",
    description: "Building various game prototypes including 2D platformers, puzzle games, and exploring different game mechanics. Learning about game optimization and player experience.",
    current: true
  },
  {
    year: "2023",
    title: "Web Development Expertise",
    description: "Mastered modern web development technologies including Next.js, React, and TypeScript. Built several web applications and gained strong understanding of frontend development."
  },
  {
    year: "2023",
    title: "Programming Foundations",
    description: "Established strong programming fundamentals through practical projects and continuous learning. Developed problem-solving skills and coding best practices."
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary relative inline-block">
            Game Development Journey
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
          </h1>
          <p className="text-muted-foreground text-lg">
            With a strong foundation in web development, I'm now pursuing my passion for game development.
            Leveraging my programming expertise to create engaging gaming experiences.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-6 bg-card rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        skill.level === 'Learning' ? 'bg-primary/10 text-primary' :
                        skill.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' :
                        skill.level === 'Proficient' ? 'bg-green-500/10 text-green-500' :
                        'bg-purple-500/10 text-purple-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center text-foreground">
            Learning Journey
          </h2>
          <div className="relative">
            {learningJourney.map((item, index) => (
              <div key={index} className="flex group">
                {/* Left side with stepper */}
                <div className="flex flex-col items-center mr-10">
                  <div className="relative">
                    {/* Outer circle */}
                    <div className="w-12 h-12 rounded-full bg-background border-[3px] border-primary flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-out">
                      {/* Inner circle with number */}
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-base font-semibold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-2 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-all duration-300 ease-out" />
                  </div>
                  {index !== learningJourney.length - 1 && (
                    <div className="w-[3px] h-36 my-2">
                      <div className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                    </div>
                  )}
                </div>

                {/* Right side content */}
                <div className="flex-1 pb-20">
                  <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-out">
                    <div className="flex items-center gap-4 mb-3">
                      <time className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/5">
                        {item.year}
                      </time>
                      {item.current && (
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary animate-pulse">
                          Current Focus
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground/90 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 