import styled from "styled-components";

export const Card = styled.div`
  width: 350px;       
  height: 520px;     
  background: #fff;
  border-radius: 19px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 300px;     
  }

  @media (max-width: 640px) {
    width: 100%;    
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;      
  overflow: hidden;
  border-top-left-radius: 19px;   
  border-top-right-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Info = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
  font-weight: normal;
`;

export const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 4px 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #333;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #1b9847;
`;

export const Stock = styled.span`
  font-size: 0.9rem;
  font-weight: normal; 
  color: #444;
`;

export const CartButton = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  background-color: #000000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: #313131;
  }
`;

export const Star = styled.span`
  color: gold;
  margin-right: 4px;
`;
