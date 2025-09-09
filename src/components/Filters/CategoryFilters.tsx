"use client";
import React from "react";
import { FilterContainer, Select } from "./CategoryFiltersStyle";
import { Category } from "../../app/services/api";

interface FiltersProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  showAllOption: boolean; 
}

export default function Filters({ categories, selectedCategory, onSelectCategory, showAllOption}: FiltersProps) {
  return (
    <FilterContainer>
      <Select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="" disabled>
          Selecione a categoria
        </option>
        {showAllOption && <option value="all">Todos os produtos</option>}

        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </Select>
    </FilterContainer>
  );
}
