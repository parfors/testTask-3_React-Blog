import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  LabelSpanStyled,
  LabelStyled,
} from "components/Form/FormStyled";
import { useDispatch } from "react-redux";
import * as authOperations from "redux/auth/auth-operations";
import { RegisterFormWrapper } from "../RegisterForm/RegisterFormStyled";
import { LoginInputWrapper } from "./LoginFormStyled";
import useForm from "../../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authOperations.login(data));
  };

  const { handleSubmit, handleChange, state } = useForm(initialState, onSubmit);
  const { email, password } = state;

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <RegisterFormWrapper>
          <LoginInputWrapper>
            <LabelStyled>
              <LabelSpanStyled>Почта</LabelSpanStyled>
              <FormInputStyled
                value={email}
                name="email"
                onChange={handleChange}
                type="email"
              />
            </LabelStyled>
            <LabelStyled>
              <LabelSpanStyled>Пароль</LabelSpanStyled>
              <FormInputStyled
                value={password}
                name="password"
                onChange={handleChange}
                type="password"
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
