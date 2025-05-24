"use client";
import TodoApp from "./components/TodoApp";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <motion.div
        className="max-w-xl w-full px-4 py-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/profile.jpg"
          alt="Tushar Panchal"
          width={96}
          height={96}
          className="rounded-full mx-auto mb-4 shadow"
        />
        <h1 className="text-4xl font-bold mb-2">Tushar Panchal</h1>
        <h2 className="text-xl mb-6 font-normal text-gray-700 dark:text-gray-300">
          Web Developer • Writer • Organizer
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
          Gen Z builder focused on crafting extraordinary, user-first web experiences.
          Always exploring simplicity, speed, and a bit of magic in everything I build.
          Check out my projects, stories, and let’s connect!
        </p>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>

          {/* FreePad Project */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow mb-6 border border-gray-100 dark:border-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <h4 className="text-xl font-bold mb-2">
              FreePad <span className="text-xs text-green-500 font-normal">(2025)</span>
            </h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              A distraction-free, minimalist writing and brainstorming platform built with Next.js, Tailwind, and Framer Motion.  
              Born from my own search for calm, focus, and clarity while writing. Features an animated focus timer, beautiful dark/light modes, and a notebook drawer for creative tools.  
              <span className="block mt-2 italic text-gray-500 dark:text-gray-400 text-sm">Built, launched, and open for everyone.</span>
            </p>
            <div className="flex gap-3 mt-2">
              <motion.a
                href="https://freepad.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href="https://github.com/Tusharjungli/freepad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded font-semibold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Auto India-6 Project */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow mb-6 border border-gray-100 dark:border-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <h4 className="text-xl font-bold mb-2">
              Auto India-6{" "}
              <span className="text-xs text-yellow-500 font-normal">(In Progress)</span>
            </h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              AI-powered e-commerce for automobile spare parts. Built with Next.js, PostgreSQL, and Tailwind CSS. Focused on UX, smart recommendations, and blazing-fast search.
            </p>
            <motion.a
              href="https://github.com/Tusharjungli/Auto-India-6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold mt-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>

          {/* Simple To-Do List Project */}
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow mb-6 border border-gray-100 dark:border-none"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <TodoApp />
          </motion.div>
        </motion.section>

        {/* Writing Section */}
        <motion.section
          id="writing"
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Writing</h3>
          <div className="space-y-6">
            {/* Kalyug and Introvert Story */}
            <motion.div
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <Image
                src="/kalyug.jpg"
                alt="Kalyug and Introvert cover"
                width={60}
                height={80}
                className="rounded-md object-cover"
              />
              <div>
                <a
                  href="https://www.wattpad.com/story/374604144-kalyug-and-introvert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-blue-600 dark:text-blue-400"
                >
                  Kalyug and Introvert
                </a>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  A story that explores the struggle of introverts in a chaotic world, blending myth and modern themes.
                </p>
              </div>
            </motion.div>
            {/* The System Story */}
            <motion.div
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              <Image
                src="/system.jpg"
                alt="The System cover"
                width={60}
                height={80}
                className="rounded-md object-cover"
              />
              <div>
                <a
                  href="https://www.wattpad.com/story/374635884-the-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-blue-600 dark:text-blue-400"
                >
                  The System
                </a>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  A fictional story about survival, power, and the supernatural—written with a unique blend of reality and imagination.
                </p>
              </div>
            </motion.div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              More on my{" "}
              <a
                href="https://www.wattpad.com/user/Tushar1004"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 dark:text-blue-400"
              >
                Wattpad profile
              </a>.
            </p>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          id="blog"
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Blog</h3>
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4 border border-gray-100 dark:border-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          >
            <h4 className="font-bold text-lg mb-1 text-gray-800 dark:text-gray-100">
              What I Learned Building Auto India-6
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">Why the “6”?</span> Before this version, I failed five times—each version broke, taught me something, and made me want to quit. But I kept rebuilding, and <span className="font-semibold">Auto India-6</span> is the result of that resilience.<br /><br />
              Building Auto India-6 took me on a month-long journey from idea to a functional prototype. The toughest parts were getting the database right and making dark/light mode feel seamless. Surprisingly, integrating Razorpay for payments was the easiest—and most fun—part of the process! Creating feedback and chatbot features helped me focus on what users truly need.<br /><br />
              This project was inspired by my passion for cars and a real gap I saw in the Indian auto parts market: there’s no popular, trusted platform for buying spare parts like there is for other products. Auto India-6 is just the beginning—my vision is to keep building experiences that make life easier for car lovers across the country.
            </p>
          </motion.div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          id="certificates"
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Certificate 1 */}
            <a
              href="/cert-google-it.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none hover:shadow-lg transition"
            >
              <Image
                src="/cert-google-it.jpg"
                alt="Google IT Automation with Python"
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
              <div>
                <div className="font-bold">Google IT Automation with Python</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Coursera</div>
              </div>
            </a>
            {/* Certificate 2 */}
            <a
              href="/cert-google-da.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none hover:shadow-lg transition"
            >
              <Image
                src="/cert-google-da.jpg"
                alt="Google Data Analytics"
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
              <div>
                <div className="font-bold">Google Data Analytics</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Coursera</div>
              </div>
            </a>
            {/* Certificate 3 */}
            <a
              href="/badge-google-da.png"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none hover:shadow-lg transition"
            >
              <Image
                src="/badge-google-da.png"
                alt="Google Data Analytics Badge"
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
              <div>
                <div className="font-bold">Google Data Analytics (Badge)</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Credly</div>
              </div>
            </a>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Email:{" "}
            <a href="mailto:trpanchal.tr@gmail.com" className="underline">
              trpanchal.tr@gmail.com
            </a>
          </p>
          <motion.form
            className="flex flex-col gap-3 mt-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-100 dark:border-none"
            action="https://formspree.io/f/mldbknaj"
            method="POST"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
          <p className="mt-4 text-green-500 font-semibold">
            <span className="animate-pulse">●</span> Open to freelance work and collaborations!
          </p>
        </motion.section>
      </motion.div>
    </main>
  );
}
