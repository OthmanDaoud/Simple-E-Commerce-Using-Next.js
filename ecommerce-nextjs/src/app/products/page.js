import Link from "next/link";

const products = [
  { id: "1", name: "Product A", price: "$20" },
  { id: "2", name: "Product B", price: "$30" },
  { id: "3", name: "Product C", price: "$40" },
];

export default function Products() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <li key={product.id} className="border rounded p-4 hover:shadow-lg">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-700 mb-4">{product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
