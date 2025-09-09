import styled from "styled-components";

export const OrderBySelect = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 180px;
  height: 36px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background: none;
  outline: none;
  color: #737380;

  &:focus {
    border-color: #a212df;
  }
`;
