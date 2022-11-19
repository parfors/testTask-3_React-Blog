import {
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationListStyled,
} from "components";

export default function Pagination({
  isActive,
  setIsActive,
  blogsPerPage,
  totalBlogs,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <PaginationListStyled>
        {pageNumbers.map((number) => (
          <PaginationItemStyled key={number}>
            <PaginationLinkStyled
              {...(isActive === number ? { active: true } : {})}
              onClick={() => {
                paginate(number);
                setIsActive(number);
              }}
            >
              {number}
            </PaginationLinkStyled>
          </PaginationItemStyled>
        ))}
      </PaginationListStyled>
    </>
  );
}
