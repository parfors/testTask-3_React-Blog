import Post from "../Post/Post";
import { BlogContainerStyled, BlogListStyled } from "./BlogStyled";
import posts from "../../helpers/posts";

export default function Blog() {
  return (
    <>
      <BlogContainerStyled>
        <BlogListStyled>
          {posts.map(({ id, title, author, text, category, img }) => (
            <Post
              key={id}
              title={title}
              author={author}
              text={text}
              category={category}
              img={img}
            />
          ))}
        </BlogListStyled>
      </BlogContainerStyled>
    </>
  );
}
