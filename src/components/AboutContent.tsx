export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="py-12 space-y-16">
        {/* About Me Section */}
        <section>
          <h1 className="text-3xl font-bold mb-6">About me</h1>
          <div className="space-y-6 text-white/80">
            <p>
              I'm a passionate learner at the start of my Game Development journey. While I haven't released a game yet, I'm deeply focused on creating unique concepts that stand out from the crowd. My goal isn't just to make games — it's to craft experiences that leave a lasting impression.
            </p>
            <p>
              I'm currently exploring game development with tools like <span className="text-white">Unity</span>, <span className="text-white">Blender</span>, and <span className="text-white">C#</span>, and I'm building my skills every day through hands-on learning, experimentation, and community engagement.
            </p>
            <p>
              In the near future, I plan to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Start a YouTube channel to document and share my game dev progress</li>
              <li>Join game jams to challenge myself and learn from other creatives</li>
              <li>Continue building a portfolio that reflects my love for thoughtful design and original ideas</li>
            </ul>
            <p>
              This portfolio is where I'll be sharing my journey, my growth, and eventually — my games.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Timeline items */}
            <div className="relative pl-8 border-l border-white/10">
              {/* Learning Game Development */}
              <div className="mb-8">
                <h3 className="font-medium">Game Development Journey</h3>
                <p className="text-sm text-white/60 mb-2">2024 - Present</p>
                <p className="text-white/80">
                  Self-taught game developer focusing on Unity and C#. Learning 3D modeling with Blender and exploring game design principles.
                </p>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h3 className="font-medium">Personal Projects</h3>
                <p className="text-sm text-white/60 mb-2">2024 - Present</p>
                <p className="text-white/80">
                  Working on prototype games and learning projects. Building a foundation in game mechanics, level design, and player experience.
                </p>
              </div>

              {/* Community */}
              <div>
                <h3 className="font-medium">Community Engagement</h3>
                <p className="text-sm text-white/60 mb-2">2024 - Present</p>
                <p className="text-white/80">
                  Active member of game development communities. Preparing to participate in game jams and share development progress through social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Story</h2>
          <div className="space-y-8">
            {/* Timeline items */}
            <div className="relative pl-8 border-l border-white/10">
              {/* Beginnings */}
              <div className="mb-8 relative">
                <div className="absolute -left-10 top-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-medium">1</span>
                </div>
                <h3 className="font-medium mb-2">Beginnings</h3>
                <p className="text-white/80">
                  Started with a passion for games and a desire to create unique experiences. Began learning the fundamentals of programming and game design.
                </p>
              </div>

              {/* Learning Tools */}
              <div className="mb-8 relative">
                <div className="absolute -left-10 top-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-medium">2</span>
                </div>
                <h3 className="font-medium mb-2">Learning Tools</h3>
                <p className="text-white/80">
                  Diving into Unity game engine, mastering C# programming, and exploring 3D modeling with Blender. Building a strong foundation in game development tools.
                </p>
              </div>

              {/* Game Design */}
              <div className="mb-8 relative">
                <div className="absolute -left-10 top-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-medium">3</span>
                </div>
                <h3 className="font-medium mb-2">Game Design</h3>
                <p className="text-white/80">
                  Learning game design principles, focusing on player experience and engagement. Developing concepts for unique and memorable games.
                </p>
              </div>

              {/* Future Goals */}
              <div className="relative">
                <div className="absolute -left-10 top-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-medium">4</span>
                </div>
                <h3 className="font-medium mb-2">Future Goals</h3>
                <p className="text-white/80">
                  Planning to participate in game jams, start a YouTube channel to document my journey, and create a portfolio of unique and engaging games.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 