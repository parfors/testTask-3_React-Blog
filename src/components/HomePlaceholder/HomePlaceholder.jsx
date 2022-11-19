import React from "react";
import {
  PlaceholderImgStyled,
  PlaceholderImgWrapper,
  PlaceholderTitleStyled,
  ContainerStyled,
} from "components";

export default function HomePlaceholder() {
  return (
    <ContainerStyled>
      <PlaceholderTitleStyled>Добро пожаловать</PlaceholderTitleStyled>
      <PlaceholderImgWrapper>
        <PlaceholderImgStyled src="https://via.placeholder.com/600x800" />
      </PlaceholderImgWrapper>
    </ContainerStyled>
  );
}
