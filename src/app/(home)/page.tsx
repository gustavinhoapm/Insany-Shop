"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Product, Category, getProducts, getCategories, searchProducts, ProductsResponse } from "../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryFilters from "../../components/Filters/CategoryFilters";
import OrderBy from "../../components/Filters/OrderByFilters";
import Pagination from "../../components/Pagination/Pagination";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";

import {
  TopBar,
  CategoryTitle,
  SelectRow,
  LeftContainer,
  RightContainer,
  ProductsContainer,
} from "./pageStyle";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;


  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    fetchCategories();
  }, []);

 
  useEffect(() => {
    const fetchProductsFromAPI = async () => {
      try {
        const data: ProductsResponse = await getProducts(
          selectedCategory || undefined,
          undefined,
          currentPage,
          limit
        );
        setProducts(data.products);
        setFilteredProducts(data.products);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProductsFromAPI();
  }, [selectedCategory, currentPage]);


  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(products);
      return;
    }
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || String(p.category) === String(selectedCategory))
    );
    setFilteredProducts(results);
    setTotalPages(1);
  }, [searchQuery, selectedCategory, products]);

  
  const sortedProducts = [...filteredProducts];
  if (selectedOrder === "priceDesc") sortedProducts.sort((a, b) => b.price - a.price);
  else if (selectedOrder === "priceAsc") sortedProducts.sort((a, b) => a.price - b.price);
  else if (selectedOrder === "newest") sortedProducts.sort((a, b) => Number(b.id) - Number(a.id));
  else if (selectedOrder === "bestSellers") sortedProducts.sort((a, b) => b.rating - a.rating);

  const displayedProducts = sortedProducts;

  const categoryTitle =
    selectedCategory === ""
      ? "Todos os produtos"
      : categories.find((cat) => cat.id === selectedCategory)?.name || "Todos os produtos";

  const handleSelectCategory = (categoryId: string) => {
    if (!categoryId || categoryId === "all") setSelectedCategory("");
    else setSelectedCategory(categoryId);
    setCurrentPage(1);
    setSearchQuery("");
  };

  const handleSelectOrder = (order: string) => setSelectedOrder(order);
  const handleSearchResults = (query: string) => setSearchQuery(query);

  return (
    <main>
      <Navbar onSearchResults={handleSearchResults} />

      <TopBar>
        <SelectRow>
          <LeftContainer>
            <CategoryFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              showAllOption={!!selectedCategory}
            />
            <CategoryTitle>{categoryTitle}</CategoryTitle>
          </LeftContainer>

          <RightContainer>
            <OrderBy
              selectedOrder={selectedOrder}
              onSelectOrder={handleSelectOrder}
              showDefaultOption={!!selectedOrder}
            />
          </RightContainer>
        </SelectRow>
      </TopBar>

      <ProductsContainer>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => {
            const category = categories.find((cat) => cat.id === product.category);
            return (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={category ? category.name : "Sem categoria"}
                selectedCategory={selectedCategory}
              />
            );
          })
        ) : (
          <p>Nenhum produto encontrado para sua busca.</p>
        )}
      </ProductsContainer>

      {!searchQuery && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <CategoriesContainer categories={categories} />
    </main>
  );
}
