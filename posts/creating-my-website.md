---
title: 'How I Built My Personal Website'
date: '2024-04-15'
excerpt: 'A detailed look into how I built my personal website using Next.js, TypeScript, and Tailwind CSS. From design decisions to implementation challenges.'
readingTime: '8 minutes'
category: 'Web Development'
tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Portfolio']
---

Building a personal website is more than just showcasing your work—it's about creating a digital space that reflects who you are and what you're passionate about. Here's how I built mine from scratch.

## Tech Stack Selection

I carefully chose my tech stack based on performance, developer experience, and modern web standards:

- **Next.js 14**: For server-side rendering and optimal performance
- **TypeScript**: To ensure type safety and better code organization
- **Tailwind CSS**: For rapid styling and consistent design
- **Markdown**: For easy blog post creation and management

## Key Features

### 1. Dark Theme Design
I implemented a dark theme with carefully chosen colors:
- Background: `#111111`
- Card backgrounds: `#0C0C0C`
- Hover states: `#141414`
- Border accents: `#1C1C1C`
- Text colors: White for headings, `#888` for body text

### 2. Dynamic Pages
The website includes several key sections:
- Home page with developer card
- Work page showcasing my skills and journey
- Projects page with interactive cards
- Blog section with Markdown support
- Contact page with social links

### 3. Responsive Components
I created several reusable components:
- ProjectCard for showcasing projects
- SkillItem for displaying skills with level indicators
- Timeline for the learning journey section
- PostCard for blog post previews

## Development Process

### 1. Initial Setup
```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
npm install tailwindcss @tailwindcss/typography
```

### 2. Project Structure
I organized the project with a clean structure:
```
src/
  ├── app/         # Next.js app router pages
  ├── components/  # Reusable components
  ├── lib/         # Utility functions
  └── styles/      # Global styles
posts/            # Markdown blog posts
public/           # Static assets
```

### 3. Design Implementation
I focused on creating a consistent design language:
- Rounded corners (`rounded-[20px]`) for cards
- Subtle hover effects with color transitions
- Consistent spacing using Tailwind's spacing scale
- Typography hierarchy for better readability

### 4. Blog System
The blog system was implemented using:
- Markdown files for content
- Gray-matter for frontmatter parsing
- Remark for Markdown processing
- Dynamic routing for blog posts

## Challenges and Solutions

### 1. Performance Optimization
- Implemented image optimization using Next.js Image component
- Used proper font loading strategies
- Minimized JavaScript bundle size

### 2. Responsive Design
- Created mobile-first layouts
- Used Tailwind's responsive modifiers
- Tested across different devices and screen sizes

### 3. Code Organization
- Separated concerns into reusable components
- Created utility functions for common operations
- Maintained consistent coding patterns

## Future Improvements

I plan to continue improving the website with:
- Enhanced animations and transitions
- More interactive elements
- Better image loading optimization
- Additional blog features like search and filtering

## Conclusion

Building this website was both challenging and rewarding. It serves not only as a portfolio but also as a platform for sharing my journey in technology. The modular architecture allows for easy updates and additions as I continue to grow and learn.

Feel free to check out the website's source code and don't hesitate to reach out if you have any questions about the implementation! 