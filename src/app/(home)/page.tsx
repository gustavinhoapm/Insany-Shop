'use client';

import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSearchParams } from "next/navigation";
import {
  getProducts,
  getCategories,
  searchProducts,
  Product,
  ProductsResponse,
  Category,
} from "../services/api";
import {
  TopBar,
  CategoryTitle,
  SelectRow,
  LeftContainer,
  RightContainer,
  ProductsContainer,
} from "./pageStyle";
import OrderBy from "../../components/Filters/OrderByFilters";
import CategoryFilters from "../../components/Filters/CategoryFilters";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [showAllOption, setShowAllOption] = useState(false);
  const [showDefaultOption, setShowDefaultOption] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;


useEffect(() => {
  setIsClient(true);

  const storedCategory = sessionStorage.getItem("selectedCategory");
  if (storedCategory) {
    setSelectedCategory(storedCategory);
    setShowAllOption(true);
  } else if (initialCategory) {
    setSelectedCategory(initialCategory);
    setShowAllOption(initialCategory !== "");
  }
}, [initialCategory]);


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
  if (!isClient) return;

  const fetchProductsFromAPI = async () => {
    try {
      const data: ProductsResponse = await getProducts(
        selectedCategory ? selectedCategory : undefined,
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

  if (!searchQuery) {
    fetchProductsFromAPI();
  }
}, [selectedCategory, currentPage, searchQuery, isClient]);


  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) {
        setFilteredProducts(products);
        return;
      }
      try {
        const results = await searchProducts(searchQuery);


        const filteredResults = results.filter(p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (!selectedCategory || String(p.category) === String(selectedCategory))
        );

        setFilteredProducts(filteredResults);
        setTotalPages(1);
      } catch (error) {
        console.error("Erro na busca:", error);
        setFilteredProducts([]);
        setTotalPages(1);
      }
    };

    fetchSearchResults();
  }, [searchQuery, selectedCategory, products]);


  


const handleSelectCategory = (categoryId: string) => {
  if (!categoryId || categoryId === "all") {
    setSelectedCategory("");
    setShowAllOption(false);
    sessionStorage.removeItem("selectedCategory");
  } else {
    setSelectedCategory(categoryId);
    setShowAllOption(true);
    sessionStorage.setItem("selectedCategory", categoryId);
  }
  setSearchQuery("");
  setCurrentPage(1);
};


  const handleSearchResults = (query: string) => {
    setSearchQuery(query);
  };


  const handleSelectOrder = (order: string) => {
    if (order === "defaultOrderby") {
      setSelectedOrder("");
      setShowDefaultOption(false);
    } else {
      setSelectedOrder(order);
      setShowDefaultOption(true);
    }
  };


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

  if (!isClient) return null;

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
              showAllOption={showAllOption}
            />
            <CategoryTitle>{categoryTitle}</CategoryTitle>
          </LeftContainer>

          <RightContainer>
            <OrderBy
              selectedOrder={selectedOrder}
              onSelectOrder={handleSelectOrder}
              showDefaultOption={showDefaultOption}
            />
          </RightContainer>
        </SelectRow>
      </TopBar>

      <ProductsContainer>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => {
            const category = categories.find((cat) => cat.id === product.category);
            return (
              <ProductCard
                key={`${product.id}-${index}`}
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
