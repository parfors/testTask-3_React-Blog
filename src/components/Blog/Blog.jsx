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
import InfiniteScroll from "react-infinite-scroll-component";
import { PlaceholderTitleStyled } from "components/HomePlaceholder/HomePlaceholderStyled";

const LIMIT = 10;

export default function Blog() {
  // -----------------------------Pagination------------------------------
  const blogs = useSelector(getBlogs);
  const [isInfinite, setIsInfinite] = useState(false);
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
      setIsInfinite(true);
      return;
    }
    setIsInfinite(false);
    setBlogsPerPage(value);
  };
  // ------------------------------Infinite scroll--------------------------
  const [blogData, setBlogData] = useState(blogs.slice(0, LIMIT));
  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    const newLimit = visible + LIMIT;
    const dataToAdd = blogs.slice(visible, newLimit);

    if (blogs.length > blogData.length) {
      setTimeout(() => {
        setBlogData([...blogData].concat(dataToAdd));
      }, 1000);
      setVisible(newLimit);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <BlogContainerStyled>
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
          {isInfinite ? (
            <InfiniteScroll
              dataLength={blogData.length} //This is important field to render the next data
              next={fetchData}
              hasMore={hasMore}
              loader={
                <PlaceholderTitleStyled>Loading...</PlaceholderTitleStyled>
              }
              endMessage={
                <PlaceholderTitleStyled>
                  Все посты загружены
                </PlaceholderTitleStyled>
              }
            >
              {blogData.map(({ id, title, author, text, category, img }) => (
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
            </InfiniteScroll>
          ) : (
            <>
              {" "}
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
            </>
          )}
        </BlogListStyled>
        {isInfinite ? (
          <></>
        ) : (
          <Pagination
            blogsPerPage={blogsPerPage}
            paginate={paginate}
            totalBlogs={blogs.length}
          />
        )}
      </BlogContainerStyled>
    </>
  );
}
