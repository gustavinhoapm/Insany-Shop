import styled from "styled-components";

export const Card = styled.div`
  width: 736px;
  height: 211px;
  border-radius: 8px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden; 

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  width: 256px;
  height: 100%;
  flex-shrink: 0; 

  @media (max-width: 768px) {
    width: 100%;
    height: 200px; 
  }
`;

export const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px; 
  gap: 8px;
  position: relative;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Name = styled.h4`
  font-family: Inter;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
`;

export const Trash = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Description = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  color: #41414d;
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  justify-content: space-between;
`;

export const QtySelect = styled.select`
  width: 65px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 8px;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin: 0 auto;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 0.5rem 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:first-child {
    background: #eee;
    color: #333;
  }

  &:last-child {
    background: #4caf50;
    color: #fff;
  }
`;

export const ModalError = styled.p`
  color: red;
  font-size: 12px;
  margin: 4px 0 0 0;
`;
