import {
  AuthorStyled,
  ButtonTextStyled,
  CategoryStyled,
  ImgStyled,
  ImgWrapperStyled,
  InfoWrapperStyled,
  PostWrapperStyled,
  TextStyled,
  TitleStyled,
} from "./PostStyled";
import localImg from "../../images/blog.jpg";
import { useState } from "react";

const imgPath = "https://via.placeholder.com/80x120";

export default function Post({ id, title, author, text, category, img }) {
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
          <TitleStyled>Title: {title}</TitleStyled>
          <AuthorStyled>Author: {author} </AuthorStyled>
          <TextStyled>
            Text: {processedText}
            <ButtonTextStyled onClick={clickToggle}>
              {!textToggle ? "..." : "show less"}
            </ButtonTextStyled>
          </TextStyled>

          <CategoryStyled>Category: {category}</CategoryStyled>
        </InfoWrapperStyled>
      </PostWrapperStyled>
    </>
  );
}
