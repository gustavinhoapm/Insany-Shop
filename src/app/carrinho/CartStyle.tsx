import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto 64px;
  padding: 0 16px;
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    margin-top: 24px; 
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

export const Title = styled.h2`
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

export const ItemsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemsHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  strong {
    font-weight: 600;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SummaryTitle = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
  text-transform: uppercase;
`;

export const SummaryLabel = styled.span`
  font-weight: 500;
`;

export const SummaryValue = styled.span`
  font-weight: 600;
`;

export const SummaryCard = styled.aside`
  width: 352px;
  height: 700px;
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.06);

  h3 {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 16px;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  color: #41414D;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #DCE2E5;
  margin: 16px 0;
`;

export const TotalRow = styled(SummaryRow)`
  font-weight: 700;
  font-size: 16px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  background: #1B9847;
  color: #ffffff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: #17843d;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  a {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: underline;
    color: #000;
  }
`;

export const SummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkItem = styled.a`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: underline;
  color: #000;
`;

export const TotalLabel = styled.span``;
export const TotalValue = styled.span``;
