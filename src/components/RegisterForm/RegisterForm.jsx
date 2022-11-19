import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  InputWrapper,
  LabelSpanStyled,
  LabelStyled,
  RegisterFormWrapper,
} from "components";
import { useDispatch } from "react-redux";
import * as authOperations from "redux/auth/auth-operations";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    dispatch(authOperations.register(data));
    await navigate("/login");
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
