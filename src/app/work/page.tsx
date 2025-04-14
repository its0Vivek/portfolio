import React from 'react';

interface SkillItemProps {
  name: string;
  level: string;
  levelColor?: string;
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

function SkillItem({ name, level, levelColor = "text-red-400/70" }: SkillItemProps) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-white text-[15px]">{name}</span>
      <span className={`text-sm ${levelColor}`}>{level}</span>
    </div>
  );
}

const skills = [
  {
    category: "Game Development",
    items: [
      { name: "Unity", level: "Learning", levelColor: "text-red-400/70" },
      { name: "C#", level: "Learning", levelColor: "text-red-400/70" },
      { name: "Game Design", level: "Learning", levelColor: "text-red-400/70" },
      { name: "Pixel Art", level: "Learning", levelColor: "text-red-400/70" },
      { name: "3D Modeling", level: "Learning", levelColor: "text-red-400/70" },
      { name: "Game Physics", level: "Learning", levelColor: "text-red-400/70" }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "Next.js", level: "Proficient", levelColor: "text-green-400" },
      { name: "React", level: "Proficient", levelColor: "text-green-400" },
      { name: "TypeScript", level: "Proficient", levelColor: "text-green-400" },
      { name: "Tailwind CSS", level: "Proficient", levelColor: "text-green-400" },
      { name: "HTML/CSS", level: "Advanced", levelColor: "text-blue-400" }
    ]
  },
  {
    category: "Core Skills",
    items: [
      { name: "Problem Solving", level: "Advanced", levelColor: "text-blue-400" },
      { name: "Git & Version Control", level: "Proficient", levelColor: "text-green-400" },
      { name: "Object-Oriented Programming", level: "Intermediate", levelColor: "text-yellow-400" },
      { name: "Software Architecture", level: "Learning", levelColor: "text-red-400/70" }
    ]
  }
];

const learningJourney = [
  {
    year: "2025",
    title: "Game Development Focus",
    description: "Transitioning into game development with Unity and C#. Learning game design principles, physics simulation, and creating interactive experiences.",
    current: true
  },
  {
    year: "2025",
    title: "Unity Game Projects",
    description: "Building various game prototypes including 2D platformers, puzzle games, and exploring different game mechanics. Learning about game optimization and player experience.",
    current: true
  },
  {
    year: "2024",
    title: "Web Development Expertise",
    description: "Mastered modern web development technologies including Next.js, React, and TypeScript. Built several web applications and gained strong understanding of frontend development."
  },
  {
    year: "2024",
    title: "Programming Foundations",
    description: "Established strong programming fundamentals through practical projects and continuous learning. Developed problem-solving skills and coding best practices."
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Game Development Journey
          </h1>
          <p className="text-zinc-400 text-lg">
            With a strong foundation in web development, I'm now pursuing my passion for game
            development. Leveraging my programming expertise to create engaging gaming
            experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Game Development */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Game Development</h2>
            <div className="space-y-4">
              <SkillItem name="Unity" level="Learning" />
              <SkillItem name="C#" level="Learning" />
              <SkillItem name="Game Design" level="Learning" />
              <SkillItem name="Pixel Art" level="Learning" />
              <SkillItem name="3D Modeling" level="Learning" />
              <SkillItem name="Game Physics" level="Learning" />
            </div>
          </div>

          {/* Web Development */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Web Development</h2>
            <div className="space-y-4">
              <SkillItem name="Next.js" level="Proficient" levelColor="text-green-400" />
              <SkillItem name="React" level="Proficient" levelColor="text-green-400" />
              <SkillItem name="TypeScript" level="Proficient" levelColor="text-green-400" />
              <SkillItem name="Tailwind CSS" level="Proficient" levelColor="text-green-400" />
              <SkillItem name="HTML/CSS" level="Advanced" levelColor="text-blue-400" />
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Core Skills</h2>
            <div className="space-y-4">
              <SkillItem name="Problem Solving" level="Advanced" levelColor="text-blue-400" />
              <SkillItem name="Git & Version Control" level="Proficient" levelColor="text-green-400" />
              <SkillItem name="Object-Oriented Programming" level="Intermediate" levelColor="text-yellow-400" />
              <SkillItem name="Software Architecture" level="Learning" />
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Learning Journey</h2>
          <div className="relative border-l border-zinc-800">
            {learningJourney.map((item, index) => (
              <div key={index} className="relative ml-6 mb-12">
                <div className="absolute -left-[46px] flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700">
                  <span className="text-sm text-zinc-400">{learningJourney.length - index}</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <time className="text-sm text-zinc-500 block">{item.year}</time>
                  {item.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1C1C1C] text-[#888] animate-pulse">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 