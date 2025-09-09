"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Pagination from "../../../components/Pagination/Pagination";
import OrderBy from "../../../components/Filters/OrderByFilters";
import {
  getProducts,
  getCategories,
  Product,
  ProductsResponse,
  Category,
} from "../../services/api";
import { ProductsContainer, CategoryTitle } from "../../(home)/pageStyle";
import {
  TopContainer,
  LeftContainer,
  RightContainer,
  CategoryDescription,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbCurrent,
} from "./CategoryPageStyle";

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = Array.isArray(params.name) ? params.name[0] : params.name;

  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [showDefaultOption, setShowDefaultOption] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const limit = 6;

  useEffect(() => setIsClient(true), []);


  useEffect(() => {
    if (!categoryId) return;

    async function fetchProducts() {
      try {
        const data: ProductsResponse = await getProducts(
          categoryId,
          undefined,
          currentPage,
          limit
        );
        setProducts(data.products);
        setSearchQuery("");
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, [categoryId, currentPage]);


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

  if (!isClient) return null;

  const category = categories.find((cat) => cat.id === categoryId);
  const categoryName = category?.name ?? "Sem categoria";
  const categoryDescription = category?.description ?? "";

  const handleSelectOrder = (order: string) => {
    if (order === "defaultOrderby") {
      setSelectedOrder("");
      setShowDefaultOption(false);
    } else {
      setSelectedOrder(order);
      setShowDefaultOption(true);
    }
  };


  const sortedProducts = [...products];
  if (selectedOrder === "priceDesc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (selectedOrder === "priceAsc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedOrder === "newest") {
    sortedProducts.sort((a, b) => Number(b.id) - Number(a.id));
  } else if (selectedOrder === "bestSellers") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  const displayedProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Navbar onSearchResults={(query) => setSearchQuery(query)} />

      <TopContainer>
        <LeftContainer>
          <Breadcrumb>
            <BreadcrumbItem onClick={() => router.push("/")}>
              Produtos
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbCurrent>{categoryName}</BreadcrumbCurrent>
          </Breadcrumb>

          <CategoryTitle>{categoryName}</CategoryTitle>
        </LeftContainer>

        <RightContainer>
          <OrderBy
            selectedOrder={selectedOrder}
            onSelectOrder={handleSelectOrder}
            showDefaultOption={showDefaultOption}
          />

          <CategoryDescription>{categoryDescription}</CategoryDescription>
        </RightContainer>
      </TopContainer>

      <ProductsContainer>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={categoryName}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado para sua busca.</p>
        )}
      </ProductsContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
