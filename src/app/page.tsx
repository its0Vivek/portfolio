import { DeveloperCard } from '@/components/DeveloperCard'

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <DeveloperCard />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Current Project</h2>
          <p className="text-white/80">
            Working on my first game prototype using Unity and C#. Stay tuned for updates!
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-500 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Learning</h2>
          <p className="text-white/80">
            Exploring game design principles, 3D modeling with Blender, and advanced Unity features.
          </p>
        </div>
      </div>
    </div>
  )
} 