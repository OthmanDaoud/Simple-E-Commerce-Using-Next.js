import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Simple E-Commerce",
  description: "A simple e-commerce website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">
              <Link href="/">E-Commerce</Link>
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          &copy; {new Date().getFullYear()} Simple E-Commerce. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
