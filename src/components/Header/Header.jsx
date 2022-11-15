import {
  HeaderStyled,
  LogoHolder,
  LogoStyled,
  NavLinkHolderStyled,
  NavLinkStyled,
  ContainerStyled,
} from "./HeaderStyled";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          <LogoHolder to="/">
            <LogoStyled />
          </LogoHolder>
          <NavLinkHolderStyled>
            <NavLinkStyled to={"register"}>Реестрация</NavLinkStyled>
            <NavLinkStyled to={"login"}>Вход</NavLinkStyled>
          </NavLinkHolderStyled>
          <NavLinkHolderStyled>
            <NavLinkStyled to={"articles"}>Статьи</NavLinkStyled>
            <NavLinkStyled to={"categories"}>Категории</NavLinkStyled>
          </NavLinkHolderStyled>
        </HeaderStyled>
      </ContainerStyled>
      <Outlet />
    </>
  );
}
