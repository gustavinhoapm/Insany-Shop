"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product, Category } from "../../app/services/api";
import { formatPrice } from "../ProductCard/ProductCard";
import { useCart } from "../../app/context/CartContext";
import { useToast } from "../../app/context/ToastContext";
import {
  ProductSection,
  ProductImage,
  ProductDetails,
  CategoryName,
  ProductTitle,
  ProductPrice,
  DescriptionTitle,
  ProductDescription,
  BackButtonWrapper,
  BackButton,
  AddButton,
  DescriptionWrapper,
} from "./DetailsProductStyle";

interface DetailsProductProps {
  product: Product | null;
  categories: Category[];
}

export default function DetailsProduct({ product, categories }: DetailsProductProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const fromCategory = sessionStorage.getItem("fromCategory");

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const category = categories.find((cat) => cat.id === product.category);

  const handleAddToCart = () => {
    addItem(product, 1);
    showToast(`${product.name} adicionado ao carrinho`);
  };

  return (
    <main>
      <BackButtonWrapper>
        <BackButton
          onClick={() => {
            if (fromCategory) {
              router.push(`/?category=${fromCategory}`);
              sessionStorage.removeItem("fromCategory");
            } else {
              router.back();
            }
          }}
        >
          <Image src="/img/BackButton.png" alt="Voltar" width={24} height={24} />
          Voltar
        </BackButton>
      </BackButtonWrapper>

      <ProductSection>
        <ProductImage src={product.image} alt={product.name} />

        <ProductDetails>
          <CategoryName>{category?.name || "Sem categoria"}</CategoryName>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {formatPrice(product.price)}</ProductPrice>

          <DescriptionWrapper>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <ProductDescription>{product.description}</ProductDescription>
          </DescriptionWrapper>

          <AddButton onClick={handleAddToCart}>
            <Image src="/img/Car.png" alt="Adicionar" width={24} height={24} />
            Adicionar
          </AddButton>
        </ProductDetails>
      </ProductSection>
    </main>
  );
}
