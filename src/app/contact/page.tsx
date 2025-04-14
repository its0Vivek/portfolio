export default function Contact() {
  return (
    <div className="min-h-screen px-4 pt-16">
      <div className="w-full max-w-3xl mx-auto bg-black border border-zinc-800 rounded-xl p-8 hover:border-purple-500 transition-all">
        <h1 className="text-3xl font-bold text-white mb-3 text-center">Contact me</h1>
        <p className="text-zinc-400 mb-8 text-center">
          You can contact me via Email, Discord or Instagram. I usually respond within a day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Discord */}
          <a 
            href="https://discord.com/users/Vivek#6163" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-black hover:bg-zinc-900 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-purple-500 mb-3"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <h2 className="font-medium text-white mb-1">Discord</h2>
            <p className="text-zinc-400 text-sm">vivek._.mali</p>
          </a>

          {/* Email */}
          <a 
            href="mailto:vivekmali108@gmail.com"
            className="flex flex-col items-center p-4 rounded-lg bg-black hover:bg-zinc-900 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-purple-500 mb-3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <h2 className="font-medium text-white mb-1">Email</h2>
            <p className="text-zinc-400 text-sm">vivekmali108@gmail.com</p>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/vivek._.mali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-black hover:bg-zinc-900 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-purple-500 mb-3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <h2 className="font-medium text-white mb-1">Instagram</h2>
            <p className="text-zinc-400 text-sm">vivek._.mali</p>
          </a>
        </div>
      </div>
    </div>
  )
} 