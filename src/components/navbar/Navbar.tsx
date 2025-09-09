"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../app/context/CartContext";
import {
  Nav,
  NavContent,
  Logo,
  Right,
  SearchContainer,
  SearchIcon,
  SearchInput,
  CartButton,
  Badge,
} from "./NavbarStyle";

type NavbarProps = {
  onSearchResults: (query: string) => void;
};

const Navbar = ({ onSearchResults }: NavbarProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getTotalItems } = useCart();
  const total = getTotalItems();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    onSearchResults(q);
  };

  return (
    <Nav>
      <NavContent>
        <Logo onClick={() => router.push("/")}>InsanyShop</Logo>

        <Right>
          <SearchContainer>
            <SearchInput
              placeholder="Procurando por algo específico?"
              value={query}
              onChange={handleChange}
            />
            <SearchIcon src="/img/search.png" alt="Buscar" />
          </SearchContainer>

          <CartButton onClick={() => router.push("/carrinho")}>
            <img src="/img/shoppingBag.png" alt="Carrinho" />
            {total > 0 && <Badge>{total}</Badge>}
          </CartButton>
        </Right>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
