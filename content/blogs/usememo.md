---
title: "Optimizing Component Rendering with React.memo and useMemo"
date: "2025-11-11"
author: "Faeze Es"
authorImage: "/images/blog/author-05.jpg"
category: "Frontend Performance"
views: 23
tags: ["Next.js", "React", "Performance", "State Management"]
image: "/images/blog/usememo.webp"
---

Introduction

When building modern websites with **React** or **Next.js**, your pages might include **long lists** or **heavy components**.
Normally, every change in **state** or **props** triggers a re-render of the entire component. This can cause **sluggish performance** when your list contains hundreds or thousands of elements, or the content is complex.

The solution is to use **React.memo** and **useMemo** so that only the parts that actually change are re-rendered, while unchanged parts are **cached**.

## React.memo

`React.memo` is a **Higher Order Component** that prevents a component from re-rendering unless its **props** have changed.


### Example:
```tsx
import React from "react";

const Item = React.memo(({ name }: { name: string }) => {
  console.log("render", name);
  return <div>{name}</div>;
});

const List = ({ items }: { items: string[] }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item} name={item} />
      ))}
    </div>
  );
};
```


In this example, if the list does not change, Item will not re-render, keeping the page fast and responsive.

useMemo

useMemo is used for heavy calculations or sorting data so that these operations are not recalculated on every render.



### Example:
```tsx
const List = ({ items }: { items: string[] }) => {
  const sortedItems = useMemo(() => items.sort(), [items]);

  return (
    <div>
      {sortedItems.map((item) => (
        <Item key={item} name={item} />
      ))}
    </div>
  );
};
```

✅ With this approach, the sorted list is only recalculated when items actually change, avoiding unnecessary re-renders.

Practical Tips
For long lists, tables, or product cards, React.memo is very effective.

For heavy calculations and large datasets, use useMemo.

Always check whether optimization is truly needed; overusing these hooks without reason can introduce unnecessary complexity.

Combining both React.memo and useMemo strategically can drastically improve performance and user experience on complex pages.