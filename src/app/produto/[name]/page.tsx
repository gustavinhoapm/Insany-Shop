"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById, Product, getCategories, Category } from "../../services/api";
import DetailsProduct from "../../../components/DetailsProduct/DetailsProduct";
import Navbar from "../../../components/navbar/Navbar";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    async function fetchProduct() {
      const paramName = Array.isArray(params?.name) ? params.name[0] : params?.name;

      if (!paramName) {
        router.push("/");
        return;
      }

      try {
        const productId = paramName.split("-")[0];
        const data = await getProductById(productId);
        if (!data) {
          router.push("/");
          return;
        }
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params, router]);

 
  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    fetchCategories();
  }, []);

  
  const handleSearchResults = (query: string) => {
    setSearchQuery(query);
  };

  if (loading) return <p>Carregando produto...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <main>
      <Navbar onSearchResults={handleSearchResults} />
      <DetailsProduct product={product} categories={categories} />
    </main>
  );
}
