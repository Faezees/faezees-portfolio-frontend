---
title: "Handling large data efficiently in Next.js"
date: "2025-11-11"
author: "Faeze Es"
authorImage: "/images/blog/author-05.jpg"
category: "Frontend Performance"
views: 10
tags: ["Next.js", "React", "Performance", "State Management"]
image: "/images/blog/blog-04.png"
---

When building modern websites with **Next.js**, you might need to display a large number of items — for example, a long list of products, posts, or users fetched from an API.


At first, it seems easy to just fetch the data and store it all in a **`useState`** hook.
But as the number of items grows, you’ll start to notice **performance issues**. Each update to the state triggers a re-render, and if your list has hundreds or thousands of elements, it quickly becomes **slow and laggy**.

A better approach is to **load data in chunks** — for example, fetching 10 items at a time using pagination or infinite scroll.
However, even in that case, storing all of those chunks inside React state isn’t always the best idea. After a while, the component still becomes heavy because all previous data is kept in memory.

To fix this, you can **combine API pagination with local or session storage**.
Instead of keeping all items in memory through `useState`, save the already-fetched data in `localStorage` or `sessionStorage`.
This way, the browser keeps the data without making React re-render everything, and your app stays smooth and responsive.

In short:
- Avoid keeping large lists in React state.
- Fetch data in small chunks (e.g., 10 items at a time).
- Cache or store them in local/session storage when possible.
- This improves both performance and user experience.


// <!--
// **Author:** Faeze Es
// 📅 **Date:** November 11, 2025 -->
