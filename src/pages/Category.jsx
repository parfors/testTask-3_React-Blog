import { ContainerStyled, CategoryTitleStyled, ReturnBtn } from "components";
import CategoryList from "components/CategoryList/CategoryList";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <ContainerStyled>
      <ReturnBtn onClick={clickHandler}>На главную</ReturnBtn>
      <CategoryTitleStyled>Доступные категории:</CategoryTitleStyled>
      <CategoryList />
    </ContainerStyled>
  );
}
