import styled from "styled-components";
import { FaBlog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

export const LogoHolder = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const LogoStyled = styled(FaBlog)`
  width: 40px;
  height: auto;

  fill: ${(p) => p.theme.colors.dark};
  &:hover {
    fill: ${(p) => p.theme.colors.accent};
  }
`;

export const NavLinkHolderStyled = styled.div``;
export const UserMenuHolderStyled = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.dark};
  font-size: ${(p) => p.theme.fontSizes.medium};
  padding: 6px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.links};

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const SuspenseStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 200px;
`;
