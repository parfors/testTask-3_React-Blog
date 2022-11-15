import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  InputWrapper,
  LabelSpanStyled,
  LabelStyled,
} from "components/Form/FormStyled";
import { RegisterFormWrapper } from "./RegisterFormStyled";

export default function RegisterForm() {
  return (
    <>
      <FormStyled
      //   onSubmit={handleSubmit}
      >
        <RegisterFormWrapper>
          <InputWrapper>
            <LabelStyled>
              <LabelSpanStyled>Имя</LabelSpanStyled>
              <FormInputStyled
              //   value={name}
              //   name="name"
              //   onChange={handleChange}
              //   type="text"
              />
            </LabelStyled>
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
          </InputWrapper>
        </RegisterFormWrapper>
        <ButtonStyled type="submit">Зарегистрировать</ButtonStyled>
      </FormStyled>
      ;
    </>
  );
}
