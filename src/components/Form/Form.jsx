import { categoryList } from "../../helpers/categoryLits";
import { ContainerStyled } from "../Header.jsx/HeaderStyled";
import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  InputWrapper,
  LabelSpanStyled,
  LabelStyled,
  OptionStyled,
  SelectStyled,
  TextAreaStyled,
  TextAreaWrapperStyled,
  WrapperStyled,
} from "./FormStyled";

export default function Form() {
  return (
    <>
      <ContainerStyled>
        <FormStyled>
          <WrapperStyled>
            <InputWrapper>
              <LabelStyled>
                <LabelSpanStyled>Заголовок</LabelSpanStyled>
                <FormInputStyled type="text" />
              </LabelStyled>
              <LabelStyled>
                <LabelSpanStyled>Автор</LabelSpanStyled>
                <FormInputStyled type="text" />
              </LabelStyled>
              <LabelStyled>
                <LabelSpanStyled>Категория</LabelSpanStyled>
                <SelectStyled>
                  {categoryList.map((el) => (
                    <OptionStyled key={el.length} value={el}>
                      {el}
                    </OptionStyled>
                  ))}
                </SelectStyled>
              </LabelStyled>
            </InputWrapper>
            <TextAreaWrapperStyled>
              <LabelStyled>
                <LabelSpanStyled>Текст</LabelSpanStyled>
                <TextAreaStyled placeholder="Что у вас нового?" />
              </LabelStyled>
            </TextAreaWrapperStyled>
          </WrapperStyled>
          <ButtonStyled>Добивить</ButtonStyled>
        </FormStyled>
      </ContainerStyled>
    </>
  );
}
