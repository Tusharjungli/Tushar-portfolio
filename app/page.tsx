import TodoApp from "./components/TodoApp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-xl w-full px-4 py-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
        <Image
          src="/profile.jpg"
          alt="Tushar Panchal"
          width={96}
          height={96}
          className="rounded-full mx-auto mb-4 shadow"
        />
        <h1 className="text-4xl font-bold mb-2">Tushar Panchal</h1>
        <h2 className="text-xl mb-6">Web Developer • Writer • Organizer</h2>
        <p className="mb-6 text-lg">
          Hi, I’m Tushar Panchal. I love building digital experiences, organizing ideas, and sharing what I learn. 
          This is my personal portfolio—explore my projects, writing, and more.
        </p>

        {/* Projects Section */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          
          {/* Auto India-6 Project */}
          <div className="bg-gray-900 dark:bg-gray-700 p-6 rounded-xl shadow mb-6">
            <h4 className="text-xl font-bold mb-2">Auto India-6 <span className="text-xs text-yellow-400 font-normal">(In Progress)</span></h4>
            <p className="mb-2 text-gray-300">
              An AI-powered e-commerce platform for automobile spare parts—built with Next.js, PostgreSQL, and Tailwind CSS. Focused on user experience, smart recommendations, and fast search.
            </p>
            <a 
              href="https://github.com/Tusharjungli/Auto-India-6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold mt-2"
            >
              View on GitHub
            </a>
          </div>

          {/* Simple To-Do List Project */}
          <TodoApp />
        </section>

        {/* Writing Section */}
        <section id="writing" className="mt-12">
          <h3 className="text-2xl font-semibold mb-2">Writing</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold">Fictional Stories on Wattpad</h4>
              <ul className="list-disc ml-5">
                <li>
                  <a 
                    href="https://www.wattpad.com/myworks/394537895-kalyug-introverts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    Kalyug and Introvert
                  </a> – A story that explores the struggle of introverts in a chaotic world, blending myth and modern themes.
                </li>
                <li>
                  <a 
                    href="https://www.wattpad.com/myworks/394696639-the-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400"
                  >
                    The System
                  </a> – A fictional story about survival, power, and the supernatural—written with a unique blend of reality and imagination.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                More on my <a 
                  href="https://www.wattpad.com/user/Tushar1004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >Wattpad profile</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Email: <a href="mailto:trpanchal.tr@gmail.com" className="underline">trpanchal.tr@gmail.com</a>
          </p>
          <p className="mt-4 text-green-400 font-semibold">
            <span className="animate-pulse">●</span> Open to freelance work and collaborations!
          </p>
        </section>
      </div>
    </main>
  );
}
