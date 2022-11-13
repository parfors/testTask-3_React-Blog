import Post from "../Post/Post";
import {
  BlogContainerStyled,
  BlogLabelStyled,
  BlogListStyled,
  BlogSelectStyled,
  OptionStyled,
} from "./BlogStyled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getBlogs } from "redux/selector";
import Pagination from "components/Pagination/Pagination";
import { pagesAmount } from "helpers/pagesAmount";

export default function Blog() {
  const blogs = useSelector(getBlogs);
  const [blogsPerPage, setBlogsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastBlogIndex = currentPage * blogsPerPage;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const selectHandler = (e) => {
    const value = e.target.value;
    if (value === "-") {
      setBlogsPerPage(Infinity);
      return;
    }
    setBlogsPerPage(value);
  };

  return (
    <>
      <BlogContainerStyled>
        <BlogLabelStyled>
          Количество постов на странице
          <BlogSelectStyled defaultValue={10} onChange={selectHandler}>
            {pagesAmount.map((el, index) => (
              <OptionStyled
                // {...(el === 10 ? { selected: true } : {})}
                key={index}
                value={el}
              >
                {el}
              </OptionStyled>
            ))}
          </BlogSelectStyled>
        </BlogLabelStyled>

        <BlogListStyled>
          {currentBlog.map(({ id, title, author, text, category, img }) => (
            <Post
              key={id}
              id={id}
              title={title}
              author={author}
              text={text}
              category={category}
              img={img}
            />
          ))}
        </BlogListStyled>
        <Pagination
          blogsPerPage={blogsPerPage}
          paginate={paginate}
          totalBlogs={blogs.length}
        />
      </BlogContainerStyled>
    </>
  );
}
