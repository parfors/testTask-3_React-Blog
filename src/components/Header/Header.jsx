import { current } from "redux/auth/auth-operations";
import {
  CategoryTitleStyled,
  ContainerStyled,
  HeaderStyled,
  LogoHolder,
  LogoStyled,
  NavLinkHolderStyled,
  SuspenseStyled,
  NavLinkStyled,
  TitleStyled,
  UserMenuHolderStyled,
} from "components";
import UserMenu from "components/UserMenu/UserMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getLoading, getIsLoggedIn } from "redux/selector";
import { Suspense } from "react";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const loading = useSelector(getLoading);

  let visibleMenu;
  if (loading === true) {
    visibleMenu = <TitleStyled>Загрузка...</TitleStyled>;
  } else if (isLoggedIn === false) {
    visibleMenu = (
      <>
        <NavLinkStyled to={"register"}>Реестрация</NavLinkStyled>
        <NavLinkStyled to={"login"}>Вход</NavLinkStyled>
      </>
    );
  } else if (isLoggedIn === true && loading === false) {
    visibleMenu = <UserMenu />;
  }
  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          <LogoHolder to="/">
            <LogoStyled />
          </LogoHolder>
          <NavLinkHolderStyled>
            <NavLinkStyled to={"articles"}>Статьи</NavLinkStyled>
            <NavLinkStyled to={"categories"}>Категории</NavLinkStyled>
            {isLoggedIn && (
              <NavLinkStyled to={"my_articles"}>Мои статьи</NavLinkStyled>
            )}
          </NavLinkHolderStyled>
          <UserMenuHolderStyled>{visibleMenu}</UserMenuHolderStyled>
        </HeaderStyled>
      </ContainerStyled>
      <Suspense
        fallback={
          <ContainerStyled>
            <SuspenseStyled>
              <CategoryTitleStyled>Загрузка...</CategoryTitleStyled>
            </SuspenseStyled>
          </ContainerStyled>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
