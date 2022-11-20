import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryTitleStyled = styled.h2`
  margin: 20px 0 40px 50px;
`;

export const ReturnBtn = styled.button``;

export const CategoryListStyled = styled.ul`
  text-align: center;
`;

export const CategoryNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.medium};
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export const CategoryImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;
export const CategoryImgStyled = styled.img``;
