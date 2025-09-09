"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../services/api";

export type CartItem = Product & { quantity: number };

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

const CART_STORAGE_KEY = "insany_cart_v1";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);


  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      console.error("Erro carregando carrinho do localStorage", e);
    }
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Erro salvando carrinho no localStorage", e);
    }
  }, [items]);

  const addItem = (product: Product, qty = 1) => {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + qty } : p);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeItem = (productId: number) => {
    setItems(prev => prev.filter(p => p.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(p => p.id !== productId));
      return;
    }
    setItems(prev => prev.map(p => p.id === productId ? { ...p, quantity } : p));
  };

  const clearCart = () => setItems([]);

  const getTotalItems = () => items.reduce((s, it) => s + it.quantity, 0);

  const getSubtotal = () => items.reduce((s, it) => s + (it.price * it.quantity), 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, getTotalItems, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
