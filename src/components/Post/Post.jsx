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
} from "./PostStyled";
import localImg from "../../images/blog.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "redux/blogs/blogsSlice";

const imgPath = "https://via.placeholder.com/80x120";

export default function Post({ id, title, author, text, category, img }) {
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
          <ImgStyled src={img || localImg || imgPath} />
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
              {!textToggle ? "..." : "show less"}
            </ButtonTextStyled>
          </TextStyled>

          <CategoryStyled>
            {category === "-" ? "" : `Category: ${category}`}
          </CategoryStyled>
          <DeleteButtonStyled onClick={() => dispatch(deleteBlog(id))}>
            Удалить пост
          </DeleteButtonStyled>
        </InfoWrapperStyled>
      </PostWrapperStyled>
    </>
  );
}
