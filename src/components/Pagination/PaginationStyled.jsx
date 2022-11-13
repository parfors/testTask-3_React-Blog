import styled from "styled-components";

export const PaginationListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const PaginationItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const PaginationLinkStyled = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.medium};
  color: ${(p) => p.theme.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
