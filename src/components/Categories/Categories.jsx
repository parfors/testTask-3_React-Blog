import { ContainerStyled } from "components/Header/HeaderStyled";
import {
  CategoryImgStyled,
  CategoryImgWrapper,
  CategoryTextStyled,
  CategoryTitleStyled,
  ReturnBtn,
} from "./CategoriesStyled";
import { useNavigate } from "react-router-dom";
import { categoryList } from "helpers/categoryLits";

export default function Categories() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const processedCategoryList = categoryList.slice(1);

  return (
    <>
      <ContainerStyled>
        <ReturnBtn onClick={clickHandler}>На главную</ReturnBtn>
        <CategoryTitleStyled>Доступные категории:</CategoryTitleStyled>
        {processedCategoryList.map((el, index) => (
          <CategoryTextStyled key={index}>{el}</CategoryTextStyled>
        ))}
        <CategoryImgWrapper>
          <CategoryImgStyled src="https://via.placeholder.com/600x800" />
        </CategoryImgWrapper>
      </ContainerStyled>
    </>
  );
}
