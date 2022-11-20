import { categoryList } from "../../helpers/categoryLits";
import { useState } from "react";
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
import { useLocalStorage } from "hooks/useLocalStorage";
import { addBlog } from "redux/blogs/blog-operations";

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useLocalStorage("title", "");
  const [author, setAuthor] = useLocalStorage("author", "");
  const [text, setText] = useLocalStorage("text", "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("-");

  const resetState = () => {
    setText("");
    setTitle("");
    setAuthor("");
    setCategory("-");
  };

  const uploadContent = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
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

    let processedCategory;
    if (category === "-") {
      processedCategory = "";
    } else {
      processedCategory = category;
    }

    const data = new FormData();
    data.append("title", title);
    data.append("author", author);
    data.append("text", text);
    data.append("category", processedCategory.toLocaleLowerCase());
    data.append("cover", file);
    dispatch(addBlog(data));
    resetState();
  };

  return (
    <>
      <FormStyled onSubmit={submitHandler} enctype="multipart/form-data">
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
              <LabelSpanStyled>Обложка</LabelSpanStyled>
              <FormInputStyled
                type="file"
                onChange={uploadContent}
                name="cover"
                // value={author}
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
        <ButtonStyled type="submit">Добивить</ButtonStyled>
      </FormStyled>
    </>
  );
}
