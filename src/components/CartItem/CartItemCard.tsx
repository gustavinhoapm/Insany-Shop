"use client";

import React, { useState } from "react";
import type { CartItem } from "../../app/context/CartContext";
import {
  Card,
  ImageContainer,
  LeftImage,
  ContentContainer,
  Name,
  Trash,
  Description,
  ControlsRow,
  QtySelect,
  Price,
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtons,
  ModalButton,
  ModalError,
} from "./CartItemCardStyle";

export default function CartItemCard({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (q: number) => void;
}) {
  const [qty, setQty] = useState<number>(item.quantity);
  const [showModal, setShowModal] = useState(false);
  const [customQty, setCustomQty] = useState<string>(String(qty));
  const [error, setError] = useState<string>("");

  const handleChange = (value: string) => {
    if (value === "more") {
      setCustomQty(String(qty));
      setError("");
      setShowModal(true);
    } else {
      const n = Number(value);
      if (Number.isFinite(n) && n > 0) {
        setQty(n);
        onUpdateQuantity(n);
      }
    }
  };

  const handleConfirmCustomQty = () => {
    const n = Number(customQty);
    if (!Number.isFinite(n) || n <= 0) {
      setError("Digite apenas números maiores que zero.");
      return;
    }
    setQty(n);
    onUpdateQuantity(n);
    setShowModal(false);
    setError("");
  };

  const options = [1, 2, 3, 4, 5];

  return (
    <Card>
      <ImageContainer>
        <LeftImage src={item.image} alt={item.name} />
      </ImageContainer>

      <ContentContainer>
        <Name>{item.name}</Name>
        <Trash src="/img/Trash.png" alt="Remover" onClick={onRemove} />
        <Description>{item.description}</Description>

        <ControlsRow>
          <div>
            <QtySelect value={String(qty)} onChange={(e) => handleChange(e.target.value)}>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
              {!options.includes(qty) && <option value={qty}>{qty}</option>}
              <option value="more">+5</option>
            </QtySelect>
          </div>

          <Price>
            R$ {(item.price * qty).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </Price>
        </ControlsRow>
      </ContentContainer>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Digite a quantidade desejada:</h3>
            <ModalInput
              type="text"
              value={customQty}
              onChange={(e) => {
                const val = e.target.value.replace(/^0+/, "");
                setCustomQty(val);
                setError("");
              }}
            />
            {error && <ModalError>{error}</ModalError>}
            <ModalButtons>
              <ModalButton onClick={() => setShowModal(false)}>Cancelar</ModalButton>
              <ModalButton onClick={handleConfirmCustomQty}>OK</ModalButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Card>
  );
}
