import RegisterForm from "components/RegisterForm/RegisterForm";
import React from "react";
import { ContainerStyled } from "components/Header/HeaderStyled";
import {
  PlaceholderImgStyled,
  PlaceholderImgWrapper,
  PlaceholderTitleStyled,
} from "components/HomePlaceholder/HomePlaceholderStyled";

export default function Register() {
  return (
    <>
      <ContainerStyled>
        <PlaceholderTitleStyled>
          Заполните форму для регистрации
        </PlaceholderTitleStyled>
        <RegisterForm />
        <PlaceholderImgWrapper>
          <PlaceholderImgStyled src="https://via.placeholder.com/600x500" />
        </PlaceholderImgWrapper>
      </ContainerStyled>
    </>
  );
}
