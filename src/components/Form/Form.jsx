import { categoryList } from "../../helpers/categoryLits";
import { ContainerStyled } from "../Header/HeaderStyled";
import { useState } from "react";
import { nanoid } from "nanoid";
import {
  ButtonStyled,
  FormInputStyled,
  FormStyled,
  InputWrapper,
  LabelSpanStyled,
  LabelStyled,
  OptionStyled,
  SelectStyled,
  TextAreaStyled,
  TextAreaWrapperStyled,
  WrapperStyled,
} from "./FormStyled";
import { useDispatch } from "react-redux";
import { addBlog } from "redux/blogs/blogsSlice";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useLocalStorage("title", "");
  const [author, setAuthor] = useLocalStorage("author", "");
  const [text, setText] = useLocalStorage("text", "");
  const [category, setCategory] = useState("-");

  const resetState = () => {
    setText("");
    setTitle("");
    setAuthor("");
    setCategory("-");
  };

  const changeHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case "title":
        setTitle(inputValue);
        break;
      case "author":
        setAuthor(inputValue);
        break;
      case "text":
        setText(inputValue);
        break;
      case "category":
        setCategory(inputValue);
        break;
      default:
        return;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !text || !author) {
      alert("Please fill in all fields");
      return;
    }
    const blog = {
      id: nanoid(),
      title,
      author,
      img: "https://via.placeholder.com/80x120",
      text,
      category,
    };
    dispatch(addBlog(blog));
    resetState();
  };

  return (
    <>
      <ContainerStyled>
        <FormStyled onSubmit={submitHandler}>
          <WrapperStyled>
            <InputWrapper>
              <LabelStyled>
                <LabelSpanStyled>Заголовок</LabelSpanStyled>
                <FormInputStyled
                  type="text"
                  onChange={changeHandler}
                  name="title"
                  value={title}
                />
              </LabelStyled>
              <LabelStyled>
                <LabelSpanStyled>Автор</LabelSpanStyled>
                <FormInputStyled
                  type="text"
                  onChange={changeHandler}
                  name="author"
                  value={author}
                />
              </LabelStyled>
              <LabelStyled>
                <LabelSpanStyled>Категория</LabelSpanStyled>
                <SelectStyled
                  onChange={changeHandler}
                  name="category"
                  value={category}
                >
                  {categoryList.map((el) => (
                    <OptionStyled key={el.length} value={el}>
                      {el}
                    </OptionStyled>
                  ))}
                </SelectStyled>
              </LabelStyled>
            </InputWrapper>
            <TextAreaWrapperStyled>
              <LabelStyled>
                <LabelSpanStyled>Текст</LabelSpanStyled>
                <TextAreaStyled
                  placeholder="Что у вас нового?"
                  onChange={changeHandler}
                  name="text"
                  value={text}
                />
              </LabelStyled>
            </TextAreaWrapperStyled>
          </WrapperStyled>
          <ButtonStyled>Добивить</ButtonStyled>
        </FormStyled>
      </ContainerStyled>
    </>
  );
}
