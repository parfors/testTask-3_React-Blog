import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  LabelSpanStyled,
  LabelStyled,
} from "components/Form/FormStyled";
import { RegisterFormWrapper } from "../RegisterForm/RegisterFormStyled";
import { LoginInputWrapper } from "./LoginFormStyled";

export default function LoginForm() {
  return (
    <>
      <FormStyled
      //   onSubmit={handleSubmit}
      >
        <RegisterFormWrapper>
          <LoginInputWrapper>
            <LabelStyled>
              <LabelSpanStyled>Почта</LabelSpanStyled>
              <FormInputStyled
              //   value={email}
              //   name="email"
              //   onChange={handleChange}
              //   type="email"
              />
            </LabelStyled>
            <LabelStyled>
              <LabelSpanStyled>Пароль</LabelSpanStyled>
              <FormInputStyled
              //   value={password}
              //   name="password"
              //   onChange={handleChange}
              //   type="password"
              />
            </LabelStyled>
          </LoginInputWrapper>
        </RegisterFormWrapper>
        <ButtonStyled type="submit">Sign up</ButtonStyled>
      </FormStyled>
      ;
    </>
  );
}
