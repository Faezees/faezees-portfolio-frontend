import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export const metadata = {
  title: "Blog Page",
  description: "This is the blog listing page",
};

const BlogPage = () => {
  const blogs = getAllBlogs();

  return (
    <section className="px-6 pb-20 sm:px-10 lg:px-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mx-auto mb-16 mt-32 max-w-5xl text-center">
          <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text pb-4 text-5xl font-extrabold text-transparent md:text-6xl">
            My Blog
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore articles, tutorials, and experiences designed to help you
            learn and grow.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
            >
              {/* Cover Image */}
              <div className="relative h-52 w-full overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>

                <div className="w-full flex items-center justify-between">
                  <div className=" flex mb-2 text-sm text-gray-500 dark:text-gray-400">
                    By {blog.author}
                  </div>

                  {blog.date && (
                    <div className="flex mb-2 text-xs text-gray-400 dark:text-gray-500">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  )}
                </div>

                {/* <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {blog.category}
                </span> */}
              </div>

              {/* Read More */}
              {/* <Link
                href={`/blog/${blog.slug}`}
                className="mt-3 inline-block font-medium text-primary hover:underline"
              >
                →
              </Link> */}

              <Link
                href={`/blog/${blog.slug}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Read More
                <FiChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
