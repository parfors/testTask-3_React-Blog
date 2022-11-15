import { ContainerStyled } from "components/Header/HeaderStyled";
import {
  PlaceholderImgStyled,
  PlaceholderImgWrapper,
  PlaceholderTitleStyled,
} from "components/HomePlaceholder/HomePlaceholderStyled";
import LoginForm from "components/LoginForm/LoginForm";

export default function Login() {
  return (
    <>
      <ContainerStyled>
        <PlaceholderTitleStyled>
          Заполните форму для входа
        </PlaceholderTitleStyled>
        <LoginForm />
        <PlaceholderImgWrapper>
          <PlaceholderImgStyled src="https://via.placeholder.com/600x550" />
        </PlaceholderImgWrapper>
      </ContainerStyled>
    </>
  );
}
