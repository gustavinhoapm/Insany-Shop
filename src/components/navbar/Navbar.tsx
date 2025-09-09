"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // 👈 importa o Image
import { useCart } from "../../app/context/CartContext";
import {
  Nav,
  NavContent,
  Logo,
  Right,
  SearchContainer,
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
            <Image
              src="/img/search.png"
              alt="Buscar"
              width={20}
              height={20}
            />
          </SearchContainer>

          <CartButton onClick={() => router.push("/carrinho")}>
            <Image
              src="/img/shoppingBag.png"
              alt="Carrinho"
              width={24}
              height={24}
            />
            {total > 0 && <Badge>{total}</Badge>}
          </CartButton>
        </Right>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
