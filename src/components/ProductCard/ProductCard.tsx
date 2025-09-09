"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../app/services/api";
import { slugify } from "../../Utils/Slugify";
import { useToast } from "../../app/context/ToastContext";
import { useCart } from "../../app/context/CartContext";
import {
  Card,
  ImageContainer,
  Info,
  TopRow,
  Name,
  Description,
  BottomRow,
  Price,
  Stock,
  CartButton,
  Star,
} from "./ProductCardStyle";

interface ProductCardProps {
  product: Product;
  categoryName: string;
  selectedCategory?: string;
}

export const formatPrice = (price: number | string | undefined) => {
  const value = Number(price) || 0;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default function ProductCard({ product, categoryName, selectedCategory }: ProductCardProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    showToast(`${product.name} adicionado ao carrinho`);
  };

const handleClick = () => {
  const slug = slugify(product.name);
  if (selectedCategory) {
    sessionStorage.setItem("fromCategory", selectedCategory);
  }
  router.push(`/produto/${product.id}-${slug}`);
};

  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        <img src={product.image} alt={product.name} />
      </ImageContainer>
      <Info>
        <TopRow>
          <span>{categoryName}</span>
          <span>
            <Star>★</Star>
            {product.rating}
          </span>
        </TopRow>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        <BottomRow>
          <Price>R$ {formatPrice(product.price)}</Price>
          <Stock>{product.stock} em estoque</Stock>
        </BottomRow>
        <CartButton
          onClick={(e) => {
            e.stopPropagation(); 
            addItem(product, 1);
            showToast(`${product.name} adicionado ao carrinho`);
          }}
        >
          <img src="../img/Car.png" alt="Adicionar" />
          Adicionar
        </CartButton>




      </Info>
    </Card>
  );
}
