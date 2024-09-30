import { notFound } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Product A",
    price: "$20",
    description: "A great product for your needs.",
  },
  {
    id: "2",
    name: "Product B",
    price: "$30",
    description: "Another fantastic product.",
  },
  {
    id: "3",
    name: "Product C",
    price: "$40",
    description: "The best product ever.",
  },
];

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg">{product.price}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4">
        Add to Cart
      </button>
      <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        <Link href="/products">Back to Products</Link>
      </div>
    </main>
  );
}
