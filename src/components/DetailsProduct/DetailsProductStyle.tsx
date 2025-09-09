import styled from "styled-components";


export const ProductSection = styled.section`
  display: flex;
  max-width: 1120px;
  margin: 0 auto 64px; 
  gap: 32px;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const BackButtonWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 24px auto; 
  padding: 0 16px;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #617480; 
  text-decoration: none; 
  cursor: pointer;
  padding: 8px 0; 

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    text-decoration: none; 
    scale: 1.05;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 640px;
  height: 580px;
  object-fit: cover;
  border-radius: 4px;
  opacity: 1;

  /* Melhorar qualidade */
  image-rendering: auto; 
  -webkit-backface-visibility: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductDetails = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  justify-content: space-between;
`;

export const CategoryName = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #41414D;
`;

export const ProductTitle = styled.h1`
  font-family: Inter;
  font-weight: 300;
  font-style: normal;
  font-size: 32px;
  margin: 0;
  color: #000000;
`;

export const ProductPrice = styled.span`
  font-family: Inter;
  font-weight: 600;
  font-style: semi-bold;
  font-size: 20px;
  color: #46AB6A;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  flex: 1;
`;

export const DescriptionTitle = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #737380;
`;

export const ProductDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0;
  color: #41414D;
`;

export const AddButton = styled.button`
  width: 448px;
  height: 40px;
  border-radius: 4px;
  padding: 8px 0;
  gap: 16px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: #313131;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
