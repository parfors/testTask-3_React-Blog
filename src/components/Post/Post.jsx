import {
  AuthorStyled,
  ButtonTextStyled,
  CategoryStyled,
  DeleteButtonStyled,
  ImgStyled,
  ImgWrapperStyled,
  InfoWrapperStyled,
  PostWrapperStyled,
  TextStyled,
  TitleStyled,
} from "components";
import localImg from "../../images/blog.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "redux/blogs/blog-operations";

const imgPath = "https://via.placeholder.com/80x120";
const baseUrl = "http://localhost:3002/";

export default function Post({
  id,
  title,
  author,
  text,
  category,
  coverUrl,
  isUsersBlogs,
}) {
  const dispatch = useDispatch();
  const [textToggle, setTextToggle] = useState(false);

  const clickToggle = () => {
    setTextToggle(!textToggle);
  };

  let processedText;
  if (textToggle === false) {
    processedText = text.slice(0, 250);
  }
  if (textToggle === true) {
    processedText = text;
  }
  return (
    <>
      <PostWrapperStyled>
        <ImgWrapperStyled>
          <ImgStyled
            src={coverUrl ? `${baseUrl}/${coverUrl}` : localImg || imgPath}
          />
        </ImgWrapperStyled>
        <InfoWrapperStyled>
          <TitleStyled>
            Title: {title}
            {id}
          </TitleStyled>
          <AuthorStyled>Author: {author} </AuthorStyled>
          <TextStyled>
            Text: {processedText}
            <ButtonTextStyled onClick={clickToggle}>
              {text.length < 250 ? "" : !textToggle ? "..." : "show less"}
            </ButtonTextStyled>
          </TextStyled>

          <CategoryStyled>
            {category === "-" ? "" : `Category: ${category}`}
          </CategoryStyled>
          {isUsersBlogs ? (
            <DeleteButtonStyled onClick={() => dispatch(deleteBlog(id))}>
              Удалить пост
            </DeleteButtonStyled>
          ) : (
            ""
          )}
        </InfoWrapperStyled>
      </PostWrapperStyled>
    </>
  );
}
