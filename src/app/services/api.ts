export const link_api = "https://api.insany.co";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  brand: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ProductsResponse {
  products: Product[];
  pagination: Pagination;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}


export const getProducts = async (
  category?: string,
  search?: string,
  page = 1,
  limit = 10
): Promise<ProductsResponse> => {
  let url = `${link_api}/api/products?page=${page}&limit=${limit}`;
  if (category) url += `&category=${category}`;
  if (search) url += `&search=${search}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
};

export const getProductById = async (id: string | number): Promise<Product> => {
  const res = await fetch(`${link_api}/api/products/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar produto");
  const data = await res.json();
  return data.product ?? data;
};


export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${link_api}/api/categories`);
  if (!res.ok) throw new Error("Erro ao buscar categorias");
  const data = await res.json();
  return data.categories;
};

export const searchProducts = async (term: string): Promise<Product[]> => {
  if (!term.trim()) return [];
  const res = await fetch(`${link_api}/api/products?search=${encodeURIComponent(term)}`);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  const data = await res.json();
  return data.products;
};


