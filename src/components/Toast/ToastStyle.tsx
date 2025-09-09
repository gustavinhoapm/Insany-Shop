import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 24px;
  background: #1b9847;
  color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  animation: ${fadeIn} 0.3s ease;
  z-index: 9999;
`;
