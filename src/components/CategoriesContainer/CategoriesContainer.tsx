'use client';
import React from "react";
import CategoryCard from "../CategoryCards/CategoryCards";
import { Container, Title, CardsWrapper } from "./CategoriesContainerStyle";
import { Category } from "../../app/services/api";

interface CategoriesContainerProps {
  categories: Category[];
}

function CategoriesContainer({ categories }: CategoriesContainerProps) {
  return (
    <Container>
      <Title>Principais Categorias</Title>
      <CardsWrapper>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            productCount={category.productCount || 0}
          />
        ))}
      </CardsWrapper>
    </Container>
  );
}

export default CategoriesContainer;
