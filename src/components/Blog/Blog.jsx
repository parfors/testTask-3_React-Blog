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
import { getBlogs, getTotal } from "redux/selector";
import Post from "../Post/Post";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  // -----------------------------Pagination------------------------------

  const [searchParams, setSearchParams] = useSearchParams({
    limit: Infinity,
    page: 1,
  });

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs({ page, limit }));
  }, [dispatch, limit, page]);

  const blogs = useSelector(getBlogs);
  const total = useSelector(getTotal);
  const [isActive, setIsActive] = useState(1);
  const [isUsersBlogs] = useState(false);

  console.log(`Page${page}, Limit ${limit}`);
  console.log(blogs);

  const paginate = (pageNumber) => {
    setSearchParams({ page: pageNumber, limit });
  };

  const selectHandler = (e) => {
    setSearchParams({ page: 1 });

    setIsActive(1);
    const value = e.target.value;
    if (value === "-") {
      setSearchParams({ limit: Infinity });
      return;
    }
    setSearchParams({ limit: e.target.value });
  };

  return (
    <>
      <BlogLabelStyled>
        Количество постов на странице
        <BlogSelectStyled defaultValue={"-"} onChange={selectHandler}>
          {pagesAmount.map((el, index) => (
            <OptionStyled key={index} value={el}>
              {el}
            </OptionStyled>
          ))}
        </BlogSelectStyled>
      </BlogLabelStyled>
      <BlogListStyled>
        <>
          {blogs.map(
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
        blogsPerPage={limit}
        paginate={paginate}
        totalBlogs={total}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
