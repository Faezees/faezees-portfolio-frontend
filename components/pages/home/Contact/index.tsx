"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss();

      if (response.ok) {
        toast.success("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Error sending message.");
      }
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error("⚠️ Something went wrong. Try again!");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-5 py-20 dark:from-gray-900 dark:to-gray-800 sm:px-10 md:py-20 lg:px-32 lg:py-20"
    >
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 -z-10 opacity-20">
        <svg width="287" height="254" viewBox="0 0 287 254" fill="none">
          <path
            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-40.5"
              y1="117"
              x2="301.926"
              y2="-97.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-0 top-0 -z-10 opacity-20">
        <svg width="628" height="258" viewBox="0 0 628 258" fill="none">
          <path
            d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint1_linear"
              x1="644"
              y1="221"
              x2="429.946"
              y2="37.0429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* <motion.span

            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.2,
            }}
            className="mb-4 inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          >
            📬 Get In Touch
          </motion.span> */}

          <h2 className="pt-5 mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-extrabold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 sm:text-5xl md:text-6xl">
            Let's Work Together
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? Drop me a message and let's create something
            amazing together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  <FiUser className="text-blue-600" />
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-900"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  <FiMail className="text-blue-600" />
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-900"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  <FiMessageSquare className="text-blue-600" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-900"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {/* {status === "success" && (
                <motion.div

                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                >
                  ✅ Your message has been sent successfully!
                </motion.div>
              )} */}

              {/* {status === "error" && (
                <motion.div

                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )} */}

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {false ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span className="text-sm mdLtext-lg">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Or reach out directly via email at{" "}
            <a
              href="mailto:faeze1377.es@gmail.com"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              faeze1377.es@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
