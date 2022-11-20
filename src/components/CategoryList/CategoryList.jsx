import {
  CategoryImgStyled,
  CategoryImgWrapper,
  CategoryNavLinkStyled,
  CategoryListStyled,
  PlaceholderTitleStyled,
} from "components";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getBlogError, getBlogLoading } from "redux/selector";

const navItems = [
  { href: "боевик", text: "Боевик" },
  { href: "приключения", text: "Приключения" },
  { href: "детектив", text: "Детектив" },
  { href: "фентази", text: "Фентази" },
  { href: "ужасы", text: "Ужасы" },
];

export default function CategoryList() {
  const params = useParams();
  const category = params.category;
  const loading = useSelector(getBlogLoading);
  const error = useSelector(getBlogError);

  return (
    <>
      <CategoryListStyled>
        {navItems.map(({ href, text }) => (
          <CategoryNavLinkStyled key={href} to={href}>
            {text}
          </CategoryNavLinkStyled>
        ))}
      </CategoryListStyled>
      {loading && <PlaceholderTitleStyled>Загрузка...</PlaceholderTitleStyled>}
      <Outlet />
      {!category && (
        <CategoryImgWrapper>
          <CategoryImgStyled src="https://via.placeholder.com/600x800" />
        </CategoryImgWrapper>
      )}
      {error?.response?.data?.message === "Not found" ? (
        <PlaceholderTitleStyled>
          Нету статей в этой категории
        </PlaceholderTitleStyled>
      ) : (
        ""
      )}
    </>
  );
}
