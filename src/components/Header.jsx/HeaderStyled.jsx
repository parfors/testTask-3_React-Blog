import styled from "styled-components";
import { FaBlog } from "react-icons/fa";

export const ContainerStyled = styled.section`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.grey};
`;

export const HeaderStyled = styled.header`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoHolder = styled.a``;
export const LogoStyled = styled(FaBlog)`
  width: 40px;
  height: auto;
  fill: ${(p) => p.theme.colors.dark};
  &:hover {
    fill: ${(p) => p.theme.colors.accent};
  }
`;

export const NavLinkHolderStyled = styled.div``;
export const NavLinkStyled = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.dark};
  font-size: ${(p) => p.theme.fontSizes.medium};
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
