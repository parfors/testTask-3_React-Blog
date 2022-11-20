import {
  CategoryTitleStyled,
  ReturnBtn,
} from "components/CategoryList/CategoryListStyled";
import {
  PlaceholderImgStyled,
  PlaceholderImgWrapper,
} from "components/HomePlaceholder/HomePlaceholderStyled";
import { useNavigate } from "react-router-dom";
import { ContainerStyled } from "components/Header/HeaderStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <ContainerStyled>
        <ReturnBtn onClick={clickHandler}>Back to Home</ReturnBtn>
        <CategoryTitleStyled>404 Page is not found</CategoryTitleStyled>
        <PlaceholderImgWrapper>
          <PlaceholderImgStyled src="https://via.placeholder.com/600x800" />
        </PlaceholderImgWrapper>
      </ContainerStyled>
    </>
  );
};

export default NotFoundPage;
