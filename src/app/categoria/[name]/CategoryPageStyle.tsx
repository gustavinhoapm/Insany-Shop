import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  max-width: 1120px;
  margin: 24px auto; 
  padding: 0 16px;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
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
  align-items: flex-end; 
  gap: 32px; 
  

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 36px;
`;

export const BreadcrumbItem = styled.span`
  cursor: pointer;
  color: #737380;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: #999;
`;

export const BreadcrumbCurrent = styled.span`
  font-weight: 400;
  color: #000000;
`;


export const CategoryDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
`;


