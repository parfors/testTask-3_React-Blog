import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${(p) => p.theme.colors.border};
  text-align: center;
`;

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelStyled = styled.label`
  display: flex;
  justify-content: space-between;
  &:not(:nth-child(n + 3)) {
    margin-bottom: 15px;
  }
`;

export const LabelSpanStyled = styled.span`
  font-size: ${(p) => p.theme.fontSizes.medium};
`;

export const FormInputStyled = styled.input`
  padding-left: 10px;
  font-size: ${(p) => p.theme.fontSizes.medium};

  width: 80%;
`;

export const InputWrapper = styled.div`
  width: 50%;
  height: 145px;
  padding: 20px;
`;

export const SelectStyled = styled.select``;

export const OptionStyled = styled.option``;

export const TextAreaWrapperStyled = styled(InputWrapper)``;

export const TextAreaStyled = styled.textarea`
  font-size: ${(p) => p.theme.fontSizes.medium};

  padding: 15px;
  width: 85%;
  height: 105px;
  &::placeholder {
    font-size: ${(p) => p.theme.fontSizes.medium};
    font-weight: 400;
    color: ${(p) => p.theme.colors.inputDark};
  }
`;

export const ButtonStyled = styled.button`
  margin-bottom: 15px;
  font-size: ${(p) => p.theme.fontSizes.medium};
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.white};
  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
