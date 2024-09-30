import Image from "next/image";
import Link from "next/link";
import Products from "../products/page";

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <Image
        src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
        alt="About Us"
        width={800}
        height={400}
        className="mb-4 rounded"
      />
      <p className="text-lg text-gray-700 mb-4">
        We are a simple e-commerce platform dedicated to providing the best
        products for our customers.
      </p>
      <Link
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        href="/"
      >
        Go back to Home
      </Link>
    </main>
  );
}
