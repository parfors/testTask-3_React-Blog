import styled from "styled-components";
import { ContainerStyled } from "../Header/HeaderStyled";

export const BlogContainerStyled = styled(ContainerStyled)`
  /* display: flex;
  flex-wrap: wrap; */
`;

export const BlogListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: -30px;
  margin-bottom: -10px;
  padding: 0;
  margin-top: 0;
`;

export const BlogSelectStyled = styled.select`
  margin-left: 20px;
`;

export const OptionStyled = styled.option``;

export const BlogLabelStyled = styled.label`
  display: inline-block;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.medium};
  margin-bottom: 15px;
`;
