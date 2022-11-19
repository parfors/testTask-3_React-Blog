import styled from "styled-components";
import { FaSmileWink } from "react-icons/fa";
import { ButtonStyled } from "components";

export const UserMenuTextStyled = styled.span`
  margin-right: 15px;
`;
export const UserMenuButton = styled(ButtonStyled)`
  margin-bottom: 0;
`;

export const UserMenuIcon = styled(FaSmileWink)`
  height: 30px;
  width: auto;
  margin-right: 5px;
  fill: ${(p) => p.theme.colors.links};
  &:hover {
    fill: ${(p) => p.theme.colors.accent};
  }
`;
