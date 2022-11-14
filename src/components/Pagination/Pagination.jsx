import {
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationListStyled,
} from "./PaginationStyled";
import { useState } from "react";

export default function Pagination({ blogsPerPage, totalBlogs, paginate }) {
  const [isActive, setIsActive] = useState(1);
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
