"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "../../data/menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  // handle sticky
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-5 transition-all duration-500 sm:px-10 xl:px-32 ${
        sticky
          ? "bg-white/70 shadow-md backdrop-blur-md dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-0 py-4">
        {/* Logo */}
        <div className="flex gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/final-dark.png"
              alt="logo"
              width={110}
              height={25}
              className="dark:hidden"
            />
            <Image
              src="/images/logo/final-light.png"
              alt="logo"
              width={110}
              height={25}
              className="hidden dark:block"
            />
          </Link>

          {/* Menu */}
          <nav className="hidden items-center space-x-10 lg:flex">
            {menuData.map((menuItem, i) => (
              <div key={i} className="group relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`relative text-[16px] font-medium transition-colors duration-300 ${
                      pathname === menuItem.path
                        ? "text-primary dark:text-white"
                        : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                    <motion.span
                      layoutId="underline"
                      className={`absolute -bottom-1 left-0 h-[2px] bg-primary dark:bg-white ${
                        pathname === menuItem.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      } transition-all duration-300`}
                    />
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(i)}
                      className="flex items-center space-x-1 text-[16px] text-gray-700 transition-all duration-300 hover:text-primary dark:text-gray-300"
                    >
                      <span>{menuItem.title}</span>
                      <motion.span
                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 top-full mt-3 w-48 rounded-lg bg-white/80 p-3 shadow-lg backdrop-blur-md dark:bg-gray-800/90"
                        >
                          {menuItem.submenu.map((submenu, j) => (
                            <Link
                              href={submenu.path}
                              key={j}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                              {submenu.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Theme toggler & mobile menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggler />

          {/* Mobile menu button */}
          <button
            onClick={navbarToggleHandler}
            className="block rounded-lg p-3 ring-1 ring-gray-400/30 transition hover:ring-primary lg:hidden"
          >
            <motion.div
              animate={navbarOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="mb-1 h-[2px] w-6 bg-gray-800 dark:bg-white"
            ></motion.div>
            <motion.div
              animate={navbarOpen ? { opacity: 0 } : { opacity: 1 }}
              className="mb-1 h-[2px] w-6 bg-gray-800 dark:bg-white"
            ></motion.div>
            <motion.div
              animate={
                navbarOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className="h-[2px] w-6 bg-gray-800 dark:bg-white"
            ></motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 800, rotate: -40, x: 120 }}
            transition={{ duration: 1.2 }}
            className="absolute right-14 top-24 z-40 w-[200px] bg-white/90 p-6 shadow-md backdrop-blur-md dark:bg-gray-900/90 lg:hidden"
          >
            <ul className="space-y-3">
              {menuData.map((item, i) => (
                <li key={i}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`block text-lg font-medium ${
                        pathname === item.path
                          ? "text-primary dark:text-white"
                          : "text-gray-800 hover:text-primary dark:text-gray-300"
                      }`}
                      onClick={() => setNavbarOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSubmenu(i)}
                        className="flex w-full items-center justify-between text-lg text-gray-800 dark:text-gray-300"
                      >
                        {item.title}
                        <motion.span
                          animate={{ rotate: openIndex === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openIndex === i && (
                          <motion.ul
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.submenu.map((submenu, j) => (
                              <li key={j}>
                                <Link
                                  href={submenu.path}
                                  className="block text-sm text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                                  onClick={() => setNavbarOpen(false)}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
