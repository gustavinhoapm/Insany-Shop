import styled from "styled-components";

export const Card = styled.div`
  width: 180px;     
  height: 100px;      
  border-radius: 12px;
  border: 1px solid #dddddd;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    border-color: #A212DF;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  }
`;

export const CategoryName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333333;
  text-align: center;
`;

export const ProductCount = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: #666666;
  text-align: center;
`;
