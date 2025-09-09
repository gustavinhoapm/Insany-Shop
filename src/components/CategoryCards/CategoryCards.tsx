'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { Card, CategoryName, ProductCount } from "./CategoryCardsStyle";

interface CategoryCardProps {
  id: string;
  name: string;
  productCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, productCount }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/categoria/${encodeURIComponent(id)}`);
  };

  return (
    <Card onClick={handleClick}>
      <CategoryName>{name}</CategoryName>
      <ProductCount>{productCount} produtos</ProductCount>
    </Card>
  );
};

export default CategoryCard;
