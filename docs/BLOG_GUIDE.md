# Writing Blog Posts Guide

## Blog Post Structure

Each blog post should be created as a Markdown file in the `posts` directory with the following frontmatter structure:

```markdown
---
title: 'Your Blog Post Title'
date: 'YYYY-MM-DD'
excerpt: 'A brief description of your blog post (appears in previews)'
readingTime: 'X minutes'
category: 'Category Name'
tags: ['tag1', 'tag2', 'tag3']
coverImage: '/images/blog/your-image.jpg' # Optional
---

Your blog content here...
```

## Required Fields

- `title`: The title of your blog post
- `date`: Publication date in 'YYYY-MM-DD' format
- `excerpt`: A short description (150-200 characters)
- `readingTime`: Estimated reading time (e.g., '5 minutes')
- `category`: Main category (e.g., 'Game Development', 'Web Development')
- `tags`: Array of relevant tags

## Optional Fields

- `coverImage`: Path to the cover image (must be in `/public/images/blog/`)

## Writing Guidelines

1. **Headers**: Use `##` for main sections and `###` for subsections
2. **Code Blocks**: Use triple backticks with language specification
   ```javascript
   // Example code block
   const hello = 'world';
   ```

3. **Images**: Place images in `/public/images/blog/` and reference them using:
   ```markdown
   ![Alt text](/images/blog/your-image.jpg)
   ```

4. **Links**: Use standard Markdown links:
   ```markdown
   [Link text](https://example.com)
   ```

## Example Post

```markdown
---
title: 'Getting Started with Game Development'
date: '2024-03-15'
excerpt: 'A comprehensive guide to starting your journey in game development, covering essential tools and concepts.'
readingTime: '8 minutes'
category: 'Game Development'
tags: ['Unity', 'Beginner', 'Tutorial']
coverImage: '/images/blog/game-dev-intro.jpg'
---

## Introduction

Game development is an exciting journey that combines creativity with technical skills...

## Getting Started

First, let's understand the basic tools you'll need...

## Conclusion

Remember, the key to success in game development is practice and persistence...
```

## Best Practices

1. Use clear, descriptive titles
2. Include relevant tags for better searchability
3. Write engaging excerpts
4. Break content into logical sections
5. Include code examples where relevant
6. Add images to illustrate concepts
7. End with a clear conclusion or call to action

## Publishing Process

1. Create a new `.md` file in the `posts` directory
2. Add all required frontmatter
3. Write your content using Markdown
4. Add any images to `/public/images/blog/`
5. Commit and push your changes
6. The blog will automatically update with your new post 