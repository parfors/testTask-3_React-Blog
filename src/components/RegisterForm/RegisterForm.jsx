import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  InputWrapper,
  LabelSpanStyled,
  LabelStyled,
} from "components/Form/FormStyled";
import { useDispatch } from "react-redux";
import * as authOperations from "redux/auth/auth-operations";
import useForm from "../../hooks/useForm";
import { RegisterFormWrapper } from "./RegisterFormStyled";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authOperations.register(data));
  };

  const { handleChange, handleSubmit, state } = useForm(initialState, onSubmit);
  const { name, email, password } = state;

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <RegisterFormWrapper>
          <InputWrapper>
            <LabelStyled>
              <LabelSpanStyled>Имя</LabelSpanStyled>
              <FormInputStyled
                value={name}
                name="name"
                onChange={handleChange}
                type="text"
              />
            </LabelStyled>
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
          </InputWrapper>
        </RegisterFormWrapper>
        <ButtonStyled type="submit">Зарегистрировать</ButtonStyled>
      </FormStyled>
      ;
    </>
  );
}
