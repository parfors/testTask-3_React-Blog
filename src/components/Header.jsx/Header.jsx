import {
  HeaderStyled,
  LogoHolder,
  LogoStyled,
  NavLinkHolderStyled,
  NavLinkStyled,
  ContainerStyled,
} from "./HeaderStyled";

export default function Header() {
  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          <LogoHolder href="">
            <LogoStyled />
          </LogoHolder>
          <NavLinkHolderStyled>
            <NavLinkStyled href="">Статьи</NavLinkStyled>
            <NavLinkStyled href="">Категории</NavLinkStyled>
          </NavLinkHolderStyled>
        </HeaderStyled>
      </ContainerStyled>
    </>
  );
}
