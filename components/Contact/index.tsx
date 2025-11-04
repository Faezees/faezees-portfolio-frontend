"use client";
import { useState } from "react";
import toast from "react-hot-toast";

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
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss(); // حذف toast لودینگ

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
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <h2 className="container mx-auto mb-4 mt-10 px-8 pb-3 pt-5 text-2xl font-bold text-black dark:text-white xl:px-48">
        Get in Touch
      </h2>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded bg-white p-8 shadow dark:bg-gray-dark">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Need to contact me? Add your message here.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border bg-[#f8f8f8] px-4 py-2 text-body-color-dark outline-none focus:border-primary dark:bg-[#2C303B]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border bg-[#f8f8f8] px-4 py-2 text-body-color-dark outline-none focus:border-primary dark:bg-[#2C303B]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded border bg-[#f8f8f8] px-4 py-2 text-body-color-dark outline-none focus:border-primary dark:bg-[#2C303B]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary py-3 text-white transition hover:bg-primary/90"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
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
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Contact;
