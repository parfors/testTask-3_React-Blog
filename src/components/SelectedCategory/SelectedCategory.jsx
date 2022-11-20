import { getCategoryBlogs } from "redux/blogs/blog-operations";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogs } from "redux/selector";
import Gallery from "components/Gallery/Gallery";
import { CategoryImgWrapper, CategoryImgStyled } from "components";

export default function SelectedCategory() {
  const params = useParams();
  const blogs = useSelector(getBlogs);
  const [isUsersBlogs] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryBlogs(params.category));
  }, [dispatch, params.category]);

  return (
    <>
      <CategoryImgWrapper>
        <CategoryImgStyled src="https://via.placeholder.com/600x100" />
      </CategoryImgWrapper>
      <Gallery blogs={blogs} isUsersBlogs={isUsersBlogs} />
    </>
  );
}
