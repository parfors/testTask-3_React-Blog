import styled from "styled-components";

export const PostWrapperStyled = styled.div`
  border: 1px solid black;
  display: flex;
  flex-basis: calc(100% / 2 - 30px);
  margin-right: 30px;
  margin-bottom: 10px;
`;

export const ImgWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin: 3px;
`;

export const ImgStyled = styled.img`
  width: 80px;
`;

export const InfoWrapperStyled = styled.div`
  padding: 10px 0 10px 10px;
`;

export const TitleStyled = styled.p`
  font-weight: 800;
`;

export const TextStyled = styled.p``;

export const AuthorStyled = styled.p`
  font-style: italic;
`;

export const CategoryStyled = styled.p`
  font-style: italic;
`;

export const ButtonTextStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.blue};
`;
