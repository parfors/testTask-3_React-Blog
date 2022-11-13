import {
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationListStyled,
} from "./PaginationStyled";

export default function Pagination({ blogsPerPage, totalBlogs, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <PaginationListStyled>
        {pageNumbers.map((number) => (
          <PaginationItemStyled key={number}>
            <PaginationLinkStyled onClick={() => paginate(number)}>
              {number}
            </PaginationLinkStyled>
          </PaginationItemStyled>
        ))}
      </PaginationListStyled>
    </>
  );
}
