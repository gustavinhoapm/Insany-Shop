import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
`;

export const NavContent = styled.div`
  max-width: 1120px;       
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    height: auto;
    padding: 10px 16px;
  }
`;

export const Logo = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #5D5D6D;
  line-height: 150%;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 352px;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 12px;
  background: #F3F7FF;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  padding-right: 30px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CartButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartIcon = styled.img`
  width: 28px;
  height: 28px;
  display: block;
  object-fit: contain;
  pointer-events: none; 
`;
export const Badge = styled.span`
  position: absolute;
  top: 20px;
  right: -3px;
  background: #DE3838;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 999px;
  text-align: center;
  font-weight: 600;
`;