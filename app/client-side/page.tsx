"use client";
import { useEffect, useState } from "react";
import { Product } from "../components/ProductCard";
import CategorySection from "../components/CategorySection";

export default function ClientSide() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-3xl font-semibold text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as { [key: string]: Product[] });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Our Products
      </h1>
      {Object.entries(productsByCategory).map(
        ([category, categoryProducts]) => (
          <CategorySection
            key={category}
            category={category}
            products={categoryProducts}
          />
        )
      )}
    </div>
  );
}
