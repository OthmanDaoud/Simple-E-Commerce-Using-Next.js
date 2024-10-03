// app/components/ProductForm.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    product || { name: "", description: "", price: 0, inStock: true }
  );

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.put(`/api/products/${product._id}`, formData);
      } else {
        await axios.post("/api/products", formData);
      }
      onSave();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({ ...formData, price: parseFloat(e.target.value) })
        }
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={formData.inStock}
          onChange={(e) =>
            setFormData({ ...formData, inStock: e.target.checked })
          }
          className="mr-2"
        />
        In Stock
      </label>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="flex-1 p-2 bg-blue-500 text-white rounded"
        >
          {product ? "Update" : "Create"} Product
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 p-2 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
