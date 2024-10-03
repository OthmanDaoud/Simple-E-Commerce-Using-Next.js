import { cookies } from "next/headers";
import ProductList from "../components/ProductsList";

export default function DashboardPage() {
  // No need to manually verify the token again since middleware has handled it
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <ProductList />
    </div>
  );
}
