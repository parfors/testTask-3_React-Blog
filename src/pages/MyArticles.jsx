import {
  CategoryImgWrapper,
  CategoryImgStyled,
  ContainerStyled,
  PlaceholderTitleStyled,
} from "components";
import Gallery from "components/Gallery/Gallery";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBlogs } from "redux/blogs/blog-operations";
import { getBlogLoading, getBlogs } from "redux/selector";

export default function MyArticles() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyBlogs());
  }, [dispatch]);

  const blogs = useSelector(getBlogs);
  const [isUsersBlogs] = useState(true);
  const loading = useSelector(getBlogLoading);

  return (
    <ContainerStyled>
      <PlaceholderTitleStyled>Мои статьи</PlaceholderTitleStyled>
      <CategoryImgWrapper>
        <CategoryImgStyled src="https://via.placeholder.com/600x100" />
      </CategoryImgWrapper>
      {loading && <PlaceholderTitleStyled>Загрузка...</PlaceholderTitleStyled>}
      <Gallery blogs={blogs} isUsersBlogs={isUsersBlogs} />
    </ContainerStyled>
  );
}
