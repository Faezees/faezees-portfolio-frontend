import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDir = path.join(process.cwd(), "content/blogs");

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  authorImage?: string;
  category?: string;
  views?: number;
}

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir);
  const blogs = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(path.join(blogsDir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      image: data.image || "",
    };
  });

  return blogs.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      image: data.image || "",
      authorImage: data.authorImage,
      category: data.category,
      views: data.views,
    },
    content,
  };
}
