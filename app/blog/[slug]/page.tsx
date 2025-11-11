import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { meta } = getBlogBySlug(slug);

  return {
    title: meta.title,
    description: `Read ${meta.title} by ${meta.author}`,
  };
}

async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { meta, content } = getBlogBySlug(slug);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              {/* Title */}
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {meta.title}
              </h2>

              {/* Author & Info */}
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full object-cover">
                        <Image
                          src={meta.authorImage || "/images/blog/author-02.png"}
                          alt={meta.author}
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="mb-1 text-base font-medium text-body-color">
                        By <span>{meta.author}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                        </svg>
                      </span>
                      {meta.date}
                    </p>
                    <p className="flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 20 12"
                          className="fill-current"
                        >
                          <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125Z" />
                        </svg>
                      </span>
                      {meta.views || 0}
                    </p>
                  </div>
                </div>

                {/* Category */}
                {meta.category && (
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      {meta.category}
                    </div>
                  </div>
                )}
              </div>

              {/* Cover Image */}
              {meta.image && (
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={meta.image}
                      alt={meta.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              )}

              {/* Blog Content */}
              <div
                className="prose dark:prose-invert mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis
                vulputate cupidatat.
              </p>
              <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Consectetur adipiscing elit in voluptate velit.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mattis vulputate cupidatat.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Vulputate enim nulla aliquet porttitor odio pellentesque
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Ligula ullamcorper malesuada proin
                </li>
              </ul>
              <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                <p className="text-center text-base font-medium italic text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt utionals labore et dolore magna aliqua.
                  Quis lobortis scelerisque fermentum, The Neque ut etiam sit
                  amet.
                </p>
                <span className="absolute left-0 top-0 z-[-1]">
                  <svg
                    width="132"
                    height="109"
                    viewBox="0 0 132 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                      fill="url(#paint0_linear_111:606)"
                    />
                    <path
                      opacity="0.5"
                      d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                      fill="url(#paint1_linear_111:606)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_111:606"
                        x1="94.7523"
                        y1="82.0246"
                        x2="8.40951"
                        y2="52.0609"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.06" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_111:606"
                        x1="90.3206"
                        y1="58.4236"
                        x2="1.16149"
                        y2="50.8365"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.06" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="53"
                    height="30"
                    viewBox="0 0 53 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#4A6CF7"
                    />
                    <mask
                      id="mask0_111:596"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="75"
                      height="75"
                    >
                      <circle
                        opacity="0.8"
                        cx="37.5"
                        cy="37.5"
                        r="37.5"
                        fill="#4A6CF7"
                      />
                    </mask>
                    <g mask="url(#mask0_111:596)">
                      <circle
                        opacity="0.8"
                        cx="37.5"
                        cy="37.5"
                        r="37.5"
                        fill="url(#paint0_radial_111:596)"
                      />
                      <g opacity="0.8" filter="url(#filter0_f_111:596)">
                        <circle
                          cx="40.8089"
                          cy="19.853"
                          r="15.4412"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_111:596"
                        x="4.36768"
                        y="-16.5881"
                        width="72.8823"
                        height="72.8823"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="10.5"
                          result="effect1_foregroundBlur_111:596"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_111:596"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                      >
                        <stop stopOpacity="0.47" />
                        <stop offset="1" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis
                vulputate cupidatat.
              </p> */}

              {/* Tags & Share */}
              <div className="mt-5 items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Popular Tags :
                  </h4>
                  <div className="flex items-center">
                    {meta.tags?.map((tag: string, index: number) => (
                      <div
                        key={index}
                        className="mb-3 mr-3 inline-flex items-center justify-center rounded-sm bg-gray-light px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this post :
                  </h5>
                 <div className="flex items-center sm:justify-end">
                    <SharePost title={meta.slug} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailPage;
