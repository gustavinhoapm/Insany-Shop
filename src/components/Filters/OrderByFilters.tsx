"use client";

import React from "react";
import { OrderBySelect, Select } from "./OrderByFiltersStyle";

interface OrderByProps {
  selectedOrder: string;
  onSelectOrder: (value: string) => void;
  showDefaultOption: boolean;
}

export default function OrderBy({ selectedOrder, onSelectOrder, showDefaultOption }: OrderByProps) {
  return (
    <OrderBySelect>
      <Select
        value={selectedOrder}
        onChange={(e) => onSelectOrder(e.target.value)}
      >

        {selectedOrder === "" && (
          <option value="" disabled>
            Organizar por
          </option>
        )}


        {showDefaultOption && <option value="defaultOrderby">Remover ordenação</option>}


        <option value="newest">Novidades</option>
        <option value="priceDesc">Preço: Maior - menor</option>
        <option value="priceAsc">Preço: Menor - maior</option>
        <option value="bestSellers">Mais vendidos</option>
      </Select>
    </OrderBySelect>
  );
}