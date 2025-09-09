import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 40px auto 60px;      
  padding: 0 16px;              
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: 700;
  color: #222;
  text-align: left;            
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 220px); 
  gap: 16px;
  justify-content: center;           

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 220px);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 220px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;         
  }
`;
