import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] rounded-3xl  text-center shadow-lg lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/code.jpg"
                alt="about image"
                fill
                className="rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/code2.jpg"
                alt="about image"
                fill
                className="hidden rounded-3xl drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Professional Experience
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  I’ve worked as a Front-End Developer at{" "}
                  <strong>Seed.Photo</strong>, where I developed NFT marketplace
                  features using Next.js, React, and Node.js, and contributed to
                  site optimization using Google Lighthouse and SEO strategies.
                  I also created Chrome extensions and WordPress plugins.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Teaching & Mentorship
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  I trained a junior developer for two months, created a
                  learning roadmap, and guided them through best practices in
                  front-end development and teamwork. I’ve also produced
                  educational videos about React for YouTube.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Side Projects
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  I’ve developed <strong>seed.photo</strong> and{" "}
                  <strong>dynamo100.com</strong>, plus multiple personal
                  projects including small games and UI experiments. These
                  projects reflect my passion for growth and experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
