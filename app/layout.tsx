import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="w-full flex justify-center py-6 shadow-sm bg-white dark:bg-gray-800 mb-8">
          <div className="flex gap-8">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#writing" className="hover:underline">
              Writing
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
