import styled from "styled-components";


export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1120px; 
  margin: 0 auto 40px; 
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 356px); 
  gap: 26px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 300px); 
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr; 
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px; 
  max-width: 1120px;
  margin: 40px auto 24px; 
  padding: 0 16px;

  @media (max-width: 768px) {
    gap: 16px;
    align-items: flex-start;
  }
`;


export const SelectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;


export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px; 
`;


export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;


export const CategoryTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px; /* espaço entre navbar e conteúdo */
  padding-top: 24px;
`;
