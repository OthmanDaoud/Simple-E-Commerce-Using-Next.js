// app/components/ProductList.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  const handleEdit = (id) => {
    setEditingProductId(id);
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleSave = () => {
    fetchProducts();
    setEditingProductId(null);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Products</h2>
      <ProductForm onSave={handleSave} />
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product._id} className="border p-4 rounded">
            {editingProductId === product._id ? (
              <ProductForm
                product={product}
                onSave={handleSave}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h3 className="font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="bg-yellow-500 text-white p-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
