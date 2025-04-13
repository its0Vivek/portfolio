import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const posts = {
  'first-post': {
    title: 'Getting Started with Next.js and TypeScript',
    date: 'March 15, 2023',
    content: `
      <p>Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. When combined with TypeScript, it provides a robust development experience with strong typing and better developer tooling.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li>Server-side rendering (SSR) for improved performance and SEO</li>
        <li>Static site generation (SSG) for fast page loads</li>
        <li>API routes for backend functionality</li>
        <li>File-based routing system</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Setting Up a Next.js Project with TypeScript</h2>
      <p>Creating a new Next.js project with TypeScript is straightforward:</p>
      <pre><code>npx create-next-app@latest my-app --typescript</code></pre>
      
      <p>This command will set up a new Next.js project with TypeScript configuration already in place.</p>
      
      <h2>TypeScript Configuration</h2>
      <p>Next.js includes a default TypeScript configuration, but you can customize it in the tsconfig.json file:</p>
      <pre><code>{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js with TypeScript provides a powerful foundation for building modern web applications. The combination of React's component-based architecture, Next.js's server-side capabilities, and TypeScript's type safety creates a development experience that is both productive and reliable.</p>
    `,
    tags: ['Next.js', 'TypeScript', 'React']
  },
  'second-post': {
    title: 'Building Responsive UIs with Tailwind CSS',
    date: 'February 28, 2023',
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It's become increasingly popular for its flexibility and developer experience.</p>
      
      <h2>What is Tailwind CSS?</h2>
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't come with pre-designed components.</p>
      
      <h2>Getting Started with Tailwind CSS</h2>
      <p>Installing Tailwind CSS in your project is simple:</p>
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Then, configure your template paths in tailwind.config.js:</p>
      <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <h2>Responsive Design with Tailwind</h2>
      <p>Tailwind makes responsive design easy with its responsive prefixes:</p>
      <ul>
        <li>sm: - Small devices (640px and up)</li>
        <li>md: - Medium devices (768px and up)</li>
        <li>lg: - Large devices (1024px and up)</li>
        <li>xl: - Extra large devices (1280px and up)</li>
        <li>2xl: - 2X Extra large devices (1536px and up)</li>
      </ul>
      
      <p>Example:</p>
      <pre><code>&lt;div className="w-full md:w-1/2 lg:w-1/3"&gt;
  Content
&lt;/div&gt;</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a powerful and flexible way to build responsive user interfaces. Its utility-first approach allows for rapid development while maintaining the ability to create custom designs.</p>
    `,
    tags: ['CSS', 'Tailwind', 'Responsive Design']
  },
  'third-post': {
    title: 'State Management in React Applications',
    date: 'January 10, 2023',
    content: `
      <p>State management is a crucial aspect of building React applications. As your application grows, managing state becomes increasingly complex.</p>
      
      <h2>React's Built-in State Management</h2>
      <p>React provides two main hooks for state management:</p>
      <ul>
        <li>useState - For managing local component state</li>
        <li>useReducer - For managing complex state logic</li>
      </ul>
      
      <h2>useState Hook</h2>
      <p>The useState hook is the simplest way to add state to functional components:</p>
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>useReducer Hook</h2>
      <p>For more complex state logic, the useReducer hook is a better choice:</p>
      <pre><code>import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() => dispatch({ type: 'increment' })}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: 'decrement' })}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>External State Management Libraries</h2>
      <p>For larger applications, external state management libraries like Redux, Zustand, or Jotai can be beneficial:</p>
      <ul>
        <li>Redux - A predictable state container for JavaScript apps</li>
        <li>Zustand - A small, fast and scalable state management solution</li>
        <li>Jotai - Primitive and flexible state management for React</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Choosing the right state management solution depends on your application's complexity and requirements. For simple applications, React's built-in hooks may be sufficient, while larger applications might benefit from external state management libraries.</p>
    `,
    tags: ['React', 'Redux', 'State Management']
  }
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = posts[slug as keyof typeof posts];
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/posts" className="text-purple-500 hover:text-purple-400 mb-8 inline-block">
        ← Back to Posts
      </Link>
      
      <article className="bg-[#1a1a1a] rounded-lg shadow-md p-6 border border-zinc-800">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-zinc-100">{post.title}</h1>
          <div className="text-sm text-zinc-400 mb-4">{post.date}</div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-100 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div 
          className="prose prose-invert prose-zinc max-w-none
            prose-headings:text-zinc-100
            prose-p:text-zinc-300
            prose-a:text-purple-500 hover:prose-a:text-purple-400
            prose-strong:text-zinc-200
            prose-code:text-zinc-100
            prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700
            prose-li:text-zinc-300
            prose-hr:border-zinc-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
} 