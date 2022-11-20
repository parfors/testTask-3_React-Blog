import { BlogListStyled } from "components";
import Post from "components/Post/Post";

export default function Gallery({ blogs, isUsersBlogs }) {
  return (
    <>
      <BlogListStyled>
        {blogs?.map(({ _id, title, author, text, category, coverUrl }) => (
          <Post
            key={_id}
            id={_id}
            title={title}
            author={author}
            text={text}
            category={category}
            isUsersBlogs={isUsersBlogs}
            coverUrl={coverUrl}
          />
        ))}
      </BlogListStyled>
    </>
  );
}
