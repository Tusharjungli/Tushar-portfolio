import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";

export const metadata = {
  title: "Tushar | Portfolio",
  description: "Web Developer • Writer • Organizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="w-full flex justify-center py-6 shadow-sm bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex gap-8 items-center">
              <Link href="/" className="font-bold hover:underline transition-colors">
                Home
              </Link>
              <Link href="#projects" className="hover:underline transition-colors">
                Projects
              </Link>
              <Link href="#writing" className="hover:underline transition-colors">
                Writing
              </Link>
              <Link href="#contact" className="hover:underline transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </nav>
          <main className="min-h-screen flex flex-col items-center justify-center px-2 pt-6 pb-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
