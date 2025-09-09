import styled from "styled-components";


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 21px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: ${({ $active }) => ($active ? "1px solid #A212DF" : "none")};
  border-radius: 5px;
  background-color: #E9E9F0;
  color: ${({ $active }) => ($active ? "#A212DF" : "#333")};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.95rem;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.85rem;
  }
`;