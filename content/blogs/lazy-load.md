---
title: "Lazy Loading and Code Splitting in Next.js"
date: "2025-11-11"
author: "Faeze Es"
authorImage: "/images/blog/author-05.jpg"
category: "Frontend Performance"
views: 26
tags: ["Next.js", "React", "Performance", "Lazy Loading", "Code Splitting"]
image: "/images/blog/lazy.avif"
---

## Introduction

Modern web pages often include **images, heavy components, or interactive widgets**.
Loading all of these elements at once can cause **slow page loads** and a **poor user experience**.

The solution is to use **lazy loading** or **code splitting** to load components **only when needed**.



## Dynamic Import in Next.js

Next.js provides a `dynamic` feature that allows components to load **only on the client** or **when needed**.

### Example:
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("../components/HeavyComponent"),
  { ssr: false } // Load only on client
);

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <HeavyComponent />
    </div>
  );
}
```
✅ Benefits:

Reduces First Contentful Paint (FCP) time

Reduces CPU and memory usage

Provides a smooth and fast user experience

Lazy Loading Images
Besides components, images can also be lazy loaded.
Next.js next/image component provides built-in lazy loading:

```tsx
Copy code
import Image from "next/image";

<Image
  src="/images/large-photo.jpg"
  alt="Large Photo"
  width={800}
  height={600}
  loading="lazy"
/>
```
✅ Images are loaded only when the user scrolls to them, improving page speed.

Practical Tips
Always separate heavy and non-essential components using dynamic.

Lazy load large images and long lists.

Using these techniques improves both SEO and UX.

