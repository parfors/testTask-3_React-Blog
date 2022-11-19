import Blog from "components/Blog/Blog";
import Form from "components/Form/Form";
import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/selector";

export default function Articles() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn && <Form />}
      <Blog />
    </>
  );
}
