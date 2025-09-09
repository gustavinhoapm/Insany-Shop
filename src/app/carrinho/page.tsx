"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar/Navbar";
import CartItemCard from "../../components/CartItem/CartItemCard";
import { useCart } from "../../app/context/CartContext";
import {
  PageWrapper,
  BackButtonWrapper,
  BackButton,
  Title,
  ItemsHeader,
  ItemsList,
  ItemsColumn,
  SummaryCard,
  SummaryTitle,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  Divider,
  TotalRow,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  LinksList,
  LinkItem,
} from "./CartStyle";

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, getSubtotal, getTotalItems } = useCart();
  const subtotal = getSubtotal();
  const shipping = 40;
  const total = subtotal + shipping;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearchResults = (q: string) => {
    console.log("search from navbar:", q);
  };

  if (!isClient) return null;

  return (
    <main>
      <Navbar onSearchResults={handleSearchResults} />

      <BackButtonWrapper>
        <BackButton onClick={() => router.back()}>
          <img src="/img/BackButton.png" alt="Voltar" />
          Voltar
        </BackButton>
      </BackButtonWrapper>

      <PageWrapper>
        <ItemsColumn>
          <Title>Seu Carrinho</Title>

          <ItemsHeader>
            <SummaryLabel>
              Total ({getTotalItems()} produto{getTotalItems() !== 1 ? "s" : ""})
            </SummaryLabel>
            <SummaryValue>R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</SummaryValue>
          </ItemsHeader>

          <ItemsList>
            {items.length === 0 && <p>Seu carrinho está vazio.</p>}
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={() => {
                  const ok = confirm("Tem certeza que deseja remover este produto do carrinho?");
                  if (ok) removeItem(item.id);
                }}
                onUpdateQuantity={(q) => updateQuantity(item.id, q)}
              />
            ))}
          </ItemsList>
        </ItemsColumn>

        <SummaryCard>
          <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>

          <SummaryRow>
            <SummaryLabel>Subtotal de produtos</SummaryLabel>
            <SummaryValue>R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>ENTREGA</SummaryLabel>
            <SummaryValue>R$ {shipping.toFixed(2)}</SummaryValue>
          </SummaryRow>

          <Divider />

          <TotalRow>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalValue>R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TotalValue>
          </TotalRow>

          <CheckoutButton onClick={() => alert("Finalizar compra (fake)")}>
            FINALIZAR COMPRA
          </CheckoutButton>

          <LinksList>
            <LinkItem href="/ajuda">AJUDA</LinkItem>
            <LinkItem href="/reembolso">REEMBOLSO</LinkItem>
            <LinkItem href="/entregas">ENTREGAS E FRETE</LinkItem>
            <LinkItem href="/trocas">TROCAS E DEVOLUCAO</LinkItem>
          </LinksList>
        </SummaryCard>
      </PageWrapper>
    </main>
  );
}
