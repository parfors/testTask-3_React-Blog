import {
  BlogLabelStyled,
  BlogListStyled,
  BlogSelectStyled,
  OptionStyled,
} from "components";
import Pagination from "components/Pagination/Pagination";
import { pagesAmount } from "helpers/pagesAmount";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "redux/blogs/blog-operations";
import { getBlogs } from "redux/selector";
import Post from "../Post/Post";

export default function Blog() {
  // -----------------------------Pagination------------------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const blogs = useSelector(getBlogs);
  const [isActive, setIsActive] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isUsersBlogs] = useState(false);

  const lastBlogIndex = currentPage * blogsPerPage;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const selectHandler = (e) => {
    setCurrentPage(1);
    setIsActive(1);
    const value = e.target.value;
    if (value === "-") {
      setBlogsPerPage(Infinity);
      return;
    }
    setBlogsPerPage(value);
  };

  return (
    <>
      <BlogLabelStyled>
        Количество постов на странице
        <BlogSelectStyled defaultValue={10} onChange={selectHandler}>
          {pagesAmount.map((el, index) => (
            <OptionStyled key={index} value={el}>
              {el}
            </OptionStyled>
          ))}
        </BlogSelectStyled>
      </BlogLabelStyled>
      <BlogListStyled>
        <>
          {currentBlog.map(
            ({ _id, title, author, text, category, img, coverUrl }) => (
              <Post
                key={_id}
                id={_id}
                title={title}
                author={author}
                text={text}
                category={category}
                img={img}
                coverUrl={coverUrl}
                isUsersBlogs={isUsersBlogs}
              />
            )
          )}
        </>
      </BlogListStyled>

      <Pagination
        blogsPerPage={blogsPerPage}
        paginate={paginate}
        totalBlogs={blogs.length}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
